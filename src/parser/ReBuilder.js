/**
 * @constructor
 */
var ReBuilder = function (stage)
{
    this.stage  = stage;
    this.bitio  = new BitIO();
    this.swftag = new SwfTag(stage, this.bitio);
};

/**
 * extends
 */
ReBuilder.prototype = Object.create(Util.prototype);
ReBuilder.prototype.constructor = ReBuilder;


/**
 * @param {array} data
 */
ReBuilder.prototype.start = function (data)
{
    // data set
    if (this.$canXHR2) {
        this.bitio.setData(new Uint8Array(data));
    } else {
        this.bitio.initialize(data);
    }

    // parse header
    if (this.isImage(data)) {

        // create image

    } else {

        // parse and build

        this
            .initialize()
            .parseAndBuild();

    }
};

/**
 * @param   {array} data
 * @returns {boolean}
 */
ReBuilder.prototype.isImage = function(data)
{
    switch (true) {
        case (data[0] === 0x89 && data[1] === 0x50 &&
              data[2] === 0x4E && data[3] === 0x47 &&
              data[4] === 0x0D && data[5] === 0x0A &&
              data[6] === 0x1A && data[7] === 0x0A): // PNG
        case (data[0] === 0x47 && data[1] === 0x49 && data[2] === 0x46): // GIF
        case (data[0] === 0xff && data[1] === 0xd8): // JPEG
        case (data[0] === 0x42 && data[1] === 0x4d): // BMP
            return true;
        default:
            return false;
    }
};

/**
 * @returns {ReBuilder}
 */
ReBuilder.prototype.initialize = function()
{
    var bitio = this.bitio;

    // signature
    var signature = bitio.getHeaderSignature();

    // version
    var version   = bitio.getVersion();
    // this.setVersion(version);

    // file size
    var fileSize  = this.bitio.getUI32();
    this.fileSize = fileSize;

    // de compress
    switch (signature) {
        case "FWS": // No ZIP
            break;
        case "CWS": // ZLIB
            bitio.deCompress(fileSize, "ZLIB");
            break;
        case "ZWS": // LZMA
            bitio.deCompress(fileSize, "LZMA");
            break;
    }

    // bounds
    var bounds = this.swftag.rect();

    // frameRate
    this.stage.frameRate = bitio.getUI16() / 0x100;

    // frameCount
    this.bitio.getUI16(); // frameCount

    var width  = (this.$ceil((bounds.xMax - bounds.xMin) / 20))|0;
    var height = (this.$ceil((bounds.yMax - bounds.yMin) / 20))|0;

    // player set
    var player = this.stage.player;
    console.log(player);

    player.width  = width;
    player.height = height;
    if (player.tagId && !player.optionWidth && !player.optionHeight) {
        player.optionWidth  = width;
        player.optionHeight = height;
    }

    return this;
};

/**
 * parseAndBuild
 */
ReBuilder.prototype.parseAndBuild = function()
{
    var main = this.stage._root;

    return 0;

    // parse
    var tags = this.swftag.parse(main);

    // mc reset
    main.container  = [];
    var frame       = 1;
    var totalFrames = main.getTotalFrames() + 1;
    while (frame < totalFrames) {
        main.container[frame] = [];
        frame = 0 | frame + 1;
    }
    main.instances = [];

    // build
    this.swftag.build(tags, main);

    var query = url.split("?")[1];
    if (query) {
        var values = query.split("&");
        var length = values.length;
        while (length) {
            length    = 0 | length - 1;
            var value = values[length];
            var pair  = value.split("=");
            if (pair.length > 1) {
                main.setVariable(pair[0], pair[1]);
            }
        }
    }

    // FlashVars
    var vars = this.FlashVars;
    for (var key in vars) {
        if (!vars.hasOwnProperty(key)) {
            continue;
        }
        main.setVariable(key, vars[key]);
    }
};

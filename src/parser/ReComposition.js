/**
 * @param {Player} player
 * @param {MovieClip} player
 * @constructor
 */
var ReComposition = function (player, root)
{
    Util.call(this);

    this.player = player;
    this.main   = root;
    this.bitio  = new BitIO();
    this.swftag = new SwfTag(this.main, this.bitio);
};

/**
 * extends
 */
ReComposition.prototype = Object.create(Util.prototype);
ReComposition.prototype.constructor = ReComposition;

/**
 * @param   {array}  data
 * @param   {string} url
 * @returns {MovieClip}
 */
ReComposition.prototype.run = function (data, url)
{
    // data set
    if (this.$canXHR2) {
        this.bitio.setData(new Uint8Array(data));
    } else {
        this.bitio.initialize(data);
    }

    // parse header
    if (!this.isImage(data)) {

        // parse and build
        return this
            .initialize()
            .parseAndBuild(url);

    } else {

        // create image object


        return this.main;

    }
};

/**
 * @param   {array} data
 * @returns {boolean}
 */
ReComposition.prototype.isImage = function(data)
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
 * @returns {ReComposition}
 */
ReComposition.prototype.initialize = function()
{
    var bitio = this.bitio;

    // signature
    var signature = bitio.getHeaderSignature();

    // version
    this.main.version = bitio.getVersion()|0;

    // file size
    var fileSize  = this.bitio.getUI32();
    // this.fileSize = fileSize;

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
    this.main.stage.frameRate = bitio.getUI16() / 0x100;

    // frameCount
    this.bitio.getUI16(); // frameCount

    var width  = (this.$ceil((bounds.xMax - bounds.xMin) / 20))|0;
    var height = (this.$ceil((bounds.yMax - bounds.yMin) / 20))|0;

    // player set
    var player = this.main.stage.player;

    player.baseWidth  = width;
    player.baseHeight = height;
    if (player.tagId && !player.optionWidth && !player.optionHeight) {
        player.optionWidth  = width;
        player.optionHeight = height;
    }

    return this;
};

/**
 * @param   {string} url
 * @returns {MovieClip}
 */
ReComposition.prototype.parseAndBuild = function(url)
{
    var main = this.main;

    // parse
    this.swftag.parse(main);

    var query = url.split("?")[1];
    if (query) {

        var values = query.split("&");
        var length = values.length;

        while (length) {
            length    = (length - 1)|0;
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

    // build
    main._$prepareActions(1);
    main._$characterBuild(true);

    // load end
    this.player.isLoad     = true;
    this.player.loadStatus = (this.player.loadStatus + 1)|0;

    console.log(main);

    return main;
};

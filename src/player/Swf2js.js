/**
 * @constructor
 */
var Swf2js = function () {};

/**
 * util
 */
Swf2js.prototype = Object.create(Util.prototype);
Swf2js.prototype.constructor = Swf2js;


/**
 * @param path
 * @returns {Packages}
 */
Swf2js.prototype.getPackage = function (path)
{
    var packages = new Packages();

    var names  = path.split(".");
    var length = names.length;

    var idx = 0;
    while (idx < length) {
        var name = names[idx];
        packages = packages[name];
        idx = (idx + 1)|0;
    }

    return packages;
};

/**
 * @param url
 * @param options
 */
Swf2js.prototype.load = function (url, options)
{
    // develop only
    if (url === "develop") {
        url = location.search.substr(1).split("&")[0];
    }

    if (url) {
        var self = this;

        // stage setup
        var stage = (options && options.stage instanceof Stage) ? options.stage : new Stage();
        stage.setOptions(options);
        self.$stages[stage.getId()] = stage;

        // init
        stage.init();

        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open("GET", url, true);

        if (self.$canXHR2) {
            xmlHttpRequest.responseType = "arraybuffer";
        } else {
            xmlHttpRequest.overrideMimeType("text/plain; charset=x-user-defined");
        }

        xmlHttpRequest.onreadystatechange = function ()
        {
            var readyState = xmlHttpRequest.readyState|0;
            if (readyState === 4) {
                var status = xmlHttpRequest.status|0;
                switch (status) {
                    case 200:
                    case 304:
                        var data = (self.$canXHR2) ? xmlHttpRequest.response : xmlHttpRequest.responseText;
                        stage.parse(data, url);
                        self.$cacheStore.reset();
                        break;
                    default :
                        alert(xmlHttpRequest.statusText);
                        break;
                }
            }
        };

        xmlHttpRequest.send(null);
    } else {
        alert("please set swf url");
    }
};

/**
 * @param url
 * @param options
 * @returns {*}
 */
Swf2js.prototype.reload = function(url, options)
{
    if (!stageId) {
        return this.load(url, options);
    }

    var stages = this.$stages;
    var stage  = stages[0];
    for (var idx in stages) {
        if (!stages.hasOwnProperty(idx)) {
            continue;
        }

        var target = stages[idx];
        target.stop();

        if (idx) {
            target.deleteNode(target.tagId);
            target = void 0;
        }
    }

    // reset
    stageId          = 1;
    this.$stages     = [];
    this.$loadStages = [];
    this.$stages[0]  = stage;

    // reload
    stage.reload(url, options);
};

/**
 * @param width
 * @param height
 * @param fps
 * @param options
 * @returns {MovieClip}
 */
Swf2js.prototype.createRootMovieClip = function(width, height, fps, options)
{
    var stage = new Stage();
    width     = width  || 240;
    height    = height || 240;
    fps       = fps    || 60;

    // set
    stage.setBaseWidth(width);
    stage.setBaseHeight(height);
    stage.setFrameRate(fps);
    stage.setOptions(options);
    this.$stages[stage.getId()] = stage;

    // init
    stage.init();
    stage.isLoad = true;

    if (this.$document.readyState === "loading") {
        var reLoad = function()
        {
            window.removeEventListener("DOMContentLoaded", reLoad, false);
            stage.resize();
            stage.loaded();
        };
        window.addEventListener("DOMContentLoaded", reLoad, false);
    }

    return stage.getParent();
};
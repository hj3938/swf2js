/**
 * @constructor
 */
var Swf2js = function ()
{
    this.currentPlayerId = null;
};

/**
 * extends
 */
Swf2js.prototype = Object.create(Util.prototype);
Swf2js.prototype.constructor = Swf2js;

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
        var player = new Player();
        self.$players[player.id] = player;

        // start
        player.setOptions(options);
        player.initialize();

        var request = new URLRequest(url);
        var loader  = new URLLoader();
        loader.dataFormat = URLLoaderDataFormat.BINARY;
        loader.load(request);

        this.$ajax({
            "url":   url,
            "mode":  "binary",
            "event": {
                "loadend": function ()
                {
                    switch (this.status) {
                        case 200:
                        case 304:
                            var data = (this.response) ? this.response : this.responseText;
                            // player.SwfParse(data, url);
                            self.$cacheStore.reset();
                            break;
                        default :
                            alert(this.statusText);
                            break;
                    }
                }
                // "progress": function (event)
                // {
                //     var id   = player.getName() + "_loading_span";
                //     var span = player.$document.getElementById(id);
                //     var per  = (event.loaded / event.total * 100)|0;
                //     span.style.width = per + "%";
                // }
            }
        });
    } else {
        alert("please set swf url.");
    }
};

/**
 * @param width
 * @param height
 * @param fps
 * @param options
 * @returns {MovieClip}
 */
Swf2js.prototype.createRootMovieClip = function (width, height, fps, options)
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

/**
 * @returns {Player|null}
 */
Swf2js.prototype.getCurrentPlayer = function ()
{
    if (this.currentPlayerId === null) {
        return null;
    }
    return this.$players[this.currentPlayerId];
};
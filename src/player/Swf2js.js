/**
 * @constructor
 */
var Swf2js = function ()
{
    // create player
    var player = new Player();
    this.currentPlayerId = player.id;
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
        var player = self.getCurrentPlayer();

        // start
        player.setOptions(options);
        player.initialize();

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

                            (new ReComposition(player)).run(data, url);

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

// /**
//  * @param width
//  * @param height
//  * @param fps
//  * @param options
//  * @returns {MovieClip}
//  */
// Swf2js.prototype.createRootMovieClip = function (width, height, fps, options)
// {
//     var stage = new Stage();
//     width     = width  || 240;
//     height    = height || 240;
//     fps       = fps    || 60;
//
//     // set
//     stage.setBaseWidth(width);
//     stage.setBaseHeight(height);
//     stage.setFrameRate(fps);
//     stage.setOptions(options);
//     this.$stages[stage.getId()] = stage;
//
//     // init
//     stage.init();
//     stage.isLoad = true;
//
//     if (this.$document.readyState === "loading") {
//         var reTry = function()
//         {
//             window.removeEventListener("DOMContentLoaded", reTry, false);
//             stage.resize();
//             stage.loaded();
//         };
//         window.addEventListener("DOMContentLoaded", reTry, false);
//     }
//
//     return stage.getParent();
// };

/**
 * @returns {Player|null}
 */
Swf2js.prototype.getCurrentPlayer = function ()
{
    if (!(this.currentPlayerId in this.$players)) {
        return null;
    }

    return this.$players[this.currentPlayerId];
};
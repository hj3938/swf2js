/**
 * @constructor
 */
var Swf2js = function ()
{
    Util.call(this);

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
 * @param {string} url
 * @param {object|null|undefined} options
 */
Swf2js.prototype.load = function (url, options)
{
    // develop only
    if (url === "develop") {
        url = window.location.search.substr(1).split("&")[0];
    }

    if (url) {

        // player setup
        var player = this.$players[this.currentPlayerId];

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

                            (new ReComposition(player, player.root)).run(data, url);

                            break;
                        default :
                            alert(this.statusText);
                            break;
                    }
                }
                // TODO
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
 * @param   {number} width
 * @param   {number} height
 * @param   {number} fps
 * @param   {object} options
 * @returns {MainTimeline}
 */
Swf2js.prototype.createRootMovieClip = function (width, height, fps, options)
{
    // init player
    var player = new Player();
    player.setOptions(options);
    player.initialize();

    // default params
    width  = width  || 240;
    height = height || 240;
    fps    = fps    || 60;

    // set params
    player.baseWidth  = width|0;
    player.baseHeight = height|0;
    player.stage.frameRate = fps|0;

    // readyState
    switch (this.$document.readyState) {

        // retry
        case "loading":

            var reTry = function () {
                this.removeEventListener("DOMContentLoaded", reTry, false);
                player.loadStatus = 2;
                player.isLoad = true;
            };

            // DOMContentLoaded
            window.addEventListener("DOMContentLoaded", reTry, false);

            break;

        // player start
        case "complete":

            player.loadStatus = 2;
            player.isLoad = true;

            break;
    }

    return player.root;
};
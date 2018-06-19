/**
 * @constructor
 */
var Player = function ()
{
    // init
    this.id = this.$players.length;
    this.$players[this.id] = this;

    // set div name
    this.name = "swf2js_" + this.id;

    // as data
    this.actions       = [];

    // params
    this._ratio        = 0;
    this.intervalId    = 0;
    this.stopFlag      = true;
    this.isLoad        = false;
    this._width        = 0;
    this._height       = 0;

            // canvas
    this.context       = null;
    this.canvas        = null;
    this.preContext    = null;
    this.hitContext    = null;
    this.matrix        = [1,0,0,1,0,0];

    // options
    this.optionWidth   = 0;
    this.optionHeight  = 0;
    this.callback      = null;
    this.tagId         = null;
    this.FlashVars     = {};
    this.quality       = this.$canWebGL ? StageQuality.HIGH : StageQuality.BEST;
    this.bgcolor       = null;

    // packages
    this.packages      = new Packages(this);

    // global vars
    this._global       = new Global();

    // base stage
    var stage = new Stage();
    stage.initialSetting(this);
    this.addStage(stage);

    // base set
    this._stageId = stage.id;
};

/**
 * extends
 */
Player.prototype = Object.create(Util.prototype);
Player.prototype.constructor = Player;

/**
 * properties
 */
Object.defineProperties(Player.prototype, {
    id: {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        }
    },
    name: {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        }
    },
    ratio: {
        get: function () {
            return this._ratio;
        },
        set: function () {}
    },
    stage: {
        get: function () {
            return this.$stages[this._stageId];
        },
        set: function () {}
    },
    root: {
        get: function () {
            return this.stage.getChildAt(0);
        },
        set: function () {}
    },
    width: {
        get: function () {
            return this._width;
        },
        set: function (width) {
            if (typeof width === "number" ) {
                this._width = width;
            }
        }
    },
    height: {
        get: function () {
            return this._height;
        },
        set: function (height) {
            if (typeof height === "number" ) {
                this._height = height;
            }
        }
    }
});

/**
 * @param stageId
 * @returns {Stage|null}
 */
Player.prototype.getStageAt = function (stageId)
{
    if (stageId in this.$stages) {
        return this.$stages[stageId];
    }
    return null;
};

/**
 * @param stage
 */
Player.prototype.addStage = function (stage)
{
    this.$stages[stage.id] = stage;
};

/**
 * @returns {{
 *  width: (number),
 *  height: (number),
 *  callback: *,
 *  tagId: (number),
 *  FlashVars: *,
 *  quality: (string),
 *  bgcolor: *
 * }}
 */
Player.prototype.getOptions = function ()
{
    return {
        width:     this.optionWidth,
        height:    this.optionHeight,
        callback:  this.callback,
        tagId:     this.tagId,
        FlashVars: this.FlashVars,
        quality:   this.quality,
        bgcolor:   this.bgcolor
    };
};

/**
 * @param {object} options
 * @returns void
 */
Player.prototype.setOptions = function (options)
{
    if (typeof options === "object") {
        this.optionWidth  = options.width      || this.optionWidth;
        this.optionHeight = options.height     || this.optionHeight;
        this.callback     = options.callback   || this.callback;
        this.tagId        = options.tagId      || this.tagId;
        this.FlashVars    = options.FlashVars  || this.FlashVars;
        this.quality      = options.quality    || this.quality;
        this.bgcolor      = options.bgcolor    || this.bgcolor;
    }

    this.setRatio();
};

/**
 * @returns void
 */
Player.prototype.setRatio = function ()
{
    // quality
    switch (this.quality) {
        case StageQuality.BEST:
        case StageQuality.HIGH:
            this._ratio = this.$devicePixelRatio;
            break;
        case StageQuality.MEDIUM:
            this._ratio = this.$devicePixelRatio * 0.8;
            break;
        case StageQuality.LOW:
            this._ratio = this.$devicePixelRatio * 0.5;
            break;
    }
};

/**
 * @returns void
 */
Player.prototype.play = function ()
{
    this.stopFlag   = false;
    this.intervalId = this.$setInterval.call(null,
        (function (player) {
            var animation = player.$requestAnimationFrame;
            return function ()
            {
                animation(function () {
                    if (player.isLoad && !player.stopFlag) {
                        player.run();
                    }
                }, 0);
            };
        })(this), (1000 / this.stage.frameRate)|0
    );
};

/**
 * @returns void
 */
Player.prototype.stop = function ()
{
    this.stopFlag = true;
    this.$clearInterval.call(null, this.intervalId);
};

/**
 * @returns void
 */
Player.prototype.loadEvent = function ()
{
    switch (this.loadStatus) {
        case 2:
            this.resize();
            this.loadStatus = 3;
            break;
        case 3:
            if (this.isLoad && this.stopFlag) {
                this.loadStatus = 4;
                this.loaded();
            }
            break;
    }

    if (this.loadStatus !== 4) {
        var retry = (function (self)
        {
            return function()
            {
                self.loadEvent();
            };
        })(this);

        this.$setTimeout.call(null, retry, 0);
    }
};

/**
 * @returns void
 */
Player.prototype.initialize = function ()
{
    var div;
    var doc = this.$document;
    if (this.tagId) {
        if (doc.readyState === "loading") {
            var self = this;
            var initialize = function ()
            {
                window.removeEventListener("DOMContentLoaded", initialize);
                self.initialize();
            };
            window.addEventListener("DOMContentLoaded", initialize);
            return void(0);
        }

        var container = doc.getElementById(this.tagId);
        if (!container) {
            alert("Not Found Tag ID:" + this.tagId);
            return void(0);
        }

        div = doc.getElementById(this.name);
        if (div) {
            this.deleteNode();
        } else {
            div    = doc.createElement("div");
            div.id = this.name;
            container.appendChild(div);
        }

    } else {
        doc.body.insertAdjacentHTML("beforeend", "<div id='" + this.name + "'></div>");
    }

    div = doc.getElementById(this.name);
    if (div) {
        this.initStyle(div);
        this.buildWait();
    }

    if (!this.canvas) {
        this.initializeCanvas();
    }

    this.loadStatus = (this.loadStatus + 1)|0;
    this.loadEvent();
};

/**
 * @param {object} div
 * @returns void
 */
Player.prototype.initStyle = function (div)
{
    var style = div.style;

    // set css
    style.position                       = "relative";
    style.top                            = "0";
    style.backgroundColor                = "transparent";
    style.overflow                       = "hidden";
    style["-webkit-backface-visibility"] = "hidden";
    style['-webkit-user-select']         = "none";

    var parent  = div.parentNode;
    var oWidth  = this.optionWidth;
    var oHeight = this.optionHeight;

    var width;
    var height;
    if (parent.tagName === "BODY") {
        width  = (oWidth > 0)  ? oWidth  : window.innerWidth;
        height = (oHeight > 0) ? oHeight : window.innerHeight;
    } else {
        width  = (oWidth > 0)  ? oWidth  : parent.offsetWidth;
        height = (oHeight > 0) ? oHeight : parent.offsetHeight;
    }

    style.width  = width  + "px";
    style.height = height + "px";
};

/**
 * @returns void
 */
Player.prototype.loading = function ()
{
    var div       = this.$document.getElementById(this.name);
    var loadingId = this.name + "_loading";

    var css = "<style type='text/css' style='display: none !important;'>";
    css += "#" + loadingId + " {\n";
    css += "position: absolute;\n";
    css += "top: 51%;\n";
    css += "left: 16.5%;\n";
    css += "margin: -24px 0 0 -24px;\n";
    css += "width: 75%;\n";
    css += "height: 25px;\n";
    css += "background-color: #1a1a1a;\n";
    css += "padding: 5px 5px 4px 5px;\n";
    css += "border-radius: 5px;\n";
    css += "box-shadow: 0 1px 2px #000 inset, 0 1px 0 #444;\n";
    css += "} \n";

    css += "#" + loadingId + " span {\n";
    css += "display: inline-block;\n";
    css += "width: 0%;\n";
    css += "height: 100%;\n";
    css += "border-radius: 3px;\n";
    css += "box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset;\n";
    css += "transition: width .4s ease-in-out;\n";
    css += "background-color: #a5df41;\n";
    css += "background-image: linear-gradient(top, #a5df41, #4ca916);\n";
    css += "background-size: 50px 50px;\n";
    css += "background-image: linear-gradient(135deg, rgba(255, 255, 255, .15) 25%, transparent 25%,\n";
    css += "  transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%,\n";
    css += "  transparent 75%, transparent);\n";
    css += "animation: "+ loadingId +" 3s linear infinite; \n";
    css += "} \n";

    css += "@keyframes " + loadingId + " {\n";
    css += "0% {background-position: 0 0;}\n";
    css += "100% {background-position: 100px 0;}\n";
    css += "} \n";

    css += "</style>";

    div.innerHTML  = css;

    var loadingDiv = this.$document.createElement("div");
    loadingDiv.id  = loadingId;

    // loading span
    var span = this.$document.createElement("span");
    span.id = loadingId + "_span";
    loadingDiv.appendChild(span);

    // append
    div.appendChild(loadingDiv);
};

/**
 * loading
 */
Player.prototype.buildWait = function ()
{
    var div       = this.$document.getElementById(this.name);
    var loadingId = this.name + "_loading";

    var css = "<style>";
    css += "#" + loadingId + " {\n";
    css += "position: absolute;\n";
    css += "top: 50%;\n";
    css += "left: 50%;\n";
    css += "margin: -24px 0 0 -24px;\n";
    css += "width: 50px;\n";
    css += "height: 50px;\n";
    css += "border-radius: 50px;\n";
    css += "border: 8px solid #dcdcdc;\n";
    css += "border-right-color: transparent;\n";
    css += "box-sizing: border-box;\n";
    css += "-webkit-animation: " + loadingId + " 0.8s infinite linear;\n";
    css += "animation: " + loadingId + " 0.8s infinite linear;\n";
    css += "} \n";
    css += "@-webkit-keyframes " + loadingId + " {\n";
    css += "0% {-webkit-transform: rotate(0deg);}\n";
    css += "100% {-webkit-transform: rotate(360deg);}\n";
    css += "} \n";
    css += "@keyframes " + loadingId + " {\n";
    css += "0% {transform: rotate(0deg);}\n";
    css += "100% {transform: rotate(360deg);}\n";
    css += "} \n";
    css += "</style>";

    div.innerHTML = css;

    var loadingDiv = this.$document.createElement("div");
    loadingDiv.id  = loadingId;

    div.appendChild(loadingDiv);
};

/**
 * deleteNode
 */
Player.prototype.deleteNode = function (tagId)
{
    var div = this.$document.getElementById(tagId ? tagId : this.name);
    if (div) {
        var childNodes = div.childNodes;

        var length = childNodes.length;
        if (length) {
            for (var idx in childNodes) {
                if (!childNodes.hasOwnProperty(idx)) {
                    continue;
                }

                div.removeChild(childNodes[idx]);
            }
        }
    }
};

/**
 * @returns void
 */
Player.prototype.initializeCanvas = function ()
{
    var self = this;

    var canvas    = self.$document.createElement("canvas");
    canvas.width  = 1;
    canvas.height = 1;

    // set css
    var style = canvas.style;
    style.zIndex                         = 0;
    style.position                       = "absolute";
    style.top                            = 0;
    style.left                           = 0;
    style.zoom                           = 100 / self.ratio + "%";
    style["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)";
    style.MozTransformOrigin             = "0 0";
    style.MozTransform                   = "scale(" + 1 / self.ratio + ")";

    if (self.$isAndroid) {
        canvas.addEventListener("touchcancel", function ()
        {
            self.touchEnd(self.$event);
        });
    }

    if (!self.$isTouch) {
        window.addEventListener("keydown", self.$keyDownAction);
        window.addEventListener("keyup",   self.$keyUpAction);
        window.addEventListener("keyup",   function (event)
        {
            Util.prototype.$keyEvent = event;
            self.touchEnd(event);
        });
    }

    // main canvas
    self.context = canvas.getContext("2d");
    self.context.imageSmoothingEnabled = this.$canWebGL;
    self.canvas  = canvas;

    // pre canvas
    var preCanvas    = self.$cacheStore.getCanvas();
    preCanvas.width  = 1;
    preCanvas.height = 1;
    self.preContext  = preCanvas.getContext("2d");
    self.preContext.imageSmoothingEnabled = this.$canWebGL;

    // hit canvas
    var hitCanvas    = self.$cacheStore.getCanvas();
    hitCanvas.width  = 1;
    hitCanvas.height = 1;
    self.hitContext  = hitCanvas.getContext("2d");
    self.hitContext.imageSmoothingEnabled = false;
};

/**
 * @param path
 * @returns {Packages}
 */
Player.prototype.getPackage = function (path)
{
    var packages = this.packages;

    var names  = path.split(".");
    var length = names.length;

    var idx = 0;
    while (idx < length) {
        var name = names[idx];
        packages = packages[name];
        idx = (idx + 1)|0;
    }

    this.$window.swf2js.currentPlayerId = this.id;

    return packages;
};


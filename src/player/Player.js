/**
 * @constructor
 */
var Player = function ()
{
    // params
    this.setId(playerId);
    playerId = (playerId + 1)|0;

    this._name = "swf2js_" + this.getId();

    // base stage
    var stage = new Stage();
    stage.setPlayer(this.getId());
    this._stage = stage;

    // params
    this.stages        = [];
    this._ratio        = 0;
    this._frameRate    = 0;
    this.intervalId    = 0;
    this.stopFlag      = true;
    this.isLoad        = false;

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
    this.quality       = "medium"; // low = 0.25, medium = 0.8, high = 1.0
    this.bgcolor       = null;

    // packages
    this.packages      = new Packages(this);
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
            return this.getId();
        },
        set: function (id) {
            this.setId(id);
        }
    },
    name: {
        get: function () {
            return this.getName();
        },
        set: function (name) {
            this.setName(name);
        }
    },
    stage: {
        get: function () {
            return this.getStage();
        },
        set: function (stage) {
            this.setStage(stage);
        }
    },
    frameRate: {
        get: function () {
            return this.getFrameRate();
        },
        set: function (fps) {
            this.setFrameRate(fps);
        }
    },
    ratio: {
        get: function () {
            return this.getRatio();
        },
        set: function (ratio) {
            this.setRatio();
        }
    }
});

/**
 * @returns {number}
 */
Player.prototype.getId = function ()
{
    return this._id;
};

/**
 * @param {number} id
 * @returns void
 */
Player.prototype.setId = function (id)
{
    this._id = id;
};

/**
 * @returns {string}
 */
Player.prototype.getName = function ()
{
    return this._name;
};

/**
 * @param {string} name
 * @returns void
 */
Player.prototype.setName = function (name)
{
    this._name = name;
};

/**
 * @returns {Stage}
 */
Player.prototype.getStage = function ()
{
    return this._stage;
};

/**
 * @param {Stage} stage
 * @returns void
 */
Player.prototype.setStage = function (stage)
{
    this._stage = stage;
};

/**
 * @returns {number}
 */
Player.prototype.getFrameRate = function ()
{
    return this._frameRate;
};

/**
 * @param {number} fps
 * @returns void
 */
Player.prototype.setFrameRate = function (fps)
{
    this._frameRate = (1000 / fps)|0;
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
 * @returns {number}
 */
Player.prototype.getRatio = function ()
{
    return this._ratio;
};

/**
 * @returns void
 */
Player.prototype.setRatio = function ()
{
    // quality
    switch (this.quality) {
        case "medium":
            this._ratio = this.$devicePixelRatio * 0.8;
            break;
        case "high":
            this._ratio = this.$devicePixelRatio;
            break;
        case "low":
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
        })(this), this.getFrameRate()
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

        div = doc.getElementById(this.getName());
        if (div) {
            this.deleteNode();
        } else {
            div    = doc.createElement("div");
            div.id = this.getName();
            container.appendChild(div);
        }

    } else {
        doc.body.insertAdjacentHTML("beforeend", "<div id='" + this.getName() + "'></div>");
    }

    div = doc.getElementById(this.getName());
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
    var div       = this.$document.getElementById(this.getName());
    var loadingId = this.getName() + "_loading";

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
    var div       = this.$document.getElementById(this.getName());
    var loadingId = this.getName() + "_loading";

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
    var div = this.$document.getElementById(tagId ? tagId : this.getName());
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
    self.context.imageSmoothingEnabled = false;
    self.canvas  = canvas;

    // pre canvas
    var preCanvas    = self.$cacheStore.getCanvas();
    preCanvas.width  = 1;
    preCanvas.height = 1;
    self.preContext  = preCanvas.getContext("2d");
    self.preContext.imageSmoothingEnabled = false;

    // hit canvas
    var hitCanvas    = self.$cacheStore.getCanvas();
    hitCanvas.width  = 1;
    hitCanvas.height = 1;
    self.hitContext  = hitCanvas.getContext("2d");
    self.hitContext.imageSmoothingEnabled = false;
};

/**
 * @param {array} data
 * @param {string} url
 * @returns void
 */
Player.prototype.parseSwf = function (data, url)
{
    this.isLoad = false;

    var bitio = new BitIO();
    bitio.initialize(data);

    var stage   = this.getStage();
    var mc      = stage.getParent();
    mc._url     = (!mc._url) ? location.href : mc._url;
    var swftag  = new SwfTag(stage, bitio);


    if (this.checkHeader(bitio, swftag)) {

        // parse
        var tags = swftag.parse(mc);

        // mc reset
        mc.container    = [];
        mc.instances    = [];
        var frame       = 1;
        var totalFrames = mc.getTotalFrames() + 1;
        while (frame < totalFrames) {
            mc.container[frame] = [];
            frame = (frame + 1)|0;
        }

        // build
        swftag.build(tags, mc);

        var query = url.split("?")[1];
        if (query) {
            var values = query.split("&");
            var length = values.length;
            while (length) {
                length    = 0 | length - 1;
                var value = values[length];
                var pair  = value.split("=");
                if (pair.length > 1) {
                    mc.setVariable(pair[0], pair[1]);
                }
            }
        }

        // FlashVars
        var vars = this.FlashVars;
        for (var key in vars) {
            if (!vars.hasOwnProperty(key)) {
                continue;
            }
            mc.setVariable(key, vars[key]);
        }
    }

    this.isLoad = true;
};


Player.prototype.checkHeader = function ()
{

};

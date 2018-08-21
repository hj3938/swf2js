/**
 * @constructor
 */
var Player = function ()
{
    this.id = this.$players.length;
    this.$players[this.id] = this;

    // set div name
    this.name = "swf2js_" + this.id;

    // pool action script
    this._$actions          = [];
    this._$buttonHits       = [];
    this._$downEventHits    = [];
    this._$moveEventHits    = [];
    this._$upEventHits      = [];
    this._$keyDownEventHits = [];
    this._$keyUpEventHits   = [];

    // params
    this._$ratio           = 1;
    this._$intervalId      = 0;
    this._$stopFlag        = true;
    this._$isLoad          = false;
    this._$loadStatus      = 0;
    this._$width           = 0;
    this._$height          = 0;
    this._$baseWidth       = 0;
    this._$baseHeight      = 0;
    this._$scale           = 1;
    this._$matrix          = [1, 0, 0, 1, 0, 0];
    this._$colorTransform  = [1, 1, 1, 1, 0, 0, 0, 0];
    this._$backgroundColor = "transparent";

    // canvas
    this._$context         = null;
    this._$canvas          = null;
    this._$preContext      = null;
    this._$hitContext      = null;

    // options
    this._$optionWidth     = 0;
    this._$optionHeight    = 0;
    this._$callback        = null;
    this._$tagId           = null;
    this._$FlashVars       = {};
    this._$quality         = this.$canWebGL ? StageQuality.BEST : StageQuality.HIGH;
    this._$bgcolor         = "";

    // packages
    this._$packages        = new Packages(this);

    // global vars
    this._$global          = new Global();

    // base stage
    var stage = new Stage();
    stage
        .initialDictionary(this)
        .initialSetting(stage);

    this.addStage(stage);

    // base set
    this._$stageId = stage.id;
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
        /**
         * @return {number}
         */
        get: function () {
            return this._$id;
        },
        /**
         * @param {number} id
         */
        set: function (id) {
            this._$id = id;
        }
    },
    name: {
        /**
         * @return {string}
         */
        get: function () {
            return this._$name;
        },
        /**
         * @param {string} name
         */
        set: function (name) {
            if (typeof name !== "string") {
                name = name + "";
            }
            this._$name = name;
        }
    },
    ratio: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$ratio;
        },
        /**
         * @param {number} ratio
         */
        set: function (ratio) {
            if (typeof ratio === "number") {
                this._$ratio = ratio;
            }
        }
    },
    stage: {
        /**
         * @return {Stage}
         */
        get: function () {
            return this.$stages[this._$stageId];
        },
        /**
         * readonly
         */
        set: function () {}
    },
    root: {
        /**
         * @return {DisplayObject|MovieClip}
         */
        get: function () {
            return this.stage.getChildAt(0);
        },
        /**
         * readonly
         */
        set: function () {}
    },
    width: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$width;
        },
        /**
         * @param {number} width
         */
        set: function (width) {
            if (typeof width === "number") {
                this._$width = width;
            }
        }
    },
    height: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$height;
        },
        /**
         * @param {number} height
         */
        set: function (height) {
            if (typeof height === "number") {
                this._$height = height;
            }
        }
    },
    baseWidth: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$baseWidth;
        },
        /**
         * @param {number} baseWidth
         */
        set: function (baseWidth) {
            if (typeof baseWidth === "number") {
                this._$baseWidth = baseWidth;
            }
        }
    },
    baseHeight: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$baseHeight;
        },
        /**
         * @param {number} baseHeight
         */
        set: function (baseHeight) {
            if (typeof baseHeight === "number") {
                this._$baseHeight = baseHeight;
            }
        }
    },
    scale: {
        /**
         * @return {number}
         */
        get: function () {
            return this._scale;
        },
        /**
         * @param {number} scale
         */
        set: function (scale) {
            if (typeof scale === "number") {
                this._scale = scale;
            }
        }
    },
    matrix: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$matrix;
        },
        /**
         * @param {array} matrix
         */
        set: function (matrix) {
            if (this.$isArray(matrix)) {
                this._$matrix = this.$cloneArray(matrix);
            }
        }
    },
    colorTransform: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$colorTransform;
        },
        /**
         * @param {array} colorTransform
         */
        set: function (colorTransform) {
            if (this.$isArray(colorTransform)) {
                this._$colorTransform = this.$cloneArray(colorTransform);
            }
        }
    },
    backgroundColor: {
        /**
         * @return {string}
         */
        get: function () {
            return this._$backgroundColor;
        },
        /**
         * @param {string} backgroundColor
         */
        set: function (backgroundColor) {
            if (typeof backgroundColor === "string") {
                this._$backgroundColor = backgroundColor;
            }
        }
    },
    intervalId: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$intervalId;
        },
        /**
         * @param {number} intervalId
         */
        set: function (intervalId) {
            if (typeof intervalId === "number") {
                this._$intervalId = intervalId;
            }
        }
    },
    stopFlag: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$stopFlag;
        },
        /**
         * @param {boolean} stopFlag
         */
        set: function (stopFlag) {
            if (typeof stopFlag === "boolean") {
                this._$stopFlag = stopFlag;
            }
        }
    },
    isLoad: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$isLoad;
        },
        /**
         * @param {boolean} isLoad
         */
        set: function (isLoad) {
            if (typeof isLoad === "boolean") {
                this._$isLoad = isLoad;
            }
        }
    },
    loadStatus: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$loadStatus;
        },
        /**
         * @param {number} loadStatus
         */
        set: function (loadStatus) {
            if (typeof loadStatus === "number") {
                this._$loadStatus = loadStatus;
            }
        }
    },
    optionWidth: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$optionWidth;
        },
        /**
         * @param {number} optionWidth
         */
        set: function (optionWidth) {
            if (typeof optionWidth === "number") {
                this._$optionWidth = optionWidth;
            }
        }
    },
    optionHeight: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$optionHeight;
        },
        /**
         * @param {number} optionHeight
         */
        set: function (optionHeight) {
            if (typeof optionHeight === "number") {
                this._$optionHeight = optionHeight;
            }
        }
    },
    callback: {
        /**
         * @return {Function|null}
         */
        get: function () {
            return this._$callback;
        },
        /**
         *
         * @param {Function} callback
         */
        set: function (callback) {
            if (typeof callback === "function") {
                this._$callback = callback;
            }
        }
    },
    tagId: {
        /**
         * @return {string|null}
         */
        get: function () {
            return this._$tagId;
        },
        /**
         * @param {string} tagId
         */
        set: function (tagId) {
            if (typeof tagId === "string") {
                this._$tagId = tagId;
            }
        }
    },
    FlashVars: {
        /**
         * @return {object}
         */
        get: function () {
            return this._$FlashVars;
        },
        /**
         * @param {object} FlashVars
         */
        set: function (FlashVars) {
            if (typeof FlashVars === "object") {
                this._$FlashVars = FlashVars;
            }
        }
    },
    quality: {
        /**
         * @return {string}
         */
        get: function () {
            return this._$quality;
        },
        /**
         * @param {string} quality
         */
        set: function (quality) {
            if (typeof quality === "string") {
                this._$quality = quality;
            }
        }
    },
    bgcolor: {
        /**
         * @return {string|null}
         */
        get: function () {
            return this._$bgcolor;
        },
        /**
         * @param {string} bgcolor
         */
        set: function (bgcolor) {
            if (typeof bgcolor === "string") {
                this._$bgcolor = bgcolor;
            }
        }
    },
    packages: {
        /**
         * @return {Packages}
         */
        get: function () {
            return this._$packages;
        },
        /**
         * readonly
         */
        set: function () {}
    },
    global: {
        /**
         * @return {Global}
         */
        get: function () {
            return this._$global;
        },
        /**
         * readonly
         */
        set: function () {}
    },
    context: {
        /**
         * @return {CanvasRenderingContext2D}
         */
        get: function () {
            return this._$context;
        },
        /**
         * @param {CanvasRenderingContext2D} context
         */
        set: function (context) {
            this._$context = context;
        }
    },
    canvas: {
        /**
         * @returns {Canvas}
         */
        get: function () {
            return this._$canvas;
        },
        /**
         * @param {Canvas} canvas
         */
        set: function (canvas) {
            this._$canvas = canvas;
        }
    },
    preContext: {
        /**
         * @return {CanvasRenderingContext2D}
         */
        get: function () {
            return this._$preContext;
        },
        /**
         * @param {CanvasRenderingContext2D} preContext
         */
        set: function (preContext) {
            this._$preContext = preContext;
        }
    },
    hitContext: {
        /**
         * @return {CanvasRenderingContext2D}
         */
        get: function () {
            return this._$hitContext;
        },
        /**
         * @param {CanvasRenderingContext2D} hitContext
         */
        set: function (hitContext) {
            this._$hitContext = hitContext;
        }
    },
    actions: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$actions;
        },
        /**
         * @param {array} actions
         */
        set: function (actions) {
            this._$actions = actions;
        }
    },
    buttonHits: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$buttonHits;
        },
        /**
         * @param {array} buttonHits
         */
        set: function (buttonHits) {
            this._$buttonHits = buttonHits;
        }
    },
    downEventHits: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$downEventHits;
        },
        /**
         * @param {array} downEventHits
         */
        set: function (downEventHits) {
            this._$downEventHits = downEventHits;
        }
    },
    moveEventHits: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$moveEventHits;
        },
        /**
         * @param {array} moveEventHits
         */
        set: function (moveEventHits) {
            this._$moveEventHits = moveEventHits;
        }
    },
    upEventHits: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$upEventHits;
        },
        /**
         * @param {array} upEventHits
         */
        set: function (upEventHits) {
            this._$upEventHits = upEventHits;
        }
    },
    keyDownEventHits: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$keyDownEventHits;
        },
        /**
         * @param {array} keyDownEventHits
         */
        set: function (keyDownEventHits) {
            this._$keyDownEventHits = keyDownEventHits;
        }
    },
    keyUpEventHits: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$keyUpEventHits;
        },
        /**
         * @param {array} keyUpEventHits
         */
        set: function (keyUpEventHits) {
            this._$keyUpEventHits = keyUpEventHits;
        }
    }
});


/**
 * @param   {number} r
 * @param   {number} g
 * @param   {number} b
 * @returns void
 */
Player.prototype.setBackgroundColor = function (r, g, b)
{
    if (typeof r !== "number") {
        r = 255;
    }
    if (typeof g !== "number") {
        g = 255;
    }
    if (typeof b !== "number") {
        b = 255;
    }

    this._$backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
};

/**
 * @param   {number} stageId
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
 * @param {Stage} stage
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
            this._$ratio = this.$devicePixelRatio;
            break;
        case StageQuality.MEDIUM:
            this._$ratio = this.$devicePixelRatio * 0.8;
            break;
        case StageQuality.LOW:
            this._$ratio = this.$devicePixelRatio * 0.5;
            break;
    }
};

/**
 * @returns void
 */
Player.prototype.play = function ()
{
    this.stopFlag = false;

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
 * @param   {object} div
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
    style["-webkit-user-select"]         = "none";

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
Player.prototype.buildWait = function ()
{
    var div = this.$document.getElementById(this.name);
    if (div) {

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
    }
};

/**
 * @return void
 */
Player.prototype.loaded = function ()
{
    var div = this.$document.getElementById(this.name);
    if (div) {

        // DOM
        this.deleteNode();

        // reset
        // this.buttonHits       = [];
        // this.downEventHits    = [];
        // this.moveEventHits    = [];
        // this.upEventHits      = [];
        // this.keyDownEventHits = [];
        // this.keyUpEventHits   = [];

        // action start
        this.doAction();

        var self = this;

        // callback
        if (typeof this.callback === "function") {
            this.callback.call(window, this.root);
        }

        // set backgroundColor
        if (this.bgcolor) {
            this.backgroundColor = this.bgcolor;
        }

        // load sound
        // if (this.$isTouch) {
        //     var loadSounds = this.loadSounds;
        //     var length     = 0 | loadSounds.length;
        //     if (length) {
        //         var loadSound = function ()
        //         {
        //             canvas.removeEventListener(self.$startEvent, loadSound);
        //             for (var idx in loadSounds) {
        //                 if (!loadSounds.hasOwnProperty(idx)) {
        //                     continue;
        //                 }
        //
        //                 var audio = loadSounds[idx];
        //                 audio.load();
        //             }
        //         };
        //
        //         canvas.addEventListener(this.$startEvent, loadSound);
        //     }
        // }

        this.canvas.addEventListener(this.$startEvent, function (event)
        {
            self.$event = event;
            self.touchStart(event);
        });

        this.canvas.addEventListener(this.$moveEvent, function (event)
        {
            self.$event = event;
            self.touchMove(event);
        });

        this.canvas.addEventListener(this.$endEvent, function (event)
        {
            self.$event = event;
            self.touchEnd(event);
        });

        // render start
        this.draw();

        // append canvas
        div.appendChild(this.canvas);

        this.play();
    }
};


/**
 * @returns void
 */
Player.prototype.deleteNode = function ()
{
    var div = this.$document.getElementById(this.name);
    if (div) {

        var childNodes = div.childNodes;

        var idx = childNodes.length|0;
        if (idx) {
            while (idx) {
                idx = (idx - 1)|0;
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
    style.zIndex                         = "0";
    style.position                       = "absolute";
    style.top                            = "0";
    style.left                           = "0";
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
 * @returns void
 */
Player.prototype.resize = function ()
{
    var div = this.$document.getElementById(this.name);
    if (div) {

        var oWidth  = this.optionWidth;
        var oHeight = this.optionHeight;

        var element     = this.$document.documentElement;
        var innerWidth  = this.$max(element.clientWidth, window.innerWidth   || 0);
        var innerHeight = this.$max(element.clientHeight, window.innerHeight || 0);

        var parent = div.parentNode;
        if (parent.tagName !== "BODY") {
            innerWidth  = parent.offsetWidth;
            innerHeight = parent.offsetHeight;
        }
        var screenWidth  = (oWidth  > 0) ? oWidth  : innerWidth;
        var screenHeight = (oHeight > 0) ? oHeight : innerHeight;

        var scale  = +this.$min((screenWidth / this.baseWidth), (screenHeight / this.baseHeight));
        var width  = (this.baseWidth  * scale)|0;
        var height = (this.baseHeight * scale)|0;

        if (width !== this.width || height !== this.height) {

            // div
            var style    = div.style;
            style.width  = width  + "px";
            style.height = height + "px";
            style.top    = "0";
            style.left   = ((screenWidth / 2) - (width / 2)) + "px";

            width  = (width  * this.$devicePixelRatio)|0;
            height = (height * this.$devicePixelRatio)|0;

            this.scale  = scale;
            this.width  = width;
            this.height = height;

            // main
            this.canvas.width  = width;
            this.canvas.height = height;

            // pre
            var preCanvas    = this.preContext.canvas;
            preCanvas.width  = width;
            preCanvas.height = height;

            // hit canvas
            var hitCanvas    = this.hitContext.canvas;
            hitCanvas.width  = width;
            hitCanvas.height = height;

            // tmp
            if (this.$isAndroid && this.$isChrome) {
                var tmpContext   = this.$tmpContext;
                var tmpCanvas    = tmpContext.canvas;
                tmpCanvas.width  = width;

                tmpCanvas.height = height;
            }

            var mScale  = scale * this.ratio / 20;
            this.matrix = [mScale, 0, 0, mScale, 0, 0];
        }
    }
};

/**
 * @param   {string} path
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

/**
 * @returns void
 */
Player.prototype.run = function ()
{
    stats.begin(); // 計測

    // hits reset
    // this.buttonHits       = [];
    // this.downEventHits    = [];
    // this.moveEventHits    = [];
    // this.upEventHits      = [];
    // this.keyDownEventHits = [];
    // this.keyUpEventHits   = [];

    // execute
    // this.putFrame();
    // this.addActions();
    this.doAction();
    this.draw();

    stats.end(); // 計測
};

/**
 * @returns void
 */
Player.prototype.putFrame = function ()
{

};

/**
 * @returns void
 */
Player.prototype.addActions = function ()
{

};

/**
 * @returns void
 */
Player.prototype.doAction = function ()
{
    if (this.actions.length) {

        var i = 0;
        while (i < this.actions.length) {
            var obj = this.actions[i];
            i = (i + 1)|0;

            var mc = obj.caller;
            if (!mc.active) {
                continue;
            }

            var args    = obj.args || [];
            var actions = obj.actions;
            switch (typeof actions) {
                case "function":
                    actions.apply(mc, args);
                    break;

                default:
                    var length = actions.length|0;
                    var idx    = 0;
                    while (idx < length) {
                        var action = actions[idx];
                        idx = (idx + 1)|0;

                        switch (typeof action) {
                            case "function":
                                action.apply(mc, args);
                                break;
                            default:
                                break;
                        }
                    }

                    break;
            }
        }
    }

    // reset
    this.actions = [];
};

/**
 * @returns void
 */
Player.prototype.draw = function ()
{
    /**
     * pre draw
     */
    var ctx    = this.preContext;
    var canvas = ctx.canvas;
    var width  = canvas.width|0;
    var height = canvas.height|0;

    if (width > 0 && height > 0) {

        // reset
        ctx.globalCompositeOperation = "source-over";
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        // background color
        switch (this.backgroundColor) {
            case "transparent":
            case false:

                // pre clear
                ctx.clearRect(0, 0, width + 1, height + 1);

                // main clear
                this.context.clearRect(0, 0, width + 1, height + 1);

                break;
            default:

                ctx.fillStyle = this.backgroundColor;
                ctx.fillRect(0, 0, width + 1, height + 1);

                break;
        }

        // pre draw
        this.root._$draw(this.matrix, this.colorTransform, false, true);


        /**
         * draw
         */

        // reset
        this.context.clearRect(0, 0, width + 1, height + 1);

        // draw
        this.context.setTransform(1, 0, 0, 1, 0, 0);
        this.context.drawImage(canvas, 0, 0, width, height);

    }
};
/**
 * @constructor
 */
var Stage = function ()
{
    DisplayObjectContainer.call(this);

    // origin param
    this._stageId  = null;
    this._playerId = null;

    // init
    this._align                       = "";
    this._allowsFullScreen            = false;
    this._allowsFullScreenInteractive = false;
    this._browserZoomFactor           = 1.0;
    this._color                       = "transparent";
    this._colorCorrection             = ColorCorrection.DEFAULT;
    this._colorCorrectionSupport      = ColorCorrectionSupport.DEFAULT_OFF;
    this._displayState                = null;
    this._focus                       = null;
    this._frameRate                   = 1000;
    this._fullScreenHeight            = 0;
    this._fullScreenSourceRect        = null;
    this._fullScreenWidth             = 0;
    this._mouseLock                   = false;
    this._nativeWindow                = null;
    this._quality                     = StageQuality.HIGH;



};


/**
 * extends
 * @type {DisplayObject}
 */
Stage.prototype = Object.create(DisplayObjectContainer.prototype);
Stage.prototype.constructor = Stage;

/**
 * properties
 */
Object.defineProperties(Stage.prototype, {
    align: {
        get: function () {
            return this._align;
        },
        set: function (align) {
            if (typeof align === "string") {
                var value = align.toUpperCase();
                switch (value) {
                    case StageAlign.BOTTOM:
                    case StageAlign.BOTTOM_LEFT:
                    case StageAlign.BOTTOM_RIGHT:
                    case StageAlign.LEFT:
                    case StageAlign.RIGHT:
                    case StageAlign.TOP:
                    case StageAlign.TOP_LEFT:
                    case StageAlign.TOP_RIGHT:
                        this._align = value;
                        break;
                    default:
                        break;
                }
            }
        }
    },
    allowsFullScreen: {
        get: function () {
            return this._allowsFullScreen;
        },
        set: function () {}
    },
    allowsFullScreenInteractive: {
        get: function () {
            return this._allowsFullScreenInteractive;
        },
        set: function () {}
    },
    browserZoomFactor: {
        get: function () {
            return this._browserZoomFactor;
        },
        set: function () {}
    },
    color: {
        get: function () {
            return this._color;
        },
        set: function (color) {
            if (typeof color === "string") {
                color = this.$colorStringToInt(color);
            }
            this._color = color;
        }
    },
    colorCorrection: {
        get: function () {
            return this._colorCorrection;
        },
        set: function (colorCorrection) {
            if (typeof colorCorrection === "string") {
                var value = colorCorrection.toLowerCase();
                switch (value) {
                    case ColorCorrection.ON:
                    case ColorCorrection.OFF:
                    case ColorCorrection.DEFAULT:
                        this._colorCorrection = value;
                        break;
                    default:
                        break;
                }
            }
        }
    },
    colorCorrectionSupport: {
        get: function () {
            return this._colorCorrectionSupport;
        },
        set: function () {}
    },
    contentsScaleFactor: {
        get: function () {
            return this.$devicePixelRatio;
        },
        set: function () {}
    },
    displayState: {
        get: function () {
            return this._displayState;
        },
        set: function (displayState) {
            if (typeof displayState === "string") {
                switch (displayState) {
                    case StageDisplayState.FULL_SCREEN:
                    case StageDisplayState.FULL_SCREEN_INTERACTIVE:
                    case StageDisplayState.NORMAL:
                        this._displayState = displayState;
                        break;
                }
            }
        }
    },
    focus: {
        get: function () {
            return this._focus;
        },
        set: function (focus) {
            if (focus instanceof InteractiveObject) {
                    this._focus = focus;
            }
        }
    },
    frameRate: {
        get: function () {
            return this._frameRate;
        },
        set: function (frameRate) {
            if (typeof frameRate === "number") {
                switch (true) {
                    case 0 >= frameRate:
                        this._frameRate = 0.01;
                        break;
                    case 1000 < frameRate:
                        this._frameRate = 1000;
                        break;
                    default:
                        this._frameRate = frameRate;
                }
            }
        }
    },
    fullScreenHeight: {
        get: function () {
            return this._fullScreenHeight;
        },
        set: function () {}
    },
    fullScreenSourceRect: {
        get: function () {
            return this._fullScreenSourceRect;
        },
        set: function (rect) {
            if (rect instanceof Rectangle) {
                this._fullScreenSourceRect = rect;
            }
        }
    },
    fullScreenWidth: {
        get: function () {
            return this._fullScreenWidth;
        },
        set: function () {}
    },
    mouseLock: {
        get: function () {
            return this._mouseLock;
        },
        set: function (mouseLock) {
            if (typeof mouseLock === "boolean") {
                this._mouseLock = mouseLock
            }
        }
    },
    nativeWindow: {
        get: function () {
            return this._nativeWindow;
        },
        set: function () {}
    },
    quality: {
        get: function () {
            return this._quality;
        },
        set: function (quality) {
            if (typeof quality === "string") {
                var value = quality.toLowerCase();
                switch (value) {
                    case StageQuality.LOW:
                    case StageQuality.MEDIUM:
                    case StageQuality.HIGH:
                    case StageQuality.BEST:
                        this._quality = value;
                        break;
                }
            }
        }
    }





});

/**
 * @returns {string}
 */
Stage.prototype.getClassName = function ()
{
    return "Stage";
};

/**
 * @returns {Player}
 */
Stage.prototype.getPlayer = function ()
{
    return this.$players[this._playerId];
};

/**
 * @param {Player} player
 */
Stage.prototype.setPlayer = function (player)
{
    this._playerId  = player.id;

    // init stage
    this._stageId   = player.stageId;
    player.setStage(this);
    player.stageId = (player.stageId + 1)|0
};
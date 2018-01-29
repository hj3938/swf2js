/**
 * @constructor
 */
var Stage = function ()
{
    DisplayObjectContainer.call(this);

    // Instance ID
    this.$numInstanceId = 0;

    // origin param
    this._id            = null;
    this._playerId      = null;
    this._instances     = [];
    this._placeObjects  = [];

    // property init
    this._align                       = "";
    this._allowsFullScreen            = false;
    this._allowsFullScreenInteractive = false;
    this._browserZoomFactor           = 1.0;
    this._color                       = "transparent";
    this._colorCorrection             = ColorCorrection.DEFAULT;
    this._colorCorrectionSupport      = ColorCorrectionSupport.DEFAULT_OFF;
    this._displayState                = null;
    this._focus                       = null;
    this._frameRate                   = 60;
    this._fullScreenHeight            = 0;
    this._fullScreenSourceRect        = null;
    this._fullScreenWidth             = 0;
    this._mouseLock                   = false;
    this._nativeWindow                = null;
    this._quality                     = StageQuality.HIGH;
    this._scaleMode                   = StageScaleMode.SHOW_ALL;
    this._showDefaultContextMenu      = true;
    this._softKeyboardRect            = new Rectangle(0, 0, 0, 0);
    this._stage3Ds                    = new Stage3D();
    this._stageFocusRect              = true;
    this._stageHeight                 = 0;



};

/**
 * extends
 */
Stage.prototype = Object.create(DisplayObjectContainer.prototype);
Stage.prototype.constructor = Stage;

/**
 * properties
 */
Object.defineProperties(Stage.prototype, {
    id: {
        get: function () {
            return this._id;
        },
        set: function () {}
    },
    player: {
        get: function () {
            return this.$players[this._playerId];
        },
        set: function () {}
    },
    root: {
        get: function () {
            return this;
        },
        set: function () {}
    },
    parent: {
        get: function () {
            return null;
        },
        set: function () {}
    },
    stage: {
        get: function () {
            return this;
        },
        set: function () {}
    },
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
    },
    scaleMode: {
        get: function () {
            return this._scaleMode;
        },
        set: function (scaleMode) {
            if (typeof scaleMode === "string") {
                switch (scaleMode) {
                    case StageScaleMode.EXACT_FIT:
                    case StageScaleMode.NO_BORDER:
                    case StageScaleMode.NO_SCALE:
                    case StageScaleMode.SHOW_ALL:
                        this._scaleMode = scaleMode;
                        break;
                }
            }
        }
    },
    showDefaultContextMenu: {
        get: function () {
            return this._showDefaultContextMenu;
        },
        set: function (showDefaultContextMenu) {
            if (typeof showDefaultContextMenu === "boolean") {
                this._showDefaultContextMenu = showDefaultContextMenu;
            }
        }
    },
    softKeyboardRect: {
        get: function () {
            return this._softKeyboardRect;
        },
        set: function () {}
    },
    stage3Ds: {
        get: function () {
            return this._stage3Ds;
        },
        set: function () {}
    },
    stageFocusRect: {
        get: function () {
            return this._stageFocusRect;
        },
        set: function (stageFocusRect) {
            if (typeof stageFocusRect === "boolean") {
                this._stageFocusRect = stageFocusRect;
            }
        }
    }






});

/**
 * @returns {string}
 */
Stage.prototype.toString = function ()
{
    return "[object Stage]";
};

/**
 * @returns {string}
 */
Stage.prototype.getClassName = function ()
{
    return "Stage";
};

/**
 * @param {Player} player
 */
Stage.prototype.initialSetting = function (player)
{
    // set player id
    this._playerId = player.id;

    // add stage
    this._id = this.$stages.length;
    player.addStage(this);

    // create root
    this._mainTimeline = new MainTimeline();
    this.addChildAt(this._mainTimeline, 0);
};

/**
 * @param   {number} id
 * @returns {DisplayObject|undefined}
 */
Stage.prototype.getInstance = function (id)
{
    return this._instances[id];
};

/**
 * @param   {DisplayObject} instance
 * @returns void
 */
Stage.prototype.setInstance = function (instance)
{
    this._instances[instance.id] = instance;
};



Stage.prototype.parseAndBuild = function (data)
{

};



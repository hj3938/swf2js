/**
 * @constructor
 */
var MovieClip = function ()
{
    Sprite.call(this);

    // origin param
    this._$stopFlag = false;


    // property
    this._$currentframe = 1;
    this._$totalFrames  = 0;

    // controller tags
    this._$actions       = [];
    this._$labels        = [];
    this._$removeObjects = [];

    // // flag
    // this.stopFlag = false;
    // this.isAction = true;
    //
    // // clip
    // this.isClipDepth = false;
    // this.clipDepth   = 0;
    //
    // // sound
    // this.sounds        = [];
    // this.soundStopFlag = false;
};

/**
 * extends
 * @type {Sprite}
 */
MovieClip.prototype = Object.create(Sprite.prototype);
MovieClip.prototype.constructor = MovieClip;

/**
 * properties
 */
Object.defineProperties(MovieClip.prototype, {
    currentFrame: {
        get: function () {
            return this._$currentframe;
        },
        set: function (id) {}
    },
    currentFrameLabel: {
        get: function () {
            return this._$id;
        },
        set: function (id) {}
    },
    currentLabel: {
        get: function () {
            return this._$id;
        },
        set: function (id) {}
    },
    currentLabels: {
        get: function () {
            return this._$id;
        },
        set: function (id) {}
    },
    currentScene: {
        get: function () {
            return this._$id;
        },
        set: function (id) {}
    },
    enabled: {
        get: function () {
            return this._$id;
        },
        set: function (id) {}
    },
    framesLoaded: {
        get: function () {
            return this._$id;
        },
        set: function (id) {}
    },
    isPlaying: {
        get: function () {
            return this._$id;
        },
        set: function (id) {}
    },
    scenes: {
        get: function () {
            return this._$id;
        },
        set: function (id) {}
    },
    totalFrames: {
        get: function () {
            return this._$totalFrames;
        },
        set: function () {} // readonly
    },
    trackAsMenu: {
        get: function () {
            return this._$id;
        },
        set: function (id) {}
    }
});

/**
 * @returns {string}
 */
MovieClip.prototype.toString = function ()
{
    return "[object MovieClip]";
};

/**
 * @param {number} frame
 * @param {string} name
 */
MovieClip.prototype._$addLabel = function (frame, name)
{
    if (typeof name !== "string") {
        name = name + "";
    }

    this._$labels[name.toLowerCase()] = frame|0;
};

/**
 * @param {number}       frame
 * @param {ActionScript} actionScript
 */
MovieClip.prototype._$addAction = function (frame, actionScript)
{
    if (actionScript instanceof ActionScript) {

        frame = frame|0;

        // init
        if (!(frame in this._$actions)) {
            this._$actions[frame] = [];
        }

        var length = this._$actions[frame].length;
        this._$actions[frame][length] = this._$createActionScript(actionScript);

    }
};

/**
 * @param   {ActionScript} script
 * @returns {Function}
 */
MovieClip.prototype._$createActionScript = function (script)
{
    if (script instanceof ActionScript) {

        return (function (clip, origin)
        {
            var as   = new ActionScript([], origin.constantPool, origin.register, origin.initAction);
            as.cache = origin.cache;
            as.scope = clip;

            return function () {
                as.reset();
                as.variables["this"] = this;
                return as.execute(clip);
            };
        })(this, script);

    }
};

/**
 * @param {number} frame
 * @param {number} depth
 */
MovieClip.prototype._$addRemoveObject = function (frame, depth)
{
    if (!(frame in this._$removeObjects)) {
        this._$removeObjects[frame] = [];
    }

    this._$removeObjects[frame][depth] = 1;
};

/**
 * TODO Sound
 * @param {number} frame
 * @param sound
 */
MovieClip.prototype._$addSound = function (frame, sound)
{

};

/**
 * @returns {MovieClip}
 */
MovieClip.prototype._$build = function ()
{
    var length, frame;

    var mc = new MovieClip();
    mc.characterId = this.characterId;

    /**
     * clone controller
     */
    frame  = 1;
    length = this._$controller.length|0;
    while (length > frame) {

        mc._$controller[frame] = this.$cloneArray(this._$controller[frame]);
        frame = (frame + 1)|0;
    }


    /**
     * clone PlaceObjects
     */
    mc._$placeObjects = this.$cloneArray(this._$placeObjects);

    frame  = 1;
    length = this._$places.length|0;
    while (length > frame) {

        mc._$places[frame] = this.$cloneArray(this._$places[frame]);
        frame = (frame + 1)|0;
    }


    /**
     * clone character
     */
    mc._$container = this.$cloneArray(this._$container);


    /**
     * clone actions
     */
    frame  = 1;
    length = this._$actions.length|0;
    while (length > frame) {

        mc._$actions[frame] = this.$cloneArray(this._$actions[frame]);
        frame = (frame + 1)|0;
    }


    /**
     * clone labels
     */
    mc._$labels = this.$cloneArray(this._$labels);


    /**
     * clone remove objects
     */
    frame  = 1;
    length = this._$removeObjects.length|0;
    while (length > frame) {

        mc._$removeObjects[frame] = this.$cloneArray(this._$removeObjects[frame]);
        frame = (frame + 1)|0;
    }

    // todo sounds

    return mc;
};



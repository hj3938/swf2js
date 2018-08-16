/**
 * @constructor
 */
var MovieClip = function ()
{
    Sprite.call(this);

    // origin flag
    this._$stopFlag  = false;
    this._$canAction = true;


    // property
    this._$currentframe = 1;
    this._$totalFrames  = 0;

    // controller tags
    this._$actions       = [];
    this._$labels        = [];
    this._$removeObjects = [];

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
 * TODO
 * properties
 */
Object.defineProperties(MovieClip.prototype, {
    currentFrame: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$currentframe;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    currentFrameLabel: {
        get: function () {
            return this._$id;
        },
        set: function () {}
    },
    currentLabel: {
        get: function () {
            return this._$id;
        },
        set: function () {}
    },
    currentLabels: {
        get: function () {
            return this._$id;
        },
        set: function () {}
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
 * @param   {number|null|undefined} frame
 * @returns void
 */
MovieClip.prototype._$prepareActions = function (frame)
{
    if (this._$canAction) {

        if (typeof frame !== "number") {
            frame = this.currentFrame|0;
        }

        if (frame in this._$actions) {

            var actions = this.stage.player.actions;

            actions[actions.length] = {
                actions: this._$actions[this.currentFrame],
                caller:  this
            };

        }

    }

    this._$canAction = false;
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
 * @param   {MovieClip} parent
 * @param   {number }   index
 * @param   {object}    tag
 * @param   {boolean}   shouldAction
 * @returns {MovieClip}
 */
MovieClip.prototype._$build = function (parent, index, tag, shouldAction)
{
    var length, frame;

    var mc = new MovieClip();

    // init
    mc.id          = index|0;
    mc.characterId = this.characterId;
    mc.parent      = parent;
    mc.stage       = parent.stage;

    /**
     * set place data
     */
    // name
    if (tag.PlaceFlagHasName === 1) {
        mc.name = tag.Name;
    }

    // ratio
    if (tag.PlaceFlagHasRatio === 1) {
        mc.ratio = tag.Ratio;
    }

    // clip actions
    if (tag.PlaceFlagHasClipActions === 1) {

        var ClipActionRecords = tag.ClipActionRecords;

        length = ClipActionRecords.length|0;

        var eventName, i = 0;
        while (i < length) {

            var actionRecord = ClipActionRecords[i];

            var eventFlag    = actionRecord.EventFlags;
            for (eventName in eventFlag) {

                if (!eventFlag.hasOwnProperty(eventName)) {
                    continue;
                }

                if (!eventFlag[eventName]) {
                    continue;
                }

                // TODO
                var action = mc.createActionScript(actionRecord.Actions);
                mc.addEventListener(eventName, action);
            }

            i = (i + 1)|0;
        }
    }


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

    /**
     * clone dictionary
     */
    var id  = 0;
    length = this._$dictionary.length|0;
    while (length > id) {
        mc._$dictionary = this.$cloneArray(this._$dictionary);

        id = (id + 1)|0;
    }

    var nextAction = false;
    if (shouldAction && mc.ratio === 0) {

        var controller = parent._$getController(parent.currentFrame);

        if (controller && controller.indexOf(index) !== -1) {

            mc._$prepareActions();

            nextAction = true;
        }
    }

    // todo sounds

    // build dictionary
    mc._$characterBuild(nextAction);

    return mc;
};



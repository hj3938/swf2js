/**
 * @constructor
 */
var MovieClip = function ()
{
    Sprite.call(this);

    // origin flag
    this._$stopFlag      = false;
    this._$canAction     = true;

    // property
    this._$currentFrame  = 1;
    this._$totalFrames   = 1;
    this._$isPlaying     = false;
    this._$enabled       = true;
    this._$trackAsMenu   = true;

    // controller tags
    this._$actions       = [];
    this._$frameLabels   = [];
    this._$removeObjects = [];

    // sound
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
            return this._$currentFrame;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    // TODO
    currentFrameLabel: {
        get: function () {
            return this._$id;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    currentLabel: {
        get: function () {
            return this._$id;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    currentLabels: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$frameLabels;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    currentScene: {
        get: function () {
            return this._$id;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    enabled: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$enabled;
        },
        /**
         * @param {boolean} enabled
         */
        set: function (enabled) {
            if (typeof enabled === "boolean") {
                this._$enabled = enabled;
            }
        }
    },
    framesLoaded: {
        get: function () {
            return this._$id;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    isPlaying: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$isPlaying;
        },
        /**
         * readonly
         * @returns void
         */
        set: function () {}
    },
    scenes: {
        get: function () {
            return this._$id;
        },
        /**
         * readonly
         * @returns void
         */
        set: function () {}
    },
    totalFrames: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$totalFrames;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    trackAsMenu: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$trackAsMenu;
        },
        /**
         * @param {boolean} trackAsMenu
         */
        set: function (trackAsMenu) {
            if (typeof trackAsMenu === "boolean") {
                this._$trackAsMenu= trackAsMenu;
            }
        }
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
 * @param {FrameLabel} frameLabel
 */
MovieClip.prototype._$addFrameLabel = function (frameLabel)
{
    if (frameLabel instanceof  FrameLabel) {
        this._$frameLabels[this._$frameLabels.length] = frameLabel;
    }
};

/**
 * @param  {string} name
 * @return {FrameLabel|null}
 */
MovieClip.prototype._$getFrameLabel = function (name)
{
    var frameLabels = this.currentLabels;

    var length = frameLabels.length;
    var idx    = 0;

    if (typeof name !== "string") {
        name = name + "";
    }

    name = name.toLowerCase();
    while (length > idx) {

        var frameLabel = frameLabels[idx];
        if (frameLabel.name === name) {
            return frameLabel;
            break;
        }

        idx = (idx + 1)|0;
    }

    return null;
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

        if (frame in this._$actions && this._$actions[frame].length) {

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

            return function (mc) {
                as.reset();
                as.variables["this"] = mc;
                return as.execute(mc);
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
 * @param   {number}    index
 * @param   {object}    tag
 * @param   {boolean}   shouldAction
 * @returns {MovieClip}
 */
MovieClip.prototype._$build = function (parent, index, tag, shouldAction)
{
    var length, frame;

    var mc = new MovieClip();

    // init
    mc.id            = index|0;
    mc.characterId   = this.characterId;
    mc.parent        = parent;
    mc.stage         = parent.stage;
    mc._$totalFrames = this._$totalFrames;

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

    // mask
    if (tag.PlaceFlagHasClipDepth === 1) {
        mc._$clipDepth = tag.ClipDepth;
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
                var action = mc._$createActionScript(actionRecord.Actions);
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

    // todo sounds



    var nextAction = false;
    if (shouldAction && mc.ratio === 0) {

        var controller = parent._$getController(parent.currentFrame);

        if (controller && controller.indexOf(index) !== -1) {

            mc._$prepareActions(1);

            nextAction = true;
        }
    }


    // build dictionary
    mc._$characterBuild(nextAction);


    return mc;
};

/**
 * @param {array}   matrix
 * @param {array}   colorTransform
 * @param {boolean} isClip
 * @param {boolean} visible
 */
MovieClip.prototype._$draw = function (matrix, colorTransform, isClip, visible)
{

    var frame      = this.currentFrame|0;
    var controller = this._$getController(frame);
    var version    = this.root.actionScriptVersion|0;

    // case action script3
    if (version === ActionScriptVersion.ACTIONSCRIPT3) {

        // next frame
        this._$putFrame();

    }

    var removeObjects = null;
    if (frame in this._$removeObjects) {

        removeObjects = this._$removeObjects[frame];

    }

    // init clip
    var ctx   = this.stage.player.preContext;
    var clips = [];

    // children draw
    for (var depth in controller) {

        if (!controller.hasOwnProperty(depth)) {
            continue;
        }

        var instance = this._$getInstance(controller[depth]);

        // mask end
        var length = clips.length|0;
        var idx    = 0;
        while (idx < length) {

            if (depth > clips[idx]) {

                clips.splice(idx, 1);
                ctx.restore();

                break;
            }

            idx = (idx + 1)|0;
        }

        // mask start
        if (instance._$clipDepth) {

            ctx.save();
            ctx.beginPath();

            clips[clips.length] = instance._$clipDepth|0;

            if (instance.toString() === "[object MovieClip]") {
                isClip = true;
            }
        }


        // next draw
        instance._$draw(
            this.$multiplicationMatrix(matrix, instance._$getMatrix(frame, depth)),
            this.$multiplicationColor(colorTransform, instance._$getColorTransform(frame, depth)),
            isClip,
            visible
        );


        // MovieClip mask end
        if (instance._$clipDepth && instance.toString() === "[object MovieClip]") {

            ctx.clip();

            isClip = false;
        }


        // case action script 1 or 2
        if (instance.toString() === "[object MovieClip]"
            && version === ActionScriptVersion.ACTIONSCRIPT2
        ) {
            instance._$putFrame();
        }


        // remove
        if (removeObjects && depth in removeObjects) {

            this._$createInstance(instance.id, false);

        }

    }

    // end mask
    // if (clips.length || this.mask) {
    if (clips.length) {
        ctx.restore();
    }

    // case action script2
    if (this.toString() === "[object MainTimeline]"
        && version === ActionScriptVersion.ACTIONSCRIPT2
    ) {

        // next frame
        this._$putFrame();

    }
};

/**
 * @returns void
 */
MovieClip.prototype._$putFrame = function ()
{
    if (!this._$stopFlag && this.totalFrames > 1) {

        // loop or reset
        if (this.totalFrames === this.currentFrame) {

            // loop
            if (this.ratio === 0) {

                this._$currentFrame = 1;

            // reset
            } else {

                this.parent._$createInstance(this.id, false);

            }

        } else {

            // next frame
            this._$currentFrame = (this._$currentFrame + 1)|0;

        }

        // action on
        this._$canAction = true;

    }

    // set next action
    this._$prepareActions(this._$currentFrame);
};

/**
 * Action Script 3
 */

/**
 * @returns void
 */
MovieClip.prototype.play = function ()
{
    this._$stopFlag = false;
};

/**
 * @returns void
 */
MovieClip.prototype.stop = function ()
{
    this._$stopFlag = true;
};

/**
 * @param   {number|string} frame
 * @returns void
 */
MovieClip.prototype.gotoAndPlay = function (frame)
{
    this._$gotoFrame(frame);
    this.play();
};

/**
 * @param   {number|string} frame
 * @returns void
 */
MovieClip.prototype.gotoAndStop = function (frame)
{
    this._$gotoFrame(frame);
    this.stop();
};

/**
 * @returns void
 */
MovieClip.prototype.nextFrame = function ()
{
    this._$gotoFrame(this.currentFrame + 1);
};

/**
 * @returns void
 */
MovieClip.prototype.prevFrame = function ()
{
    this._$gotoFrame(this.currentFrame - 1);
};

/**
 * @param   {number|string} frame
 * @returns void
 */
MovieClip.prototype._$gotoFrame = function (frame)
{

    if (typeof frame === "string") {

        var frameLabel = this._$getFrameLabel(frame);

        if (frameLabel instanceof FrameLabel) {
            frame = frameLabel.frame|0;
        }

    }

    frame = frame|0;
    if (frame > 0 && frame !== this.currentFrame) {

        if (frame > this.totalFrames) {
            frame = 1;
        }

        this._$canAction = true;

        var maxFrame = (this.$max(frame, this.currentFrame) + 1)|0;
        var minFrame = this.$min(frame,  this.currentFrame)|0;

        var completed = [];
        while (maxFrame > minFrame) {

            var controller = this._$controller[minFrame];
            for (var depth in controller) {

                if (!controller.hasOwnProperty(depth)) {
                    continue;
                }

                var instance = this._$getInstance(controller[depth]);
                if (instance.id in completed) {
                    continue;
                }

                // flag set
                completed[instance.id] = 1;

                switch (instance.toString()) {

                    // MovieClip
                    case "[object MovieClip]":

                        // rebuild
                        if (frame < instance.ratio || frame > instance.totalFrames) {

                            this._$createInstance(instance.id, false);

                        }

                        break;


                }

            }

            minFrame = (minFrame + 1)|0;
        }

        this._$currentFrame = frame|0;
    }
};

/**
 * Action Script 1 or 2
 */





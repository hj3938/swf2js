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
    this._$framesLoaded  = 1;
    this._$scenes        = [new Scene()];
    this._$isPlaying     = false;
    this._$enabled       = true;
    this._$trackAsMenu   = true;

    // controller tags
    this._$actions       = [];
    this._$frameLabels   = [];

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
    currentFrameLabel: {
        /**
         * @return {string|null}
         */
        get: function () {

            var frame       = this.currentFrame|0;
            var frameLabels = this.currentLabels;

            var idx = (frameLabels.length - 1)|0;
            while (idx > 0) {

                if (idx in frameLabels) {

                    var frameLabel = frameLabels[idx];
                    if (frameLabel.frame === frame) {
                        return frameLabel.name;
                    }

                }

                idx = (idx - 1)|0;
            }

            return null;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    currentLabel: {
        /**
         * @return {string|null}
         */
        get: function () {

            var frame       = this.currentFrame|0;
            var frameLabels = this.currentLabels;

            var length = frameLabels.length|0;
            var idx    = 0;
            while (length > idx) {

                if (idx in frameLabels) {

                    var frameLabel = frameLabels[idx];
                    if (frameLabel.frame === frame) {
                        return frameLabel.name;
                    }

                }

                idx = (idx + 1)|0;
            }

            return null;
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
            return this._$getCurrentScene("current");
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
        /**
         * @return {number}
         */
        get: function () {
            return this._$framesLoaded;
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
        /**
         * @return {array}
         */
        get: function () {
            return this._$scenes;
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
         * @param {boolean} track_as_menu
         */
        set: function (track_as_menu) {
            if (typeof track_as_menu === "boolean") {
                this._$trackAsMenu = track_as_menu;
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
    if (frameLabel instanceof FrameLabel) {
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
 * @param   {boolean}   should_action
 * @returns {MovieClip}
 */
MovieClip.prototype._$build = function (parent, index, tag, should_action)
{
    var length, frame;

    var mc = new MovieClip();

    // init
    mc.id             = index|0;
    mc.characterId    = this.characterId;
    mc.parent         = parent;
    mc.stage          = parent.stage;
    mc._$totalFrames  = this._$totalFrames;
    mc._$framesLoaded = this._$framesLoaded;

    // common build
    mc._$commonBuild(parent, tag);

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
     * clone PlaceObjects
     */
    mc._$placeObjects = this.$cloneArray(this._$placeObjects);

    frame  = 1;
    length = this._$placeController.length|0;
    while (length > frame) {
        mc._$placeController[frame] = this.$cloneArray(this._$placeController[frame]);

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
    var labels  = this.$cloneArray(this._$labels);
    mc._$labels = labels;


    /**
     * create scenes
     */
    var scene = new Scene();
    scene._$numFrames = this._$totalFrames;
    scene._$labels    = labels;
    mc._$scenes       = [scene];


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
    if (should_action && mc.ratio === 0) {

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
 * @param  {array}   matrix
 * @param  {array}   color_transform
 * @param  {boolean} is_clip
 * @param  {boolean} visible
 * @return void
 */
MovieClip.prototype._$draw = function (matrix, color_transform, is_clip, visible)
{

    var instance, length, idx;

    // play flag
    this._$isPlaying = true;


    var frame      = this.currentFrame|0;
    var version    = this.root.actionScriptVersion|0;


    // build controller
    var controller = [];
    var instances  = this._$instances;

    length = instances.length;
    idx    = 0;
    while (length > idx) {

        instance = instances[idx];

        if (instance._$startFrame <= frame && (!instance._$endFrame || instance._$endFrame >= frame)) {

            controller[instance._$index] = instance;

        }

        idx = (idx + 1)|0;
    }


    // case action script3
    if (version === ActionScriptVersion.ACTIONSCRIPT3) {

        // next frame
        this._$putFrame();

    }


    // init clip
    var ctx   = this.stage.player.preContext;
    var clips = [];

    // children draw
    for (var depth in controller) {

        if (!controller.hasOwnProperty(depth)) {
            continue;
        }

        instance = controller[depth];

        // mask end
        length = clips.length|0;
        idx    = 0;
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
                is_clip = true;
            }
        }

        // Transform
        var transform = instance.transform;

        // next draw
        instance._$draw(
            this.$multiplicationMatrix(matrix, transform.matrix._$matrix),
            this.$multiplicationColor(color_transform, transform.colorTransform._$colorTransform),
            is_clip,
            visible
        );


        // MovieClip mask end
        if (instance._$clipDepth && instance.toString() === "[object MovieClip]") {

            ctx.clip();

            is_clip = false;
        }


        // case action script 1 or 2
        if (instance.toString() === "[object MovieClip]"
            && version === ActionScriptVersion.ACTIONSCRIPT2
        ) {

            instance._$putFrame();

        }


        // remove
        if (instance._$endFrame > 0 && instance._$endFrame === frame) {

            switch (instance.toString()) {
                case "[object MovieClip]":

                    this._$createInstance(instance.id, false);
                    break;
            }

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

    if (!this._$stopFlag && this.totalFrames > 1
        && (this._$endFrame === 0 || this._$endFrame !== this.parent.currentFrame)
    ) {

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
 * @param   {number|string}    frame
 * @param   {undefined|string} scene
 * @returns void
 */
MovieClip.prototype.gotoAndPlay = function (frame, scene)
{
    this._$goToFrame(frame, scene);
    this.play();
};

/**
 * @param   {number|string}    frame
 * @param   {undefined|string} scene
 * @returns void
 */
MovieClip.prototype.gotoAndStop = function (frame, scene)
{
    this._$goToFrame(frame, scene);
    this.stop();
};

/**
 * @returns void
 */
MovieClip.prototype.nextFrame = function ()
{
    this._$goToFrame(this.currentFrame + 1);
    this.stop();
};

/**
 * @returns void
 */
MovieClip.prototype.nextScene = function ()
{
    var scene = this._$getCurrentScene("next");
    if (scene) {
        this._$goToFrame(scene._$offset + 1);
    }
    this.play();
};

/**
 * @returns void
 */
MovieClip.prototype.prevFrame = function ()
{
    this._$goToFrame(this.currentFrame - 1);
    this.stop();
};

/**
 * @returns void
 */
MovieClip.prototype.prevScene = function ()
{
    var scene = this._$getCurrentScene("prev");
    if (scene) {
        this._$goToFrame(scene._$offset + 1);
    }
    this.play();
};

/**
 * @param  {string} type
 * @return {Scene|null}
 */
MovieClip.prototype._$getCurrentScene = function (type)
{
    var scene;
    var scenes = this.scenes;
    var length = scenes.length|0;

    if (length > 1) {

        var frame = this.currentFrame|0;
        var idx   = 0;

        while (length > idx) {

            // set
            scene = scenes[idx];

            var total = (scene.numFrames + scene._$offset)|0;
            if (frame > scene._$offset && frame <= total) {
                switch (type) {
                    case "current":
                        return scene;
                    case "next":
                        var next = (idx + 1)|0;
                        return (next in scenes) ? scenes[next] : null;
                    case "prev":
                        var prev = (idx - 1)|0;
                        return (prev in scenes) ? scenes[prev] : null;
                }
            }

            idx = (idx + 1)|0;
        }

    }

    return scenes[0];
};

/**
 * @param  {string} name
 * @return {Scene|null}
 */
MovieClip.prototype._$getScene = function (name)
{
    var length = this.scenes.length;
    var idx    = 0;

    if (typeof name !== "string") {
        name = name + "";
    }

    while (length > idx) {

        var scene = this.scenes[idx];

        if (scene.name === name) {
            return scene;
        }

        idx = (idx + 1)|0;
    }

    return null;
};

/**
 * @param   {number|string}    frame
 * @param   {undefined|string} scene
 * @returns void
 */
MovieClip.prototype._$goToFrame = function (frame, scene)
{
    // scene
    if (scene !== undefined && typeof frame === "number") {
        var target = this._$getScene(scene);
        if (target) {
            frame = (frame + target._$offset)|0;
        }
    }

    // FrameLabel
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

        // reset
        var instances = this._$instances;
        var length    = instances.length|0;
        var idx       = 0;
        while (length > idx) {

            var instance = instances[idx];

            idx = (idx + 1)|0;

            switch (instance.toString()) {

                case "[object MovieClip]":

                    if (instance._$startFrame === 1 && instance._$endFrame === 0) {
                        continue;
                    }

                    if (instance._$startFrame > frame || instance._$endFrame < frame) {
                        this._$createInstance(instance.id, false);
                    }

                    break;

            }

        }

        this._$currentFrame = frame|0;
    }
};

/**
 * Action Script 1 or 2
 */





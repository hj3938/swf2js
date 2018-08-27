/**
 * @constructor
 */
var DisplayObject = function ()
{
    EventDispatcher.call(this);

    // origin param
    this._$id          = null;
    this._$characterId = null;
    this._$stageId     = null;
    this._$containerId = null;
    this._$parent      = null;
    this._$variables   = {};


    // controller
    this._$index           = 0;
    this._$startFrame      = 1;
    this._$endFrame        = 0;


    // PlaceObjects
    this._$matrix          = null;
    this._$colorTransform  = null;
    this._$filters         = null;
    this._$blendMode       = null;


    // clip
    this._$clipDepth = 0;

    // property
    this._$accessibilityProperties = new AccessibilityProperties();
    this._$name                    = "";
    this._$transform               = new Transform(this);

};

/**
 * extends
 */
DisplayObject.prototype = Object.create(EventDispatcher.prototype);
DisplayObject.prototype.constructor = DisplayObject;

/**
 * properties
 */
Object.defineProperties(DisplayObject.prototype, {
    id: {
        /**
         * @returns {number}
         */
        get: function () {
            return this._$id;
        },
        /**
         * @param {number} id
         */
        set: function (id) {
            if (typeof id === "number") {
                this._$id = id;
            }
        }
    },
    characterId: {
        /**
         * @returns {number}
         */
        get: function () {
            return this._$characterId;
        },
        /**
         * @param {number} character_id
         */
        set: function (character_id) {
            if (typeof character_id === "number") {
                this._$characterId = character_id;
            }
        }
    },
    container: {
        /**
         * @returns {Stage}
         */
        get: function () {
            return (this._$containerId !== null) ? this.$stages[this._$containerId] : this._$containerId;
        },
        /**
         * @param {Stage} stage
         */
        set: function (stage) {
            if (this._$containerId === null && stage instanceof Stage) {
                this._$containerId = stage.id;
            }
        }
    },
    stage: {
        /**
         * @returns {Stage}
         */
        get: function () {
            return (this._$stageId !== null) ? this.$stages[this._$stageId] : this._$stageId;
        },
        /**
         * @param {Stage} stage
         */
        set: function (stage) {
            if (this._$stageId === null && stage instanceof Stage) {
                this._$stageId = stage.id;
            }
        }
    },
    parent: {
        /**
         * @returns {DisplayObject}
         */
        get: function () {
            return this._$parent;
        },
        /**
         * @param {DisplayObject} parent
         */
        set: function (parent) {
            if (parent instanceof DisplayObject) {
                this._$parent = parent;
            }
        }
    },
    root: {
        /**
         * @returns {MainTimeline}
         */
        get: function () {
            return this.stage._root;
        },
        /**
         * readonly
         */
        set: function () {}
    },
    accessibilityProperties: {
        /**
         * @returns {AccessibilityProperties}
         */
        get: function () {
            return this._$accessibilityProperties;
        },
        /**
         * @param {AccessibilityProperties} accessibilityProperties
         */
        set: function (accessibilityProperties) {
            if (accessibilityProperties instanceof AccessibilityProperties) {
                this._$accessibilityProperties = accessibilityProperties;
            }
        }
    },
    name: {
        /**
         * @returns {string}
         */
        get: function () {
            return this._$name + "";
        },
        /**
         * @param {string} name
         */
        set: function (name) {
            this._$name = name + "";
        }
    },
    transform: {
        /**
         * @returns {Transform}
         */
        get: function () {
            return this._$transform;
        },
        /**
         * @param   {Transform} transform
         * @returns void
         */
        set: function (transform) {
            if (transform instanceof Transform) {
                this._$transform = transform._$clone();
            }
        }
    }
});


/**
 * @return {PlaceObject}
 */
DisplayObject.prototype._$getPlaceObject = function ()
{
    var parent = this.parent;
    var frame  = parent.currentFrame|0;
    var id     = parent._$places[frame][this._$index];

    return parent._$placeObjects[id];
};

/**
 * @returns void
 */
DisplayObject.prototype._$buildPlaceObject = function (parent, tag)
{
    // set place object
    var depth         = tag.Depth|0;
    var frame         = tag.StartFrame|0;
    var totalFrame    = (parent.totalFrames + 1)|0;
    var removeObjects = parent._$removeObjects;

    // set param
    this._$index      = depth|0;
    this._$startFrame = frame|0;

    // var controllers = parent._$controller;
    while (totalFrame > frame) {

        // if (frame in controllers
        //     && depth in controllers[frame]
        //     && this.id === controllers[frame][depth]
        // ) {
        //
        //     var id = parent._$places[frame][depth];
        //     this._$placeController[frame] = id;
        //     this._$placeStore[id]         = parent._$placeObjects[id];
        //
        // }

        var nextFrame = (frame + 1)|0;
        if (nextFrame in removeObjects && depth in removeObjects[nextFrame]) {

            this._$endFrame = frame;
            break;
        }

        frame = (frame + 1)|0;
    }
};
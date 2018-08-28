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


    // clip
    this._$clipDepth = 0;

    // property
    this._$accessibilityProperties = new AccessibilityProperties();
    this._$name                    = "";
    this._$transform               = new Transform(this);

};

/**
 * extends
 * @type {EventDispatcher}
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
         * @param {AccessibilityProperties} accessibility_properties
         */
        set: function (accessibility_properties) {
            if (accessibility_properties instanceof AccessibilityProperties) {
                this._$accessibilityProperties = accessibility_properties;
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
                this._$transform = transform;
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
    var id     = parent._$placeController[frame][this._$index];

    return parent._$placeObjects[id];
};

/**
 * @param   {MovieClip} parent
 * @param   {object}    tag
 * @returns void
 */
DisplayObject.prototype._$commonBuild = function (parent, tag)
{
    // set param
    this._$index      = tag.Depth|0;
    this._$startFrame = tag.StartFrame|0;
    this._$endFrame   = tag.EndFrame|0;
};
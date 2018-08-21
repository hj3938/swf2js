/**
 * @constructor
 */
var DisplayObject = function ()
{
    EventDispatcher.call(this);

    // origin param
    this._$id             = null;
    this._$characterId    = null;
    this._$stageId        = null;
    this._$containerId    = null;
    this._$parent         = null;
    this._$variables      = {};

    // clip
    // clip
    this._$clipDepth      = 0;

    // draw param
    this._$matrix         = null;
    this._$colorTransform = null;


    // property
    this._$accessibilityProperties = new AccessibilityProperties();
    this._$name                    = "";

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
         * @param {*} name
         */
        set: function (name) {
            this._$name = name + "";
        }
    },
    matrix: {
        /**
         * @return {array|null}
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
         * @return {array|null}
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
    }
});

/**
 * @param  {number} frame
 * @param  {number} depth
 * @return {array}
 */
DisplayObject.prototype._$getMatrix = function (frame, depth)
{
    if (this.matrix !== null) {
        return this.matrix;
    }

    var placeObject = this.parent._$getPlaceObject(frame, depth);

    return placeObject.matrix;
};

/**
 * @param  {number} frame
 * @param  {number} depth
 * @return {array}
 */
DisplayObject.prototype._$getColorTransform = function (frame, depth)
{
    if (this.colorTransform !== null) {
        return this.colorTransform;
    }

    var placeObject = this.parent._$getPlaceObject(frame, depth);

    return placeObject.colorTransform;
};
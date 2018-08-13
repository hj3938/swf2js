/**
 * @constructor
 */
var DisplayObject = function ()
{
    EventDispatcher.call(this);

    // origin param
    this._$id           = null;
    this._$characterId  = null;
    this._$stageId      = null;
    this._$parentId     = null;
    this._$variables    = {};

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
            return this.stage.getInstance(this._$parentId);
        },
        /**
         * @param {DisplayObject} parent
         */
        set: function (parent) {
            if (parent instanceof DisplayObject) {
                this._$parentId = parent.id;
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
    }
});






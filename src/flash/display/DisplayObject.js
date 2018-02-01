/**
 * @constructor
 */
var DisplayObject = function ()
{
    EventDispatcher.call(this);

    // origin param
    this._id          = null;
    this._stageId     = null;
    this._$parentId   = null;
    this._$parentType = 0; // 0 = instance, 1 = stage
    this._$index      = null;

    // property int
    this._$name       = "";



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
        get: function () {
            return this._id;
        },
        set: function (id) {
            if (typeof id === "number") {
                this._id = id;
            }
        }
    },
    index: {
        get: function () {
            return this._$index;
        },
        set: function () {}
    },
    stage: {
        /**
         * @returns {Stage}
         */
        get: function () {
            return this.$stages[this._stageId];
        },
        set: function () {}
    },
    parent: {
        get: function () {
            return (!this._$parentType) ? this.stage.getInstance(this._$parentId) : this.$stages[this._$parentId];
        },
        set: function (parent) {
            if (parent instanceof DisplayObject) {
                this._$parentType = 0;
                if (parent instanceof Stage) {
                    this._$parentType = 1;
                }
                this._$parentId = parent.id;
            }
        }
    },
    root: {
        get: function () {
            return this.stage._mainTimeline;
        },
        set: function () {}

    },
    name: {
        get: function () {
            return this._$name + "";
        },
        set: function (name) {
            this._$name = name + "";
        }
    }
});



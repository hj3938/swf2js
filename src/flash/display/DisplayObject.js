/**
 * @constructor
 */
var DisplayObject = function ()
{
    EventDispatcher.call(this);

    // origin param
    this._id      = null;
    this._stageId = null;
    this._index   = null;
    this._active  = false;

    // property int
    this._name = "";


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
    stage: {
        /**
         * @returns {Stage}
         */
        get: function () {
            return this.$stages[this._stageId];
        },
        set: function () {}
    },
    index: {
        get: function () {
            return this._index;
        },
        set: function (index) {
            if (typeof index === "number") {
                this._index = index;
            }
        }
    },
    active: {
        get: function () {
            return this._active;
        },
        set: function (active) {
            if (typeof active === "boolean") {
                this._active = active;
            }
        }
    },
    name: {
        get: function () {
            return this._name + "";
        },
        set: function (name) {
            this._name = name + "";
        }
    }


});





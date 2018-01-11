/**
 * @constructor
 */
var DisplayObject = function ()
{
    EventDispatcher.call(this);

    // origin param
    this._id      = null;
    this._stageId = null;
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
        get: function () {
            return this.$stages[this._stageId];
        },
        set: function () {}
    }
});





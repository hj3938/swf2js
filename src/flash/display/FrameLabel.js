/**
 * @param {string} name
 * @param {number} frame
 * @constructor
 */
var FrameLabel = function (name, frame)
{
    EventDispatcher.call(this);

    // init
    if (typeof name !== "string") {
        name = name + "";
    }

    this._$name  = name.toLowerCase();
    this._$frame = frame|0;
};

/**
 * extends
 */
FrameLabel.prototype = Object.create(EventDispatcher.prototype);
FrameLabel.prototype.constructor = FrameLabel;

/**
 * properties
 */
Object.defineProperties(FrameLabel.prototype, {
    name: {
        /**
         * @return {string}
         */
        get: function () {
            return this._$name;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    frame: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$frame;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    }
});

/**
 * @returns {string}
 */
FrameLabel.prototype.toString = function ()
{
    return "[object FrameLabel]";
};

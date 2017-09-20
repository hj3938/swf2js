/**
 * @param name
 * @param frame
 * @constructor
 */
var FrameLabel = function (name, frame)
{
    // init
    this._name  = name;
    this._frame = frame;
};

/**
 * extends
 */
FrameLabel.prototype = Object.create(OriginalObject.prototype);
FrameLabel.prototype.constructor = FrameLabel;

/**
 * properties
 */
Object.defineProperties(FrameLabel.prototype, {
    name: {
        get: function () {
            return this._name;
        },
        set: function () {}
    },
    frame: {
        get: function () {
            return this._frame;
        },
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

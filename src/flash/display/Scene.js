/**
 * @constructor
 */
var Scene = function ()
{
    this._labels    = [];
    this._name      = "";
    this._numFrames = 0;
};

/**
 * extends
 */
Scene.prototype = Object.create(OriginalObject.prototype);
Scene.prototype.constructor = Scene;

/**
 * properties
 */
Object.defineProperties(Scene.prototype, {
    labels: {
        get: function () {
            return this._labels;
        },
        set: function () {}
    },
    name: {
        get: function () {
            return this._name;
        },
        set: function () {}
    },
    numFrames: {
        get: function () {
            return this._numFrames;
        },
        set: function () {}
    }
});

/**
 * @returns {string}
 */
Scene.prototype.toString = function ()
{
    return "[object Scene]";
};

/**
 * @param {string} name
 * @param {number} frame
 * @returns void
 */
Scene.prototype.addLabel = function (name, frame)
{
    this._labels[name] = new FrameLabel(name, frame);
};
/**
 * @constructor
 */
var MainTimeline = function ()
{
    MovieClip.call(this);

    // origin params
    this._$backgroundColor = "transparent";
    this._$version         = 10;
};

/**
 * extends
 */
MainTimeline.prototype = Object.create(MovieClip.prototype);
MainTimeline.prototype.constructor = MainTimeline;

/**
 * @returns {string}
 */
MainTimeline.prototype.toString = function ()
{
    return "[object MainTimeline]";
};

/**
 * @returns {number}
 */
MainTimeline.prototype.getVersion = function ()
{
    return this._$version;
};

/**
 * @param {number} version
 */
MainTimeline.prototype.setVersion = function (version)
{
    if (typeof version !== "number") {
        version = 10;
    }
    this._$version = version;
};

/**
 *
 * @returns {string}
 */
MainTimeline.prototype.getBackgroundColor = function ()
{
    return this._$backgroundColor;
};

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 */
MainTimeline.prototype.setBackgroundColor = function (r, g, b)
{
    if (typeof r !== "number") {
        r = 255;
    }
    if (typeof g !== "number") {
        g = 255;
    }
    if (typeof b !== "number") {
        b = 255;
    }

    this._$backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
};

/**
 * @param {number} instanceId
 * @param {number} depth
 * @param {number} frame
 */
MainTimeline.prototype.copyPlaceObject = function (instanceId, depth, frame)
{
    var placeObject = this.getPlaceObject(instanceId, depth, frame - 1);
    this.setPlaceObject(placeObject, instanceId, depth, frame);
};
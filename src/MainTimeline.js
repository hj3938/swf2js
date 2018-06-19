/**
 * @constructor
 */
var MainTimeline = function ()
{
    MovieClip.call(this);

    // origin params
    this._$backgroundColor = "transparent";
    this._$version         = 10;
    this._$characters      = [];
    this._$controller      = [];
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
 * @param   {number} id
 * @returns {object}
 */
MainTimeline.prototype.getCharacter = function (id)
{
    return this._$characters[id];
};

/**
 * @param {number} id
 * @param {object} obj
 */
MainTimeline.prototype.setCharacter = function (id, obj)
{
    this._$characters[id] = obj;
};

/**
 * @param {number} instanceId
 * @param {number} depth
 * @param {number} frame
 * @returns {PlaceObject|null}
 */
MainTimeline.prototype.getPlaceObject = function (instanceId, depth, frame)
{
    if (!(instanceId in this._$controller)) {
        return null;
    }

    var placeObject = this._$controller[instanceId];
    if (!(frame in placeObject)) {
        return null;
    }

    var tags = placeObject[frame];
    if (!(depth in tags)) {
        return null;
    }

    return tags[depth];
};

/**
 * @param {PlaceObject} placeObject
 * @param {number} instanceId
 * @param {number} depth
 * @param {number} frame
 */
MainTimeline.prototype.setPlaceObject = function (placeObject, instanceId, depth, frame)
{
    if (!(instanceId in this._$controller)) {
        this._$controller[instanceId] = [];
    }

    if (!(frame in this._$controller[instanceId])) {
        this._$controller[instanceId][frame] = [];
    }

    this._$controller[instanceId][frame][depth] = placeObject;
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
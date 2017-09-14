/**
 * @param percent
 * @param mat
 * @param pos
 * @param at
 * @param up
 * @constructor
 */
var Utils3D = function (percent, mat, pos, at, up)
{
    this._percent = 0;
    this._mat     = null;
    this._pos     = null;
    this._at      = null;
    this._up      = null;
};

/**
 * extends
 */
Utils3D.prototype = Object.create(OriginalObject.prototype);
Utils3D.prototype.constructor = Utils3D;

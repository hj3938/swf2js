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
    OriginalObject.call(this);

    this._$percent = 0;
    this._$mat     = null;
    this._$pos     = null;
    this._$at      = null;
    this._$up      = null;
};

/**
 * extends
 * @type {OriginalObject}
 */
Utils3D.prototype = Object.create(OriginalObject.prototype);
Utils3D.prototype.constructor = Utils3D;

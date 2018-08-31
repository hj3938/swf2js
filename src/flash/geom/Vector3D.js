/**
 * @param x
 * @param y
 * @param z
 * @param w
 * @constructor
 */
var Vector3D = function (x, y, z, w)
{
    OriginalObject.call(this);

    this._$x = 0;
    this._$y = 0;
    this._$z = 0;
    this._$w = 0;
};

/**
 * extends
 * @type {OriginalObject}
 */
Vector3D.prototype = Object.create(OriginalObject.prototype);
Vector3D.prototype.constructor = Vector3D;
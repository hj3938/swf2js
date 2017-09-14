/**
 * @param v
 * @constructor
 */
var Matrix3D = function (v)
{
    this._v = null;
};

/**
 * extends
 */
Matrix3D.prototype = Object.create(OriginalObject.prototype);
Matrix3D.prototype.constructor = Matrix3D;
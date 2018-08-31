/**
 * @param v
 * @constructor
 */
var Matrix3D = function (v)
{
    OriginalObject.call(this);

    this._v = null;
};

/**
 * extends
 * @type {OriginalObject}
 */
Matrix3D.prototype = Object.create(OriginalObject.prototype);
Matrix3D.prototype.constructor = Matrix3D;
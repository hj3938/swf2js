/**
 * @param type
 * @param colors
 * @param alphas
 * @param ratios
 * @param matrix
 * @param spreadMethod
 * @param interpolationMethod
 * @param focalPointRatio
 * @constructor
 */
var GraphicsGradientFill = function (
    type, colors, alphas, ratios, matrix,
    spreadMethod, interpolationMethod, focalPointRatio
)
{
    this._type                = "linear";
    this._colors              = null;
    this._alphas              = null;
    this._ratios              = null;
    this._matrix              = null;
    this._spreadMethod        = "pad";
    this._interpolationMethod = "rgb";
    this._focalPointRatio     = 0.0;
};
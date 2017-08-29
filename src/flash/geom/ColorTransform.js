/**
 * @param redMultiplier
 * @param greenMultiplier
 * @param blueMultiplier
 * @param alphaMultiplier
 * @param redOffset
 * @param greenOffset
 * @param blueOffset
 * @param alphaOffset
 * @constructor
 */
var ColorTransform = function (
    redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier,
    redOffset, greenOffset, blueOffset, alphaOffset
)
{
    this._redMultiplier   = 1.0;
    this._greenMultiplier = 1.0;
    this._blueMultiplier  = 1.0;
    this._alphaMultiplier = 1.0;
    this._redOffset       = 0;
    this._greenOffset     = 0;
    this._blueOffset      = 0;
    this._ralphaOffset    = 0;
};
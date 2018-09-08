/**
 * @param thickness
 * @param pixelHinting
 * @param scaleMode
 * @param caps
 * @param joints
 * @param miterLimit
 * @param fill
 * @constructor
 */
var GraphicsStroke = function (
    thickness, pixelHinting, scaleMode,
    caps, joints, miterLimit, fill
)
{
    this._$thickness    = "";
    this._$pixelHinting = false;
    this._$scaleMode    = "normal";
    this._$caps         = "none";
    this._$joints       = "round";
    this._$miterLimit   = 3.0;
    this._$fill         = null;
};
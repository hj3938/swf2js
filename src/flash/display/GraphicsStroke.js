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
    this._thickness    = "";
    this._pixelHinting = false;
    this._scaleMode    = "normal";
    this._caps         = "none";
    this._joints       = "round";
    this._miterLimit   = 3.0;
    this._fill         = null;
};
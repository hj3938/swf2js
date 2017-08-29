/**
 * @param quantization
 * @param colorSpace
 * @param trimFlexBits
 * @constructor
 */
var JPEGXREncoderOptions = function (quantization, colorSpace, trimFlexBits)
{
    this._quantization = 20;
    this._colorSpace   = "auto";
    this._trimFlexBits = 0;
};
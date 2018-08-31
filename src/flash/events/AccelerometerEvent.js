/**
 * @param type
 * @param bubbles
 * @param cancelable
 * @param timestamp
 * @param accelerationX
 * @param accelerationY
 * @param accelerationZ
 * @constructor
 */
var AccelerometerEvent = function (
    type, bubbles, cancelable, timestamp,
    accelerationX, accelerationY, accelerationZ
)
{
    this._$type          = "";
    this._$bubbles       = false;
    this._$cancelable    = false;
    this._$timestamp     = 0;
    this._$accelerationX = 0;
    this._$accelerationY = 0;
    this._$accelerationZ = 0;
};
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
    this._type          = "";
    this._bubbles       = false;
    this._cancelable    = false;
    this._timestamp     = 0;
    this._accelerationX = 0;
    this._accelerationY = 0;
    this._accelerationZ = 0;
};
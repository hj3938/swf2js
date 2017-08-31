/**
 * @param type
 * @param bubbles
 * @param cancelable
 * @param data
 * @constructor
 */
var DataEvent = function (type, bubbles, cancelable, data)
{
    this._type       = "";
    this._bubbles    = false;
    this._cancelable = false;
    this._data       = "";
};
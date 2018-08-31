/**
 * @param type
 * @param bubbles
 * @param cancelable
 * @param activating
 * @constructor
 */
var ActivityEvent = function (type, bubbles, cancelable, activating)
{
    this._$type       = "";
    this._$bubbles    = false;
    this._$cancelable = false;
    this._$activating = false;
};
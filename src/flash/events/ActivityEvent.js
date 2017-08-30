/**
 * @param type
 * @param bubbles
 * @param cancelable
 * @param activating
 * @constructor
 */
var ActivityEvent = function (type, bubbles, cancelable, activating)
{
    this._type       = "";
    this._bubbles    = false;
    this._cancelable = false;
    this._activating = false;
};
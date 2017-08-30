/**
 * @param type
 * @param bubbles
 * @param cancelable
 * @param text
 * @param error
 * @constructor
 */
var AsyncErrorEvent = function (type, bubbles, cancelable, text, error)
{
    this._type       = "";
    this._bubbles    = false;
    this._cancelable = false;
    this._text       = "";
    this._error      = null;
};
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
    this._$type       = "";
    this._$bubbles    = false;
    this._$cancelable = false;
    this._$text       = "";
    this._$error      = null;
};
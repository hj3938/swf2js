/**
 * @param type
 * @param bubbles
 * @param cancelable
 * @param status
 * @param responseUrl
 * @constructor
 */
var AVHTTPStatusEvent = function (type, bubbles, cancelable, status, responseUrl)
{
    this._type        = "";
    this._bubbles     = false;
    this._cancelable  = false;
    this._status      = 0;
    this._responseUrl = null;
};

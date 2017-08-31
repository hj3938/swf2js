/**
 * @param type
 * @param bubbles
 * @param cancelable
 * @param mouseTarget
 * @param contextMenuOwner
 * @constructor
 */
var ContextMenuEvent = function (type, bubbles, cancelable, mouseTarget, contextMenuOwner)
{
    this._type             = "";
    this._bubbles          = false;
    this._cancelable       = false;
    this._mouseTarget      = null;
    this._contextMenuOwner = null;
};
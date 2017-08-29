/**
 * @param commands
 * @param data
 * @param winding
 * @constructor
 */
var GraphicsPath = function (commands, data, winding)
{
    this._commands = null;
    this._data     = null;
    this._winding  = "evenOdd";
};
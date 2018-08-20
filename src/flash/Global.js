/**
 * @constructor
 */
var Global = function ()
{
    this.variables = {};
};

/**
 * @param   {string} name
 * @returns {*}
 */
Global.prototype.getVariable = function (name)
{
    return this.variables[name];
};

/**
 * @param   {string} name
 * @param   {string} value
 * @returns {*}
 */
Global.prototype.setVariable = function (name, value)
{
    this.variables[name] = value;
};
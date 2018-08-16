/**
 * @constructor
 */
var ActionScriptVersion = function ()
{
    OriginalObject.call(this);
};

ActionScriptVersion.ACTIONSCRIPT2 = 2;
ActionScriptVersion.ACTIONSCRIPT3 = 3;

/**
 * extends
 */
ActionScriptVersion.prototype = Object.create(OriginalObject.prototype);
ActionScriptVersion.prototype.constructor = ActionScriptVersion;
/**
 * @constructor
 */
var ActionScriptVersion = function () {};
ActionScriptVersion.ACTIONSCRIPT2 = 2;
ActionScriptVersion.ACTIONSCRIPT3 = 3;

/**
 * extends
 */
ActionScriptVersion.prototype = Object.create(OriginalObject.prototype);
ActionScriptVersion.prototype.constructor = ActionScriptVersion;
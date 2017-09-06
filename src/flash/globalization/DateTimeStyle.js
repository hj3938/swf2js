/**
 * @constructor
 */
var DateTimeStyle = function () {};

DateTimeStyle.CUSTOM = "custom";
DateTimeStyle.LONG   = "long";
DateTimeStyle.MEDIUM = "medium";
DateTimeStyle.NONE   = "none";
DateTimeStyle.SHORT  = "short";

/**
 * extends
 */
DateTimeStyle.prototype = Object.create(OriginalObject.prototype);
DateTimeStyle.prototype.constructor = DateTimeStyle;
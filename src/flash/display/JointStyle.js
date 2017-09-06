/**
 * @constructor
 */
var JointStyle = function () {};

JointStyle.BEVEL = "bevel";
JointStyle.MITER = "miter";
JointStyle.ROUND = "round";

/**
 * extends
 */
JointStyle.prototype = Object.create(OriginalObject.prototype);
JointStyle.prototype.constructor = JointStyle;
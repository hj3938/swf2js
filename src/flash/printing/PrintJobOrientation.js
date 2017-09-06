/**
 * @constructor
 */
var PrintJobOrientation = function () {};

PrintJobOrientation.LANDSCAPE = "landscape";
PrintJobOrientation.PORTRAIT  = "portrait";

/**
 * extends
 */
PrintJobOrientation.prototype = Object.create(OriginalObject.prototype);
PrintJobOrientation.prototype.constructor = PrintJobOrientation;
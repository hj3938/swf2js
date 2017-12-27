/**
 * @constructor
 */
var URLLoaderDataFormat = function () {};

URLLoaderDataFormat.BINARY    = "binary";
URLLoaderDataFormat.TEXT      = "text";
URLLoaderDataFormat.VARIABLES = "variables";

/**
 * extends
 */
URLLoaderDataFormat.prototype = Object.create(OriginalObject.prototype);
URLLoaderDataFormat.prototype.constructor = URLLoaderDataFormat;
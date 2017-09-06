/**
 * @constructor
 */
var DateTimeNameContext = function () {};

DateTimeNameContext.FORMAT     = "format";
DateTimeNameContext.STANDALONE = "standalone";

/**
 * extends
 */
DateTimeNameContext.prototype = Object.create(OriginalObject.prototype);
DateTimeNameContext.prototype.constructor = DateTimeNameContext;
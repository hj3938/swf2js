/**
 * @constructor
 */
var TriangleCulling = function () {};

TriangleCulling.NEGATIVE = "negative";
TriangleCulling.NONE     = "none";
TriangleCulling.POSITIVE = "positive";

/**
 * extends
 */
TriangleCulling.prototype = Object.create(OriginalObject.prototype);
TriangleCulling.prototype.constructor = TriangleCulling;
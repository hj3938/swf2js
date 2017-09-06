/**
 * @constructor
 */
var GraphicsPathWinding = function () {};

GraphicsPathWinding.EVEN_ODD = "evenOdd";
GraphicsPathWinding.NON_ZERO = "nonZero";

/**
 * extends
 */
GraphicsPathWinding.prototype = Object.create(OriginalObject.prototype);
GraphicsPathWinding.prototype.constructor = GraphicsPathWinding;
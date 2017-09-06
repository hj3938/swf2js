/**
 * @constructor
 */
var XMLNodeType = function () {};

XMLNodeType.ELEMENT_NODE = 1;
XMLNodeType.TEXT_NODE    = 3;

/**
 * extends
 */
XMLNodeType.prototype = Object.create(OriginalObject.prototype);
XMLNodeType.prototype.constructor = XMLNodeType;
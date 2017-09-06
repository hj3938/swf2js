/**
 * @constructor
 */
var DisplacementMapFilterMode = function () {};

DisplacementMapFilterMode.CLAMP  = "clamp";
DisplacementMapFilterMode.COLOR  = "color";
DisplacementMapFilterMode.IGNORE = "ignore";
DisplacementMapFilterMode.WRAP   = "wrap";

/**
 * extends
 */
DisplacementMapFilterMode.prototype = Object.create(OriginalObject.prototype);
DisplacementMapFilterMode.prototype.constructor = DisplacementMapFilterMode;
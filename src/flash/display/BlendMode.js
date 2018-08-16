/**
 * @constructor
 */
var BlendMode = function ()
{
    OriginalObject.call(this);
};

BlendMode.ADD        = "add";
BlendMode.ALPHA      = "alpha";
BlendMode.DARKEN     = "darken";
BlendMode.DIFFERENCE = "difference";
BlendMode.ERASE      = "erase";
BlendMode.HARDLIGHT  = "hardlight";
BlendMode.INVERT     = "invert";
BlendMode.LAYER      = "layer";
BlendMode.LIGHTEN    = "lighten";
BlendMode.MULTIPLY   = "multiply";
BlendMode.NORMAL     = "normal";
BlendMode.OVERLAY    = "overlay";
BlendMode.SCREEN     = "screen";
BlendMode.SHADER     = "shader";
BlendMode.SUBTRACT   = "subtract";

/**
 * extends
 */
BlendMode.prototype = Object.create(OriginalObject.prototype);
BlendMode.prototype.constructor = BlendMode;
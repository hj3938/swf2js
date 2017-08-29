/**
 * @constructor
 */
var GraphicsPathCommand = function () {};
GraphicsPathCommand.prototype.CUBIC_CURVE_TO = 6;
GraphicsPathCommand.prototype.CURVE_TO       = 3;
GraphicsPathCommand.prototype.LINE_TO        = 2;
GraphicsPathCommand.prototype.MOVE_TO        = 1;
GraphicsPathCommand.prototype.NO_OP          = 0;
GraphicsPathCommand.prototype.WIDE_LINE_TO   = 5;
GraphicsPathCommand.prototype.WIDE_MOVE_TO   = 4;
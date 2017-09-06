/**
 * @constructor
 */
var GraphicsPathCommand = function () {};

GraphicsPathCommand.CUBIC_CURVE_TO = 6;
GraphicsPathCommand.CURVE_TO       = 3;
GraphicsPathCommand.LINE_TO        = 2;
GraphicsPathCommand.MOVE_TO        = 1;
GraphicsPathCommand.NO_OP          = 0;
GraphicsPathCommand.WIDE_LINE_TO   = 5;
GraphicsPathCommand.WIDE_MOVE_TO   = 4;

/**
 * extends
 */
GraphicsPathCommand.prototype = Object.create(OriginalObject.prototype);
GraphicsPathCommand.prototype.constructor = GraphicsPathCommand;
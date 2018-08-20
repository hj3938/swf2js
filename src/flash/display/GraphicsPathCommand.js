/**
 * @type {{CUBIC_CURVE_TO: number, CURVE_TO: number, LINE_TO: number, MOVE_TO: number, NO_OP: number, WIDE_LINE_TO: number, WIDE_MOVE_TO: number}}
 */
var GraphicsPathCommand = {
    "NO_OP"         : 0,
    "MOVE_TO"       : 1,
    "LINE_TO"       : 2,
    "CURVE_TO"      : 3,
    "WIDE_MOVE_TO"  : 4,
    "WIDE_LINE_TO"  : 5,
    "CUBIC_CURVE_TO": 6
};
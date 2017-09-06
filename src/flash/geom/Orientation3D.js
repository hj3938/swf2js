/**
 * @constructor
 */
var Orientation3D = function () {};

Orientation3D.AXIS_ANGLE   = "axisAngle";
Orientation3D.EULER_ANGLES = "eulerAngles";
Orientation3D.QUATERNION   = "quaternion";

/**
 * extends
 */
Orientation3D.prototype = Object.create(OriginalObject.prototype);
Orientation3D.prototype.constructor = Orientation3D;
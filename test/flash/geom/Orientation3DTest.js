
describe("Orientation3D.js property test", function()
{

    it("AXIS_ANGLE test", function () {
        expect(Orientation3D.AXIS_ANGLE).toBe("axisAngle");
    });

    it("EULER_ANGLES test", function () {
        expect(Orientation3D.EULER_ANGLES).toBe("eulerAngles");
    });

    it("QUATERNION test", function () {
        expect(Orientation3D.QUATERNION).toBe("quaternion");
    });

    it("length test", function () {
        var length = 0;
        for (var idx in Orientation3D) {
            if (!Orientation3D.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(3);
    });

});

describe("GradientType.js property test", function()
{

    it("LINEAR test", function () 
    {
        expect(GradientType.LINEAR).toBe("linear");
    });

    it("RADIAL test", function () 
    {
        expect(GradientType.RADIAL).toBe("radial");
    });

    it("length test", function () 
    {
        var length = 0;
        for (var idx in GradientType) {
            if (!GradientType.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(2);
    });

});
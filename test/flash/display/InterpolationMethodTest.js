
describe("InterpolationMethod.js property test", function()
{

    it("LINEAR_RGB test", function () 
    {
        expect(InterpolationMethod.LINEAR_RGB).toBe("linearRGB");
    });

    it("RGB test", function () 
    {
        expect(InterpolationMethod.RGB).toBe("rgb");
    });

    it("length test", function () 
    {
        var length = 0;
        for (var idx in InterpolationMethod) {
            if (!InterpolationMethod.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(2);
    });

});
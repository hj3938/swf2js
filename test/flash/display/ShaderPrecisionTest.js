
describe("ShaderPrecision.js property test", function()
{

    it("FAST test", function () 
    {
        expect(ShaderPrecision.FAST).toBe("fast");
    });

    it("FULL test", function () 
    {
        expect(ShaderPrecision.FULL).toBe("full");
    });

    it("length test", function () 
    {
        var length = 0;
        for (var idx in ShaderPrecision) {
            if (!ShaderPrecision.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(2);
    });
});
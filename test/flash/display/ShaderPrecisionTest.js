
describe("ShaderPrecision.js property test", function()
{

    it("FAST test", function () {
        expect(ShaderPrecision.FAST).toBe("fast");
    });

    it("FULL test", function () {
        expect(ShaderPrecision.FULL).toBe("full");
    });

});
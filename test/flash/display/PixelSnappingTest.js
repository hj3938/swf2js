
describe("PixelSnapping.js property test", function()
{

    it("ALWAYS test", function () {
        expect(PixelSnapping.ALWAYS).toBe("always");
    });

    it("AUTO test", function () {
        expect(PixelSnapping.AUTO).toBe("auto");
    });

    it("NEVER test", function () {
        expect(PixelSnapping.NEVER).toBe("never");
    });

});
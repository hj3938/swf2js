
describe("ColorCorrection.js property test", function()
{

    it("DEFAULT test", function () {
        expect(ColorCorrection.DEFAULT).toBe("default");
    });

    it("OFF test", function () {
        expect(ColorCorrection.OFF).toBe("off");
    });

    it("ON test", function () {
        expect(ColorCorrection.ON).toBe("on");
    });
});
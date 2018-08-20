
describe("ColorCorrectionSupport.js property test", function()
{

    it("DEFAULT_OFF test", function () {
        expect(ColorCorrectionSupport.DEFAULT_OFF).toBe("defaultOff");
    });

    it("DEFAULT_ON test", function () {
        expect(ColorCorrectionSupport.DEFAULT_ON).toBe("defaultOn");
    });

    it("UNSUPPORTED test", function () {
        expect(ColorCorrectionSupport.UNSUPPORTED).toBe("unsupported");
    });

});
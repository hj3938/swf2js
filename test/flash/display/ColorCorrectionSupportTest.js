
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

    it("length test", function () {
        var length = 0;
        for (var idx in ColorCorrectionSupport) {
            if (!ColorCorrectionSupport.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(3);
    });

});
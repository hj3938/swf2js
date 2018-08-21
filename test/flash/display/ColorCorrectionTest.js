
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

    it("length test", function () {
        var length = 0;
        for (var idx in ColorCorrection) {
            if (!ColorCorrection.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(3);
    });

});
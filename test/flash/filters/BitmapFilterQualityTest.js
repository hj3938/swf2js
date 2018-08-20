
describe("BitmapFilterQuality.js property test", function()
{

    it("LOW test", function () {
        expect(BitmapFilterQuality.LOW).toBe(1);
    });

    it("MEDIUM test", function () {
        expect(BitmapFilterQuality.MEDIUM).toBe(2);
    });

    it("HIGH test", function () {
        expect(BitmapFilterQuality.HIGH).toBe(3);
    });

    it("length test", function () {
        var length = 0;
        for (var idx in BitmapFilterQuality) {
            if (!BitmapFilterQuality.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(3);
    });

});
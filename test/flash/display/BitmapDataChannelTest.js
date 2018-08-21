
describe("BitmapDataChannel.js property test", function()
{

    it("ALPHA test", function () {
        expect(BitmapDataChannel.ALPHA).toBe(8);
    });

    it("BLUE test", function () {
        expect(BitmapDataChannel.BLUE).toBe(4);
    });

    it("GREEN test", function () {
        expect(BitmapDataChannel.GREEN).toBe(2);
    });

    it("RED test", function () {
        expect(BitmapDataChannel.RED).toBe(1);
    });

    it("length test", function () {
        var length = 0;
        for (var idx in BitmapDataChannel) {
            if (!BitmapDataChannel.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(4);
    });

});
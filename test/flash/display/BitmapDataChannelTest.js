
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

});
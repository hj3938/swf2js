
describe("BitmapEncodingColorSpace.js property test", function()
{

    it("COLORSPACE_4_2_0 test", function ()
    {
        expect(BitmapEncodingColorSpace.COLORSPACE_4_2_0).toBe("4:2:0");
    });

    it("COLORSPACE_4_2_2 test", function ()
    {
        expect(BitmapEncodingColorSpace.COLORSPACE_4_2_2).toBe("4:2:2");
    });

    it("COLORSPACE_4_4_4 test", function ()
    {
        expect(BitmapEncodingColorSpace.COLORSPACE_4_4_4).toBe("4:4:4");
    });

    it("COLORSPACE_AUTO test", function ()
    {
        expect(BitmapEncodingColorSpace.COLORSPACE_AUTO).toBe("auto");
    });

    it("length test", function ()
    {
        var length = 0;
        for (var idx in BitmapEncodingColorSpace) {
            if (!BitmapEncodingColorSpace.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(4);
    });

});
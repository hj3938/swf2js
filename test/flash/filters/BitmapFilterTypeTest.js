
describe("BitmapFilterType.js property test", function()
{

    it("FULL test", function () 
    {
        expect(BitmapFilterType.FULL).toBe("full");
    });

    it("INNER test", function () 
    {
        expect(BitmapFilterType.INNER).toBe("inner");
    });

    it("OUTER test", function () 
    {
        expect(BitmapFilterType.OUTER).toBe("outer");
    });

    it("length test", function () 
    {
        var length = 0;
        for (var idx in BitmapFilterType) {
            if (!BitmapFilterType.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(3);
    });

});
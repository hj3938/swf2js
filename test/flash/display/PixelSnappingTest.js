
describe("PixelSnapping.js property test", function()
{

    it("ALWAYS test", function () 
    {
        expect(PixelSnapping.ALWAYS).toBe("always");
    });

    it("AUTO test", function () 
    {
        expect(PixelSnapping.AUTO).toBe("auto");
    });

    it("NEVER test", function () 
    {
        expect(PixelSnapping.NEVER).toBe("never");
    });

    it("length test", function () 
    {
        var length = 0;
        for (var idx in PixelSnapping) {
            if (!PixelSnapping.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(3);
    });

});
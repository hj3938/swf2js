
describe("CapsStyle.js property test", function()
{

    it("NONE test", function () 
    {
        expect(CapsStyle.NONE).toBe("none");
    });

    it("ROUND test", function () 
    {
        expect(CapsStyle.ROUND).toBe("round");
    });

    it("SQUARE test", function () 
    {
        expect(CapsStyle.SQUARE).toBe("square");
    });

    it("length test", function () 
    {
        var length = 0;
        for (var idx in CapsStyle) {
            if (!CapsStyle.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(3);
    });

});
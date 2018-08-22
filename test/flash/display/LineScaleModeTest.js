
describe("LineScaleMode.js property test", function()
{

    it("HORIZONTAL test", function () 
    {
        expect(LineScaleMode.HORIZONTAL).toBe("horizontal");
    });

    it("NONE test", function () 
    {
        expect(LineScaleMode.NONE).toBe("none");
    });

    it("NORMAL test", function () 
    {
        expect(LineScaleMode.NORMAL).toBe("normal");
    });

    it("VERTICAL test", function () 
    {
        expect(LineScaleMode.VERTICAL).toBe("vertical");
    });

    it("length test", function () 
    {
        var length = 0;
        for (var idx in LineScaleMode) {
            if (!LineScaleMode.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(4);
    });

});
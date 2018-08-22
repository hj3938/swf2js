
describe("SpreadMethod.js property test", function()
{

    it("PAD test", function () 
    {
        expect(SpreadMethod.PAD).toBe("pad");
    });

    it("REFLECT test", function () 
    {
        expect(SpreadMethod.REFLECT).toBe("reflect");
    });

    it("REPEAT test", function () 
    {
        expect(SpreadMethod.REPEAT).toBe("repeat");
    });

    it("length test", function () 
    {
        var length = 0;
        for (var idx in SpreadMethod) {
            if (!SpreadMethod.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(3);
    });

});
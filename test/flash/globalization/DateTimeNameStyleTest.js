
describe("DateTimeNameStyle.js property test", function()
{

    it("FULL test", function () 
    {
        expect(DateTimeNameStyle.FULL).toBe("full");
    });

    it("LONG_ABBREVIATION test", function () 
    {
        expect(DateTimeNameStyle.LONG_ABBREVIATION).toBe("longAbbreviation");
    });

    it("SHORT_ABBREVIATION test", function () 
    {
        expect(DateTimeNameStyle.SHORT_ABBREVIATION).toBe("shortAbbreviation");
    });

    it("length test", function () 
    {
        var length = 0;
        for (var idx in DateTimeNameStyle) {
            if (!DateTimeNameStyle.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(3);
    });

});
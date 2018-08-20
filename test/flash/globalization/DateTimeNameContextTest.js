
describe("DateTimeNameContext.js property test", function()
{

    it("MATCHING test", function () {
        expect(DateTimeNameContext.FORMAT).toBe("format");
    });

    it("SORTING test", function () {
        expect(DateTimeNameContext.STANDALONE).toBe("standalone");
    });

    it("length test", function () {
        var length = 0;
        for (var idx in DateTimeNameContext) {
            if (!DateTimeNameContext.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(2);
    });

});
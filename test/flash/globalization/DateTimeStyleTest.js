
describe("DateTimeStyle.js property test", function()
{

    it("CUSTOM test", function () {
        expect(DateTimeStyle.CUSTOM).toBe("custom");
    });

    it("LONG test", function () {
        expect(DateTimeStyle.LONG).toBe("long");
    });

    it("MEDIUM test", function () {
        expect(DateTimeStyle.MEDIUM).toBe("medium");
    });

    it("NONE test", function () {
        expect(DateTimeStyle.NONE).toBe("none");
    });

    it("SHORT test", function () {
        expect(DateTimeStyle.SHORT).toBe("short");
    });

    it("length test", function () {
        var length = 0;
        for (var idx in DateTimeStyle) {
            if (!DateTimeStyle.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(5);
    });

});
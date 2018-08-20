
describe("CollatorMode.js property test", function()
{

    it("MATCHING test", function () {
        expect(CollatorMode.MATCHING).toBe("matching");
    });

    it("SORTING test", function () {
        expect(CollatorMode.SORTING).toBe("sorting");
    });

    it("length test", function () {
        var length = 0;
        for (var idx in CollatorMode) {
            if (!CollatorMode.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(2);
    });

});
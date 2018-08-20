
describe("PrintJobOrientation.js property test", function()
{

    it("LANDSCAPE test", function () {
        expect(PrintJobOrientation.LANDSCAPE).toBe("landscape");
    });

    it("PORTRAIT test", function () {
        expect(PrintJobOrientation.PORTRAIT).toBe("portrait");
    });

    it("length test", function () {
        var length = 0;
        for (var idx in PrintJobOrientation) {
            if (!PrintJobOrientation.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(2);
    });
});
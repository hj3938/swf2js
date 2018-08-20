
describe("URLLoaderDataFormat.js property test", function()
{

    it("BINARY test", function () {
        expect(URLLoaderDataFormat.BINARY).toBe("binary");
    });

    it("TEXT test", function () {
        expect(URLLoaderDataFormat.TEXT).toBe("text");
    });

    it("VARIABLES test", function () {
        expect(URLLoaderDataFormat.VARIABLES).toBe("variables");
    });

    it("length test", function () {
        var length = 0;
        for (var idx in URLLoaderDataFormat) {
            if (!URLLoaderDataFormat.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(3);
    });
});
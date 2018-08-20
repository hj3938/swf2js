
describe("ClipboardFormats.js property test", function()
{

    it("HTML_FORMAT test", function () {
        expect(ClipboardFormats.HTML_FORMAT).toBe("air:html");
    });

    it("RICH_TEXT_FORMAT test", function () {
        expect(ClipboardFormats.RICH_TEXT_FORMAT).toBe("air:rtf");
    });

    it("TEXT_FORMA test", function () {
        expect(ClipboardFormats.TEXT_FORMA).toBe("air:text");
    });

});
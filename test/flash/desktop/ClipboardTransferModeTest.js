
describe("ClipboardTransferMode.js property test", function()
{

    it("CLONE_ONLY test", function () {
        expect(ClipboardTransferMode.CLONE_ONLY).toBe("cloneOnly");
    });

    it("CLONE_PREFERRED test", function () {
        expect(ClipboardTransferMode.CLONE_PREFERRED).toBe("clonePreferred");
    });

    it("ORIGINAL_ONLY test", function () {
        expect(ClipboardTransferMode.ORIGINAL_ONLY).toBe("originalOnly");
    });

    it("ORIGINAL_PREFERRED test", function () {
        expect(ClipboardTransferMode.ORIGINAL_PREFERRED).toBe("originalPreferred");
    });

    it("length test", function () {
        var length = 0;
        for (var idx in ClipboardTransferMode) {
            if (!ClipboardTransferMode.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(4);
    });

});

describe("StageDisplayState.js property test", function()
{

    it("FULL_SCREEN test", function () {
        expect(StageDisplayState.FULL_SCREEN).toBe("fullScreen");
    });

    it("FULL_SCREEN_INTERACTIVE test", function () {
        expect(StageDisplayState.FULL_SCREEN_INTERACTIVE).toBe("fullScreenInteractive");
    });

    it("NORMAL test", function () {
        expect(StageDisplayState.NORMAL).toBe("normal");
    });

    it("length test", function () {
        var length = 0;
        for (var idx in StageDisplayState) {
            if (!StageDisplayState.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(3);
    });

});
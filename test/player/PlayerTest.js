

describe("Player.js packages test", function()
{

    // packages
    it("packages test", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        var SWFVersion = player.getPackage("flash.display.SWFVersion");
        expect(SWFVersion.FLASH12).toBe(12);

        var StageAlign = player.getPackage("flash.display.StageAlign");
        expect(StageAlign.BOTTOM_LEFT).toBe("BL");

    });

});


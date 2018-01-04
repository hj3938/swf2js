
describe("Player.js packages test", function()
{

    // packages
    it("packages test", function()
    {
        window.swf2js  = new Swf2js();

        var player     = new Player();
        player.$players[player.id] = player;

        var SWFVersion = player.getPackage("flash.display.SWFVersion");
        expect(SWFVersion.FLASH12).toBe(12);

        var StageAlign = player.getPackage("flash.display.StageAlign");
        expect(StageAlign.BOTTOM_LEFT).toBe("BL");

        var currentPlayer = window.swf2js.getCurrentPlayer();
        expect(currentPlayer.id).toBe(player.id);
    });

});


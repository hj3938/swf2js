

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

describe("Player.js setBackgroundColor test", function()
{

    it("setBackgroundColor success", function()
    {
        var player = new Player();
        player.setBackgroundColor(1, 2, 3);

        expect(player.backgroundColor).toBe("rgb(1,2,3)");
    });

    it("setBackgroundColor valid case1", function()
    {
        var player = new Player();
        player.setBackgroundColor("a",2,3);

        expect(player.backgroundColor).toBe("rgb(255,2,3)");
    });

    it("setBackgroundColor valid case2", function()
    {
        var player = new Player();
        player.setBackgroundColor(1,"b",3);

        expect(player.backgroundColor).toBe("rgb(1,255,3)");
    });

    it("setBackgroundColor valid case3", function()
    {
        var player = new Player();
        player.setBackgroundColor(1,2,"c");

        expect(player.backgroundColor).toBe("rgb(1,2,255)");
    });
});


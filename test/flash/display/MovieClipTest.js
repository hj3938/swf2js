describe("MovieClip.js toString test", function()
{

    // toString
    it("toString test success", function () {
        var mc = new MovieClip();
        expect(mc.toString()).toBe("[object MovieClip]");
    });

});


describe("MovieClip.js _$addFrameLabel test", function()
{

    it("_$addFrameLabel test success", function () {
        var mc = new MovieClip();
        mc._$addFrameLabel(new FrameLabel("test", 1));

        var fl = mc._$frameLabels[0];
        expect(fl instanceof FrameLabel).toBe(true);
    });

    it("_$addFrameLabel test valid1", function () {
        var mc = new MovieClip();
        mc._$addFrameLabel({
            "name": 10,
            "frame": 12
        });

        var fl = mc._$frameLabels[0];
        expect(fl).toBe(undefined);
    });

});


describe("MovieClip.js _$addAction test", function()
{

    it("_$addAction test success", function () {
        var mc = new MovieClip();
        mc._$addAction(1, new ActionScript([]));

        var as = mc._$actions[1][0];
        expect(as instanceof Function).toBe(true);
    });

    it("_$addAction test valid", function () {
        var mc = new MovieClip();
        mc._$addAction(1, {});
        expect(mc._$actions[1] === undefined).toBe(true);
    });

    it("_$addAction test valid2", function () {
        var mc = new MovieClip();
        mc._$addAction("aaa", new ActionScript([]));
        expect(mc._$actions[1] === undefined).toBe(true);
    });

});


describe("MovieClip.js _$createActionScript test", function()
{

    it("_$createActionScript test success", function () {
        var mc = new MovieClip();
        var f  = mc._$createActionScript(new ActionScript([]));
        expect(f instanceof Function).toBe(true);
    });

});









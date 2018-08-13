describe("MovieClip.js toString test", function()
{

    // toString
    it("toString test success", function () {
        var mc = new MovieClip();
        expect(mc.toString()).toBe("[object MovieClip]");
    });

});


describe("MovieClip.js _$addLabel test", function()
{

    it("_$addLabel test success", function () {
        var mc = new MovieClip();
        mc._$addLabel(1, "test");
        expect(mc._$labels["test"]).toBe(1);
    });

    it("_$addLabel test valid1", function () {
        var mc = new MovieClip();
        mc._$addLabel(100, 12);
        expect(mc._$labels["12"]).toBe(100);
    });

    it("_$addLabel test valid2", function () {
        var mc = new MovieClip();
        mc._$addLabel("100", 12);
        expect(mc._$labels["12"]).toBe(100);
    });

    it("_$addLabel test valid2", function () {
        var mc = new MovieClip();
        mc._$addLabel("a", 12);
        expect(mc._$labels["12"]).toBe(0);
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









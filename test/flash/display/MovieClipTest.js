
describe("MovieClip.js toString test", function()
{

    // toString
    it("toString test success", function () 
    {
        var mc = new MovieClip();
        expect(mc.toString()).toBe("[object MovieClip]");
    });

});


describe("MovieClip.js _$addFrameLabel test", function()
{

    it("_$addFrameLabel test success", function () 
    {
        var mc = new MovieClip();
        mc._$addFrameLabel(new FrameLabel("test", 1));

        var fl = mc._$frameLabels[0];
        expect(fl instanceof FrameLabel).toBe(true);
    });

    it("_$addFrameLabel test valid1", function () 
    {
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

    it("_$addAction test success", function () 
    {
        var mc = new MovieClip();
        mc._$addAction(1, new ActionScript([]));

        var as = mc._$actions[1][0];
        expect(as instanceof Function).toBe(true);
    });

    it("_$addAction test valid", function () 
    {
        var mc = new MovieClip();
        mc._$addAction(1, {});
        expect(mc._$actions[1] === undefined).toBe(true);
    });

    it("_$addAction test valid2", function () 
    {
        var mc = new MovieClip();
        mc._$addAction("aaa", new ActionScript([]));
        expect(mc._$actions[1] === undefined).toBe(true);
    });

});


describe("MovieClip.js _$createActionScript test", function()
{

    it("_$createActionScript test success", function () 
    {
        var mc = new MovieClip();
        var f  = mc._$createActionScript(new ActionScript([]));
        expect(f instanceof Function).toBe(true);
    });

});


describe("MovieClip.js play test", function()
{

    it("play test success", function () 
    {
        var mc = new MovieClip();
        mc._$stopFlag = true;
        mc.play();
        expect(mc._$stopFlag).toBe(false);
    });

});


describe("MovieClip.js stop test", function()
{

    it("stop test success", function () 
    {
        var mc = new MovieClip();
        mc._$stopFlag = false;
        mc.stop();
        expect(mc._$stopFlag).toBe(true);
    });

});


describe("MovieClip.js gotoAndPlay test", function()
{

    it("gotoAndPlay test success case number", function ()
    {
        var mc = new MovieClip();
        mc._$totalFrames = 3;
        expect(mc.currentFrame).toBe(1);

        mc.gotoAndPlay(2);
        expect(mc.currentFrame).toBe(2);
    });


    it("gotoAndPlay test success case string", function ()
    {
        var mc = new MovieClip();
        mc._$totalFrames = 3;
        expect(mc.currentFrame).toBe(1);

        mc._$addFrameLabel(new FrameLabel("f1", 1));
        mc._$addFrameLabel(new FrameLabel("f2", 2));
        mc._$addFrameLabel(new FrameLabel("f3", 3));

        mc.gotoAndPlay("f2");
        expect(mc.currentFrame).toBe(2);
    });


    it("gotoAndPlay test valid case1", function () 
    {
        var mc = new MovieClip();
        mc._$totalFrames = 3;

        mc.gotoAndPlay(0);
        expect(mc.currentFrame).toBe(1);
    });


    it("gotoAndPlay test valid case2", function () 
    {
        var mc = new MovieClip();
        mc._$totalFrames = 3;

        mc.gotoAndPlay(4);
        expect(mc.currentFrame).toBe(1);
    });


});









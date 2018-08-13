

describe("Stage.js toString test", function()
{
    // toString
    it("toString test success", function()
    {
        var player = window.swf2js.getCurrentPlayer();
        expect(player.stage.toString()).toBe("[object Stage]");
    });

});


describe("Stage.js initialSetting test", function()
{
    it("initialSetting test success", function()
    {
        var player = window.swf2js.getCurrentPlayer();
        expect(player.stage.player instanceof Player).toBe(true);
    });
});



describe("Stage.js property test", function()
{

    // align
    it("align test success case1", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._align = "";

        // start
        player.stage.align = StageAlign.BOTTOM;
        expect(player.stage.align).toBe(StageAlign.BOTTOM);
    });

    it("align test success case2", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._align = "";

        // start
        player.stage.align = "b";
        expect(player.stage.align).toBe(StageAlign.BOTTOM);
    });

    it("align test valid", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._align = "";

        // start
        player.stage.align = "abc";
        expect(player.stage.align).toBe("");
    });

    // allowsFullScreen
    it("allowsFullScreen test success", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._allowsFullScreen = false;

        // start
        player.stage.allowsFullScreen = true;
        expect(player.stage.allowsFullScreen).toBe(false);
    });

    // allowsFullScreenInteractive
    it("allowsFullScreenInteractive test success", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._allowsFullScreenInteractive = false;

        // start
        player.stage.allowsFullScreenInteractive = true;
        expect(player.stage.allowsFullScreenInteractive).toBe(false);
    });

    // browserZoomFactor
    it("browserZoomFactor test success", function()
    {
        var player = window.swf2js.getCurrentPlayer();
        player.stage.browserZoomFactor = 10;

        expect(player.stage.browserZoomFactor).toBe(1);
    });

    // color
    it("color test success case1", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._color = "transparent";

        // start
        player.stage.color  = 0x00990000;
        expect(player.stage.color).toBe(10027008);
    });

    it("color test success case2", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._color = "transparent";

        // start
        player.stage.color = "red";
        expect(player.stage.color).toBe(16711680);
    });

    // colorCorrection
    it("colorCorrection test success", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._colorCorrection = ColorCorrection.DEFAULT;

        // start
        player.stage.colorCorrection = ColorCorrection.ON;
        expect(player.stage.colorCorrection).toBe(ColorCorrection.ON);
    });

    it("colorCorrection test valid case1", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._colorCorrection = ColorCorrection.DEFAULT;

        // start
        player.stage.colorCorrection = 1;
        expect(player.stage.colorCorrection).toBe(ColorCorrection.DEFAULT);
    });

    it("colorCorrection test valid case2", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._colorCorrection = ColorCorrection.DEFAULT;

        // start
        player.stage.colorCorrection = "abc";
        expect(player.stage.colorCorrection).toBe(ColorCorrection.DEFAULT);
    });


    // colorCorrectionSupport
    it("colorCorrectionSupport test success", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._colorCorrectionSupport = ColorCorrectionSupport.DEFAULT_OFF;

        // start
        expect(player.stage.colorCorrectionSupport).toBe(ColorCorrectionSupport.DEFAULT_OFF);
    });

    it("colorCorrectionSupport test valid", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._colorCorrectionSupport = ColorCorrectionSupport.DEFAULT_OFF;

        // start
        player.stage.colorCorrectionSupport = ColorCorrectionSupport.DEFAULT_ON;
        expect(player.stage.colorCorrectionSupport).toBe(ColorCorrectionSupport.DEFAULT_OFF);
    });


    // contentsScaleFactor
    it("contentsScaleFactor test success", function()
    {
        var player = window.swf2js.getCurrentPlayer();
        expect(player.stage.contentsScaleFactor).toBe(1);
    });

    it("contentsScaleFactor test valid", function()
    {
        var player = window.swf2js.getCurrentPlayer();
        player.stage.contentsScaleFactor = 3;

        expect(player.stage.contentsScaleFactor).toBe(1);
    });


    // displayState
    it("displayState test success", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._displayState = null;

        // start
        player.stage.displayState = StageDisplayState.FULL_SCREEN;
        expect(player.stage.displayState).toBe(StageDisplayState.FULL_SCREEN);
    });

    it("displayState test valid case1", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._displayState = null;

        // start
        player.stage.displayState = 1;
        expect(player.stage.displayState).toBe(null);
    });

    it("displayState test valid case2", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._displayState = null;

        // start
        player.stage.displayState = "a";
        expect(player.stage.displayState).toBe(null);
    });


    // focus
    it("focus test success", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._focus = null;

        // start
        player.stage.focus = new TextField("test");
        expect(player.stage.focus instanceof TextField).toBe(true);
    });

    it("focus test valid case1", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._focus = null;

        // start
        player.stage.focus = 1;
        expect(player.stage.focus).toBe(null);
    });

    it("focus test valid case2", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._focus = null;

        // start
        player.stage.focus = "a";
        expect(player.stage.focus).toBe(null);
    });


    // frameRate
    it("frameRate test success case1", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._frameRate = 60;

        // start
        player.stage.frameRate = 50;
        expect(player.stage.frameRate).toBe(50);
    });

    it("frameRate test success case2", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._frameRate = 60;

        // start
        player.stage.frameRate = 0.001;
        expect(player.stage.frameRate).toBe(0.001);
    });

    it("frameRate test valid case1", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._frameRate = 60;

        // start
        player.stage.frameRate = 0;
        expect(player.stage.frameRate).toBe(0.01);
    });

    it("frameRate test valid case2", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._frameRate = 60;

        // start
        player.stage.frameRate = 1200;
        expect(player.stage.frameRate).toBe(1000);
    });

    it("frameRate test valid case3", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._frameRate = 60;

        // start
        player.stage.frameRate = "a";
        expect(player.stage.frameRate).toBe(60);
    });


    // fullScreenHeight
    it("fullScreenHeight test success", function()
    {
        var player = window.swf2js.getCurrentPlayer();
        expect(player.stage.fullScreenHeight).toBe(0);
    });

    it("fullScreenHeight test valid", function()
    {
        var player = window.swf2js.getCurrentPlayer();
        player.stage.fullScreenHeight = 100;
        expect(player.stage.fullScreenHeight).toBe(0);
    });


    // fullScreenSourceRect
    it("fullScreenSourceRect test success", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._fullScreenSourceRect = null;

        // start
        player.stage.fullScreenSourceRect = new Rectangle();
        expect(player.stage.fullScreenSourceRect instanceof Rectangle).toBe(true);
    });

    it("fullScreenSourceRect test valid case1", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._fullScreenSourceRect = null;

        // strat
        player.stage.fullScreenSourceRect = 0;
        expect(player.stage.fullScreenSourceRect).toBe(null);
    });

    it("fullScreenSourceRect test valid case2", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._fullScreenSourceRect = null;

        // start
        player.stage.fullScreenSourceRect = "abc";
        expect(player.stage.fullScreenSourceRect).toBe(null);
    });

    it("fullScreenSourceRect test valid case3", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._fullScreenSourceRect = null;

        // start
        player.stage.fullScreenSourceRect = new Rectangle();
        player.stage.fullScreenSourceRect = 0;
        expect(player.stage.fullScreenSourceRect instanceof Rectangle).toBe(true);
    });


    // fullScreenWidth
    it("fullScreenWidth test success", function()
    {
        var player = window.swf2js.getCurrentPlayer();
        expect(player.stage.fullScreenWidth).toBe(0);
    });

    it("fullScreenWidth test valid", function()
    {
        var player = window.swf2js.getCurrentPlayer();
        player.stage.fullScreenWidth = 100;
        expect(player.stage.fullScreenWidth).toBe(0);
    });


    // mouseLock
    it("mouseLock test success", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._mouseLock = false;

        // start
        player.stage.mouseLock = true;
        expect(player.stage.mouseLock).toBe(true);
    });

    it("mouseLock test valid", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._mouseLock = false;

        // start
        player.stage.mouseLock = 100;
        expect(player.stage.mouseLock).toBe(false);
    });


    // nativeWindow
    it("nativeWindow test success", function()
    {
        var player = window.swf2js.getCurrentPlayer();
        expect(player.stage.nativeWindow).toBe(null);
    });

    it("nativeWindow test valid", function()
    {
        var player = window.swf2js.getCurrentPlayer();
        player.stage.nativeWindow = 100;
        expect(player.stage.nativeWindow).toBe(null);
    });


    // quality
    it("quality test success", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._quality = StageQuality.HIGH;

        // start
        player.stage.quality = StageQuality.LOW;
        expect(player.stage.quality).toBe(StageQuality.LOW);
    });

    it("quality test valid case1", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._quality = StageQuality.HIGH;

        // start
        player.stage.quality = 100;
        expect(player.stage.quality).toBe(StageQuality.HIGH);
    });

    it("quality test valid case2", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._quality = StageQuality.HIGH;

        // start
        player.stage.quality = "a";
        expect(player.stage.quality).toBe(StageQuality.HIGH);
    });

    it("quality test valid case3", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._quality = StageQuality.HIGH;

        // start
        player.stage.quality = "Low";
        expect(player.stage.quality).toBe(StageQuality.LOW);
    });


    // scaleMode
    it("scaleMode test success", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._scaleMode = StageScaleMode.SHOW_ALL;

        // start
        player.stage.scaleMode = StageScaleMode.EXACT_FIT;
        expect(player.stage.scaleMode).toBe(StageScaleMode.EXACT_FIT);
    });

    it("scaleMode test valid case1", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._scaleMode = StageScaleMode.SHOW_ALL;

        // start
        player.stage.scaleMode = 123;
        expect(player.stage.scaleMode).toBe(StageScaleMode.SHOW_ALL);
    });

    it("scaleMode test valid case2", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._scaleMode = StageScaleMode.SHOW_ALL;

        // start
        player.stage.scaleMode = "abc";
        expect(player.stage.scaleMode).toBe(StageScaleMode.SHOW_ALL);
    });

    it("scaleMode test valid case3", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._scaleMode = StageScaleMode.SHOW_ALL;

        // start
        player.stage.scaleMode = "noscale";
        expect(player.stage.scaleMode).toBe(StageScaleMode.SHOW_ALL);
    });


    // showDefaultContextMenu
    it("showDefaultContextMenu test success", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._showDefaultContextMenu = true;

        // start
        player.stage.showDefaultContextMenu = false;
        expect(player.stage.showDefaultContextMenu).toBe(false);
    });

    it("showDefaultContextMenu test valid case1", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._showDefaultContextMenu = true;

        // start
        player.stage.showDefaultContextMenu = 120;
        expect(player.stage.showDefaultContextMenu).toBe(true);
    });

    it("showDefaultContextMenu test valid case2", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._showDefaultContextMenu = true;

        // start
        player.stage.showDefaultContextMenu = "abc";
        expect(player.stage.showDefaultContextMenu).toBe(true);
    });


    // softKeyboardRect
    it("softKeyboardRect test success", function()
    {
        var player = window.swf2js.getCurrentPlayer();
        expect(player.stage.softKeyboardRect instanceof Rectangle).toBe(true);
    });

    it("softKeyboardRect test valid case1", function()
    {
        var player = window.swf2js.getCurrentPlayer();
        player.stage.softKeyboardRect = "abc";
        expect(player.stage.softKeyboardRect instanceof Rectangle).toBe(true);
    });


    // stage3Ds
    it("stage3Ds test success", function()
    {
        var player = window.swf2js.getCurrentPlayer();
        expect(player.stage.stage3Ds instanceof Stage3D).toBe(true);
    });

    it("stage3Ds test valid case1", function()
    {
        var player = window.swf2js.getCurrentPlayer();
        player.stage.stage3Ds = "abc";
        expect(player.stage.stage3Ds instanceof Stage3D).toBe(true);
    });


    // stageFocusRect
    it("stageFocusRect test success", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._stageFocusRect = true;

        // start
        player.stage.stageFocusRect = false;
        expect(player.stage.stageFocusRect).toBe(false);
    });

    it("stageFocusRect test valid case1", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._stageFocusRect = true;

        // start
        player.stage.stageFocusRect = 0;
        expect(player.stage.stageFocusRect).toBe(true);
    });

    it("stageFocusRect test valid case2", function()
    {
        var player = window.swf2js.getCurrentPlayer();

        // reset
        player.stage._stageFocusRect = true;

        // start
        player.stage.stageFocusRect = "abc";
        expect(player.stage.stageFocusRect).toBe(true);
    });




});
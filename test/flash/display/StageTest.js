

describe("Stage.js toString test", function()
{
    // toString
    it("toString test success", function()
    {
        var stage = new Stage();
        expect(stage.toString()).toBe("[object Stage]");
    });

});


describe("Stage.js getClassName test", function()
{
    it("getClassName test success", function()
    {
        var stage = new Stage();
        expect(stage.getClassName()).toBe("Stage");
    });
});

describe("Stage.js initialSetting test", function()
{
    it("initialSetting test success", function()
    {
        var stage = new Stage();
        stage.initialSetting(new Player());
        expect(stage.player instanceof Player).toBe(true);
    });
});

describe("Stage.js property test", function()
{

    // align
    it("align test success case1", function()
    {
        var stage = new Stage();
        stage.align = StageAlign.BOTTOM;

        expect(stage.align).toBe(StageAlign.BOTTOM);
    });

    it("align test success case2", function()
    {
        var stage = new Stage();
        stage.align = "b";

        expect(stage.align).toBe(StageAlign.BOTTOM);
    });

    it("align test valid", function()
    {
        var stage = new Stage();
        stage.align = "abc";

        expect(stage.align).toBe("");
    });


    // allowsFullScreen
    it("allowsFullScreen test success", function()
    {
        var stage = new Stage();
        stage.allowsFullScreen = true;

        expect(stage.allowsFullScreen).toBe(false);
    });


    // allowsFullScreenInteractive
    it("allowsFullScreenInteractive test success", function()
    {
        var stage = new Stage();
        stage.allowsFullScreenInteractive = true;

        expect(stage.allowsFullScreenInteractive).toBe(false);
    });


    // browserZoomFactor
    it("browserZoomFactor test success", function()
    {
        var stage = new Stage();
        stage.browserZoomFactor = 10;

        expect(stage.browserZoomFactor).toBe(1);
    });


    // color
    it("color test success case1", function()
    {
        var stage = new Stage();
        stage.color = 0x00990000;

        expect(stage.color).toBe(10027008);
    });

    it("color test success case2", function()
    {
        var stage = new Stage();
        stage.color = "red";

        expect(stage.color).toBe(16711680);
    });


    // colorCorrection
    it("colorCorrection test success", function()
    {
        var stage = new Stage();
        stage.colorCorrection = ColorCorrection.ON;

        expect(stage.colorCorrection).toBe(ColorCorrection.ON);
    });

    it("colorCorrection test valid case1", function()
    {
        var stage = new Stage();
        stage.colorCorrection = 1;

        expect(stage.colorCorrection).toBe(ColorCorrection.DEFAULT);
    });

    it("colorCorrection test valid case2", function()
    {
        var stage = new Stage();
        stage.colorCorrection = "abc";

        expect(stage.colorCorrection).toBe(ColorCorrection.DEFAULT);
    });


    // colorCorrectionSupport
    it("colorCorrectionSupport test success", function()
    {
        var stage = new Stage();

        expect(stage.colorCorrectionSupport).toBe(ColorCorrectionSupport.DEFAULT_OFF);
    });

    it("colorCorrectionSupport test valid", function()
    {
        var stage = new Stage();
        stage.colorCorrectionSupport = ColorCorrectionSupport.DEFAULT_ON;

        expect(stage.colorCorrectionSupport).toBe(ColorCorrectionSupport.DEFAULT_OFF);
    });


    // contentsScaleFactor
    it("contentsScaleFactor test success", function()
    {
        var stage = new Stage();

        expect(stage.contentsScaleFactor).toBe(1);
    });

    it("contentsScaleFactor test valid", function()
    {
        var stage = new Stage();
        stage.contentsScaleFactor = 3;

        expect(stage.contentsScaleFactor).toBe(1);
    });


    // displayState
    it("displayState test success", function()
    {
        var stage = new Stage();
        stage.displayState = StageDisplayState.FULL_SCREEN;
        expect(stage.displayState).toBe(StageDisplayState.FULL_SCREEN);
    });

    it("displayState test valid case1", function()
    {
        var stage = new Stage();
        stage.displayState = 1;
        expect(stage.displayState).toBe(null);
    });

    it("displayState test valid case2", function()
    {
        var stage = new Stage();
        stage.displayState = "a";
        expect(stage.displayState).toBe(null);
    });


    // focus
    it("focus test success", function()
    {
        var stage = new Stage();
        stage.focus = new TextField("test");
        expect(stage.focus instanceof TextField).toBe(true);
    });

    it("focus test valid case1", function()
    {
        var stage = new Stage();
        stage.focus = 1;
        expect(stage.focus).toBe(null);
    });

    it("focus test valid case2", function()
    {
        var stage = new Stage();
        stage.focus = "a";
        expect(stage.focus).toBe(null);
    });


    // frameRate
    it("frameRate test success case1", function()
    {
        var stage = new Stage();
        stage.frameRate = 50;
        expect(stage.frameRate).toBe(50);
    });

    it("frameRate test success case2", function()
    {
        var stage = new Stage();
        stage.frameRate = 0.001;
        expect(stage.frameRate).toBe(0.001);
    });

    it("frameRate test valid case1", function()
    {
        var stage = new Stage();
        stage.frameRate = 0;
        expect(stage.frameRate).toBe(0.01);
    });

    it("frameRate test valid case2", function()
    {
        var stage = new Stage();
        stage.frameRate = 1200;
        expect(stage.frameRate).toBe(1000);
    });

    it("frameRate test valid case3", function()
    {
        var stage = new Stage();
        stage.frameRate = "a";
        expect(stage.frameRate).toBe(1000);
    });


    // fullScreenHeight
    it("fullScreenHeight test success", function()
    {
        var stage = new Stage();
        expect(stage.fullScreenHeight).toBe(0);
    });

    it("fullScreenHeight test valid", function()
    {
        var stage = new Stage();
        stage.fullScreenHeight = 100;
        expect(stage.fullScreenHeight).toBe(0);
    });


    // fullScreenSourceRect
    it("fullScreenSourceRect test success", function()
    {
        var stage = new Stage();
        stage.fullScreenSourceRect = new Rectangle();
        expect(stage.fullScreenSourceRect instanceof Rectangle).toBe(true);
    });

    it("fullScreenSourceRect test valid case1", function()
    {
        var stage = new Stage();
        stage.fullScreenSourceRect = 0;
        expect(stage.fullScreenSourceRect).toBe(null);
    });

    it("fullScreenSourceRect test valid case2", function()
    {
        var stage = new Stage();
        stage.fullScreenSourceRect = "abc";
        expect(stage.fullScreenSourceRect).toBe(null);
    });

    it("fullScreenSourceRect test valid case3", function()
    {
        var stage = new Stage();
        stage.fullScreenSourceRect = new Rectangle();
        stage.fullScreenSourceRect = 0;
        expect(stage.fullScreenSourceRect instanceof Rectangle).toBe(true);
    });


    // fullScreenWidth
    it("fullScreenWidth test success", function()
    {
        var stage = new Stage();
        expect(stage.fullScreenWidth).toBe(0);
    });

    it("fullScreenWidth test valid", function()
    {
        var stage = new Stage();
        stage.fullScreenWidth = 100;
        expect(stage.fullScreenWidth).toBe(0);
    });


    // mouseLock
    it("mouseLock test success", function()
    {
        var stage = new Stage();
        stage.mouseLock = true;
        expect(stage.mouseLock).toBe(true);
    });

    it("mouseLock test valid", function()
    {
        var stage = new Stage();
        stage.mouseLock = 100;
        expect(stage.mouseLock).toBe(false);
    });


    // nativeWindow
    it("nativeWindow test success", function()
    {
        var stage = new Stage();
        expect(stage.nativeWindow).toBe(null);
    });

    it("nativeWindow test valid", function()
    {
        var stage = new Stage();
        stage.nativeWindow = 100;
        expect(stage.nativeWindow).toBe(null);
    });


    // quality
    it("quality test success", function()
    {
        var stage = new Stage();
        stage.quality = StageQuality.LOW;
        expect(stage.quality).toBe(StageQuality.LOW);
    });

    it("quality test valid case1", function()
    {
        var stage = new Stage();
        stage.quality = 100;
        expect(stage.quality).toBe(StageQuality.HIGH);
    });

    it("quality test valid case2", function()
    {
        var stage = new Stage();
        stage.quality = "a";
        expect(stage.quality).toBe(StageQuality.HIGH);
    });

    it("quality test valid case3", function()
    {
        var stage = new Stage();
        stage.quality = "Low";
        expect(stage.quality).toBe(StageQuality.LOW);
    });


    // scaleMode
    it("scaleMode test success", function()
    {
        var stage = new Stage();
        stage.scaleMode = StageScaleMode.EXACT_FIT;
        expect(stage.scaleMode).toBe(StageScaleMode.EXACT_FIT);
    });

    it("scaleMode test valid case1", function()
    {
        var stage = new Stage();
        stage.scaleMode = 123;
        expect(stage.scaleMode).toBe(StageScaleMode.SHOW_ALL);
    });

    it("scaleMode test valid case2", function()
    {
        var stage = new Stage();
        stage.scaleMode = "abc";
        expect(stage.scaleMode).toBe(StageScaleMode.SHOW_ALL);
    });

    it("scaleMode test valid case3", function()
    {
        var stage = new Stage();
        stage.scaleMode = "noscale";
        expect(stage.scaleMode).toBe(StageScaleMode.SHOW_ALL);
    });


    // showDefaultContextMenu
    it("showDefaultContextMenu test success", function()
    {
        var stage = new Stage();
        expect(stage.showDefaultContextMenu).toBe(true);
        stage.showDefaultContextMenu = false;
        expect(stage.showDefaultContextMenu).toBe(false);
    });

    it("showDefaultContextMenu test valid case1", function()
    {
        var stage = new Stage();
        stage.showDefaultContextMenu = 120;
        expect(stage.showDefaultContextMenu).toBe(true);
    });

    it("showDefaultContextMenu test valid case2", function()
    {
        var stage = new Stage();
        stage.showDefaultContextMenu = "abc";
        expect(stage.showDefaultContextMenu).toBe(true);
    });


    // softKeyboardRect
    it("softKeyboardRect test success", function()
    {
        var stage = new Stage();
        expect(stage.softKeyboardRect instanceof Rectangle).toBe(true);
    });

    it("softKeyboardRect test valid case1", function()
    {
        var stage = new Stage();
        stage.softKeyboardRect = "abc";
        expect(stage.softKeyboardRect instanceof Rectangle).toBe(true);
    });


    // stage3Ds
    it("stage3Ds test success", function()
    {
        var stage = new Stage();
        expect(stage.stage3Ds instanceof Stage3D).toBe(true);
    });

    it("stage3Ds test valid case1", function()
    {
        var stage = new Stage();
        stage.stage3Ds = "abc";
        expect(stage.stage3Ds instanceof Stage3D).toBe(true);
    });


    // stageFocusRect
    it("stageFocusRect test success", function()
    {
        var stage = new Stage();
        stage.stageFocusRect = false;
        expect(stage.stageFocusRect).toBe(false);
    });

    it("stageFocusRect test valid case1", function()
    {
        var stage = new Stage();
        stage.stageFocusRect = 0;
        expect(stage.stageFocusRect).toBe(true);
    });

    it("stageFocusRect test valid case2", function()
    {
        var stage = new Stage();
        stage.stageFocusRect = "abc";
        expect(stage.stageFocusRect).toBe(true);
    });




});
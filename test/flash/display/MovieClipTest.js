
describe("MovieClip.js toString test", function()
{

    // toString
    it("toString test success", function () 
    {
        var mc = new MovieClip();
        expect(mc.toString()).toBe("[object MovieClip]");
    });

});


describe("MovieClip.js property test", function()
{
    //currentFrame
    it("currentFrame test success", function ()
    {
        var mc = new MovieClip();
        expect(mc.currentFrame).toBe(1);
    });

    it("currentFrame test readonly", function ()
    {
        var mc = new MovieClip();
        mc.currentFrame = 10;
        expect(mc.currentFrame).toBe(1);
    });


    // currentFrameLabel
    it("currentFrameLabel test success case null", function ()
    {
        var mc = new MovieClip();
        expect(mc.currentFrameLabel).toBe(null);
    });

    it("currentFrameLabel test success case string", function ()
    {
        var mc = new MovieClip();

        mc._$addFrameLabel(new FrameLabel("aaa", 1));
        mc._$addFrameLabel(new FrameLabel("bbb", 1));

        expect(mc.currentFrameLabel).toBe("bbb");
    });

    it("currentFrameLabel test readonly", function ()
    {
        var mc = new MovieClip();
        mc.currentFrameLabel = "aaa";
        expect(mc.currentFrameLabel).toBe(null);
    });


    // currentLabel
    it("currentLabel test success case null", function ()
    {
        var mc = new MovieClip();
        expect(mc.currentLabel).toBe(null);
    });

    it("currentLabel test success case string", function ()
    {
        var mc = new MovieClip();

        mc._$addFrameLabel(new FrameLabel("aaa", 1));
        mc._$addFrameLabel(new FrameLabel("bbb", 1));

        expect(mc.currentLabel).toBe("aaa");
    });

    it("currentLabel test readonly", function ()
    {
        var mc = new MovieClip();
        mc.currentLabel = "aaa";
        expect(mc.currentLabel).toBe(null);
    });


    // currentLabels
    it("currentLabels test success case1", function ()
    {
        var mc = new MovieClip();
        expect(mc.currentLabels.length).toBe(0);
    });

    it("currentLabels test success case2", function ()
    {
        var mc = new MovieClip();

        mc._$addFrameLabel(new FrameLabel("aaa", 1));
        mc._$addFrameLabel(new FrameLabel("bbb", 1));

        expect(mc.currentLabels.length).toBe(2);

        var labels = mc.currentLabels;
        for (var i = 0; i < labels.length; i++) {

            var label = labels[i];

            switch (i) {
                case 0:
                    expect(label.name).toBe("aaa");
                    break;
                case 1:
                    expect(label.name).toBe("bbb");
                    break;
            }
        }
    });

    it("currentLabels test readonly", function ()
    {
        var mc = new MovieClip();
        mc.currentLabels = [new FrameLabel("aaa", 1), new FrameLabel("bbb", 1)];
        expect(mc.currentLabels.length).toBe(0);
    });


    // currentScene
    it("currentScene test success", function ()
    {
        var mc = new MovieClip();
        mc._$totalFrames  = 4;
        mc._$currentFrame = 1;

        var sceneA = new Scene("a", [], 1);
        sceneA._$offset = 0;

        var sceneB = new Scene("b", [], 2);
        sceneB._$offset = 1;

        var sceneC = new Scene("c", [], 1);
        sceneC._$offset = 3;

        mc._$scenes = [sceneA, sceneB, sceneC];

        var scene;

        scene = mc.currentScene;
        expect(scene.name).toBe("a");

        mc._$currentFrame = 2;
        scene = mc.currentScene;
        expect(scene.name).toBe("b");

        mc._$currentFrame = 3;
        scene = mc.currentScene;
        expect(scene.name).toBe("b");

        mc._$currentFrame = 4;
        scene = mc.currentScene;
        expect(scene.name).toBe("c");
    });

    it("currentScene test readonly", function ()
    {
        var mc = new MovieClip();
        mc._$scenes = [new Scene("a", [], 1)];

        mc.currentScene = new Scene("b", [], 2);

        expect(mc.currentScene.name).toBe("a");
    });


    // enabled
    it("enabled test success case1", function ()
    {
        var mc = new MovieClip();
        expect(mc.enabled).toBe(true);
    });

    it("enabled test success case2", function ()
    {
        var mc = new MovieClip();
        mc.enabled = false;
        expect(mc.enabled).toBe(false);
    });

    it("enabled test valid case1", function ()
    {
        var mc = new MovieClip();
        mc.enabled = 0;
        expect(mc.enabled).toBe(true);

        mc.enabled = "test";
        expect(mc.enabled).toBe(true);
    });


    // isPlaying
    it("isPlaying test success", function ()
    {
        var mc = new MovieClip();
        expect(mc.isPlaying).toBe(false);
    });

    it("isPlaying test readonly", function ()
    {
        var mc = new MovieClip();
        mc.isPlaying = true;
        expect(mc.isPlaying).toBe(false);
    });


    // scenes
    it("scenes test success", function ()
    {
        var mc = new MovieClip();
        expect(mc.scenes.length).toBe(1);
    });

    it("scenes test readonly", function ()
    {
        var mc = new MovieClip();
        mc.scenes = [1,2,3];
        expect(mc.scenes.length).toBe(1);
    });


    // totalFrames
    it("totalFrames test success", function ()
    {
        var mc = new MovieClip();
        expect(mc.totalFrames).toBe(1);
    });

    it("totalFrames test readonly", function ()
    {
        var mc = new MovieClip();
        mc.totalFrames = 10;
        expect(mc.totalFrames).toBe(1);
    });


    // trackAsMenu
    it("trackAsMenu test success case1", function ()
    {
        var mc = new MovieClip();
        expect(mc.trackAsMenu).toBe(true);
    });

    it("trackAsMenu test success case2", function ()
    {
        var mc = new MovieClip();
        mc.trackAsMenu = false;
        expect(mc.trackAsMenu).toBe(false);
    });

    it("trackAsMenu test valid", function ()
    {
        var mc = new MovieClip();
        mc.trackAsMenu = 0;
        expect(mc.enabled).toBe(true);

        mc.trackAsMenu = "test";
        expect(mc.trackAsMenu).toBe(true);
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


    it("gotoAndPlay scene test success", function ()
    {
        var mc = new MovieClip();
        mc._$totalFrames = 4;

        var sceneA = new Scene("A", [], 2);
        sceneA._$offset = 0;

        var sceneB = new Scene("B", [], 2);
        sceneB._$offset = 2;

        mc._$scenes = [sceneA, sceneB];

        expect(mc.currentFrame).toBe(1);

        mc.gotoAndPlay(1, "B");
        expect(mc.currentFrame).toBe(3);
    });


    it("gotoAndPlay scene test valid case1", function ()
    {
        var mc = new MovieClip();
        mc._$totalFrames = 4;

        var sceneA = new Scene("A", [], 2);
        sceneA._$offset = 0;

        var sceneB = new Scene("B", [], 2);
        sceneB._$offset = 2;

        mc._$scenes = [sceneA, sceneB];

        expect(mc.currentFrame).toBe(1);

        mc.gotoAndPlay(1, "C");
        expect(mc.currentFrame).toBe(1);
    });


    it("gotoAndPlay scene test valid case2", function ()
    {
        var mc = new MovieClip();
        mc._$totalFrames = 4;

        var sceneA = new Scene("A", [], 2);
        sceneA._$offset = 0;

        var sceneB = new Scene("B", [], 2);
        sceneB._$offset = 2;

        mc._$scenes = [sceneA, sceneB];

        expect(mc.currentFrame).toBe(1);

        mc.gotoAndPlay(3, "A");
        expect(mc.currentFrame).toBe(3);
    });


    it("gotoAndPlay scene test valid case3", function ()
    {
        var mc = new MovieClip();
        mc._$totalFrames = 4;

        mc._$addFrameLabel(new FrameLabel("f1", 1));
        mc._$addFrameLabel(new FrameLabel("f2", 2));
        mc._$addFrameLabel(new FrameLabel("f3", 3));

        var sceneA = new Scene("A", [], 2);
        sceneA._$offset = 0;

        var sceneB = new Scene("B", [], 2);
        sceneB._$offset = 2;

        mc._$scenes = [sceneA, sceneB];

        expect(mc.currentFrame).toBe(1);

        mc.gotoAndPlay("f3", "B");
        expect(mc.currentFrame).toBe(3);

    });


});










describe("DisplayObject.js property test", function()
{

    // id
    it("id test success", function ()
    {
        var obj = new DisplayObject();
        obj.id = 1;
        expect(obj.id).toBe(1);
    });

    it("id test valid case1", function ()
    {
        var obj = new DisplayObject();
        obj.id = true;
        expect(obj.id).toBe(null);
    });

    it("id test valid case2", function ()
    {
        var obj = new DisplayObject();
        obj.id = "xyz";
        expect(obj.id).toBe(null);
    });

    // stage
    it("stage test success", function ()
    {
        var player = new Player();
        var obj = player.stage.addChild(new DisplayObject());
        expect(obj.stage.id).toBe(player.stage.id);
    });

    it("stage test valid case1", function ()
    {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj.stage  = new Stage();
        expect(obj.stage.id).toBe(player.stage.id);// reset
    });

    it("stage test valid case2", function ()
    {
        var obj = new DisplayObject();
        expect(obj.stage).toBe(null);
    });

    // parent
    it("parent test success case1", function () {
        var player = new Player();
        var obj    = player.root.addChild(new DisplayObject());
        expect(obj.parent.id).toBe(player.root.id);
        expect(obj.parent.toString()).toBe("[object MainTimeline]");
    });

    it("parent test success case2", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        expect(obj.parent.id).toBe(player.stage.id);
        expect(obj.parent.toString()).toBe("[object Stage]");
    });

    it("parent test valid", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());

        obj.parent = null;
        expect(obj.parent.toString()).toBe("[object Stage]");
    });


    // name
    it("name test success case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj.name   = "abc";
        expect(obj.name).toBe("abc");
    });

    it("name test success case2", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj.name   = 1;
        expect(obj.name).toBe("1");
    });


    // accessibilityProperties;
    it("accessibilityProperties test success", function () {
        var player = new Player();
        var obj    = player.root;
        expect(obj.accessibilityProperties instanceof AccessibilityProperties).toBe(true);
    });


    // alpha
    it("alpha test success case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj.alpha  = 0.5;
        expect(obj.alpha).toBe(0.5);
    });

    it("alpha test success case2", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj.alpha  = "0.2";
        expect(obj.alpha).toBe(0.2);
    });

    it("alpha test success case3", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj.alpha  = 2;
        expect(obj.alpha).toBe(1);
    });

    it("alpha test success case4", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj.alpha  = -1;
        expect(obj.alpha).toBe(-1);
    });

    it("alpha test success valid", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj.alpha  = "abc";
        expect(obj.alpha).toBe(0);
    });


    // _alpha
    it("_alpha test success case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj._alpha  = 50;
        expect(obj._alpha).toBe(50);
    });

    it("_alpha test success case2", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj._alpha  = "20";
        expect(obj._alpha).toBe(20);
    });

    it("_alpha test success case3", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj._alpha  = 200;
        expect(obj._alpha).toBe(100);
    });

    it("_alpha test success case4", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj._alpha  = -100;
        expect(obj._alpha).toBe(-100);
    });

    it("_alpha test success valid", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj._alpha  = "abc";
        expect(obj._alpha).toBe(0);
    });


    // rotation
    it("rotation test success case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        expect(obj.rotation).toBe(0);
    });

    it("rotation test success case2", function () {
        var player   = new Player();
        var obj      = player.stage.addChild(new DisplayObject());

        for (var i = 0; i <= 360; i++) {
            obj.rotation = i;
            if (i > 180) {
                expect(Math.round(obj.rotation)).toBe(i - 360);
            } else {
                expect(Math.round(obj.rotation)).toBe(i);
            }
        }
    });

    it("rotation test success case3", function () {
        var player   = new Player();
        var obj      = player.stage.addChild(new DisplayObject());

        for (var i = 0; i <= 360; i++) {
            var value = i * -1;

            obj.rotation = value;
            if (i > 180) {
                expect(Math.round(obj.rotation)).toBe(360 - i);
            } else {
                expect(Math.round(obj.rotation)).toBe(value);
            }
        }
    });

    it("rotation test valid case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj.rotation = "abc";
        expect(obj.rotation).toBe(0);
    });


    // _rotation
    it("_rotation test success case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        expect(obj._rotation).toBe(0);
    });

    it("_rotation test success case2", function () {
        var player   = new Player();
        var obj      = player.stage.addChild(new DisplayObject());

        for (var i = 0; i <= 360; i++) {
            obj._rotation = i;
            if (i > 180) {
                expect(Math.round(obj._rotation)).toBe(i - 360);
            } else {
                expect(Math.round(obj._rotation)).toBe(i);
            }
        }
    });

    it("_rotation test success case3", function () {
        var player   = new Player();
        var obj      = player.stage.addChild(new DisplayObject());

        for (var i = 0; i <= 360; i++) {
            var value = i * -1;

            obj._rotation = value;
            if (i > 180) {
                expect(Math.round(obj._rotation)).toBe(360 - i);
            } else {
                expect(Math.round(obj._rotation)).toBe(value);
            }
        }
    });

    it("_rotation test valid case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj._rotation = "abc";
        expect(obj._rotation).toBe(0);
    });


    // scaleX
    it("scaleX test success case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        expect(obj.scaleX).toBe(1);
    });

    it("scaleX test success case2", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj.scaleX = 15;
        expect(obj.scaleX).toBe(15);
    });

    it("scaleX test success case3", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj.scaleX = -11;
        expect(obj.scaleX).toBe(-11);
    });

    it("scaleX test valid case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj.scaleX = "abc";
        expect(obj.scaleX).toBe(1);
    });


    // _xscale
    it("_xscale test success case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        expect(obj._xscale).toBe(100);
    });

    it("_xscale test success case2", function () {
        var player  = new Player();
        var obj     = player.stage.addChild(new DisplayObject());
        obj._xscale = 15;
        expect(obj._xscale).toBe(15);
    });

    it("_xscale test success case3", function () {
        var player  = new Player();
        var obj     = player.stage.addChild(new DisplayObject());
        obj._xscale = -11;
        expect(obj._xscale).toBe(-11);
    });

    it("_xscale test success case4", function () {
        var player  = new Player();
        var obj     = player.stage.addChild(new DisplayObject());
        obj._xscale = 250;
        expect(obj._xscale).toBe(250);
    });

    it("_xscale test success case5", function () {
        var player  = new Player();
        var obj     = player.stage.addChild(new DisplayObject());
        obj._xscale = -360;
        expect(obj._xscale).toBe(-360);
    });

    it("_xscale test valid case1", function () {
        var player  = new Player();
        var obj     = player.stage.addChild(new DisplayObject());
        obj._xscale = "abc";
        expect(obj._xscale).toBe(100);
    });


    // scaleY
    it("scaleY test success case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        expect(obj.scaleY).toBe(1);
    });

    it("scaleY test success case2", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj.scaleY = 15;
        expect(obj.scaleY).toBe(15);
    });

    it("scaleY test success case3", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj.scaleY = -11;
        expect(obj.scaleY).toBe(-11);
    });

    it("scaleY test valid case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj.scaleY = "abc";
        expect(obj.scaleY).toBe(1);
    });


    // _yscale
    it("_yscale test success case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        expect(obj._yscale).toBe(100);
    });

    it("_yscale test success case2", function () {
        var player  = new Player();
        var obj     = player.stage.addChild(new DisplayObject());
        obj._yscale = 15;
        expect(obj._yscale).toBe(15);
    });

    it("_yscale test success case3", function () {
        var player  = new Player();
        var obj     = player.stage.addChild(new DisplayObject());
        obj._yscale = -11;
        expect(obj._yscale).toBe(-11);
    });

    it("_yscale test success case4", function () {
        var player  = new Player();
        var obj     = player.stage.addChild(new DisplayObject());
        obj._yscale = 250;
        expect(obj._yscale).toBe(250);
    });

    it("_yscale test success case5", function () {
        var player  = new Player();
        var obj     = player.stage.addChild(new DisplayObject());
        obj._yscale = -360;
        expect(obj._yscale).toBe(-360);
    });

    it("_yscale test valid case1", function () {
        var player  = new Player();
        var obj     = player.stage.addChild(new DisplayObject());
        obj._yscale = "abc";
        expect(obj._yscale).toBe(100);
    });


    // scaleX and scaleY
    it("scaleX and scaleY test success case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj.scaleX = 2;
        obj.scaleY = 5;
        expect(obj.scaleX).toBe(2);
        expect(obj.scaleY).toBe(5);
    });

    // _xscale and _yscale
    it("_xscale and _yscale test success case2", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        obj._xscale = 200;
        obj._yscale = 50;
        expect(obj._xscale).toBe(200);
        expect(obj._yscale).toBe(50);
    });









});
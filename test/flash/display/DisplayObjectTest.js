
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


    // height
    it("height test success case1", function () {

        var mc = new MovieClip();

        var shape1  = new Shape();
        shape1
            .graphics
            .beginFill("red")
            .drawRect(0, 0, 50, 40)
            .endFill();

        var shape2  = new Shape();
        shape2
            .graphics
            .beginFill("red")
            .drawRect(25, 25, 50, 60)
            .endFill();

        mc.addChild(shape1);
        mc.addChild(shape2);

        expect(mc.height).toBe(85);
    });

    it("height test success case2", function () {

        var mc = new MovieClip();

        var shape1  = new Shape();
        shape1
            .graphics
            .beginFill("red")
            .drawRect(0, 0, 50, 40)
            .endFill();

        var shape2  = new Shape();
        shape2
            .graphics
            .beginFill("red")
            .drawRect(25, 25, 50, 60)
            .endFill();

        mc.addChild(shape1);
        mc.addChild(shape2);

        mc.height = 100;

        expect(mc.height).toBe(100);
    });

    it("height test success case3", function () {

        var mc = new MovieClip();

        var shape1  = new Shape();
        shape1
            .graphics
            .beginFill("red")
            .drawRect(0, 0, 50, 40)
            .endFill();

        var shape2  = new Shape();
        shape2
            .graphics
            .beginFill("red")
            .drawRect(25, 25, 50, 60)
            .endFill();

        mc.addChild(shape1);
        mc.addChild(shape2);

        mc.height = "123";

        expect(mc.height).toBe(123);
    });

    it("height test valid case1", function () {

        var mc = new MovieClip();

        var shape1  = new Shape();
        shape1
            .graphics
            .beginFill("red")
            .drawRect(0, 0, 50, 40)
            .endFill();

        var shape2  = new Shape();
        shape2
            .graphics
            .beginFill("red")
            .drawRect(25, 25, 50, 60)
            .endFill();

        mc.addChild(shape1);
        mc.addChild(shape2);

        mc.height = "abc";

        expect(mc.height).toBe(85);
    });


    // _height
    it("_height test success case1", function () {

        var mc = new MovieClip();

        var shape1  = new Shape();
        shape1
            .graphics
            .beginFill("red")
            .drawRect(0, 0, 50, 40)
            .endFill();

        var shape2  = new Shape();
        shape2
            .graphics
            .beginFill("red")
            .drawRect(25, 25, 50, 60)
            .endFill();

        mc.addChild(shape1);
        mc.addChild(shape2);

        expect(mc._height).toBe(85);
    });

    it("_height test success case2", function () {

        var mc = new MovieClip();

        var shape1  = new Shape();
        shape1
            .graphics
            .beginFill("red")
            .drawRect(0, 0, 50, 40)
            .endFill();

        var shape2  = new Shape();
        shape2
            .graphics
            .beginFill("red")
            .drawRect(25, 25, 50, 60)
            .endFill();

        mc.addChild(shape1);
        mc.addChild(shape2);

        mc._height = 100;

        expect(mc._height).toBe(100);
    });

    it("_height test success case3", function () {

        var mc = new MovieClip();

        var shape1  = new Shape();
        shape1
            .graphics
            .beginFill("red")
            .drawRect(0, 0, 50, 40)
            .endFill();

        var shape2  = new Shape();
        shape2
            .graphics
            .beginFill("red")
            .drawRect(25, 25, 50, 60)
            .endFill();

        mc.addChild(shape1);
        mc.addChild(shape2);

        mc._height = "321";

        expect(mc._height).toBe(321);
    });

    it("_height test valid case1", function () {

        var mc = new MovieClip();

        var shape1  = new Shape();
        shape1
            .graphics
            .beginFill("red")
            .drawRect(0, 0, 50, 40)
            .endFill();

        var shape2  = new Shape();
        shape2
            .graphics
            .beginFill("red")
            .drawRect(25, 25, 50, 60)
            .endFill();

        mc.addChild(shape1);
        mc.addChild(shape2);

        mc._height = "abc";

        expect(mc._height).toBe(85);
    });


    // width
    it("width test success case1", function () {

        var mc = new MovieClip();

        var shape1  = new Shape();
        shape1
            .graphics
            .beginFill("red")
            .drawRect(0, 0, 50, 40)
            .endFill();

        var shape2  = new Shape();
        shape2
            .graphics
            .beginFill("red")
            .drawRect(25, 25, 50, 60)
            .endFill();

        mc.addChild(shape1);
        mc.addChild(shape2);

        expect(mc.width).toBe(75);
    });

    it("width test success case2", function () {

        var mc = new MovieClip();

        var shape1  = new Shape();
        shape1
            .graphics
            .beginFill("red")
            .drawRect(0, 0, 50, 40)
            .endFill();

        var shape2  = new Shape();
        shape2
            .graphics
            .beginFill("red")
            .drawRect(25, 25, 50, 60)
            .endFill();

        mc.addChild(shape1);
        mc.addChild(shape2);

        mc.width = 100;

        expect(mc.width).toBe(100);
    });

    it("width test success case3", function () {

        var mc = new MovieClip();

        var shape1  = new Shape();
        shape1
            .graphics
            .beginFill("red")
            .drawRect(0, 0, 50, 40)
            .endFill();

        var shape2  = new Shape();
        shape2
            .graphics
            .beginFill("red")
            .drawRect(25, 25, 50, 60)
            .endFill();

        mc.addChild(shape1);
        mc.addChild(shape2);

        mc.width = "312";

        expect(mc.width).toBe(312);
    });

    it("width test valid case1", function () {

        var mc = new MovieClip();

        var shape1  = new Shape();
        shape1
            .graphics
            .beginFill("red")
            .drawRect(0, 0, 50, 40)
            .endFill();

        var shape2  = new Shape();
        shape2
            .graphics
            .beginFill("red")
            .drawRect(25, 25, 50, 60)
            .endFill();

        mc.addChild(shape1);
        mc.addChild(shape2);

        mc.width = "abc";

        expect(mc.width).toBe(75);
    });


    // _width
    it("_width test success case1", function () {

        var mc = new MovieClip();

        var shape1  = new Shape();
        shape1
            .graphics
            .beginFill("red")
            .drawRect(0, 0, 50, 40)
            .endFill();

        var shape2  = new Shape();
        shape2
            .graphics
            .beginFill("red")
            .drawRect(25, 25, 50, 60)
            .endFill();

        mc.addChild(shape1);
        mc.addChild(shape2);

        expect(mc._width).toBe(75);
    });

    it("_width test success case2", function () {

        var mc = new MovieClip();

        var shape1  = new Shape();
        shape1
            .graphics
            .beginFill("red")
            .drawRect(0, 0, 50, 40)
            .endFill();

        var shape2  = new Shape();
        shape2
            .graphics
            .beginFill("red")
            .drawRect(25, 25, 50, 60)
            .endFill();

        mc.addChild(shape1);
        mc.addChild(shape2);

        mc._width = 100;

        expect(mc._width).toBe(100);
    });

    it("_width test success case3", function () {

        var mc = new MovieClip();

        var shape1  = new Shape();
        shape1
            .graphics
            .beginFill("red")
            .drawRect(0, 0, 50, 40)
            .endFill();

        var shape2  = new Shape();
        shape2
            .graphics
            .beginFill("red")
            .drawRect(25, 25, 50, 60)
            .endFill();

        mc.addChild(shape1);
        mc.addChild(shape2);

        mc._width = "456";

        expect(mc._width).toBe(456);
    });

    it("_width test valid case1", function () {

        var mc = new MovieClip();

        var shape1  = new Shape();
        shape1
            .graphics
            .beginFill("red")
            .drawRect(0, 0, 50, 40)
            .endFill();

        var shape2  = new Shape();
        shape2
            .graphics
            .beginFill("red")
            .drawRect(25, 25, 50, 60)
            .endFill();

        mc.addChild(shape1);
        mc.addChild(shape2);

        mc._width = "abc";

        expect(mc._width).toBe(75);
    });

    // x
    it("x test success case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        expect(obj.x).toBe(0);
    });

    it("x test success case2", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());

        obj.x = 100;
        expect(obj.x).toBe(100);
    });

    it("x test success case2", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());

        obj.x = "158";
        expect(obj.x).toBe(158);
    });

    it("x test valid case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());

        obj.x = "abc";
        expect(obj.x).toBe(0);
    });


    // _x
    it("_x test success case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        expect(obj._x).toBe(0);
    });

    it("_x test success case2", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());

        obj._x = 100;
        expect(obj._x).toBe(100);
    });

    it("_x test success case2", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());

        obj._x = "158";
        expect(obj._x).toBe(158);
    });

    it("_x test valid case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());

        obj._x = "abc";
        expect(obj._x).toBe(0);
    });


    // y
    it("y test success case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        expect(obj.y).toBe(0);
    });

    it("y test success case2", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());

        obj.y = 100;
        expect(obj.y).toBe(100);
    });

    it("y test success case2", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());

        obj.y = "158";
        expect(obj.y).toBe(158);
    });

    it("y test valid case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());

        obj.y = "abc";
        expect(obj.y).toBe(0);
    });


    // _y
    it("_y test success case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        expect(obj._y).toBe(0);
    });

    it("_y test success case2", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());

        obj._y = 100;
        expect(obj._y).toBe(100);
    });

    it("_y test success case2", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());

        obj._y = "158";
        expect(obj._y).toBe(158);
    });

    it("_y test valid case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());

        obj._y = "abc";
        expect(obj._y).toBe(0);
    });


    // visible
    it("visible test success case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        expect(obj.visible).toBe(true);
    });

    it("visible test success case2", function () {
        var player  = new Player();
        var obj     = player.stage.addChild(new DisplayObject());
        obj.visible = false;
        expect(obj.visible).toBe(false);
    });

    it("visible test valid case1", function () {
        var player  = new Player();
        var obj     = player.stage.addChild(new DisplayObject());
        obj.visible = "1";
        expect(obj.visible).toBe(true);
    });


    // _visible
    it("_visible test success case1", function () {
        var player = new Player();
        var obj    = player.stage.addChild(new DisplayObject());
        expect(obj._visible).toBe(true);
    });

    it("_visible test success case2", function () {
        var player  = new Player();
        var obj     = player.stage.addChild(new DisplayObject());
        obj._visible = false;
        expect(obj._visible).toBe(false);
    });

    it("_visible test valid case1", function () {
        var player  = new Player();
        var obj     = player.stage.addChild(new DisplayObject());
        obj._visible = "1";
        expect(obj._visible).toBe(true);
    });







});


describe("DisplayObject.js getBounds test", function()
{

    it("getBounds test success case1", function () {

        var player = new Player();

        var sprite = new Sprite();
        sprite.x = 100;
        sprite.y = 100;
        player.root.addChild(sprite);

        var shape = new Shape();
        shape.graphics.drawCircle(0, 0, 100);
        sprite.addChild(shape);

        var bounds1 = shape.getBounds(shape);
        var bounds2 = shape.getBounds(sprite);

        expect(bounds1.toString()).toBe("(x=-100, y=-100, w=200, h=200)");
        expect(bounds2.toString()).toBe("(x=0, y=0, w=200, h=200)");
    });

    it("line point zero test case 0", function ()
    {
        var shape = new Shape();

        shape
            .graphics
            .lineStyle(20, 0x000000, 1.0, true, LineScaleMode.NORMAL, CapsStyle.SQUARE, JointStyle.BEVEL, 10)
            .moveTo(0, 0)
            .lineTo(10, 0);

        expect(shape.getBounds(shape).toString()).toBe("(x=-10, y=-10, w=30, h=20)");

    });

    it("line point zero test case 45", function ()
    {
        var shape = new Shape();

        shape
            .graphics
            .lineStyle(20, 0x000000, 1.0, true, LineScaleMode.NORMAL, CapsStyle.SQUARE, JointStyle.BEVEL, 10)
            .moveTo(0, 0)
            .lineTo(10, 10);

        expect(shape.getBounds(shape).toString()).toBe("(x=-10, y=-10, w=30, h=30)");

    });

    it("line point zero test case 90", function ()
    {
        var shape = new Shape();

        shape
            .graphics
            .lineStyle(20, 0x000000, 1.0, true, LineScaleMode.NORMAL, CapsStyle.SQUARE, JointStyle.BEVEL, 10)
            .moveTo(0, 0)
            .lineTo(0, 10);

        expect(shape.getBounds(shape).toString()).toBe("(x=-10, y=-10, w=20, h=30)");

    });

    it("line point zero test case 135", function ()
    {
        var shape = new Shape();

        shape
            .graphics
            .lineStyle(20, 0x000000, 1.0, true, LineScaleMode.NORMAL, CapsStyle.SQUARE, JointStyle.BEVEL, 10)
            .moveTo(0, 0)
            .lineTo(-10, 10);

        expect(shape.getBounds(shape).toString()).toBe("(x=-20, y=-10, w=30, h=30)");

    });

    it("line point zero test case 180", function ()
    {
        var shape = new Shape();

        shape
            .graphics
            .lineStyle(20, 0x000000, 1.0, true, LineScaleMode.NORMAL, CapsStyle.SQUARE, JointStyle.BEVEL, 10)
            .moveTo(0, 0)
            .lineTo(-10, 0);

        expect(shape.getBounds(shape).toString()).toBe("(x=-20, y=-10, w=30, h=20)");

    });

    it("line point zero test case -45", function ()
    {
        var shape = new Shape();

        shape
            .graphics
            .lineStyle(20, 0x000000, 1.0, true, LineScaleMode.NORMAL, CapsStyle.SQUARE, JointStyle.BEVEL, 10)
            .moveTo(0, 0)
            .lineTo(10, -10);

        expect(shape.getBounds(shape).toString()).toBe("(x=-10, y=-20, w=30, h=30)");

    });

    it("line point zero test case -90", function ()
    {
        var shape = new Shape();

        shape
            .graphics
            .lineStyle(20, 0x000000, 1.0, true, LineScaleMode.NORMAL, CapsStyle.SQUARE, JointStyle.BEVEL, 10)
            .moveTo(0, 0)
            .lineTo(0, -10);

        expect(shape.getBounds(shape).toString()).toBe("(x=-10, y=-20, w=20, h=30)");

    });

    it("line point zero test case -135", function ()
    {
        var shape = new Shape();

        shape
            .graphics
            .lineStyle(20, 0x000000, 1.0, true, LineScaleMode.NORMAL, CapsStyle.SQUARE, JointStyle.BEVEL, 10)
            .moveTo(0, 0)
            .lineTo(-10, -10);

        expect(shape.getBounds(shape).toString()).toBe("(x=-20, y=-20, w=30, h=30)");

    });

    it("line MITER test case1", function ()
    {
        var shape = new Shape();

        shape
            .graphics
            .lineStyle(20, 0x000000, 1.0, true, LineScaleMode.NORMAL, CapsStyle.SQUARE, JointStyle.MITER, 10)
            .moveTo(0, 0)
            .lineTo(0, 100)
            .lineTo(100, 100)
            .lineTo(0, 0);


        var bounds = shape.getBounds(shape);

        expect(bounds.x|0).toBe(-10);
        expect(bounds.y|0).toBe(-24);
        expect(bounds.width|0).toBe(134);
        expect(bounds.height|0).toBe(134);

    });

    it("line MITER test case2", function ()
    {
        var shape = new Shape();

        shape
            .graphics
            .lineStyle(20, 0x000000, 1.0, true, LineScaleMode.NORMAL, CapsStyle.SQUARE, JointStyle.MITER, 10)
            .moveTo(0, 0)
            .lineTo(0, 100)
            .lineTo(100, 100)
            .lineTo(0, 0);

        shape.x = 60;
        shape.y = 60;

        var bounds = shape.getBounds(shape);

        expect(bounds.x|0).toBe(-10);
        expect(bounds.y|0).toBe(-24);
        expect(bounds.width|0).toBe(134);
        expect(bounds.height|0).toBe(134);

    });

    it("line MITER test case3", function ()
    {
        var shape = new Shape();

        shape
            .graphics
            .lineStyle(20, 0x000000, 1.0, true, LineScaleMode.NORMAL, CapsStyle.SQUARE, JointStyle.MITER, 10)
            .moveTo(0, 0)
            .lineTo(0, 100)
            .lineTo(100, 100)
            .lineTo(0, 0);

        shape.x = 60;
        shape.y = 60;

        var bounds = shape.getBounds(new Shape());

        expect(bounds.x|0).toBe(50);
        expect(bounds.y|0).toBe(35);
        expect(bounds.width|0).toBe(134);
        expect(bounds.height|0).toBe(134);

    });



});

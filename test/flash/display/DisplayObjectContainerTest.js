

describe("DisplayObjectContainer.js property test", function()
{
    // mouseChildren
    it("mouseChildren test success", function()
    {
        var doc = new DisplayObjectContainer();
        doc.mouseChildren = false;
        expect(doc.mouseChildren).toBe(false);
    });

    it("mouseChildren test valid case1", function()
    {
        var doc = new DisplayObjectContainer();
        doc.mouseChildren = 0;
        expect(doc.mouseChildren).toBe(true);
    });

    it("mouseChildren test valid case2", function()
    {
        var doc = new DisplayObjectContainer();
        doc.mouseChildren = "abc";
        expect(doc.mouseChildren).toBe(true);
    });


    // numChildren
    it("numChildren test success", function()
    {
        var doc = new DisplayObjectContainer();
        expect(doc.numChildren).toBe(0);
    });

    it("numChildren test valid", function()
    {
        var doc = new DisplayObjectContainer();
        doc.numChildren = 10;
        expect(doc.numChildren).toBe(0);
    });


    // tabChildren
    it("tabChildren test success", function()
    {
        var doc = new DisplayObjectContainer();
        doc.tabChildren = false;
        expect(doc.tabChildren).toBe(false);
    });

    it("tabChildren test valid case1", function()
    {
        var doc = new DisplayObjectContainer();
        doc.tabChildren = 0;
        expect(doc.tabChildren).toBe(true);
    });

    it("tabChildren test valid case2", function()
    {
        var doc = new DisplayObjectContainer();
        doc.tabChildren = "abc";
        expect(doc.tabChildren).toBe(true);
    });


    // textSnapshot
    it("textSnapshot test success", function()
    {
        var doc = new DisplayObjectContainer();
        expect(doc.textSnapshot instanceof TextSnapshot).toBe(true);
    });

    it("textSnapshot test valid", function()
    {
        var doc = new DisplayObjectContainer();
        doc.textSnapshot = 10;
        expect(doc.textSnapshot instanceof TextSnapshot).toBe(true);
    });

});


describe("DisplayObjectContainer.js addChild test", function()
{
    it("addChild error case", function()
    {
        var doc = new DisplayObjectContainer();

        var error = false;
        try {
            doc.addChild({});
        } catch (e) {
            error = true;
            expect(e.message).toBe("this child is not DisplayObject.");
        }

        expect(error).toBe(true);
    });

    it("addChild success case", function()
    {
        var player = new Player();
        var a = player.stage.addChild(new DisplayObject());
        var b = player.stage.addChild(new Loader());

        expect(player.stage.numChildren).toBe(3);
        expect(a.id).toBe(1);
        expect(b.id).toBe(2);
    });

});

describe("DisplayObjectContainer.js addChildAt test", function()
{
    it("addChildAt error case", function()
    {
        var error = false;
        try {
            var player = new Player();
            player.stage.addChildAt(new DisplayObject(), 10);
        } catch (e) {
            error = true;
            expect(e.message).toBe("index is out of range.");
        }
        expect(error).toBe(true);
    });

    it("addChildAt success case", function()
    {
        var player = new Player();
        var a = player.stage.addChildAt(new DisplayObject(), 0);
        var b = player.stage.addChildAt(new Loader(), 1);

        expect(player.stage.numChildren).toBe(3);
        expect(a.id).toBe(1);
        expect(b.id).toBe(2);
    });

});


describe("DisplayObjectContainer.js contains test", function()
{
    it("contains success case", function()
    {
        var player = new Player();
        var a = player.stage.addChild(new DisplayObject());
        var b = new DisplayObject();
        var c = player.stage.addChild(new DisplayObject());
        var d = new DisplayObject();

        expect(player.stage.contains(a)).toBe(true);
        expect(player.stage.contains(b)).toBe(false);
        expect(player.stage.contains(c)).toBe(true);
        expect(player.stage.contains(d)).toBe(false);
    });

    it("contains error case", function()
    {
        var doc   = new DisplayObjectContainer();
        var error = false;
        try {
            doc.contains({});
        } catch (e) {
            error = true;
            expect(e.message).toBe("this child is not DisplayObject.");
        }
        expect(error).toBe(true);
    });

});


describe("DisplayObjectContainer.js getChildAt test", function()
{
    it("getChildAt success case", function()
    {
        var player = new Player();
        var a      = player.stage.addChild(new DisplayObject());
        var child  = player.stage.getChildAt(1);
        expect(child.id === a.id).toBe(true);
    });

    it("getChildAt error case", function()
    {
        var doc   = new DisplayObjectContainer();
        var error = false;
        try {
            doc.getChildAt(10);
        } catch (e) {
            error = true;
            expect(e.message).toBe("index is out of range.");
        }
        expect(error).toBe(true);
    });

    it("getChildAt error case", function()
    {
        var doc   = new DisplayObjectContainer();
        var error = false;
        try {
            doc.getChildAt(new DisplayObject());
        } catch (e) {
            error = true;
            expect(e.message).toBe("child not found.");
        }
        expect(error).toBe(true);
    });

});


describe("DisplayObjectContainer.js getChildByName test", function()
{
    it("getChildByName success case1", function()
    {
        var player = new Player();
        var child  = new DisplayObject();
        child.name = "child1";

        player.stage.addChild(child);
        player.stage.addChild(new DisplayObject());

        var instance1 = player.stage.getChildByName("child1");
        var instance2 = player.stage.getChildByName("child2");

        expect(instance1.name).toBe("child1");
        expect(instance2).toBe(null);
    });

    it("getChildByName success case2", function()
    {
        var player = new Player();
        var child  = new DisplayObject();
        child.name = 1;

        player.stage.addChild(child);
        player.stage.addChild(new DisplayObject());

        var instance1 = player.stage.getChildByName(1);
        var instance2 = player.stage.getChildByName(2);

        expect(instance1.name).toBe("1");
        expect(instance2).toBe(null);
    });
});


describe("DisplayObjectContainer.js getChildIndex test", function()
{
    it("getChildIndex success", function()
    {
        var player = new Player();
        var child  = player.stage.addChild(new DisplayObject());

        player.stage.addChild(new DisplayObject());

        var index = player.stage.getChildIndex(child);

        expect(index).toBe(1);
    });

    it("getChildIndex success case2", function()
    {
        var player = new Player();
        var child  = new DisplayObject();
        child.name = 1;

        player.stage.addChild(child);
        player.stage.addChild(new DisplayObject());

        var instance1 = player.stage.getChildByName(1);
        var instance2 = player.stage.getChildByName(2);

        expect(instance1.name).toBe("1");
        expect(instance2).toBe(null);
    });

    it("getChildIndex error case1", function()
    {
        var player = new Player();
        player.stage.addChild(new DisplayObject());
        player.stage.addChild(new DisplayObject());

        var error = false;
        try {
            player.stage.getChildIndex({});
        } catch (e) {
            error = true;
            expect(e.message).toBe("this child is not DisplayObject.");
        }

        expect(error).toBe(true);
    });

});


describe("DisplayObjectContainer.js removeChild test", function()
{
    it("removeChild success", function()
    {
        var player = new Player();
        var child1 = player.stage.addChild(new DisplayObject());
        var child2 = player.stage.addChild(new DisplayObject());

        player.stage.removeChild(child1);

        var index = player.stage.getChildIndex(child2);

        expect(index).toBe(1);
    });

    it("removeChild error case1", function()
    {
        var player = new Player();
        player.stage.addChild(new DisplayObject());
        player.stage.addChild(new DisplayObject());

        var error = false;
        try {
            var child  = new DisplayObject();
            player.stage.removeChild(child);
        } catch (e) {
            error = true;
            expect(e.message).toBe("child not found.");
        }

        expect(error).toBe(true);
    });

    it("removeChild error case2", function()
    {
        var player = new Player();
        player.stage.addChild(new DisplayObject());
        player.stage.addChild(new DisplayObject());

        var error = false;
        try {
            player.stage.removeChild({});
        } catch (e) {
            error = true;
            expect(e.message).toBe("this child is not DisplayObject.");
        }

        expect(error).toBe(true);
    });


});


describe("Stage.js property test", function()
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


describe("Stage.js addChild test", function()
{
    it("addChild error case", function()
    {
        var doc = new DisplayObjectContainer();
        try {
            doc.addChild({});
        } catch (e) {
            expect(e.message).toBe("this child is not DisplayObject.");
        }
    });

    it("addChild success case", function()
    {
        var player = new Player();
        var a = player.stage.addChild(new DisplayObject());
        var b = player.stage.addChild(new Loader());
        expect(player.stage.numChildren).toBe(2);
        expect(a.id).toBe(1);
        expect(b.id).toBe(2);
    });


});
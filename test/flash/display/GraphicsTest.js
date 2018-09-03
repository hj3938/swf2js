
describe("Graphics.js toString test", function()
{

    it("toString test", function ()
    {
        var g = new Graphics();
        expect(g.toString()).toBe("[object Graphics]");
    });

});


describe("Graphics.js beginFill test", function()
{

    it("beginFill test case1", function ()
    {
        var g = new Graphics();
        g.beginFill(0x990000, 1);

        // beginPath
        expect(g._$fills[0][0]).toBe(Graphics.BEGIN_PATH);

        // fill style
        expect(g._$fills[1][0]).toBe(Graphics.FILL_STYLE);
        expect(g._$fills[1][1]).toBe(153);
        expect(g._$fills[1][2]).toBe(0);
        expect(g._$fills[1][3]).toBe(0);
        expect(g._$fills[1][4]).toBe(1);
    });

    it("beginFill test case2", function ()
    {
        var g = new Graphics();
        g.beginFill("red", 0.2);

        // beginPath
        expect(g._$fills[0][0]).toBe(Graphics.BEGIN_PATH);

        // fill style
        expect(g._$fills[1][0]).toBe(Graphics.FILL_STYLE);
        expect(g._$fills[1][1]).toBe(255);
        expect(g._$fills[1][2]).toBe(0);
        expect(g._$fills[1][3]).toBe(0);
        expect(g._$fills[1][4]).toBe(0.2);
    });

    it("beginFill test valid case1", function ()
    {
        var g = new Graphics();
        g.beginFill("red", 10);

        // beginPath
        expect(g._$fills[0][0]).toBe(Graphics.BEGIN_PATH);

        // fill style
        expect(g._$fills[1][0]).toBe(Graphics.FILL_STYLE);
        expect(g._$fills[1][1]).toBe(255);
        expect(g._$fills[1][2]).toBe(0);
        expect(g._$fills[1][3]).toBe(0);
        expect(g._$fills[1][4]).toBe(1);
    });

    it("beginFill test valid case2", function ()
    {
        var g = new Graphics();
        g
            .beginFill("red", 10)
            .beginFill("green", 10);

        // beginPath
        expect(g._$fills[0][0]).toBe(Graphics.BEGIN_PATH);

        // fill style
        expect(g._$fills[1][0]).toBe(Graphics.FILL_STYLE);
        expect(g._$fills[1][1]).toBe(255);
        expect(g._$fills[1][2]).toBe(0);
        expect(g._$fills[1][3]).toBe(0);
        expect(g._$fills[1][4]).toBe(1);

        expect(g._$fills[2][0]).toBe(Graphics.END_FILL);

        // beginPath
        expect(g._$fills[3][0]).toBe(Graphics.BEGIN_PATH);

        // fill style
        expect(g._$fills[4][0]).toBe(Graphics.FILL_STYLE);
        expect(g._$fills[4][1]).toBe(0);
        expect(g._$fills[4][2]).toBe(128);
        expect(g._$fills[4][3]).toBe(0);
        expect(g._$fills[4][4]).toBe(1);
    });

});

describe("Graphics.js moveTo test", function()
{

    it("moveTo test success", function ()
    {
        var g = new Graphics();
        g
            .beginFill(0x990000, 1)
            .moveTo(100, 60);

        // beginPath
        expect(g._$fills[2][0]).toBe(Graphics.MOVE_TO);
        expect(g._$fills[2][1]).toBe(2000);
        expect(g._$fills[2][2]).toBe(1200);
    });

    it("moveTo test valid case1", function ()
    {
        var g = new Graphics();
        g
            .beginFill(0x990000, 1)
            .moveTo("af", 60);

        // beginPath
        expect(g._$fills[2][0]).toBe(Graphics.MOVE_TO);
        expect(g._$fills[2][1]).toBe(0);
        expect(g._$fills[2][2]).toBe(1200);
    });

    it("moveTo test valid case1", function ()
    {
        var g = new Graphics();
        g
            .beginFill(0x990000, 1)
            .moveTo("100", "af");

        // beginPath
        expect(g._$fills[2][0]).toBe(Graphics.MOVE_TO);
        expect(g._$fills[2][1]).toBe(2000);
        expect(g._$fills[2][2]).toBe(0);
    });

});


describe("Graphics.js lineTo test", function()
{

    it("lineTo test success", function ()
    {
        var g = new Graphics();
        g
            .beginFill(0x990000, 1)
            .lineTo(100, 60);

        // beginPath
        expect(g._$fills[2][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[2][1]).toBe(2000);
        expect(g._$fills[2][2]).toBe(1200);
    });

    it("lineTo test valid case1", function ()
    {
        var g = new Graphics();
        g
            .beginFill(0x990000, 1)
            .lineTo("af", 60);

        // beginPath
        expect(g._$fills[2][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[2][1]).toBe(0);
        expect(g._$fills[2][2]).toBe(1200);
    });

    it("lineTo test valid case1", function ()
    {
        var g = new Graphics();
        g
            .beginFill(0x990000, 1)
            .lineTo("100", "af");

        // beginPath
        expect(g._$fills[2][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[2][1]).toBe(2000);
        expect(g._$fills[2][2]).toBe(0);
    });

});


describe("Graphics.js endFill test", function()
{

    it("endFill test success case1", function ()
    {
        var g = new Graphics();
        g
            .beginFill(0x990000, 1)
            .endFill();

        // beginPath
        expect(g._$fills[2][0]).toBe(Graphics.END_FILL);
    });

    it("endFill test success case2", function ()
    {
        var g = new Graphics();
        g
            .endFill();

        // beginPath
        expect(g._$fills.length).toBe(0);
    });

});


describe("Graphics.js drawRect test", function()
{

    it("drawRect test success case1", function ()
    {
        var g = new Graphics();
        g
            .beginFill(0xff0000, 1)
            .drawRect(0, 1, 200, 300)
            .endFill();

        // moveTo
        expect(g._$fills[2][0]).toBe(Graphics.MOVE_TO);
        expect(g._$fills[2][1]).toBe(0);
        expect(g._$fills[2][2]).toBe(20);

        // lineTo
        expect(g._$fills[3][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[3][1]).toBe(4000);
        expect(g._$fills[3][2]).toBe(20);

        // lineTo
        expect(g._$fills[4][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[4][1]).toBe(4000);
        expect(g._$fills[4][2]).toBe(6020);

        // lineTo
        expect(g._$fills[5][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[5][1]).toBe(0);
        expect(g._$fills[5][2]).toBe(6020);

        // lineTo
        expect(g._$fills[6][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[6][1]).toBe(0);
        expect(g._$fills[6][2]).toBe(20);
    });


    it("drawRect test valid", function ()
    {
        var g = new Graphics();
        g
            .beginFill(0xff0000, 1)
            .drawRect("a", "b", 200, 300)
            .endFill();

        // moveTo
        expect(g._$fills[2][0]).toBe(Graphics.MOVE_TO);
        expect(g._$fills[2][1]).toBe(0);
        expect(g._$fills[2][2]).toBe(0);

        // lineTo
        expect(g._$fills[3][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[3][1]).toBe(4000);
        expect(g._$fills[3][2]).toBe(0);

        // lineTo
        expect(g._$fills[4][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[4][1]).toBe(4000);
        expect(g._$fills[4][2]).toBe(6000);

        // lineTo
        expect(g._$fills[5][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[5][1]).toBe(0);
        expect(g._$fills[5][2]).toBe(6000);

        // lineTo
        expect(g._$fills[6][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[6][1]).toBe(0);
        expect(g._$fills[6][2]).toBe(0);
    });

});




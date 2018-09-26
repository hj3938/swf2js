
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

        g
            .beginFill(0x990000, 1);

        // beginPath
        expect(g._$fills[0][0]).toBe(Graphics.BEGIN_PATH);

        // fill style
        expect(g._$fillStyles[0][0]).toBe(Graphics.FILL_STYLE);
        expect(g._$fillStyles[0][1]).toBe(153);
        expect(g._$fillStyles[0][2]).toBe(0);
        expect(g._$fillStyles[0][3]).toBe(0);
        expect(g._$fillStyles[0][4]).toBe(1);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);

        // build
        g._$buildCommand();

        // check
        expect(g._$fillStyles.length).toBe(0);
        expect(g._$fills.length).toBe(0);

    });


    it("beginFill test case2", function ()
    {
        var g = new Graphics();
        g.beginFill("red", 0.2);

        // beginPath
        expect(g._$fills[0][0]).toBe(Graphics.BEGIN_PATH);

        // fill style
        expect(g._$fillStyles[0][0]).toBe(Graphics.FILL_STYLE);
        expect(g._$fillStyles[0][1]).toBe(255);
        expect(g._$fillStyles[0][2]).toBe(0);
        expect(g._$fillStyles[0][3]).toBe(0);
        expect(g._$fillStyles[0][4]).toBe(0.2);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);

        // build
        g._$buildCommand();

        // check
        expect(g._$fillStyles.length).toBe(0);
        expect(g._$fills.length).toBe(0);

    });


    it("beginFill test valid case1", function ()
    {
        var g = new Graphics();
        g.beginFill("red", 10);

        // beginPath
        expect(g._$fills[0][0]).toBe(Graphics.BEGIN_PATH);

        // fill style
        expect(g._$fillStyles[0][0]).toBe(Graphics.FILL_STYLE);
        expect(g._$fillStyles[0][1]).toBe(255);
        expect(g._$fillStyles[0][2]).toBe(0);
        expect(g._$fillStyles[0][3]).toBe(0);
        expect(g._$fillStyles[0][4]).toBe(1);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);

        // build
        g._$buildCommand();

        // check
        expect(g._$fillStyles.length).toBe(0);
        expect(g._$fills.length).toBe(0);

    });


    it("beginFill test valid case2", function ()
    {
        var g = new Graphics();
        g
            .beginFill("red", 10)
            .beginFill("green", 10);

        // beginPath
        expect(g._$fills[0][0]).toBe(Graphics.BEGIN_PATH);
        expect(g._$fills[1][0]).toBe(Graphics.FILL_STYLE);
        expect(g._$fills[2][0]).toBe(Graphics.END_FILL);
        expect(g._$fills[3][0]).toBe(Graphics.BEGIN_PATH);

        // fill style
        expect(g._$fillStyles.length).toBe(1);


        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);

        // build
        g._$buildCommand();

        // check
        expect(g._$fillStyles.length).toBe(0);
        expect(g._$fills.length).toBe(0);
        expect(g._$getBounds()).toBe(null);

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
        expect(g._$fills[1][0]).toBe(Graphics.MOVE_TO);
        expect(g._$fills[1][1]).toBe(100*20);
        expect(g._$fills[1][2]).toBe(60*20);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);
    });

    it("moveTo test valid case1", function ()
    {
        var g = new Graphics();
        g
            .beginFill(0x990000, 1)
            .moveTo("100", "60");

        // beginPath
        expect(g._$fills[1][0]).toBe(Graphics.MOVE_TO);
        expect(g._$fills[1][1]).toBe(100*20);
        expect(g._$fills[1][2]).toBe(60*20);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);
    });

    it("moveTo test valid case1", function ()
    {
        var g = new Graphics();
        g
            .beginFill(0x990000, 1)
            .moveTo("a", "b");

        // beginPath
        expect(g._$fills[1][0]).toBe(Graphics.MOVE_TO);
        expect(g._$fills[1][1]).toBe(0);
        expect(g._$fills[1][2]).toBe(0);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);
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
        expect(g._$fills[1][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[1][1]).toBe(100*20);
        expect(g._$fills[1][2]).toBe(60*20);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);
    });

    it("lineTo test valid case1", function ()
    {
        var g = new Graphics();
        g
            .beginFill(0x990000, 1)
            .lineTo("100", "60");

        // beginPath
        expect(g._$fills[1][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[1][1]).toBe(100*20);
        expect(g._$fills[1][2]).toBe(60*20);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);
    });

    it("lineTo test valid case1", function ()
    {
        var g = new Graphics();
        g
            .beginFill(0x990000, 1)
            .lineTo("a", "b");

        // beginPath
        expect(g._$fills[1][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[1][1]).toBe(0);
        expect(g._$fills[1][2]).toBe(0);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);
    });

});


describe("Graphics.js endFill test", function()
{

    it("endFill test success case1", function ()
    {
        var g = new Graphics();
        g
            .beginFill(0xff0000, 1)
            .endFill();

        // fill style
        expect(g._$fills[1][0]).toBe(Graphics.FILL_STYLE);
        expect(g._$fills[1][1]).toBe(255);
        expect(g._$fills[1][2]).toBe(0);
        expect(g._$fills[1][3]).toBe(0);
        expect(g._$fills[1][4]).toBe(1);

        // end fill
        expect(g._$fills[2][0]).toBe(Graphics.END_FILL);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);
    });

    it("endFill test success case2", function ()
    {
        var g = new Graphics();
        g
            .endFill();

        expect(g._$fills.length).toBe(0);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);
    });

    it("drawRect test valid case3", function ()
    {
        var g = new Graphics();
        g
            .beginFill(0xff0000, 1)
            .drawRect(10, 10, 100, 100)
            .endFill()
            .beginFill(0x00ff00, 1)
            .drawRect(120, 120, 100, 100)
            .endFill();

        // fill style
        expect(g._$fills[6][0]).toBe(Graphics.FILL_STYLE);
        expect(g._$fills[6][1]).toBe(255);
        expect(g._$fills[6][2]).toBe(0);
        expect(g._$fills[6][3]).toBe(0);
        expect(g._$fills[6][4]).toBe(1);

        // end fill
        expect(g._$fills[7][0]).toBe(Graphics.END_FILL);

        // fill style
        expect(g._$fills[14][0]).toBe(Graphics.FILL_STYLE);
        expect(g._$fills[14][1]).toBe(0);
        expect(g._$fills[14][2]).toBe(255);
        expect(g._$fills[14][3]).toBe(0);
        expect(g._$fills[14][4]).toBe(1);

        // end fill
        expect(g._$fills[15][0]).toBe(Graphics.END_FILL);
    });

});


describe("Graphics.js drawRect test", function()
{

    it("drawRect test success", function ()
    {
        var g = new Graphics();
        g
            .beginFill(0xff0000, 1)
            .drawRect(0, 1, 200, 300)
            .endFill();

        // moveTo
        expect(g._$fills[1][0]).toBe(Graphics.MOVE_TO);
        expect(g._$fills[1][1]).toBe(0);
        expect(g._$fills[1][2]).toBe(20);

        // lineTo
        expect(g._$fills[2][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[2][1]).toBe(200*20);
        expect(g._$fills[2][2]).toBe(20);

        // lineTo
        expect(g._$fills[3][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[3][1]).toBe(200*20);
        expect(g._$fills[3][2]).toBe(301*20);

        // lineTo
        expect(g._$fills[4][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[4][1]).toBe(0);
        expect(g._$fills[4][2]).toBe(301*20);

        // lineTo
        expect(g._$fills[5][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[5][1]).toBe(0);
        expect(g._$fills[5][2]).toBe(20);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);
    });


    it("drawRect test valid case1", function ()
    {
        var g = new Graphics();
        g
            .beginFill(0xff0000, 1)
            .drawRect("0", "1", "200", "300")
            .endFill();

        // moveTo
        expect(g._$fills[1][0]).toBe(Graphics.MOVE_TO);
        expect(g._$fills[1][1]).toBe(0);
        expect(g._$fills[1][2]).toBe(20);

        // lineTo
        expect(g._$fills[2][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[2][1]).toBe(200*20);
        expect(g._$fills[2][2]).toBe(20);

        // lineTo
        expect(g._$fills[3][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[3][1]).toBe(200*20);
        expect(g._$fills[3][2]).toBe(301*20);

        // lineTo
        expect(g._$fills[4][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[4][1]).toBe(0);
        expect(g._$fills[4][2]).toBe(301*20);

        // lineTo
        expect(g._$fills[5][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[5][1]).toBe(0);
        expect(g._$fills[5][2]).toBe(20);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);
    });


    it("drawRect test valid case2", function ()
    {
        var g = new Graphics();
        g
            .beginFill(0xff0000, 1)
            .drawRect("a", "b", "c", "d")
            .endFill();

        // moveTo
        expect(g._$fills[1][0]).toBe(Graphics.MOVE_TO);
        expect(g._$fills[1][1]).toBe(0);
        expect(g._$fills[1][2]).toBe(0);

        // lineTo
        expect(g._$fills[2][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[2][1]).toBe(0);
        expect(g._$fills[2][2]).toBe(0);

        // lineTo
        expect(g._$fills[3][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[3][1]).toBe(0);
        expect(g._$fills[3][2]).toBe(0);

        // lineTo
        expect(g._$fills[4][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[4][1]).toBe(0);
        expect(g._$fills[4][2]).toBe(0);

        // lineTo
        expect(g._$fills[5][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[5][1]).toBe(0);
        expect(g._$fills[5][2]).toBe(0);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);
    });

});


describe("Graphics.js clear test", function()
{

    it("clear test success", function ()
    {
        var g = new Graphics();
        g
            .beginFill(0xff0000, 1)
            .drawRect(0, 1, 200, 300)
            .endFill();

        g.clear();

        expect(g._$fills.length).toBe(0);
        expect(g._$lines.length).toBe(0);
        expect(g._$fillBounds).toBe(null);
        expect(g._$lineBounds).toBe(null);
        expect(g._$doFill).toBe(false);
        expect(g._$doLine).toBe(false);
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);

    });

});


describe("Graphics.js copyFrom test", function()
{

    it("copyFrom test success", function ()
    {
        var g = new Graphics();
        g
            .beginFill(0xff0000, 1)
            .drawRect(0, 1, 200, 300)
            .endFill();

        var copy = new Graphics();
        copy.copyFrom(g);
        g.clear();

        // moveTo
        expect(copy._$fills[1][0]).toBe(Graphics.MOVE_TO);
        expect(copy._$fills[1][1]).toBe(0);
        expect(copy._$fills[1][2]).toBe(20);

        // lineTo
        expect(copy._$fills[2][0]).toBe(Graphics.LINE_TO);
        expect(copy._$fills[2][1]).toBe(200*20);
        expect(copy._$fills[2][2]).toBe(20);

        // lineTo
        expect(copy._$fills[3][0]).toBe(Graphics.LINE_TO);
        expect(copy._$fills[3][1]).toBe(200*20);
        expect(copy._$fills[3][2]).toBe(301*20);

        // lineTo
        expect(copy._$fills[4][0]).toBe(Graphics.LINE_TO);
        expect(copy._$fills[4][1]).toBe(0);
        expect(copy._$fills[4][2]).toBe(301*20);

        // lineTo
        expect(copy._$fills[5][0]).toBe(Graphics.LINE_TO);
        expect(copy._$fills[5][1]).toBe(0);
        expect(copy._$fills[5][2]).toBe(20);
    });

    it("copyFrom test valid", function ()
    {
        var g = new Graphics();
        g.copyFrom({});

        expect(g._$fills.length).toBe(0);
        expect(g._$lines.length).toBe(0);
        expect(g._$bounds).toBe(null);
        expect(g._$doFill).toBe(false);
        expect(g._$doLine).toBe(false);
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);
    });

});


describe("Graphics.js cubicCurveTo test", function()
{

    it("cubicCurveTo test success", function ()
    {
        var g = new Graphics();

        g
            .beginFill(0x0000FF, 1)
            .cubicCurveTo(275, 0, 300, 25, 300, 50)
            .endFill();

        expect(g._$fills[1][0]).toBe(Graphics.CUBIC);
        expect(g._$fills[1][1]).toBe(275*20);
        expect(g._$fills[1][2]).toBe(0);
        expect(g._$fills[1][3]).toBe(300*20);
        expect(g._$fills[1][4]).toBe(25*20);
        expect(g._$fills[1][5]).toBe(300*20);
        expect(g._$fills[1][6]).toBe(50*20);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);

    });

    it("cubicCurveTo test valid case1", function ()
    {
        var g = new Graphics();

        g
            .beginFill(0x0000FF, 1)
            .cubicCurveTo("275", "0", "300", "25", "300", "50")
            .endFill();

        expect(g._$fills[1][0]).toBe(Graphics.CUBIC);
        expect(g._$fills[1][1]).toBe(275*20);
        expect(g._$fills[1][2]).toBe(0);
        expect(g._$fills[1][3]).toBe(300*20);
        expect(g._$fills[1][4]).toBe(25*20);
        expect(g._$fills[1][5]).toBe(300*20);
        expect(g._$fills[1][6]).toBe(50*20);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);

    });

    it("cubicCurveTo test valid case1", function ()
    {
        var g = new Graphics();

        g
            .beginFill(0x0000FF, 1)
            .cubicCurveTo("a", "b", "c", "d", "e", "f")
            .endFill();

        expect(g._$fills[1][0]).toBe(Graphics.CUBIC);
        expect(g._$fills[1][1]).toBe(0);
        expect(g._$fills[1][2]).toBe(0);
        expect(g._$fills[1][3]).toBe(0);
        expect(g._$fills[1][4]).toBe(0);
        expect(g._$fills[1][5]).toBe(0);
        expect(g._$fills[1][6]).toBe(0);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);

    });

});


describe("Graphics.js curveTo test", function()
{

    it("curveTo test success", function ()
    {
        var g = new Graphics();

        g
            .beginFill(0x0000FF, 1)
            .curveTo(300, 100, 250, 100)
            .endFill();

        expect(g._$fills[1][0]).toBe(Graphics.CURVE_TO);
        expect(g._$fills[1][1]).toBe(300*20);
        expect(g._$fills[1][2]).toBe(100*20);
        expect(g._$fills[1][3]).toBe(250*20);
        expect(g._$fills[1][4]).toBe(100*20);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);

    });

    it("curveTo test valid case1", function ()
    {
        var g = new Graphics();

        g
            .beginFill(0x0000FF, 1)
            .curveTo("300", "100", "250", "100")
            .endFill();

        expect(g._$fills[1][0]).toBe(Graphics.CURVE_TO);
        expect(g._$fills[1][1]).toBe(300*20);
        expect(g._$fills[1][2]).toBe(100*20);
        expect(g._$fills[1][3]).toBe(250*20);
        expect(g._$fills[1][4]).toBe(100*20);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);
    });

    it("curveTo test valid case1", function ()
    {
        var g = new Graphics();

        g
            .beginFill(0x0000FF, 1)
            .curveTo("a", "b", "c", "d")
            .endFill();

        expect(g._$fills[1][0]).toBe(Graphics.CURVE_TO);
        expect(g._$fills[1][1]).toBe(0);
        expect(g._$fills[1][2]).toBe(0);
        expect(g._$fills[1][3]).toBe(0);
        expect(g._$fills[1][4]).toBe(0);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);
    });

});


describe("Graphics.js drawEllipse test", function()
{

    it("drawEllipse test success", function ()
    {
        var g = new Graphics();

        g
            .beginFill(0x0000FF, 1)
            .drawEllipse(10, 10, 150, 200)
            .endFill();

        expect(g._$fills.length).toBe(8);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);
    });

});


describe("Graphics.js drawCircle test", function()
{

    it("drawCircle test success", function ()
    {
        var g = new Graphics();

        g
            .beginFill(0x0000FF, 1)
            .drawCircle(120, 120, 50)
            .endFill();

        expect(g._$fills[1][0]).toBe(Graphics.ARC);
        expect(g._$fills[1][1]).toBe(120*20);
        expect(g._$fills[1][2]).toBe(120*20);
        expect(g._$fills[1][3]).toBe(50*20);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);

    });

    it("drawCircle test success", function ()
    {
        var g = new Graphics();

        g
            .beginFill(0x0000FF, 1)
            .drawCircle("120", "120", "50")
            .endFill();

        expect(g._$fills[1][0]).toBe(Graphics.ARC);
        expect(g._$fills[1][1]).toBe(120*20);
        expect(g._$fills[1][2]).toBe(120*20);
        expect(g._$fills[1][3]).toBe(50*20);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);

    });

    it("drawCircle test success", function ()
    {
        var g = new Graphics();

        g
            .beginFill(0x0000FF, 1)
            .drawCircle("a", "b", "c")
            .endFill();

        expect(g._$fills[1][0]).toBe(Graphics.ARC);
        expect(g._$fills[1][1]).toBe(0);
        expect(g._$fills[1][2]).toBe(0);
        expect(g._$fills[1][3]).toBe(0);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);

    });


});


describe("Graphics.js drawRoundRect test", function()
{

    it("drawRoundRect test success", function ()
    {
        var g = new Graphics();

        g
            .beginFill(0x0000FF, 1)
            .drawRoundRect(10, 10, 100, 100, 50, 50)
            .endFill();

        expect(g._$fills.length).toBe(12);

        expect(g._$fills[1][0]).toBe(Graphics.MOVE_TO);
        expect(g._$fills[1][1]).toBe(700);
        expect(g._$fills[1][2]).toBe(200);

        expect(g._$fills[2][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[2][1]).toBe(1700);
        expect(g._$fills[2][2]).toBe(200);

        expect(g._$fills[4][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[4][1]).toBe(2200);
        expect(g._$fills[4][2]).toBe(1700);

        expect(g._$fills[6][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[6][1]).toBe(700);
        expect(g._$fills[6][2]).toBe(2200);

        expect(g._$fills[8][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[8][1]).toBe(200);
        expect(g._$fills[8][2]).toBe(700);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);

    });

    it("drawRoundRect test success", function ()
    {
        var g = new Graphics();

        g
            .beginFill(0x0000FF, 1)
            .drawRoundRect("10", "10", "100", "100", "50", "50")
            .endFill();

        expect(g._$fills.length).toBe(12);

        expect(g._$fills[1][0]).toBe(Graphics.MOVE_TO);
        expect(g._$fills[1][1]).toBe(700);
        expect(g._$fills[1][2]).toBe(200);

        expect(g._$fills[2][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[2][1]).toBe(1700);
        expect(g._$fills[2][2]).toBe(200);

        expect(g._$fills[4][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[4][1]).toBe(2200);
        expect(g._$fills[4][2]).toBe(1700);

        expect(g._$fills[6][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[6][1]).toBe(700);
        expect(g._$fills[6][2]).toBe(2200);

        expect(g._$fills[8][0]).toBe(Graphics.LINE_TO);
        expect(g._$fills[8][1]).toBe(200);
        expect(g._$fills[8][2]).toBe(700);

        // restart check
        expect(g._$command).toBe(null);
        expect(g._$keys.length).toBe(0);

    });

});


describe("Graphics.js lineStyle test", function()
{

    it("lineStyle test success case1", function ()
    {
        var g = new Graphics();

        g
            .beginFill(0xff0000, 1.0)
            .moveTo(20.0 , 20.0)
            .lineTo(120.0 ,  20.0 )
            .lineStyle(10, 0x00ff00, 1.0, false, "normal", null, "miter", 1)
            .lineTo(120.0 ,  120.0 );

        // line width
        expect(g._$lineWidth).toBe(10*20);

        // line style
        expect(g._$lineStyles[0][0]).toBe(Graphics.STROKE_STYLE);
        expect(g._$lineStyles[0][1]).toBe(0);
        expect(g._$lineStyles[0][2]).toBe(255);
        expect(g._$lineStyles[0][3]).toBe(0);
        expect(g._$lineStyles[0][4]).toBe(1);
        expect(g._$lineStyles[0][5]).toBe(g._$lineWidth);
        expect(g._$lineStyles[0][6]).toBe(CapsStyle.ROUND);
        expect(g._$lineStyles[0][7]).toBe(JointStyle.MITER);
        expect(g._$lineStyles[0][8]).toBe(1);


        g
            .lineStyle()
            .lineTo(20.0 ,  120.0 );

        // expect(g._$lineWidth).toBe(0);
        expect(g._$lineStyles.length).toBe(0);

        g
            .lineStyle(20, 0x0000ff, 0.5, false, "normal", CapsStyle.NONE, JointStyle.BEVEL, 255)
            .lineTo(20.0 ,  20.0 )
            .endFill();

        // line width
        expect(g._$lineWidth).toBe(20*20);

        // line style
        expect(g._$lineStyles[0][0]).toBe(Graphics.STROKE_STYLE);
        expect(g._$lineStyles[0][1]).toBe(0);
        expect(g._$lineStyles[0][2]).toBe(0);
        expect(g._$lineStyles[0][3]).toBe(255);
        expect(g._$lineStyles[0][4]).toBe(0.5);
        expect(g._$lineStyles[0][5]).toBe(g._$lineWidth);
        expect(g._$lineStyles[0][6]).toBe("butt");
        expect(g._$lineStyles[0][7]).toBe(JointStyle.BEVEL);
        expect(g._$lineStyles[0][8]).toBe(255);

    });


    it("lineStyle test success case2", function ()
    {
        var g = new Graphics();

        g
            .beginFill(0xff0000, 1.0)
            .moveTo(20.0 , 20.0)
            .lineTo(120.0 ,  20.0 )
            .lineStyle(10, 0x00ff00, 1.0, false, "normal", null, "miter", 1)
            .lineTo(120.0 ,  120.0 );

        // line width
        expect(g._$lineWidth).toBe(10*20);

        // line style
        expect(g._$lineStyles[0][0]).toBe(Graphics.STROKE_STYLE);
        expect(g._$lineStyles[0][1]).toBe(0);
        expect(g._$lineStyles[0][2]).toBe(255);
        expect(g._$lineStyles[0][3]).toBe(0);
        expect(g._$lineStyles[0][4]).toBe(1);
        expect(g._$lineStyles[0][5]).toBe(g._$lineWidth);
        expect(g._$lineStyles[0][6]).toBe(CapsStyle.ROUND);
        expect(g._$lineStyles[0][7]).toBe(JointStyle.MITER);
        expect(g._$lineStyles[0][8]).toBe(1);


        g
            .lineStyle(20, 0x0000ff, 0.5, false, "normal", CapsStyle.NONE, JointStyle.BEVEL, 255)
            .lineTo(20.0 ,  120.0 )
            .lineTo(20.0 ,  20.0 )
            .endFill();

        // line width
        expect(g._$lineWidth).toBe(20*20);

        // line style
        expect(g._$lineStyles[0][0]).toBe(Graphics.STROKE_STYLE);
        expect(g._$lineStyles[0][1]).toBe(0);
        expect(g._$lineStyles[0][2]).toBe(0);
        expect(g._$lineStyles[0][3]).toBe(255);
        expect(g._$lineStyles[0][4]).toBe(0.5);
        expect(g._$lineStyles[0][5]).toBe(g._$lineWidth);
        expect(g._$lineStyles[0][6]).toBe("butt");
        expect(g._$lineStyles[0][7]).toBe(JointStyle.BEVEL);
        expect(g._$lineStyles[0][8]).toBe(255);

    });

});


describe("Graphics.js getBounds test", function()
{

    it("line point zero test case 0", function ()
    {
        var shape = new Shape();

        shape
            .graphics
            .lineStyle(20, 0x000000, 1.0, true, LineScaleMode.NORMAL, CapsStyle.SQUARE, JointStyle.BEVEL, 10)
            .moveTo(0, 0)
            .lineTo(10, 0);

        expect(shape.getBounds(shape).toString())
            .toBe("(x=-10.000000000000002, y=-10, w=30, h=20)");

    });

    it("line point zero test case 45", function ()
    {
        var shape = new Shape();

        shape
            .graphics
            .lineStyle(20, 0x000000, 1.0, true, LineScaleMode.NORMAL, CapsStyle.SQUARE, JointStyle.BEVEL, 10)
            .moveTo(0, 0)
            .lineTo(10, 10);

        // flash bag (x=-10, y=-10, w=30, h=30)
        expect(shape.getBounds(shape).toString())
            .toBe("(x=-14.142135623730947, y=-14.142135623730951, w=38.2842712474619, h=38.2842712474619)");

    });

    it("line point zero test case 90", function ()
    {
        var shape = new Shape();

        shape
            .graphics
            .lineStyle(20, 0x000000, 1.0, true, LineScaleMode.NORMAL, CapsStyle.SQUARE, JointStyle.BEVEL, 10)
            .moveTo(0, 0)
            .lineTo(0, 10);

        expect(shape.getBounds(shape).toString())
            .toBe("(x=-10, y=-10.000000000000002, w=20, h=30.000000000000007)");

    });

    it("line point zero test case 135", function ()
    {
        var shape = new Shape();

        shape
            .graphics
            .lineStyle(20, 0x000000, 1.0, true, LineScaleMode.NORMAL, CapsStyle.SQUARE, JointStyle.BEVEL, 10)
            .moveTo(0, 0)
            .lineTo(-10, 10);

        // flash bag (x=-20, y=-10, w=30, h=30)
        expect(shape.getBounds(shape).toString())
            .toBe("(x=-24.14213562373095, y=-14.142135623730947, w=38.2842712474619, h=38.2842712474619)");

    });

    it("line point zero test case 180", function ()
    {
        var shape = new Shape();

        shape
            .graphics
            .lineStyle(20, 0x000000, 1.0, true, LineScaleMode.NORMAL, CapsStyle.SQUARE, JointStyle.BEVEL, 10)
            .moveTo(0, 0)
            .lineTo(-10, 0);

        // flash bag (x=-20, y=-20, w=30, h=30)
        expect(shape.getBounds(shape).toString())
            .toBe("(x=-20.000000000000004, y=-10, w=30.000000000000007, h=20)");

    });

    it("line point zero test case -45", function ()
    {
        var shape = new Shape();

        shape
            .graphics
            .lineStyle(20, 0x000000, 1.0, true, LineScaleMode.NORMAL, CapsStyle.SQUARE, JointStyle.BEVEL, 10)
            .moveTo(0, 0)
            .lineTo(10, -10);

        // flash bag (x=-10, y=-20, w=30, h=30)
        expect(shape.getBounds(shape).toString())
            .toBe("(x=-14.142135623730951, y=-24.14213562373095, w=38.2842712474619, h=38.2842712474619)");

    });

    it("line point zero test case -90", function ()
    {
        var shape = new Shape();

        shape
            .graphics
            .lineStyle(20, 0x000000, 1.0, true, LineScaleMode.NORMAL, CapsStyle.SQUARE, JointStyle.BEVEL, 10)
            .moveTo(0, 0)
            .lineTo(0, -10);

        // flash bag (x=-10, y=-20, w=30, h=30)
        expect(shape.getBounds(shape).toString())
            .toBe("(x=-10, y=-20, w=20, h=30.000000000000007)");

    });

    it("line point zero test case -135", function ()
    {
        var shape = new Shape();

        shape
            .graphics
            .lineStyle(20, 0x000000, 1.0, true, LineScaleMode.NORMAL, CapsStyle.SQUARE, JointStyle.BEVEL, 10)
            .moveTo(0, 0)
            .lineTo(-10, -10);

        // flash bag (x=-20, y=-20, w=30, h=30)
        expect(shape.getBounds(shape).toString())
            .toBe("(x=-24.14213562373095, y=-24.14213562373095, w=38.2842712474619, h=38.2842712474619)");

    });

});

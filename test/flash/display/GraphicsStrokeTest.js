
describe("GraphicsStroke.js toString test", function()
{

    // toString
    it("toString test success", function ()
    {
        var gs = new GraphicsStroke();
        expect(gs.toString()).toBe("[object GraphicsStroke]");
    });

});


describe("GraphicsStroke.js property test", function()
{

    // thickness
    it("thickness success test case1", function()
    {
        var gs = new GraphicsStroke();
        expect(gs.thickness).toBe(0);
    });

    it("thickness success test case2", function()
    {
        var gs = new GraphicsStroke(10);
        expect(gs.thickness).toBe(10);
    });

    it("thickness success test case3", function()
    {
        var gs = new GraphicsStroke(10);
        gs.thickness = 5;
        expect(gs.thickness).toBe(5);
    });

    it("thickness valid test case1", function()
    {
        var gs = new GraphicsStroke("40");
        expect(gs.thickness).toBe(40);
    });

    it("thickness valid test case2", function()
    {
        var gs = new GraphicsStroke("abc");
        expect(gs.thickness).toBe(0);
    });

    it("thickness valid test case3", function()
    {
        var gs = new GraphicsStroke(0);
        gs.thickness = "5";
        expect(gs.thickness).toBe(5);
    });

    it("thickness valid test case3", function()
    {
        var gs = new GraphicsStroke(10);
        gs.thickness = "5a";
        expect(gs.thickness).toBe(0);
    });


    // pixelHinting
    it("pixelHinting success test case1", function()
    {
        var gs = new GraphicsStroke(10);
        expect(gs.pixelHinting).toBe(false);
    });

    it("pixelHinting success test case2", function()
    {
        var gs = new GraphicsStroke(10, true);
        expect(gs.pixelHinting).toBe(true);
    });

    it("pixelHinting success test case3", function()
    {
        var gs = new GraphicsStroke(10, false);
        gs.pixelHinting = true;
        expect(gs.pixelHinting).toBe(true);
    });

    it("pixelHinting valid test case1", function()
    {
        var gs = new GraphicsStroke(10, true);
        gs.pixelHinting = 0;
        expect(gs.pixelHinting).toBe(true);
    });

    it("pixelHinting valid test case2", function()
    {
        var gs = new GraphicsStroke(10, true);
        gs.pixelHinting = "a";
        expect(gs.pixelHinting).toBe(true);
    });


    // scaleMode
    it("scaleMode success test case1", function()
    {
        var gs = new GraphicsStroke(10, false);
        expect(gs.scaleMode).toBe(LineScaleMode.NORMAL);
    });

    it("scaleMode success test case2", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.HORIZONTAL);
        expect(gs.scaleMode).toBe(LineScaleMode.HORIZONTAL);
    });

    it("scaleMode success test case3", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NONE);
        expect(gs.scaleMode).toBe(LineScaleMode.NONE);
    });

    it("scaleMode success test case4", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.VERTICAL);
        expect(gs.scaleMode).toBe(LineScaleMode.VERTICAL);
    });

    it("scaleMode success test case5", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL);
        gs.scaleMode = LineScaleMode.HORIZONTAL;
        expect(gs.scaleMode).toBe(LineScaleMode.HORIZONTAL);
    });

    it("scaleMode success test case6", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL);
        gs.scaleMode = LineScaleMode.NONE;
        expect(gs.scaleMode).toBe(LineScaleMode.NONE);
    });

    it("scaleMode success test case7", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NONE);
        gs.scaleMode = LineScaleMode.NORMAL;
        expect(gs.scaleMode).toBe(LineScaleMode.NORMAL);
    });

    it("scaleMode success test case8", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL);
        gs.scaleMode = LineScaleMode.VERTICAL;
        expect(gs.scaleMode).toBe(LineScaleMode.VERTICAL);
    });

    it("scaleMode valid test case1", function()
    {
        var gs = new GraphicsStroke(10, false, "abc");
        expect(gs.scaleMode).toBe(LineScaleMode.NORMAL);
    });

    it("scaleMode valid test case2", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL);
        gs.scaleMode = "test";
        expect(gs.scaleMode).toBe(LineScaleMode.NORMAL);
    });


    // caps
    it("caps success test case1", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL);
        expect(gs.caps).toBe(CapsStyle.NONE);
    });

    it("caps success test case2", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL, CapsStyle.NONE);
        expect(gs.caps).toBe(CapsStyle.NONE);
    });

    it("caps success test case3", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL, CapsStyle.ROUND);
        expect(gs.caps).toBe(CapsStyle.ROUND);
    });

    it("caps success test case4", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL, CapsStyle.SQUARE);
        expect(gs.caps).toBe(CapsStyle.SQUARE);
    });

    it("caps success test case5", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL);
        gs.caps = CapsStyle.NONE;
        expect(gs.caps).toBe(CapsStyle.NONE);
    });

    it("caps success test case6", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL, CapsStyle.NONE);
        gs.caps = CapsStyle.ROUND;
        expect(gs.caps).toBe(CapsStyle.ROUND);
    });

    it("caps success test case7", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL, CapsStyle.NONE);
        gs.caps = CapsStyle.SQUARE;
        expect(gs.caps).toBe(CapsStyle.SQUARE);
    });

    it("caps valid test case1", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL, "abc");
        expect(gs.caps).toBe(CapsStyle.NONE);
    });

    it("caps valid test case2", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL, CapsStyle.NONE);
        gs.caps = "test";
        expect(gs.caps).toBe(CapsStyle.NONE);
    });


    // joints
    it("joints success test case1", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL, CapsStyle.NONE);
        expect(gs.joints).toBe(JointStyle.ROUND);
    });

    it("joints success test case2", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL, CapsStyle.NONE, JointStyle.ROUND);
        expect(gs.joints).toBe(JointStyle.ROUND);
    });

    it("joints success test case3", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL, CapsStyle.NONE, JointStyle.BEVEL);
        expect(gs.joints).toBe(JointStyle.BEVEL);
    });

    it("joints success test case4", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL, CapsStyle.NONE, JointStyle.MITER);
        expect(gs.joints).toBe(JointStyle.MITER);
    });

    it("joints success test case5", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL, CapsStyle.NONE);
        gs.joints = JointStyle.ROUND;
        expect(gs.joints).toBe(JointStyle.ROUND);
    });

    it("joints success test case6", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL, CapsStyle.NONE, JointStyle.ROUND);
        gs.joints = JointStyle.BEVEL;
        expect(gs.joints).toBe(JointStyle.BEVEL);
    });

    it("joints success test case7", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL, CapsStyle.NONE, JointStyle.ROUND);
        gs.joints = JointStyle.MITER;
        expect(gs.joints).toBe(JointStyle.MITER);
    });

    it("joints valid test case1", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL, CapsStyle.NONE, "abc");
        expect(gs.joints).toBe(CapsStyle.ROUND);
    });

    it("joints valid test case2", function()
    {
        var gs = new GraphicsStroke(10, false, LineScaleMode.NORMAL, CapsStyle.NONE, JointStyle.ROUND);
        gs.joints = "test";
        expect(gs.joints).toBe(CapsStyle.ROUND);
    });


    // miter_limit
    it("miterLimit success test case1", function()
    {
        var gs = new GraphicsStroke(
            10, false, LineScaleMode.NORMAL, CapsStyle.NONE, JointStyle.ROUND
        );
        expect(gs.miterLimit).toBe(10);
    });

    it("miterLimit success test case2", function()
    {
        var gs = new GraphicsStroke(
            10, false, LineScaleMode.NORMAL, CapsStyle.NONE, JointStyle.ROUND,
            15
        );
        gs.miterLimit = 20;
        expect(gs.miterLimit).toBe(20);
    });

    it("miterLimit valid test case1", function()
    {
        var gs = new GraphicsStroke(
            10, false, LineScaleMode.NORMAL, CapsStyle.NONE, JointStyle.ROUND,
            "25"
        );
        expect(gs.miterLimit).toBe(25);
    });

    it("miterLimit valid test case2", function()
    {
        var gs = new GraphicsStroke(
            10, false, LineScaleMode.NORMAL, CapsStyle.NONE, JointStyle.ROUND,
            25
        );
        gs.miterLimit = "35";
        expect(gs.miterLimit).toBe(35);
    });

    it("miterLimit valid test case3", function()
    {
        var gs = new GraphicsStroke(
            10, false, LineScaleMode.NORMAL, CapsStyle.NONE, JointStyle.ROUND,
            40
        );
        gs.miterLimit = "35a";
        expect(gs.miterLimit).toBe(10);
    });

    it("miterLimit valid test case4", function()
    {
        var gs = new GraphicsStroke(
            10, false, LineScaleMode.NORMAL, CapsStyle.NONE, JointStyle.ROUND,
            0
        );
        expect(gs.miterLimit).toBe(1);
    });

    it("miterLimit valid test case5", function()
    {
        var gs = new GraphicsStroke(
            10, false, LineScaleMode.NORMAL, CapsStyle.NONE, JointStyle.ROUND,
            1000
        );
        expect(gs.miterLimit).toBe(255);
    });


});
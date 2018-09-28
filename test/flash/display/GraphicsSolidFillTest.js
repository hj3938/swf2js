
describe("GraphicsSolidFill.js toString test", function()
{

    // toString
    it("toString test success", function ()
    {
        var gsf = new GraphicsSolidFill();
        expect(gsf.toString()).toBe("[object GraphicsSolidFill]");
    });

});


describe("GraphicsSolidFill.js property test", function()
{

    // alpha
    it("alpha success test case1", function()
    {
        var gsf = new GraphicsSolidFill();
        expect(gsf.alpha).toBe(1);
    });

    it("alpha success test case2", function()
    {
        var gsf = new GraphicsSolidFill(0, 0.5);
        expect(gsf.alpha).toBe(0.5);
    });

    it("alpha success test case3", function()
    {
        var gsf = new GraphicsSolidFill(0, 0.5);

        gsf.alpha = 0.234;
        expect(gsf.alpha).toBe(0.234);
    });

    it("alpha valid test case1", function()
    {
        var gsf = new GraphicsSolidFill(0, 1);
        gsf.alpha = "0.78";
        expect(gsf.alpha).toBe(0.78);
    });

    it("alpha valid test case2", function()
    {
        var gsf = new GraphicsSolidFill(0, 1);
        expect(gsf.alpha).toBe(1);

        gsf.alpha = "abc";
        expect(gsf.alpha).toBe(1);
    });


    // color
    it("color success test case1", function()
    {
        var gsf = new GraphicsSolidFill();
        expect(gsf.color).toBe(0);
    });

    it("color success test case2", function()
    {
        var gsf = new GraphicsSolidFill(0xff0000);
        expect(gsf.color).toBe(16711680);
    });

    it("color success test case3", function()
    {
        var gsf = new GraphicsSolidFill(0xff0000);
        gsf.color = 0x00ff00;
        expect(gsf.color).toBe(65280);
    });

    it("color valid test case1", function()
    {
        var gsf = new GraphicsSolidFill(0, 1);
        gsf.color = "red";
        expect(gsf.color).toBe(16711680);
    });

    it("color valid test case2", function()
    {
        var gsf = new GraphicsSolidFill(0xffffff, 1);
        gsf.color = "abc";
        expect(gsf.color).toBe(0);
    });

});


describe("GraphicsSolidFill.js _$toRGBA test", function()
{
    // rgba
    it("_$toRGBA success test case1", function()
    {
        var gsf = new GraphicsSolidFill(0xff0000, 1);

        var rgba = gsf._$toRGBA();
        expect(rgba.R).toBe(255);
        expect(rgba.G).toBe(0);
        expect(rgba.B).toBe(0);
        expect(rgba.A).toBe(1);
    });

    it("_$toRGBA success test case2", function()
    {
        var gsf = new GraphicsSolidFill(0x00ff00, 1);

        var rgba = gsf._$toRGBA();
        expect(rgba.R).toBe(0);
        expect(rgba.G).toBe(255);
        expect(rgba.B).toBe(0);
        expect(rgba.A).toBe(1);
    });

    it("_$toRGBA success test case3", function()
    {
        var gsf = new GraphicsSolidFill(0x0000ff, 1);

        var rgba = gsf._$toRGBA();
        expect(rgba.R).toBe(0);
        expect(rgba.G).toBe(0);
        expect(rgba.B).toBe(255);
        expect(rgba.A).toBe(1);
    });

    it("_$toRGBA success test case4", function()
    {
        var gsf = new GraphicsSolidFill(0xffffff, 0.5);

        var rgba = gsf._$toRGBA();
        expect(rgba.R).toBe(255);
        expect(rgba.G).toBe(255);
        expect(rgba.B).toBe(255);
        expect(rgba.A).toBe(0.5);
    });

    it("_$toRGBA success test case5", function()
    {
        var gsf = new GraphicsSolidFill("red", 1);

        var rgba = gsf._$toRGBA();
        expect(rgba.R).toBe(255);
        expect(rgba.G).toBe(0);
        expect(rgba.B).toBe(0);
        expect(rgba.A).toBe(1);
    });

    it("_$toRGBA success test case6", function()
    {
        var gsf = new GraphicsSolidFill("lime", 1);

        var rgba = gsf._$toRGBA();
        expect(rgba.R).toBe(0);
        expect(rgba.G).toBe(255);
        expect(rgba.B).toBe(0);
        expect(rgba.A).toBe(1);
    });

    it("_$toRGBA success test case7", function()
    {
        var gsf = new GraphicsSolidFill("blue", 1);

        var rgba = gsf._$toRGBA();
        expect(rgba.R).toBe(0);
        expect(rgba.G).toBe(0);
        expect(rgba.B).toBe(255);
        expect(rgba.A).toBe(1);
    });

});
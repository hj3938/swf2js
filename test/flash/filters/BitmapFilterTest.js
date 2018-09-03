
describe("BitmapFilter.js toString test", function()
{

    // toString
    it("toString test success", function()
    {
        var bitmapFilter = new BitmapFilter();
        expect(bitmapFilter.toString()).toBe("[object BitmapFilter]");
    });

});


describe("BitmapFilter.js _$filterOperation test", function()
{

    // _$filterOperation
    it("_$filterOperation test case1", function()
    {
        var bitmapFilter = new BitmapFilter();
        expect(bitmapFilter._$filterOperation(true, true, true)).toBe("source-in");
    });

    it("_$filterOperation test case2", function()
    {
        var bitmapFilter = new BitmapFilter();
        expect(bitmapFilter._$filterOperation(true, true, false)).toBe("source-in");
    });

    it("_$filterOperation test case3", function()
    {
        var bitmapFilter = new BitmapFilter();
        expect(bitmapFilter._$filterOperation(true, false, true)).toBe("source-in");
    });

    it("_$filterOperation test case4", function()
    {
        var bitmapFilter = new BitmapFilter();
        expect(bitmapFilter._$filterOperation(true, false, false)).toBe("source-atop");
    });

    it("_$filterOperation test case5", function()
    {
        var bitmapFilter = new BitmapFilter();
        expect(bitmapFilter._$filterOperation(false, true, true)).toBe("source-out");
    });

    it("_$filterOperation test case6", function()
    {
        var bitmapFilter = new BitmapFilter();
        expect(bitmapFilter._$filterOperation(false, true, false)).toBe("source-out");
    });

    it("_$filterOperation test case7", function()
    {
        var bitmapFilter = new BitmapFilter();
        expect(bitmapFilter._$filterOperation(false, false, true)).toBe("copy");
    });

    it("_$filterOperation test case8", function()
    {
        var bitmapFilter = new BitmapFilter();
        expect(bitmapFilter._$filterOperation(false, false, false)).toBe("destination-over");
    });

});

describe("BitmapFilter.js clone test", function()
{

    it("BevelFilter clone test", function()
    {
        var filter = new BevelFilter();
        var clone  = filter.clone();

        clone.distance = 100;

        expect(filter.distance).toBe(4);
        expect(clone.distance).toBe(100);
    });

    it("BlurFilter clone test", function()
    {
        var filter = new BlurFilter();
        var clone  = filter.clone();

        clone.blurX = 100;

        expect(filter.blurX).toBe(4);
        expect(clone.blurX).toBe(100);
    });

    it("ColorMatrixFilter clone test", function()
    {
        var filter = new ColorMatrixFilter();
        var clone  = filter.clone();

        clone.matrix = [100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        expect(filter.matrix).toBe(null);
        expect(clone.matrix[0]).toBe(100);
    });

    it("ConvolutionFilter clone test", function()
    {
        var filter = new ConvolutionFilter();
        var clone  = filter.clone();

        clone.matrixX = 100;

        expect(filter.matrixX).toBe(0);
        expect(clone.matrixX).toBe(100);
    });

    it("DisplacementMapFilter clone test", function()
    {
        var filter = new DisplacementMapFilter();
        var clone  = filter.clone();

        clone.componentX = 100;

        expect(filter.componentX).toBe(0);
        expect(clone.componentX).toBe(100);
    });

    it("DropShadowFilter clone test", function()
    {
        var filter = new DropShadowFilter();
        var clone  = filter.clone();

        clone.distance = 100;

        expect(filter.distance).toBe(4);
        expect(clone.distance).toBe(100);
    });

    it("GlowFilter clone test", function()
    {
        var filter = new GlowFilter();
        var clone  = filter.clone();

        clone.blurX = 100;

        expect(filter.blurX).toBe(6);
        expect(clone.blurX).toBe(100);
    });

    it("GradientBevelFilter clone test", function()
    {
        var filter = new GradientBevelFilter();
        var clone  = filter.clone();

        clone.distance = 100;

        expect(filter.distance).toBe(4);
        expect(clone.distance).toBe(100);
    });

    it("GradientGlowFilter clone test", function()
    {
        var filter = new GradientGlowFilter();
        var clone  = filter.clone();

        clone.distance = 100;

        expect(filter.distance).toBe(4);
        expect(clone.distance).toBe(100);
    });

    it("ShaderFilter clone test", function()
    {
        var filter = new ShaderFilter();
        var clone  = filter.clone();

        clone.bottomExtension = 100;

        expect(filter.bottomExtension).toBe(0);
        expect(clone.bottomExtension).toBe(100);
    });

});

describe("BitmapFilter.js _$coatOfColor test", function()
{


});
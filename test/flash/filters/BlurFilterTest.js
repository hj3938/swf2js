

describe("BlurFilter.js toString test", function()
{
    it("toString test success", function()
    {
        var filter = new BlurFilter();
        expect(filter.toString()).toBe("[object BlurFilter]");
    });

});


describe("BlurFilter.js property test", function()
{
    // default
    it("default test success", function()
    {
        var filter = new BlurFilter();
        expect(filter.blurX).toBe(4);
        expect(filter.blurY).toBe(4);
        expect(filter.quality).toBe(1);
    });


    // blurX
    it("blurX test success", function()
    {
        var filter = new BlurFilter();
        filter.blurX = 100;
        expect(filter.blurX).toBe(100);
    });

    it("blurX test valid case1", function()
    {
        var filter = new BlurFilter();
        filter.blurX = 1000;
        expect(filter.blurX).toBe(255);
    });

    it("blurX test valid case2", function()
    {
        var filter = new BlurFilter();
        filter.blurX = -1;
        expect(filter.blurX).toBe(0);
    });

    it("blurX test valid case3", function()
    {
        var filter = new BlurFilter();
        filter.blurX = "123";
        expect(filter.blurX).toBe(123);
    });

    it("blurX test valid case4", function()
    {
        var filter = new BlurFilter();
        filter.blurX = "123a";
        expect(isNaN(filter.blurX)).toBe(true);
    });


    // blurY
    it("blurY test success", function()
    {
        var filter = new BlurFilter();
        filter.blurY = 100;
        expect(filter.blurY).toBe(100);
    });

    it("blurY test valid case1", function()
    {
        var filter = new BlurFilter();
        filter.blurY = 1000;
        expect(filter.blurY).toBe(255);
    });

    it("blurY test valid case2", function()
    {
        var filter = new BlurFilter();
        filter.blurY = -1;
        expect(filter.blurY).toBe(0);
    });

    it("blurY test valid case3", function()
    {
        var filter = new BlurFilter();
        filter.blurY = "123";
        expect(filter.blurY).toBe(123);
    });

    it("blurY test valid case4", function()
    {
        var filter = new BlurFilter();
        filter.blurY = "123a";
        expect(isNaN(filter.blurY)).toBe(true);
    });


    // quality
    it("quality test success", function()
    {
        var filter = new BlurFilter();
        filter.quality = 10;
        expect(filter.quality).toBe(10);
    });

    it("quality test valid case1", function()
    {
        var filter = new BlurFilter();
        filter.quality = 1000;
        expect(filter.quality).toBe(15);
    });

    it("quality test valid case2", function()
    {
        var filter = new BlurFilter();
        filter.quality = -1;
        expect(filter.quality).toBe(0);
    });

    it("quality test valid case3", function()
    {
        var filter = new BlurFilter();
        filter.quality = "12";
        expect(filter.quality).toBe(12);
    });

    it("quality test valid case4", function()
    {
        var filter = new BlurFilter();
        filter.quality = "123a";
        expect(filter.quality).toBe(0);
    });

});

describe("Bitmap.js toString test", function()
{
    // toString
    it("toString test success", function()
    {
        var bitmap = new Bitmap();
        expect(bitmap.toString()).toBe("[object Bitmap]");
    });

});


describe("Bitmap.js property test", function()
{
    // bitmapData
    it("bitmapData test success case1", function()
    {
        var bitmap = new Bitmap(new BitmapData(100, 200));
        expect(bitmap.bitmapData instanceof BitmapData).toBe(true);
        expect(bitmap.bitmapData.width).toBe(100);
        expect(bitmap.bitmapData.height).toBe(200);
    });

    it("bitmapData test success case2", function()
    {
        var bitmapData = new BitmapData(100, 200);
        var bitmap     = new Bitmap();

        bitmap.bitmapData = bitmapData;

        expect(bitmap.bitmapData instanceof BitmapData).toBe(true);
        expect(bitmap.bitmapData.width).toBe(100);
        expect(bitmap.bitmapData.height).toBe(200);
    });

    it("bitmapData test valid case1", function()
    {
        var bitmap = new Bitmap({});
        expect(bitmap.bitmapData instanceof BitmapData).toBe(true);
        expect(bitmap.bitmapData.width).toBe(0);
        expect(bitmap.bitmapData.height).toBe(0);
    });

    it("bitmapData test valid case2", function()
    {
        var bitmap = new Bitmap(new BitmapData(100, 200));
        bitmap.bitmapData = {};

        expect(bitmap.bitmapData instanceof BitmapData).toBe(true);
        expect(bitmap.bitmapData.width).toBe(100);
        expect(bitmap.bitmapData.height).toBe(200);
    });


    // pixelSnapping
    it("pixelSnapping test success case1", function()
    {
        var bitmap = new Bitmap();
        bitmap.pixelSnapping = PixelSnapping.ALWAYS;
        expect(bitmap.pixelSnapping).toBe(PixelSnapping.ALWAYS);
    });

    it("pixelSnapping test success case2", function()
    {
        var bitmap = new Bitmap();
        bitmap.pixelSnapping = PixelSnapping.NEVER;
        expect(bitmap.pixelSnapping).toBe(PixelSnapping.NEVER);
    });

    it("pixelSnapping test success case3", function()
    {
        var bitmap = new Bitmap();
        bitmap.pixelSnapping = PixelSnapping.AUTO;
        expect(bitmap.pixelSnapping).toBe(PixelSnapping.AUTO);
    });

    it("pixelSnapping test valid case", function()
    {
        var bitmap = new Bitmap();
        bitmap.pixelSnapping = "test";
        expect(bitmap.pixelSnapping).toBe(PixelSnapping.AUTO);
    });


    // smoothing
    it("smoothing test success case1", function()
    {
        var bitmap = new Bitmap();
        expect(bitmap.smoothing).toBe(false);
    });

    it("smoothing test success case2", function()
    {
        var bitmap = new Bitmap();
        bitmap.smoothing = true;
        expect(bitmap.smoothing).toBe(true);
    });

    it("smoothing test valid case", function()
    {
        var bitmap = new Bitmap();
        bitmap.smoothing = "test";
        expect(bitmap.smoothing).toBe(false);
    });

});
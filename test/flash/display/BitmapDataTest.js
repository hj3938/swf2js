
describe("BitmapData.js toString test", function()
{
    // toString
    it("toString test success", function()
    {
        var bitmap = new BitmapData();
        expect(bitmap.toString()).toBe("[object BitmapData]");
    });

});


describe("BitmapData.js property test", function()
{
    // height
    it("height test success", function()
    {
        var bitmap = new BitmapData(100, 90);
        expect(bitmap.height).toBe(90);
    });

    it("height test readonly", function()
    {
        var bitmap    = new BitmapData(100, 90);
        bitmap.height = 10;
        expect(bitmap.height).toBe(90);
    });


    // rect
    it("rect test success", function()
    {
        var bitmap = new BitmapData(256, 256, true, 0xffcc8800);
        expect(bitmap.rect.toString()).toBe("(x=0, y=0, w=256, h=256)");
    });

    it("rect test readonly", function()
    {
        var bitmap    = new BitmapData(100, 100, true, 0xffffff);
        bitmap.rect   = new Rectangle(0, 0, 256, 256);
        expect(bitmap.rect.toString()).toBe("(x=0, y=0, w=100, h=100)");
    });


    // transparent
    it("transparent test success", function()
    {
        var bitmap = new BitmapData(256, 256, true, 0xffcc8800);
        expect(bitmap.transparent).toBe(true);
    });

    it("rect test readonly", function()
    {
        var bitmap         = new BitmapData(100, 100, true, 0xffffff);
        bitmap.transparent = false;
        expect(bitmap.transparent).toBe(true);
    });


    // width
    it("width test success", function()
    {
        var bitmap = new BitmapData(100);
        expect(bitmap.width).toBe(100);
    });

    it("width test readonly", function()
    {
        var bitmap   = new BitmapData(100);
        bitmap.width = 10;
        expect(bitmap.width).toBe(100);
    });

});















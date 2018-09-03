
describe("BitmapData.js toString test", function()
{
    // mouseChildren
    it("toString test success", function()
    {
        var bitmap = new BitmapData();
        expect(bitmap.toString()).toBe("[object BitmapData]");
    });

});

describe("BitmapData.js property test", function()
{
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


    // height
    it("height test success", function()
    {
        var bitmap = new BitmapData(100, 90);
        expect(bitmap.height).toBe(90);
    });

    it("height test readonly", function()
    {
        var bitmap   = new BitmapData(100, 90);
        bitmap.height = 10;
        expect(bitmap.height).toBe(90);
    });


    // transparent


});

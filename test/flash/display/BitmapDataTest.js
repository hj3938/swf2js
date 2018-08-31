
describe("BitmapData.js property test", function()
{
    // mouseChildren
    it("toString test success", function()
    {
        var bitmap = new BitmapData();
        expect(bitmap.toString()).toBe("[object BitmapData]");
    });
});

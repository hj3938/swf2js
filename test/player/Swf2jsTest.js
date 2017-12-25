
describe("Swf2js.js packages test", function()
{

    // packages
    it("packages test", function()
    {
        var swf2js     = new Swf2js();
        var SWFVersion = swf2js.getPackage("flash.display.SWFVersion");
        expect(SWFVersion.FLASH12).toBe(12);

        var StageAlign = swf2js.getPackage("flash.display.StageAlign");
        expect(StageAlign.BOTTOM_LEFT).toBe("BL");
    });

});

describe("Swf2js.js load test", function()
{
    it("load test", function()
    {
        var swf2js = new Swf2js();

    });
});

describe("Swf2js.js createRootMovieClip test", function()
{
    it("createRootMovieClip test", function()
    {
        var swf2js = new Swf2js();

    });
});

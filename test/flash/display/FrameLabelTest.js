
describe("FrameLabel.js property test", function()
{

    // property
    it("property test", function()
    {
        var fl = new FrameLabel("test", 10);

        expect(fl.name).toBe("test");
        expect(fl.frame).toBe(10);
        expect(fl.toString()).toBe("[object FrameLabel]");
    });

    // readonly
    it("property readonly test", function()
    {
        var fl = new FrameLabel("test", 10);
        fl.name  = "test2";
        fl.frame = 1;

        expect(fl.name).toBe("test");
        expect(fl.frame).toBe(10);
    });

});

describe("FrameLabel.js toString test", function()
{

    // toString
    it("toString test success", function ()
    {
        var fl = new FrameLabel();
        expect(fl.toString()).toBe("[object FrameLabel]");
    });

});

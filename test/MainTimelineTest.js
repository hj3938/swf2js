
describe("MainTimeline.js toString test", function()
{

    // toString
    it("toString success", function()
    {
        var root = new MainTimeline();
        expect(root.toString()).toBe("[object MainTimeline]");
    });

});

describe("MainTimeline.js setBackgroundColor test", function()
{

    it("setBackgroundColor success", function()
    {
        var root = new MainTimeline();
        root.setBackgroundColor(1,2,3);

        expect(root.getBackgroundColor()).toBe("rgb(1,2,3)");
    });

    it("setBackgroundColor valid case1", function()
    {
        var root = new MainTimeline();
        root.setBackgroundColor("a",2,3);

        expect(root.getBackgroundColor()).toBe("rgb(255,2,3)");
    });

    it("setBackgroundColor valid case2", function()
    {
        var root = new MainTimeline();
        root.setBackgroundColor(1,"b",3);

        expect(root.getBackgroundColor()).toBe("rgb(1,255,3)");
    });

    it("setBackgroundColor valid case3", function()
    {
        var root = new MainTimeline();
        root.setBackgroundColor(1,2,"c");

        expect(root.getBackgroundColor()).toBe("rgb(1,2,255)");
    });
});
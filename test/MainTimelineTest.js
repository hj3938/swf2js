
describe("MainTimeline.js toString test", function()
{

    // toString
    it("toString success", function()
    {
        var root = new MainTimeline();
        expect(root.toString()).toBe("[object MainTimeline]");
    });

});
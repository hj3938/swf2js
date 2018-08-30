
describe("SimpleButton.js toString test", function()
{

    // toString
    it("toString test success", function ()
    {
        var button = new SimpleButton();
        expect(button.toString()).toBe("[object SimpleButton]");
    });




});
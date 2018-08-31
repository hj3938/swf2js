
describe("SimpleButton.js toString test", function()
{

    // toString
    it("toString test success", function ()
    {
        var button = new SimpleButton();
        expect(button.toString()).toBe("[object SimpleButton]");
    });

});


describe("SimpleButton.js property test", function()
{
    // downState
    it("downState test success case1", function ()
    {
        var button = new SimpleButton();
        expect(button.downState).toBe(null);
    });

    it("downState test success case2", function ()
    {
        var button = new SimpleButton();
        button.downState = new DisplayObject();
        expect(button.downState instanceof DisplayObject).toBe(true);
    });

    it("downState test success case3", function ()
    {
        var button = new SimpleButton(
            new DisplayObject(),
            new DisplayObject(),
            new DisplayObject(),
            new DisplayObject()
        );
        expect(button.downState instanceof DisplayObject).toBe(true);
    });

    it("downState test valid", function ()
    {
        var button = new SimpleButton();
        button.downState = {};
        expect(button.downState).toBe(null);
    });


    // enabled
    it("enabled test success case1", function ()
    {
        var button = new SimpleButton();
        expect(button.enabled).toBe(true);
    });

    it("enabled test success case2", function ()
    {
        var button = new SimpleButton();
        button.enabled = false;
        expect(button.enabled).toBe(false);
    });

    it("enabled test valid case1", function ()
    {
        var button = new SimpleButton();
        button.enabled = 0;
        expect(button.enabled).toBe(true);

        button.enabled = "test";
        expect(button.enabled).toBe(true);
    });









});






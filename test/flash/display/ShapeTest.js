describe("Shape.js toString test", function()
{

    // toString
    it("toString test success", function () 
    {
        var shape = new Shape();
        expect(shape.toString()).toBe("[object Shape]");
    });

});
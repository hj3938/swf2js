
describe("Vector.js toString test", function()
{

    toString
    it("toString success", function()
    {
        var v = new Vector();
        expect(v.toString()).toBe("");
    });

    it("toString success", function()
    {
        var v = new Vector(2);
        expect(v.toString()).toBe("0, 0");
    });

});
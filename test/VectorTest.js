
describe("Vector.js toString test", function()
{

    // toString
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

    it("toString success", function()
    {
        var v = new Vector();
        v[0] = 1;
        v[1] = 2;
        expect(v.toString()).toBe("1, 2");
    });

});


describe("Vector.js concat test", function()
{

    // concat
    it("concat success", function()
    {
        var v1 = new Vector();
        var v2 = new Vector();
        var v3 = new Vector();

        v1[0] = 1;
        v1[1] = 2;

        v2[0] = 3;
        v2[1] = 4;

        v3[0] = 5;
        v3[1] = 6;

        var v = new Vector();
        var r = v.concat(v1, v2, v3);

        expect(r.length).toBe(6);
        for (var i = 0; r.length > i; i++) {
            expect(r[i]).toBe(i + 1);
        }
    });


});
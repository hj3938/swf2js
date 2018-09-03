
describe("Graphics.js toString test", function()
{

    it("toString test", function ()
    {
        var g = new Graphics();
        expect(g.toString()).toBe("[object Graphics]");
    });

});


describe("Graphics.js beginFill test", function()
{

    it("beginFill test case1", function ()
    {
        var g = new Graphics();
        g.beginFill(0x990000, 1);

        // beginPath
        expect(g._$fills[0][0]).toBe(Graphics.BEGIN_PATH);

        // fill style
        expect(g._$fills[1][0]).toBe(Graphics.FILL_STYLE);
        expect(g._$fills[1][1]).toBe(153);
        expect(g._$fills[1][2]).toBe(0);
        expect(g._$fills[1][3]).toBe(0);
        expect(g._$fills[1][4]).toBe(1);
    });

    it("beginFill test case2", function ()
    {
        var g = new Graphics();
        g.beginFill("red", 0.2);

        // beginPath
        expect(g._$fills[0][0]).toBe(Graphics.BEGIN_PATH);

        // fill style
        expect(g._$fills[1][0]).toBe(Graphics.FILL_STYLE);
        expect(g._$fills[1][1]).toBe(255);
        expect(g._$fills[1][2]).toBe(0);
        expect(g._$fills[1][3]).toBe(0);
        expect(g._$fills[1][4]).toBe(0.2);
    });

    it("beginFill test valid case1", function ()
    {
        var g = new Graphics();
        g.beginFill("red", 10);

        // beginPath
        expect(g._$fills[0][0]).toBe(Graphics.BEGIN_PATH);

        // fill style
        expect(g._$fills[1][0]).toBe(Graphics.FILL_STYLE);
        expect(g._$fills[1][1]).toBe(255);
        expect(g._$fills[1][2]).toBe(0);
        expect(g._$fills[1][3]).toBe(0);
        expect(g._$fills[1][4]).toBe(1);
    });


});





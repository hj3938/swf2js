
describe("ColorTransform.js property valid test and clone test", function()
{
    it("valid test", function()
    {
        // valid case1
        var ct1 = new ColorTransform(
            "r", "g", "b", "a",
            "r", "g", "b", "a"
        );

        // valid case2
        var ct2 = new ColorTransform();
        ct1.redMultiplier   = "r";
        ct1.greenMultiplier = "g";
        ct1.blueMultiplier  = "b";
        ct1.alphaMultiplier = "a";
        ct1.redOffset       = "r";
        ct1.greenOffset     = "g";
        ct1.blueOffset      = "b";
        ct1.alphaOffset     = "a";

        // valid case3
        var ct3 = new ColorTransform(
            2, 2, 2, 2,
            256, 256, 256, 256
        );

        // valid case4
        var ct4 = new ColorTransform(
            -1, -1, -1, -1,
            -256, -256, -256, -256
        );

        // case1
        expect(ct1.redMultiplier).toBe(1);
        expect(ct1.greenMultiplier).toBe(1);
        expect(ct1.blueMultiplier).toBe(1);
        expect(ct1.alphaMultiplier).toBe(1);
        expect(ct1.redOffset).toBe(0);
        expect(ct1.greenOffset).toBe(0);
        expect(ct1.blueOffset).toBe(0);
        expect(ct1.alphaOffset).toBe(0);

        // case2
        expect(ct2.redMultiplier).toBe(1);
        expect(ct2.greenMultiplier).toBe(1);
        expect(ct2.blueMultiplier).toBe(1);
        expect(ct2.alphaMultiplier).toBe(1);
        expect(ct2.redOffset).toBe(0);
        expect(ct2.greenOffset).toBe(0);
        expect(ct2.blueOffset).toBe(0);
        expect(ct2.alphaOffset).toBe(0);


        // case 3
        expect(ct3.redMultiplier).toBe(1);
        expect(ct3.greenMultiplier).toBe(1);
        expect(ct3.blueMultiplier).toBe(1);
        expect(ct3.alphaMultiplier).toBe(1);
        expect(ct3.redOffset).toBe(0);
        expect(ct3.greenOffset).toBe(0);
        expect(ct3.blueOffset).toBe(0);
        expect(ct3.alphaOffset).toBe(0);

        // case 4
        expect(ct4.redMultiplier).toBe(1);
        expect(ct4.greenMultiplier).toBe(1);
        expect(ct4.blueMultiplier).toBe(1);
        expect(ct4.alphaMultiplier).toBe(1);
        expect(ct4.redOffset).toBe(0);
        expect(ct4.greenOffset).toBe(0);
        expect(ct4.blueOffset).toBe(0);
        expect(ct4.alphaOffset).toBe(0);
    });
});


describe("ColorTransform.js concat test", function()
{
    it("concat test", function()
    {
        var ct1 = new ColorTransform(0.1, 0.2, 0.3, 0.5, 50, 100, 150, 200);
        var ct2 = new ColorTransform(0.9, 0.8, 0.7, 0.6, -255, -200, -150, -100);
        ct1.concat(ct2);

        expect(ct1.toString()).toBe(
            "(redMultiplier=0.09000000000000001, greenMultiplier=0.16000000000000003, blueMultiplier=0.21, alphaMultiplier=0.3, redOffset=24.5, greenOffset=60, blueOffset=105, alphaOffset=150)"
        );
    });
});


describe("ColorTransform.js rgb test for AS2", function()
{
    it("rgb test", function()
    {
        // set
        var ct = new ColorTransform();
        ct.rgb = 0xFF0000;
        expect(ct.rgb).toBe(16711680);
    });
});


describe("ColorTransform.js color test for AS3", function()
{
    it("color test", function()
    {
        // get
        var ct1 = new ColorTransform(0.2, 0.2, 0.2, 1, 100, 100, 100, 100);
        expect(ct1.color).toBe(6579300);

        // set
        var ct2 = new ColorTransform();
        ct2.color = 0x00FF00;
        expect(ct2.color).toBe(65280);
    });
});
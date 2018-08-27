
describe("ColorTransform.js property test", function()
{

    it("test success", function() {

        var ct = new ColorTransform(0.1, 0.2, 0.3, 0.4, 1, 2, 3, 4);

        expect(ct.redMultiplier).toBe(0.1);
        expect(ct.greenMultiplier).toBe(0.2);
        expect(ct.blueMultiplier).toBe(0.3);
        expect(ct.alphaMultiplier).toBe(0.4);
        expect(ct.redOffset).toBe(1);
        expect(ct.greenOffset).toBe(2);
        expect(ct.blueOffset).toBe(3);
        expect(ct.alphaOffset).toBe(4);

    });

    it("clone test success", function() {

        var ct = new ColorTransform();
        var clone = ct._$clone();

        // ct
        ct.redMultiplier   = 0.1;
        ct.greenMultiplier = 0.2;
        ct.blueMultiplier  = 0.3;
        ct.alphaMultiplier = 0.4;
        ct.redOffset       = 1;
        ct.greenOffset     = 2;
        ct.blueOffset      = 3;
        ct.alphaOffset     = 4;

        expect(ct.redMultiplier).toBe(0.1);
        expect(ct.greenMultiplier).toBe(0.2);
        expect(ct.blueMultiplier).toBe(0.3);
        expect(ct.alphaMultiplier).toBe(0.4);
        expect(ct.redOffset).toBe(1);
        expect(ct.greenOffset).toBe(2);
        expect(ct.blueOffset).toBe(3);
        expect(ct.alphaOffset).toBe(4);


        expect(clone.redMultiplier).toBe(1);
        expect(clone.greenMultiplier).toBe(1);
        expect(clone.blueMultiplier).toBe(1);
        expect(clone.alphaMultiplier).toBe(1);
        expect(clone.redOffset).toBe(0);
        expect(clone.greenOffset).toBe(0);
        expect(clone.blueOffset).toBe(0);
        expect(clone.alphaOffset).toBe(0);

    });

    it("valid case1", function() {

        var ct = new ColorTransform("r", "g", "b", "a", "r", "g", "b", "a");

        expect(ct.redMultiplier).toBe(1);
        expect(ct.greenMultiplier).toBe(1);
        expect(ct.blueMultiplier).toBe(1);
        expect(ct.alphaMultiplier).toBe(1);
        expect(ct.redOffset).toBe(0);
        expect(ct.greenOffset).toBe(0);
        expect(ct.blueOffset).toBe(0);
        expect(ct.alphaOffset).toBe(0);

    });


    it("valid case2", function() {

        var ct = new ColorTransform();

        ct.redMultiplier = "r";
        ct.greenMultiplier = "g";
        ct.blueMultiplier = "b";
        ct.alphaMultiplier = "a";
        ct.redOffset = "r";
        ct.greenOffset = "g";
        ct.blueOffset = "b";
        ct.alphaOffset = "a";

        expect(ct.redMultiplier).toBe(1);
        expect(ct.greenMultiplier).toBe(1);
        expect(ct.blueMultiplier).toBe(1);
        expect(ct.alphaMultiplier).toBe(1);
        expect(ct.redOffset).toBe(0);
        expect(ct.greenOffset).toBe(0);
        expect(ct.blueOffset).toBe(0);
        expect(ct.alphaOffset).toBe(0);

    });


    it("valid case3", function() {

        var ct = new ColorTransform(
            1.1, 1.1, 1.1, 1.1,
            256, 256, 256, 256
        );

        expect(ct.redMultiplier).toBe(1);
        expect(ct.greenMultiplier).toBe(1);
        expect(ct.blueMultiplier).toBe(1);
        expect(ct.alphaMultiplier).toBe(1);
        expect(ct.redOffset).toBe(0);
        expect(ct.greenOffset).toBe(0);
        expect(ct.blueOffset).toBe(0);
        expect(ct.alphaOffset).toBe(0);

    });


    it("valid case4", function() {

        var ct = new ColorTransform(
            -1.1, -1.1, -1.1, -1.1,
            -256, -256, -256, -256
        );

        expect(ct.redMultiplier).toBe(1);
        expect(ct.greenMultiplier).toBe(1);
        expect(ct.blueMultiplier).toBe(1);
        expect(ct.alphaMultiplier).toBe(1);
        expect(ct.redOffset).toBe(0);
        expect(ct.greenOffset).toBe(0);
        expect(ct.blueOffset).toBe(0);
        expect(ct.alphaOffset).toBe(0);

    });


    it("rgb test", function()
    {

        var ct = new ColorTransform();
        ct.rgb = 0xFF0000;

        expect(ct.rgb).toBe(16711680);

    });


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

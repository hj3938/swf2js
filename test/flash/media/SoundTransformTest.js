
describe("SoundTransform.js toString test", function()
{

    // toString
    it("toString test success", function ()
    {
        var soundTransform = new SoundTransform();
        expect(soundTransform.toString()).toBe("[object SoundTransform]");
    });

});


describe("SoundTransform.js property test", function()
{

    // leftToLeft
    it("leftToLeft test success default", function ()
    {
        var soundTransform = new SoundTransform();
        expect(soundTransform.leftToLeft).toBe(1);
    });

    it("leftToLeft test success case1", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.leftToLeft = 100;
        expect(soundTransform.leftToLeft).toBe(100);
    });

    it("leftToLeft test success case2", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.leftToLeft = -32;
        expect(soundTransform.leftToLeft).toBe(-32);
    });

    it("leftToLeft test not a number case1", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.leftToLeft = "test";
        expect(isNaN(soundTransform.leftToLeft)).toBe(true);
    });

    it("leftToLeft test not a number case2", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.leftToLeft = "";
        expect(soundTransform.leftToLeft).toBe(0);
    });


    // leftToRight
    it("leftToRight test success default", function ()
    {
        var soundTransform = new SoundTransform();
        expect(soundTransform.leftToRight).toBe(0);
    });

    it("leftToRight test success case1", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.leftToRight = 100;
        expect(soundTransform.leftToRight).toBe(100);
    });

    it("leftToRight test success case2", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.leftToRight = -32;
        expect(soundTransform.leftToRight).toBe(-32);
    });

    it("leftToRight test not a number case1", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.leftToRight = "test";
        expect(isNaN(soundTransform.leftToRight)).toBe(true);
    });

    it("leftToRight test not a number case2", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.leftToRight = "";
        expect(soundTransform.leftToRight).toBe(0);
    });


    // pan
    it("pan test success default", function ()
    {
        var soundTransform = new SoundTransform();
        expect(soundTransform.pan).toBe(0);
    });

    it("pan test success case1", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.pan = 100;
        expect(soundTransform.pan).toBe(100);
    });

    it("pan test success case2", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.pan = -32;
        expect(soundTransform.pan).toBe(-32);
    });

    it("pan test success case3", function ()
    {
        var soundTransform = new SoundTransform(1, 1);
        expect(soundTransform.pan).toBe(1);
    });

    it("pan test success case4", function ()
    {
        var soundTransform = new SoundTransform(1, "test");
        expect(soundTransform.pan).toBe("");
    });

    it("pan test success case4", function ()
    {
        var soundTransform = new SoundTransform(1, 100);
        expect(isNaN(soundTransform.pan)).toBe(true);
    });

    it("pan test not a number case1", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.pan = "test";
        expect(isNaN(soundTransform.pan)).toBe(true);
    });

    it("pan test not a number case2", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.pan = "";
        expect(soundTransform.pan).toBe(0);
    });


    // rightToLeft
    it("rightToLeft test success case1", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.rightToLeft = 100;
        expect(soundTransform.rightToLeft).toBe(100);
    });

    it("rightToLeft test success case2", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.rightToLeft = -32;
        expect(soundTransform.rightToLeft).toBe(-32);
    });

    it("rightToLeft test not a number case1", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.rightToLeft = "test";
        expect(isNaN(soundTransform.rightToLeft)).toBe(true);
    });

    it("rightToLeft test not a number case2", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.rightToLeft = "";
        expect(soundTransform.rightToLeft).toBe(0);
    });


    // rightToRight
    it("rightToRight test success case1", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.rightToRight = 100;
        expect(soundTransform.rightToRight).toBe(100);
    });

    it("rightToRight test success case2", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.rightToRight = -32;
        expect(soundTransform.rightToRight).toBe(-32);
    });

    it("rightToRight test not a number case1", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.rightToRight = "test";
        expect(isNaN(soundTransform.rightToRight)).toBe(true);
    });

    it("rightToRight test not a number case2", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.rightToRight = "";
        expect(soundTransform.rightToRight).toBe(0);
    });


    // volume
    it("volume test success default", function ()
    {
        var soundTransform = new SoundTransform();
        expect(soundTransform.volume).toBe(1);
    });

    it("volume test success case1", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.volume = 100;
        expect(soundTransform.volume).toBe(100);
    });

    it("volume test success case2", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.volume = -32;
        expect(soundTransform.volume).toBe(-32);
    });

    it("volume test success case3", function ()
    {
        var soundTransform = new SoundTransform(100);
        expect(soundTransform.volume).toBe(100);
    });

    it("volume test success case4", function ()
    {
        var soundTransform = new SoundTransform("test");
        expect(soundTransform.volume).toBe("");
    });

    it("volume test not a number case1", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.volume = "test";
        expect(isNaN(soundTransform.volume)).toBe(true);
    });

    it("volume test not a number case2", function ()
    {
        var soundTransform = new SoundTransform();
        soundTransform.volume = "";
        expect(soundTransform.volume).toBe(0);
    });

});
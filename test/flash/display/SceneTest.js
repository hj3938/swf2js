
describe("Scene.js property test", function()
{

    // property
    it("property test", function()
    {
        var s = new Scene("test", [], 10);
        s.$addLabel("fl", 5);

        expect(s.name).toBe("test");
        expect(s.labels.length).toBe(1);
        expect(s.numFrames).toBe(10);
        expect(s.toString()).toBe("[object Scene]");
    });

    // readonly
    it("property readonly test", function()
    {
        var s = new Scene("test", [], 10);
        s.$addLabel("fl", 5);

        s.name      = "test2";
        s.labels    = [];
        s.numFrames = 1;

        expect(s.name).toBe("test");
        expect(s.labels.length).toBe(1);
        expect(s.numFrames).toBe(10);
    });

});
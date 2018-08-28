
describe("Scene.js property test", function()
{

    // name
    it("name test success case string", function ()
    {
        var scene = new Scene("test");
        expect(scene.name).toBe("test");
    });

    it("name test valid case1", function ()
    {
        var scene = new Scene(123);
        expect(scene.name).toBe("");
    });

    it("name test readonly", function ()
    {
        var scene  = new Scene("init");
        scene.name = "readonly";
        expect(scene.name).toBe("init");
    });


    // labels
    it("labels test success", function ()
    {
        var scene = new Scene("test", [1,2,3]);
        expect(scene.labels.length).toBe(3);
    });

    it("labels test valid case1", function ()
    {
        var scene = new Scene("", {});
        expect(scene.labels.length).toBe(0);
    });

    it("labels test readonly", function ()
    {
        var scene  = new Scene("test", [1,2,3]);
        scene.labels = [];
        expect(scene.labels.length).toBe(3);
    });


    // numFrames
    it("numFrames test success", function ()
    {
        var scene = new Scene("test", [1,2,3], 10);
        expect(scene.numFrames).toBe(10);
    });

    it("numFrames test valid case1", function ()
    {
        var scene = new Scene("test", [1,2,3], "abc");
        expect(scene.numFrames).toBe(1);
    });

    it("numFrames test readonly", function ()
    {
        var scene  = new Scene("test", [1,2,3], 10);
        scene.numFrames = 1;
        expect(scene.numFrames).toBe(10);
    });

});

describe("Scene.js toString test", function()
{

    // toString
    it("toString test success", function ()
    {
        var scene = new Scene();
        expect(scene.toString()).toBe("[object Scene]");
    });

});

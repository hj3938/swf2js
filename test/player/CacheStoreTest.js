

describe("CacheStore.js packages test", function()
{


    // destroy
    it("destroy test canvas", function()
    {
        var cs = new CacheStore();
        expect(cs._$pool.length).toBe(0);

        var canvas  = cs.getCanvas();
        var context = canvas.getContext("2d");

        expect(cs._$pool.length).toBe(0);

        cs.destroy(context);

        expect(cs._$pool.length).toBe(1);

    });


    // cache and store
    it("cache and store test", function()
    {
        var cs = new CacheStore();
        expect(cs._$store.length).toBe(0);

        var canvas  = cs.getCanvas();
        canvas.CACHE_TEXT = "test";

        var context = canvas.getContext("2d");
        cs.setCache("test", context);

        var length = 0;
        for (var key in cs._$store) {
            if (!cs._$store.hasOwnProperty(key)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(1);

        context = cs.getCache("test");
        expect(context.canvas.CACHE_TEXT).toBe("test");
    });


    // reset
    it("reset test", function()
    {
        var cs = new CacheStore();

        // cache set
        var canvas  = cs.getCanvas();
        var context = canvas.getContext("2d");
        cs.setCache("test", context);

        cs.reset();

        expect(cs._$pool.length).toBe(1);
        expect(cs._$store.length).toBe(0);

    });


    // generateKey
    it("generateKey test", function()
    {
        var cs = new CacheStore();
        var key = cs.generateKey("unq", []);

        expect(key).toBe("unq");

        key = cs.generateKey("unq", [0.5, 0.5, 0.2, 0.1, 0, 0, 0, 0]);

        expect(key).toBe("unq_127_127_51_0.1");

    });


});
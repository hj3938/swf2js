
describe("URLRequestHeader.js toString", function()
{
    it("toString", function () 
    {
        var h = new URLRequestHeader();
        expect(h.toString()).toBe("[object URLRequestHeader]");
    });
});


describe("URLRequestHeader.js property valid test", function()
{
    it("constructor success case1", function () 
    {
        var h = new URLRequestHeader("1", "2");
        expect(h.name).toBe("1");
        expect(h.value).toBe("2");
    });

    it("property success case2", function () 
    {
        var h = new URLRequestHeader("a", "b");
        h.name  = "1";
        h.value = "2";
        expect(h.name).toBe("1");
        expect(h.value).toBe("2");
    });

    it("constructor valid case1", function () 
    {
        var h = new URLRequestHeader(1, 2);
        expect(h.name).toBe("");
        expect(h.value).toBe("");
    });

    it("property valid case2", function () 
    {
        var h   = new URLRequestHeader("a", "b");
        h.name  = 1;
        h.value = 2;
        expect(h.name).toBe("a");
        expect(h.value).toBe("b");
    });

    it("property valid case3", function () 
    {
        var h   = new URLRequestHeader();
        h.name  = 1;
        h.value = 2;
        expect(h.name).toBe("");
        expect(h.value).toBe("");
    });
});
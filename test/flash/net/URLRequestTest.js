
describe("URLRequest.js toString test", function()
{
    it("toString", function () {
        var req = new URLRequest();
        expect(req.toString()).toBe("[object URLRequest]");
    });
});


describe("URLRequest.js properties test", function()
{
    it("contentType case1", function () {
        var req = new URLRequest();
        req.contentType = 100;
        expect(req.contentType).toBe("application/x-www-form-urlencoded");
    });

    it("contentType case2", function () {
        var req = new URLRequest();
        req.contentType = "text/html; charset=utf-8";
        expect(req.contentType).toBe("text/html; charset=utf-8");
    });

    it("data case1", function () {
        var req = new URLRequest();
        req.data = "data";
        expect(req.data).toBe(null);
    });

    it("data case2", function () {
        var req  = new URLRequest();
        req.data = new URLVariables("test=aaa");
        expect(req.data.test).toBe("aaa");
    });

    it("digest case1", function () {
        var req    = new URLRequest();
        req.digest = 10;
        expect(req.digest).toBe(null);
    });

    it("digest case2", function () {
        var req    = new URLRequest();
        req.digest = "abcd";
        expect(req.digest).toBe("abcd");
    });


});

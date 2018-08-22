
describe("URLRequest.js toString test", function()
{
    it("toString", function () 
    {
        var req = new URLRequest();
        expect(req.toString()).toBe("[object URLRequest]");
    });
});


describe("URLRequest.js properties test", function()
{


    it("contentType success", function () 
    {
        var req = new URLRequest();
        req.contentType = "text/html; charset=utf-8";
        expect(req.contentType).toBe("text/html; charset=utf-8");
    });

    it("contentType valid", function () 
    {
        var req = new URLRequest();
        req.contentType = 100;
        expect(req.contentType).toBe("application/x-www-form-urlencoded");
    });


    it("data success", function () 
    {
        var req  = new URLRequest();
        req.data = new URLVariables("test=aaa");
        expect(req.data.test).toBe("aaa");
    });

    it("data valid", function () 
    {
        var req = new URLRequest();
        req.data = "data";
        expect(req.data).toBe(null);
    });


    it("digest success", function () 
    {
        var req    = new URLRequest();
        req.digest = "abcd";
        expect(req.digest).toBe("abcd");
    });

    it("digest valid", function () 
    {
        var req    = new URLRequest();
        req.digest = 10;
        expect(req.digest).toBe(null);
    });


    it("digest success", function () 
    {
        var req    = new URLRequest();
        req.digest = "abcd";
        expect(req.digest).toBe("abcd");
    });

    it("digest valid", function () 
    {
        var req    = new URLRequest();
        req.digest = 10;
        expect(req.digest).toBe(null);
    });


    it("followRedirects success", function () 
    {
        var req    = new URLRequest();
        req.followRedirects = false;
        expect(req.followRedirects).toBe(false);
    });

    it("followRedirects valid", function () 
    {
        var req    = new URLRequest();
        req.followRedirects = 0;
        expect(req.followRedirects).toBe(true);
    });


    it("method success", function () 
    {
        var req    = new URLRequest();
        req.method = URLRequestMethod.POST;
        expect(req.method).toBe(URLRequestMethod.POST);
    });

    it("method valid", function () 
    {
        var req    = new URLRequest();
        req.method = 123;
        expect(req.method).toBe(URLRequestMethod.GET);
    });


    it("requestHeaders success", function () 
    {
        var req = new URLRequest();

        req.requestHeaders = [
            new URLRequestHeader("test", "aaa")
        ];

        for (var i = 0; req.requestHeaders.length > i; i++) {
            var requestHeader = req.requestHeaders[i];
            expect(requestHeader.name).toBe("test");
            expect(requestHeader.value).toBe("aaa");
        }
    });

    it("requestHeaders valid", function () 
    {
        var req = new URLRequest();
        req.requestHeaders = new URLRequestHeader("test", "aaa");
        expect(req.requestHeaders.length).toBe(0);
    });


    it("url success", function () 
    {
        var req = new URLRequest();
        req.url = "http://test.com";
        expect(req.url).toBe("http://test.com");
    });

    it("url valid", function () 
    {
        var req = new URLRequest();
        req.url = 123;
        expect(req.url).toBe("");
    });


    it("userAgent success", function () 
    {
        var req      = new URLRequest();
        req.userAgent = "iOS";
        expect(req.userAgent).toBe("iOS");
    });

    it("userAgent valid", function () 
    {
        var req       = new URLRequest();
        req.userAgent = 123;
        expect(req.userAgent).toBe(null);
    });
});

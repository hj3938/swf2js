
describe("URLRequestMethod.js property test", function()
{

    it("GET test", function () 
    {
        expect(URLRequestMethod.GET).toBe("GET");
    });

    it("DELETE test", function () 
    {
        expect(URLRequestMethod.DELETE).toBe("DELETE");
    });

    it("HEAD test", function () 
    {
        expect(URLRequestMethod.HEAD).toBe("HEAD");
    });

    it("OPTIONS test", function () 
    {
        expect(URLRequestMethod.OPTIONS).toBe("OPTIONS");
    });

    it("POST test", function () 
    {
        expect(URLRequestMethod.POST).toBe("POST");
    });

    it("PUT test", function () 
    {
        expect(URLRequestMethod.PUT).toBe("PUT");
    });

    it("length test", function () 
    {
        var length = 0;
        for (var idx in URLRequestMethod) {
            if (!URLRequestMethod.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(6);
    });
});
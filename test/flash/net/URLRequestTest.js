
describe("URLRequest.js test", function()
{
    it("toString", function () {
        var req = new URLRequest();
        expect(req.toString()).toBe("[object URLRequest]");
    });
});
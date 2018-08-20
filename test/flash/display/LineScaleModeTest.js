
describe("LineScaleMode.js property test", function()
{

    it("HORIZONTAL test", function () {
        expect(LineScaleMode.HORIZONTAL).toBe("horizontal");
    });

    it("NONE test", function () {
        expect(LineScaleMode.NONE).toBe("none");
    });

    it("NORMAL test", function () {
        expect(LineScaleMode.NORMAL).toBe("normal");
    });

    it("VERTICAL test", function () {
        expect(LineScaleMode.VERTICAL).toBe("vertical");
    });

});
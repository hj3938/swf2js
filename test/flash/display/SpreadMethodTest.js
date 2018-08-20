
describe("SpreadMethod.js property test", function()
{

    it("PAD test", function () {
        expect(SpreadMethod.PAD).toBe("pad");
    });

    it("REFLECT test", function () {
        expect(SpreadMethod.REFLECT).toBe("reflect");
    });

    it("REPEAT test", function () {
        expect(SpreadMethod.REPEAT).toBe("repeat");
    });

});

describe("JointStyle.js property test", function()
{

    it("BEVEL test", function () {
        expect(JointStyle.BEVEL).toBe("bevel");
    });

    it("MITER test", function () {
        expect(JointStyle.MITER).toBe("miter");
    });

    it("ROUND test", function () {
        expect(JointStyle.ROUND).toBe("round");
    });

});
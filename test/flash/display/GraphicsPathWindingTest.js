
describe("GraphicsPathWinding.js property test", function()
{

    it("EVEN_ODD test", function () {
        expect(GraphicsPathWinding.EVEN_ODD).toBe("evenOdd");
    });

    it("NON_ZERO test", function () {
        expect(GraphicsPathWinding.NON_ZERO).toBe("nonZero");
    });

    it("length test", function () {
        var length = 0;
        for (var idx in GraphicsPathWinding) {
            if (!GraphicsPathWinding.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(2);
    });

});
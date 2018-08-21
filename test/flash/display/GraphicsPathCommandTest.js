
describe("GraphicsPathCommand.js property test", function()
{

    it("NO_OP test", function () {
        expect(GraphicsPathCommand.NO_OP).toBe(0);
    });

    it("MOVE_TO test", function () {
        expect(GraphicsPathCommand.MOVE_TO).toBe(1);
    });

    it("LINE_TO test", function () {
        expect(GraphicsPathCommand.LINE_TO).toBe(2);
    });

    it("CURVE_TO test", function () {
        expect(GraphicsPathCommand.CURVE_TO).toBe(3);
    });

    it("WIDE_MOVE_TO test", function () {
        expect(GraphicsPathCommand.WIDE_MOVE_TO).toBe(4);
    });

    it("WIDE_LINE_TO test", function () {
        expect(GraphicsPathCommand.WIDE_LINE_TO).toBe(5);
    });

    it("CUBIC_CURVE_TO test", function () {
        expect(GraphicsPathCommand.CUBIC_CURVE_TO).toBe(6);
    });

    it("length test", function () {
        var length = 0;
        for (var idx in GraphicsPathCommand) {
            if (!GraphicsPathCommand.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(7);
    });

});

describe("Matrix.js property valid test and clone test", function()
{
    it("valid and clone test", function()
    {
        // valid
        var m1 = new Matrix("a", "b", "c", "d", "tx", "ty");
        m1.a   = "a";
        m1.b   = "b";
        m1.c   = "c";
        m1.d   = "d";
        m1.tx  = "tx";
        m1.ty  = "ty";

        // clone matrix
        var m2 = m1.clone();
        m2.a   = 1.2;
        m2.b   = 0.765;
        m2.c   = -0.872;
        m2.d   = -1.5;
        m2.tx  = 10;
        m2.ty  = -10;

        // origin
        expect(m1.a).toBe(1);
        expect(m1.b).toBe(0);
        expect(m1.c).toBe(0);
        expect(m1.d).toBe(1);
        expect(m1.tx).toBe(0);
        expect(m1.ty).toBe(0);

        // clone
        expect(m2.a).toBe(1.2);
        expect(m2.b).toBe(0.765);
        expect(m2.c).toBe(-0.872);
        expect(m2.d).toBe(-1.5);
        expect(m2.tx).toBe(10);
        expect(m2.ty).toBe(-10);
    });
});

describe("Matrix.js concat test", function()
{
    it("concat test", function()
    {
        var m1 = new Matrix(2, 1, -1, 1, 0, 5);
        var m2 = new Matrix(1.3, 0.75, 0, -1.5, 10, -10);
        m1.concat(m2);
        expect(m1.toString()).toBe(
            "(a=2.6, b=0, c=-1.3, d=-2.25, tx=10, ty=-17.5)"
        );
    });
});


describe("Matrix.js createGradientBox test", function()
{
    it("createGradientBox test", function()
    {
        var m = new Matrix();
        m.createGradientBox(1, 0, 10, 0, 0);
        expect(m.toString()).toBe(
            "(a=-0.0005121286188210769, b=0, c=0.0003320441350643127, d=0, tx=0.5, ty=0)"
        );
    });
});


describe("Matrix.js createBox test", function()
{
    it("createBox test", function()
    {
        var m = new Matrix(1, 0.5, -0.2);
        var sx = 2.0;
        var sy = 3.0;
        var r  = 2 * Math.PI * (45 / 360);
        var tx = 10;
        var ty = 20;
        m.createBox(sx, sy, r, tx, ty);
        console.log(m.toString());
        expect(m.toString()).toBe(
            "(a=1.4142135623730951, b=2.1213203435596424, c=-1.414213562373095, d=2.121320343559643, tx=10, ty=20)"
        );
    });
});



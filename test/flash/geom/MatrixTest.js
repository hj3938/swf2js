
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


describe("Matrix.js rotate test", function()
{
    it("rotate test", function()
    {
        var m = new Matrix(1, 0, 0, 1, 100, 110);
        m.rotate(45 / 180 * Math.PI);
        expect(m.toString()).toBe(
            "(a=0.7071067811865476, b=0.7071067811865475, c=-0.7071067811865475, d=0.7071067811865476, tx=-7.071067811865461, ty=148.49242404917499)"
        );
    });
});


describe("Matrix.js createGradientBox test", function()
{
    it("createGradientBox test", function()
    {
        var m = new Matrix();
        m.createGradientBox(1, 0, 9, 0, 0);
        expect(m.toString()).toBe(
            "(a=-0.0005561097789823468, b=0, c=-0.00025153716140243935, d=0, tx=0.5, ty=0)"
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
        expect(m.toString()).toBe(
            "(a=1.4142135623730951, b=2.1213203435596424, c=-1.414213562373095, d=2.121320343559643, tx=10, ty=20)"
        );
    });
});


describe("Matrix.js invert test", function()
{
    it("invert test", function()
    {
        var m = new Matrix(2, 1, 1, 2, -200, -200);
        m.invert();
        expect(m.toString()).toBe(
            "(a=0.6666666666666666, b=-0.3333333333333333, c=-0.3333333333333333, d=0.6666666666666666, tx=66.66666666666667, ty=66.66666666666667)"
        );
    });
});


describe("Matrix.js transformPoint test", function()
{
    it("transformPoint test", function()
    {
        var m = new Matrix(1, 0, 0, 1, 100, 110);
        m.rotate(45 / 180 * Math.PI);

        var p1 = new Point(2, 20);
        var p2 = m.transformPoint(p1);

        expect(p2.toString()).toBe(
            "(x=-19.798989873223313, y=164.04877323527904)"
        );
    });
});
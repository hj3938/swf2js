
describe("Rectangle.js property test", function()
{
    it("top test", function () {

        var r = new Rectangle(50, 50, 100, 100);
        expect(r.top).toBe(50);
        expect(r.bottom).toBe(150);

        // success
        r.top = 160;
        expect(r.toString()).toBe("(x=50, y=160, w=100, h=-10)");
        expect(r.bottom).toBe(150);
        expect(r.y).toBe(160);

        // error
        r.top = "a";
        expect(r.y+"").toBe("NaN");
        expect(r.height+"").toBe("NaN");
    });


    it("right test", function () {

        var r = new Rectangle(50, 100, 100, 100);
        expect(r.right).toBe(150);

        // success
        r.right = 20;
        expect(r.toString()).toBe("(x=50, y=100, w=-30, h=100)");

        // error
        r.right = "a";
        expect(r.right+"").toBe("NaN");
    });


    it("bottom test", function () {

        var r = new Rectangle(0, 100, 100, 100);
        expect(r.bottom).toBe(200);

        // success
        r.bottom = 50;
        expect(r.toString()).toBe("(x=0, y=100, w=100, h=-50)");

        // error
        r.bottom = "a";
        expect(r.height+"").toBe("NaN");
    });


    it("left test", function () {

        var r = new Rectangle(50, 50, 100, 100);
        expect(r.left).toBe(50);
        expect(r.right).toBe(150);

        // success
        r.left = 160;
        expect(r.toString()).toBe("(x=160, y=50, w=-10, h=100)");
        expect(r.right).toBe(150);
        expect(r.x).toBe(160);

        // error
        r.left = "a";
        expect(r.x+"").toBe("NaN");
        expect(r.width+"").toBe("NaN");
    });


    it("bottomRight test", function () {

        var r = new Rectangle(30, 50, 80, 100);
        var p = r.bottomRight;
        expect(p.toString()).toBe("(x=110, y=150)");

        r.bottomRight = new Point(10 ,10);
        expect(r.toString()).toBe("(x=30, y=50, w=-20, h=-40)");
    });


    it("topLeft test", function () {

        var r = new Rectangle(30, 50, 80, 100);
        var p = r.topLeft;
        expect(p.toString()).toBe("(x=30, y=50)");

        r.topLeft = new Point(10 ,10);
        expect(r.toString()).toBe("(x=10, y=10, w=100, h=140)");
    });


    it("size test", function () {

        var r = new Rectangle(30, 50, 80, 100);
        var p = r.size;
        expect(p.toString()).toBe("(x=80, y=100)");

        r.size = new Point(10 ,10);
        expect(r.toString()).toBe("(x=30, y=50, w=10, h=10)");
    });
});


describe("Rectangle.js clone test", function()
{
    it("clone test", function () {
        var r1 = new Rectangle(30, 50, 80, 100);
        var r2 = r1.clone();
        r2.x   = 100;

        expect(r1.toString()).toBe("(x=30, y=50, w=80, h=100)");
        expect(r2.toString()).toBe("(x=100, y=50, w=80, h=100)");
    });
});


describe("Rectangle.js contains test", function()
{
    it("contains test", function () {
        var r = new Rectangle(30, 50, 80, 100);
        expect(r.contains(30, 50)).toBe(true);
        expect(r.contains(110, 150)).toBe(false);
        expect(r.contains(109, 149)).toBe(true);
        expect(r.contains(20, 40)).toBe(false);
    });
});


describe("Rectangle.js containsPoint test", function()
{
    it("containsPoint test", function () {
        var r = new Rectangle(30, 50, 80, 100);

        var p1 = new Point(30, 50);
        expect(r.containsPoint(p1)).toBe(true);

        var p2 = new Point(110, 150);
        expect(r.containsPoint(p2)).toBe(false);

        var p3 = new Point(109, 149);
        expect(r.containsPoint(p3)).toBe(true);

        var p4 = new Point(20, 40);
        expect(r.containsPoint(p4)).toBe(false);
    });
});


describe("Rectangle.js containsRect test", function()
{
    it("containsRect test", function () {
        var r1 = new Rectangle(10, 10, 20, 20);
        var r2 = new Rectangle(15, 15, 5, 5);
        expect(r1.containsRect(r2)).toBe(true);

        var r3 = new Rectangle(10, 10, 20, 20);
        var r4 = new Rectangle(10, 10, 20, 20);
        expect(r3.containsRect(r4)).toBe(true);

        var r5 = new Rectangle(10, 10, 20, 20);
        var r6 = new Rectangle(9, 9, 20, 20);
        expect(r5.containsRect(r6)).toBe(false);

        var r7 = new Rectangle(10, 10, 20, 20);
        var r8 = new Rectangle(15, 15, 20, 20);
        expect(r7.containsRect(r8)).toBe(false);
    });
});



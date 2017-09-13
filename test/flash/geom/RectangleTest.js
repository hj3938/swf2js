
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


describe("Rectangle.js copyFrom test", function()
{
    it("copyFrom test", function () {
        var r1 = new Rectangle(10, 10, 20, 20);
        var r2 = new Rectangle(15, 15, 5, 5);

        r1.copyFrom(r2);
        expect(r1.toString()).toBe("(x=15, y=15, w=5, h=5)");
        expect(r2.toString()).toBe("(x=15, y=15, w=5, h=5)");

        r1.x      = 10;
        r1.y      = 10;
        r1.width  = 20;
        r1.height = 20;
        expect(r1.toString()).toBe("(x=10, y=10, w=20, h=20)");
        expect(r2.toString()).toBe("(x=15, y=15, w=5, h=5)");
    });
});


describe("Rectangle.js equals test", function()
{
    it("equals test", function () {
        var r1 = new Rectangle(10, 10, 20, 20);
        var r2 = new Rectangle(10, 10, 20, 20);
        expect(r1.equals(r2)).toBe(true);

        var r3 = new Rectangle(10, 10, 20, 20);
        var r4 = new Rectangle(15, 15, 5, 5);
        expect(r3.equals(r4)).toBe(false);
    });
});


describe("Rectangle.js inflate test", function()
{
    it("inflate test", function () {
        var r1 = new Rectangle(10, 10, 20, 20);
        r1.inflate(10, 10);
        expect(r1.toString()).toBe("(x=0, y=0, w=40, h=40)");

        var r2 = new Rectangle(10, 10, 20, 20);
        r2.inflate(20, 20);
        expect(r2.toString()).toBe("(x=-10, y=-10, w=60, h=60)");
    });
});


describe("Rectangle.js inflatePoint test", function()
{
    it("inflatePoint test", function () {
        var r1 = new Rectangle(10, 10, 20, 20);
        var p1 = new Point(10, 10);
        r1.inflatePoint(p1);
        expect(r1.toString()).toBe("(x=0, y=0, w=40, h=40)");

        var r2 = new Rectangle(10, 10, 20, 20);
        var p2 = new Point(20, 20);
        r2.inflatePoint(p2);
        expect(r2.toString()).toBe("(x=-10, y=-10, w=60, h=60)");
    });
});


describe("Rectangle.js intersection test", function()
{
    it("intersection test", function () {
        var r1 = new Rectangle(10, 10, 20, 20);
        var r2 = new Rectangle(5, 5, 5, 5);
        var r3 = r1.intersection(r2);
        expect(r3.toString()).toBe("(x=0, y=0, w=0, h=0)");

        var r4 = new Rectangle(10, 10, 20, 20);
        var r5 = new Rectangle(15, 15, 5, 5);
        var r6 = r4.intersection(r5);
        expect(r6.toString()).toBe("(x=15, y=15, w=5, h=5)");

        var r7 = new Rectangle(10, 10, 20, 20);
        var r8 = new Rectangle(5, 5, 25, 25);
        var r9 = r7.intersection(r8);
        expect(r9.toString()).toBe("(x=10, y=10, w=20, h=20)");
    });
});


describe("Rectangle.js intersects test", function()
{
    it("intersects test", function () {
        var r1 = new Rectangle(10, 10, 20, 20);
        var r2 = new Rectangle(5, 5, 5, 5);
        expect(r1.intersects(r2)).toBe(false);

        var r3 = new Rectangle(10, 10, 20, 20);
        var r4 = new Rectangle(5, 5, 25, 25);
        expect(r3.intersects(r4)).toBe(true);
    });
});


describe("Rectangle.js isEmpty test", function()
{
    it("isEmpty test", function () {
        var r1 = new Rectangle(10, 10, 20, 20);
        var r2 = new Rectangle(-55, -55, 0, 0);
        expect(r1.isEmpty()).toBe(false);
        expect(r2.isEmpty()).toBe(true);
    });
});


describe("Rectangle.js offset test", function()
{
    it("offset test", function () {
        var r1 = new Rectangle(10, 10, 20, 20);
        var r2 = new Rectangle(-55, -55, 0, 0);

        r1.offset(5, 8);
        r2.offset(60, 30);

        expect(r1.toString()).toBe("(x=15, y=18, w=20, h=20)");
        expect(r2.toString()).toBe("(x=5, y=-25, w=0, h=0)");
    });
});


describe("Rectangle.js offsetPoint test", function()
{
    it("offsetPoint test", function () {
        var r1 = new Rectangle(10, 10, 20, 20);
        var r2 = new Rectangle(-55, -55, 0, 0);

        r1.offsetPoint(new Point(5, 8));
        r2.offsetPoint(new Point(60, 30));

        expect(r1.toString()).toBe("(x=15, y=18, w=20, h=20)");
        expect(r2.toString()).toBe("(x=5, y=-25, w=0, h=0)");
    });
});

describe("Rectangle.js setEmpty test", function()
{
    it("setEmpty test", function () {
        var r1 = new Rectangle(10, 10, 20, 20);
        var r2 = new Rectangle(-55, -55, 0, 0);

        r1.setEmpty();
        r2.setEmpty();

        expect(r1.toString()).toBe("(x=0, y=0, w=0, h=0)");
        expect(r2.toString()).toBe("(x=0, y=0, w=0, h=0)");
    });
});


describe("Rectangle.js setTo test", function()
{
    it("setTo test", function () {
        var r1 = new Rectangle(10, 10, 20, 20);
        var r2 = new Rectangle(-55, -55, 0, 0);

        r1.setTo(5, 5, 5, 5);
        r2.setTo(10, 10, 10, 10);

        expect(r1.toString()).toBe("(x=5, y=5, w=5, h=5)");
        expect(r2.toString()).toBe("(x=10, y=10, w=10, h=10)");
    });
});


describe("Rectangle.js union test", function()
{
    it("union test", function () {
        var r1 = new Rectangle(10, 10, 0, 10);
        var r2 = new Rectangle(-55, -25, 0, 20);
        var r3 = r1.union(r2);
        expect(r3.toString()).toBe("(x=-55, y=-25, w=0, h=20)");

        var r4 = new Rectangle(10, 10, 10, 10);
        var r5 = new Rectangle(-55, -25, 0, 20);
        var r6 = r4.union(r5);
        expect(r6.toString()).toBe("(x=10, y=10, w=10, h=10)");

        var r7 = new Rectangle(10, 10, 10, 10);
        var r8 = new Rectangle(-55, -25, 20, 20);
        var r9 = r7.union(r8);
        expect(r9.toString()).toBe("(x=-55, y=-25, w=75, h=45)");
    });
});


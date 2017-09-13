
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

describe("Point.js property valid test and clone test", function() {

    it("valid and clone test", function () {

        // valid
        var p1 = new Point("a", "b");
        p1.x = "a";
        p1.y = "b";

        // clone
        var p2 = p1.clone();
        p2.x = 10;
        p2.y = 20;

        // origin
        expect(p1.x).toBe(0);
        expect(p1.y).toBe(0);

        // clone
        expect(p2.x).toBe(10);
        expect(p2.y).toBe(20);
        expect(p2.length).toBe(22.360679774997898);
        expect(p2.toString()).toBe("(x=10, y=20)");
    });




});
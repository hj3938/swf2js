describe("Matrix.js test", function() {

    var matrix = new Matrix();

    it("Matrix propertie test [a]", function() {
        expect(matrix.a).toBe(1);
    });

    it("Matrix propertie test [b]", function() {
        expect(matrix.b).toBe(0);
    });

    it("Matrix propertie test [c]", function() {
        expect(matrix.c).toBe(0);
    });

    it("Matrix propertie test [d]", function() {
        expect(matrix.d).toBe(1);
    });

    it("Matrix propertie test [tx]", function() {
        expect(matrix.tx).toBe(0);
    });

    it("Matrix propertie test [ty]", function() {
        expect(matrix.ty).toBe(0);
    });


});
describe("PlaceObject.js property test", function()
{

    // matrix
    it("matrix test success", function () 
    {
        var obj = new PlaceObject();

        var matrix = [2, 1, 1, 2, 10, 10];

        // set
        obj.matrix = matrix;

        matrix[0] = 99;
        matrix[1] = 100;
        matrix[2] = 101;
        matrix[3] = 102;
        matrix[4] = 103;
        matrix[5] = 104;

        expect(obj.matrix[0]).toBe(2);
        expect(obj.matrix[1]).toBe(1);
        expect(obj.matrix[2]).toBe(1);
        expect(obj.matrix[3]).toBe(2);
        expect(obj.matrix[4]).toBe(10);
        expect(obj.matrix[5]).toBe(10);

        expect(matrix[0]).toBe(99);
        expect(matrix[1]).toBe(100);
        expect(matrix[2]).toBe(101);
        expect(matrix[3]).toBe(102);
        expect(matrix[4]).toBe(103);
        expect(matrix[5]).toBe(104);

    });



});

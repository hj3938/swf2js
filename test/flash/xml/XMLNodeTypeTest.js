
describe("XMLNodeType.js property test", function()
{

    it("ELEMENT_NODE test", function () 
    {
        expect(XMLNodeType.ELEMENT_NODE).toBe(1);
    });

    it("TEXT_NODE test", function () 
    {
        expect(XMLNodeType.TEXT_NODE).toBe(3);
    });

    it("length test", function () 
    {
        var length = 0;
        for (var idx in XMLNodeType) {
            if (!XMLNodeType.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(2);
    });
});
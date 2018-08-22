
describe("ActionScriptVersion.js property test", function()
{

    it("ACTIONSCRIPT2 test", function ()
    {
        expect(ActionScriptVersion.ACTIONSCRIPT2).toBe(2);
    });

    it("ACTIONSCRIPT3 test", function ()
    {
        expect(ActionScriptVersion.ACTIONSCRIPT3).toBe(3);
    });

    it("length test", function ()
    {
        var length = 0;
        for (var idx in ActionScriptVersion) {
            if (!ActionScriptVersion.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(2);
    });

});
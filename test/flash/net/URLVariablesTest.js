
describe("URLRequest.js constructor test", function()
{
    it("constructor", function () {
        var vars = new URLVariables("firstName=Tom&lastName=Jones");
        expect(vars.toString()).toBe("firstName=Tom&lastName=Jones");
    });
});

describe("URLRequest.js toString test", function()
{
    it("toString test", function () {
        var vars = new URLVariables();
        expect(vars.toString()).toBe("");
    });
});

describe("URLRequest.js decode test", function()
{
    it("decode success case1", function () {
        var vars = new URLVariables();
        vars.decode("name=Toshiyuki Ienaga&age=100");
        expect(vars.toString()).toBe("name=Toshiyuki+Ienaga&age=100");
    });

    it("decode success case2", function () {
        var vars = new URLVariables();
        vars.decode("a=");
        expect(vars.toString()).toBe("a=");
    });

    it("decode valid case1", function () {
        var vars = new URLVariables();
        vars.decode("a");
        expect(vars.toString()).toBe("");
    });

    it("decode valid case2", function () {
        var vars = new URLVariables();
        vars.decode(100);
        expect(vars.toString()).toBe("");
    });
});

describe("URLRequest.js property test", function()
{
    it("property success case1", function () {
        var vars = new URLVariables();
        vars.name = "Toshiyuki Ienaga";
        vars.age  = 100;
        expect(vars.toString()).toBe("name=Toshiyuki+Ienaga&age=100");
    });

    it("property success case2", function () {
        var vars = new URLVariables();
        vars.name = "";
        expect(vars.toString()).toBe("name=");
    });

    it("property success case3", function () {
        var vars = new URLVariables();
        vars.a = "";
        vars.b = "";
        expect(vars.toString()).toBe("a=&b=");
    });
});

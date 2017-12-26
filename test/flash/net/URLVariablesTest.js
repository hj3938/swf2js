
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
    it("decode case1", function () {
        var vars = new URLVariables();
        vars.decode("name=Toshiyuki Ienaga&age=100");
        expect(vars.toString()).toBe("name=Toshiyuki+Ienaga&age=100");
    });

    it("decode case2", function () {
        var vars = new URLVariables();
        vars.decode("a");
        expect(vars.toString()).toBe("");
    });

    it("decode case3", function () {
        var vars = new URLVariables();
        vars.decode(100);
        expect(vars.toString()).toBe("");
    });

    it("decode case4", function () {
        var vars = new URLVariables();
        vars.decode("a=");
        expect(vars.toString()).toBe("a=");
    });
});

describe("URLRequest.js property test", function()
{
    it("property case1", function () {
        var vars = new URLVariables();
        vars.name = "Toshiyuki Ienaga";
        vars.age  = 100;
        expect(vars.toString()).toBe("name=Toshiyuki+Ienaga&age=100");
    });

    it("property case2", function () {
        var vars = new URLVariables();
        vars.name = "";
        expect(vars.toString()).toBe("name=");
    });

    it("property case3", function () {
        var vars = new URLVariables();
        vars.a = "";
        vars.b = "";
        expect(vars.toString()).toBe("a=&b=");
    });
});

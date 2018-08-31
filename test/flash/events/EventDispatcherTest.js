
describe("EventDispatcher.js toString test", function()
{

    // toString
    it("toString test success", function ()
    {
        var di = new EventDispatcher();
        expect(di.toString()).toBe("[object EventDispatcher]");
    });

});

describe("EventDispatcher.js addEventListener test", function()
{

    // addEventListener
    it("addEventListener test success case1", function ()
    {
        var di = new EventDispatcher();
        di.addEventListener("test", function () { return "OK"; });
        di.addEventListener("test", function () { return "NG"; });

        expect(di._$events["test"].length).toBe(2);
        expect(di._$events["test"][0]()).toBe("NG");
        expect(di._$events["test"][1]()).toBe("OK");
    });

    it("addEventListener test success case2", function ()
    {
        var di = new EventDispatcher();
        di.addEventListener("test", function () { return "OK"; }, false, 100);
        di.addEventListener("test", function () { return "NG"; }, false, 50);

        expect(di._$events["test"].length).toBe(101);
        expect(di._$events["test"][100]()).toBe("OK");
        expect(di._$events["test"][50]()).toBe("NG");
    });

    it("addEventListener test success case3", function ()
    {
        var di = new EventDispatcher();
        di.addEventListener(123, function () { return "OK"; }, false, 100);
        di.addEventListener(123, function () { return "NG"; }, false, 50);

        expect(di._$events["123"].length).toBe(101);
        expect(di._$events["123"][100]()).toBe("OK");
        expect(di._$events["123"][50]()).toBe("NG");
    });


    it("addEventListener test valid case1", function ()
    {
        var di = new EventDispatcher();
        di.addEventListener("test", {});
        di.addEventListener("test", []);
        di.addEventListener("test", function () { return "OK"; });

        expect(di._$events["test"].length).toBe(1);
        expect(di._$events["test"][0]()).toBe("OK");
    });

});


describe("EventDispatcher.js hasEventListener test", function()
{

    // hasEventListener
    it("hasEventListener test success", function ()
    {
        var di = new EventDispatcher();

        di.addEventListener("test1", function () { return "OK"; });
        di.addEventListener("test3", function () { return "NG"; });

        expect(di.hasEventListener("test1")).toBe(true);
        expect(di.hasEventListener("test2")).toBe(false);
        expect(di.hasEventListener("test3")).toBe(true);
        expect(di.hasEventListener("test4")).toBe(false);

    });

});


describe("EventDispatcher.js removeEventListener test", function()
{

    // removeEventListener
    it("removeEventListener test success", function ()
    {
        var di = new EventDispatcher();

        var test1 = function () { return "OK"; };
        var test2 = function () { return "OK"; };
        var test3 = function () { return "OK"; };

        di.addEventListener("test", test1, false, 10);
        di.addEventListener("test", test2, false, 20);
        di.addEventListener("test", test3, false, 30);

        di.removeEventListener("test", test2);

        expect(di._$events["test"][10]()).toBe("OK");
        expect(di._$events["test"][20]).toBe(undefined);
        expect(di._$events["test"][30]()).toBe("OK");
    });

});


describe("EventDispatcher.js dispatchEvent test", function()
{

    // dispatchEvent
    it("dispatchEvent test success case1", function ()
    {
        var di = new EventDispatcher();

        var s = "";
        var test1 = function () { return s += "O"; };
        var test2 = function () { return s += "K"; };
        var test3 = function () { return s += "!"; };

        di.addEventListener("test", test1);
        di.addEventListener("test", test2);
        di.addEventListener("test", test3);


        di.dispatchEvent(new Event("test"));

        expect(s).toBe("OK!");
    });


    it("dispatchEvent test success case2", function ()
    {
        var di = new EventDispatcher();

        var s = "";
        var test1 = function () { return s += "O"; };
        var test2 = function () { return s += "K"; };
        var test3 = function () { return s += "!"; };

        di.addEventListener("test", test2, false, 20);
        di.addEventListener("test", test1, false, 30);
        di.addEventListener("test", test3, false, 10);


        di.dispatchEvent(new Event("test"));

        expect(s).toBe("OK!");
    });


});


describe("EventDispatcher.js willTrigger test", function()
{

    // hasEventListener
    it("willTrigger test success case1", function ()
    {
        var player = new Player();

        var s1 = player.root.addChild(new Sprite());
        var s2 = player.root.addChild(new Sprite());
        var s3 = s2.addChild(new Sprite());

        s2.addEventListener("test", function () {});

        expect(s1.willTrigger("test")).toBe(false);
        expect(s2.willTrigger("test")).toBe(true);
        expect(s3.willTrigger("test")).toBe(true);

    });


    // hasEventListener
    it("willTrigger test success case2", function ()
    {
        var player = new Player();

        var s1 = player.root.addChild(new Sprite());
        var s2 = s1.addChild(new Sprite());
        var s3 = s2.addChild(new Sprite());

        s1.addEventListener("test", function () {});

        expect(s1.willTrigger("test")).toBe(true);
        expect(s2.willTrigger("test")).toBe(true);
        expect(s3.willTrigger("test")).toBe(true);

    });

});

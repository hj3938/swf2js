//
// describe("DisplayObject.js property test", function() {
//
//     // id
//     it("id test success", function () {
//         var obj = new DisplayObject();
//         obj.id = 1;
//         expect(obj.id).toBe(1);
//     });
//
//     it("id test valid case1", function () {
//         var obj = new DisplayObject();
//         obj.id = true;
//         expect(obj.id).toBe(null);
//     });
//
//     it("id test valid case2", function () {
//         var obj = new DisplayObject();
//         obj.id = "xyz";
//         expect(obj.id).toBe(null);
//     });
//
//     // stage
//     it("stage test success", function () {
//         var player = new Player();
//         var obj = player.stage.addChild(new DisplayObject());
//         expect(obj.stage.id).toBe(player.stage.id);
//     });
//
//     it("stage test valid case", function () {
//         var player = new Player();
//         var obj    = player.stage.addChild(new DisplayObject());
//         obj.stage  = new Stage();
//         expect(obj.stage.id).toBe(player.stage.id);
//     });
//
//
//     // parent
//     it("parent test success case1", function () {
//         var player = new Player();
//         var obj    = player.stage.addChild(new DisplayObject());
//         expect(obj.parent.id).toBe(player.stage.id);
//     });
//
//     it("parent test success case2", function () {
//         var player = new Player();
//         var root   = player.stage.root;
//         var obj    = root.addChild(new DisplayObject());
//         expect(obj.parent.id).toBe(root.id);
//     });
//
//     it("parent test valid", function () {
//         var player = new Player();
//         var obj    = player.stage.addChild(new DisplayObject());
//         obj.parent = null;
//         expect(obj.parent.id).toBe(player.stage.id);
//     });
//
//
//     // name
//     it("name test success case1", function () {
//         var player = new Player();
//         var obj    = player.stage.addChild(new DisplayObject());
//         obj.name   = "abc";
//         expect(obj.name).toBe("abc");
//     });
//
//     it("name test success case2", function () {
//         var player = new Player();
//         var obj    = player.stage.addChild(new DisplayObject());
//         obj.name   = 1;
//         expect(obj.name).toBe("1");
//     });
//
//
//     // index
//     it("index test success", function () {
//         var player = new Player();
//         var obj    = player.stage.addChild(new DisplayObject());
//         expect(obj.index).toBe(1);
//     });
//
//     it("name test valid", function () {
//         var player = new Player();
//         var obj    = player.stage.addChild(new DisplayObject());
//         obj.index  = 99;
//         expect(obj.index).toBe(1);
//     });
//
//
//
// });
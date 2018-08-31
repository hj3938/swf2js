
describe("EventPhase.js property test", function() {

    it("AT_TARGET test", function () {
        expect(EventPhase.AT_TARGET).toBe(2);
    });

    it("BUBBLING_PHASE test", function () {
        expect(EventPhase.BUBBLING_PHASE).toBe(3);
    });

    it("CAPTURING_PHASE test", function () {
        expect(EventPhase.CAPTURING_PHASE).toBe(1);
    });

});
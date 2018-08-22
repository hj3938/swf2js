
describe("Event.js property test", function()
{

    it("ACTIVATE test", function () 
    {
        expect(Event.ACTIVATE).toBe("activate");
    });

    it("ADDED test", function () 
    {
        expect(Event.ADDED).toBe("added");
    });

    it("ADDED_TO_STAGE test", function () 
    {
        expect(Event.ADDED_TO_STAGE).toBe("addedToStage");
    });

    it("BROWSER_ZOOM_CHANGE test", function () 
    {
        expect(Event.BROWSER_ZOOM_CHANGE).toBe("browserZoomChange");
    });

    it("CANCEL test", function () 
    {
        expect(Event.CANCEL).toBe("cancel");
    });

    it("CHANGE test", function () 
    {
        expect(Event.CHANGE).toBe("change");
    });

    it("CHANNEL_MESSAGE test", function () 
    {
        expect(Event.CHANNEL_MESSAGE).toBe("channelMessage");
    });

    it("CHANNEL_STATE test", function () 
    {
        expect(Event.CHANNEL_STATE).toBe("channelState");
    });

    it("CLEAR test", function () 
    {
        expect(Event.CLEAR).toBe("clear");
    });

    it("CLOSE test", function () 
    {
        expect(Event.CLOSE).toBe("close");
    });

    it("CLOSING test", function () 
    {
        expect(Event.CLOSING).toBe("closing");
    });

    it("COMPLETE test", function () 
    {
        expect(Event.COMPLETE).toBe("complete");
    });

    it("CONNECT test", function () 
    {
        expect(Event.CONNECT).toBe("connect");
    });

    it("CONTEXT3D_CREATE test", function () 
    {
        expect(Event.CONTEXT3D_CREATE).toBe("context3DCreate");
    });

    it("COPY test", function () 
    {
        expect(Event.COPY).toBe("copy");
    });

    it("CUT test", function () 
    {
        expect(Event.CUT).toBe("cut");
    });

    it("DEACTIVATE test", function () 
    {
        expect(Event.DEACTIVATE).toBe("deactivate");
    });

    it("DISPLAYING test", function () 
    {
        expect(Event.DISPLAYING).toBe("displaying");
    });

    it("ENTER_FRAME test", function () 
    {
        expect(Event.ENTER_FRAME).toBe("enterFrame");
    });

    it("EXIT_FRAME test", function () 
    {
        expect(Event.EXIT_FRAME).toBe("exitFrame");
    });

    it("EXITING test", function () 
    {
        expect(Event.EXITING).toBe("exiting");
    });

    it("FRAME_CONSTRUCTED test", function () 
    {
        expect(Event.FRAME_CONSTRUCTED).toBe("frameConstructed");
    });

    it("FRAME_LABEL test", function () 
    {
        expect(Event.FRAME_LABEL).toBe("frameLabel");
    });

    it("FULLSCREEN test", function () 
    {
        expect(Event.FULLSCREEN).toBe("fullScreen");
    });

    it("HTML_BOUNDS_CHANGE test", function () 
    {
        expect(Event.HTML_BOUNDS_CHANGE).toBe("htmlBoundsChange");
    });

    it("HTML_DOM_INITIALIZE test", function () 
    {
        expect(Event.HTML_DOM_INITIALIZE).toBe("htmlDOMInitialize");
    });

    it("HTML_RENDER test", function () 
    {
        expect(Event.HTML_RENDER).toBe("htmlRender");
    });

    it("ID3 test", function () 
    {
        expect(Event.ID3).toBe("id3");
    });

    it("INIT test", function () 
    {
        expect(Event.INIT).toBe("init");
    });

    it("LOCATION_CHANGE test", function () 
    {
        expect(Event.LOCATION_CHANGE).toBe("locationChange");
    });

    it("MOUSE_LEAVE test", function () 
    {
        expect(Event.MOUSE_LEAVE).toBe("mouseLeave");
    });

    it("OPEN test", function () 
    {
        expect(Event.OPEN).toBe("open");
    });

    it("PASTE test", function () 
    {
        expect(Event.PASTE).toBe("paste");
    });

    it("REMOVED test", function () 
    {
        expect(Event.REMOVED).toBe("removed");
    });

    it("REMOVED_FROM_STAGE test", function () 
    {
        expect(Event.REMOVED_FROM_STAGE).toBe("removedFromStage");
    });

    it("RENDER test", function () 
    {
        expect(Event.RENDER).toBe("render");
    });

    it("RESIZE test", function () 
    {
        expect(Event.RESIZE).toBe("resize");
    });

    it("SCROLL test", function () 
    {
        expect(Event.SCROLL).toBe("scroll");
    });

    it("SELECT test", function () 
    {
        expect(Event.SELECT).toBe("select");
    });

    it("SELECT_ALL test", function () 
    {
        expect(Event.SELECT_ALL).toBe("selectAll");
    });

    it("SOUND_COMPLETE test", function () 
    {
        expect(Event.SOUND_COMPLETE).toBe("soundComplete");
    });

    it("STANDARD_ERROR_CLOSE test", function () 
    {
        expect(Event.STANDARD_ERROR_CLOSE).toBe("standardErrorClose");
    });

    it("STANDARD_INPUT_CLOSE test", function () 
    {
        expect(Event.STANDARD_INPUT_CLOSE).toBe("standardInputClose");
    });

    it("STANDARD_OUTPUT_CLOSE test", function () 
    {
        expect(Event.STANDARD_OUTPUT_CLOSE).toBe("standardOutputClose");
    });

    it("TAB_CHILDREN_CHANGE test", function () 
    {
        expect(Event.TAB_CHILDREN_CHANGE).toBe("tabChildrenChange");
    });

    it("TAB_ENABLED_CHANGE test", function () 
    {
        expect(Event.TAB_ENABLED_CHANGE).toBe("tabEnabledChange");
    });

    it("TAB_INDEX_CHANGE test", function () 
    {
        expect(Event.TAB_INDEX_CHANGE).toBe("tabIndexChange");
    });

    it("FRAME_CONSTRUCTED test", function () 
    {
        expect(Event.FRAME_CONSTRUCTED).toBe("frameConstructed");
    });

    it("TEXT_INTERACTION_MODE_CHANGE test", function () 
    {
        expect(Event.TEXT_INTERACTION_MODE_CHANGE).toBe("textInteractionModeChange");
    });

    it("TEXTURE_READY test", function () 
    {
        expect(Event.TEXTURE_READY).toBe("textureReady");
    });

    it("UNLOAD test", function () 
    {
        expect(Event.UNLOAD).toBe("unload");
    });

    it("USER_IDLE test", function () 
    {
        expect(Event.USER_IDLE).toBe("userIdle");
    });

    it("USER_PRESENT test", function () 
    {
        expect(Event.USER_PRESENT).toBe("userPresent");
    });

    it("VIDEO_FRAME test", function () 
    {
        expect(Event.VIDEO_FRAME).toBe("videoFrame");
    });

    it("WORKER_STATE test", function () 
    {
        expect(Event.WORKER_STATE).toBe("workerState");
    });

    it("length test", function () 
    {
        var length = 0;
        for (var idx in Event) {
            if (!Event.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(54);
    });

});
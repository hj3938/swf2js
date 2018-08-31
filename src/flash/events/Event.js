/**
 * @param {string}  type
 * @param {boolean} bubbles
 * @param {boolean} cancelable
 * @constructor
 */
var Event = function (type, bubbles, cancelable)
{
    OriginalObject.call(this);
    
    // init
    this._$type = type + "";

    if (typeof bubbles === "boolean") {
        this._$bubbles = bubbles;
    }

    if (typeof cancelable === "boolean") {
        this._$cancelable = cancelable;
    }

    // origin param
    this._$target = null;
};

/**
 * @type {string}
 */
Event.ACTIVATE                     = "activate";
Event.ADDED                        = "added";
Event.ADDED_TO_STAGE               = "addedToStage";
Event.BROWSER_ZOOM_CHANGE          = "browserZoomChange";
Event.CANCEL                       = "cancel";
Event.CHANGE                       = "change";
Event.CHANNEL_MESSAGE              = "channelMessage";
Event.CHANNEL_STATE                = "channelState";
Event.CLEAR                        = "clear";
Event.CLOSE                        = "close";
Event.CLOSING                      = "closing";
Event.COMPLETE                     = "complete";
Event.CONNECT                      = "connect";
Event.CONTEXT3D_CREATE             = "context3DCreate";
Event.COPY                         = "copy";
Event.CUT                          = "cut";
Event.DEACTIVATE                   = "deactivate";
Event.DISPLAYING                   = "displaying";
Event.ENTER_FRAME                  = "enterFrame";
Event.EXIT_FRAME                   = "exitFrame";
Event.EXITING                      = "exiting";
Event.FRAME_CONSTRUCTED            = "frameConstructed";
Event.FRAME_LABEL                  = "frameLabel";
Event.FULLSCREEN                   = "fullScreen";
Event.HTML_BOUNDS_CHANGE           = "htmlBoundsChange";
Event.HTML_DOM_INITIALIZE          = "htmlDOMInitialize";
Event.HTML_RENDER                  = "htmlRender";
Event.ID3                          = "id3";
Event.INIT                         = "init";
Event.LOCATION_CHANGE              = "locationChange";
Event.MOUSE_LEAVE                  = "mouseLeave";
Event.OPEN                         = "open";
Event.PASTE                        = "paste";
Event.REMOVED                      = "removed";
Event.REMOVED_FROM_STAGE           = "removedFromStage";
Event.RENDER                       = "render";
Event.RESIZE                       = "resize";
Event.SCROLL                       = "scroll";
Event.SELECT                       = "select";
Event.SELECT_ALL                   = "selectAll";
Event.SOUND_COMPLETE               = "soundComplete";
Event.STANDARD_ERROR_CLOSE         = "standardErrorClose";
Event.STANDARD_INPUT_CLOSE         = "standardInputClose";
Event.STANDARD_OUTPUT_CLOSE        = "standardOutputClose";
Event.TAB_CHILDREN_CHANGE          = "tabChildrenChange";
Event.TAB_ENABLED_CHANGE           = "tabEnabledChange";
Event.TAB_INDEX_CHANGE             = "tabIndexChange";
Event.TEXT_INTERACTION_MODE_CHANGE = "textInteractionModeChange";
Event.TEXTURE_READY                = "textureReady";
Event.UNLOAD                       = "unload";
Event.USER_IDLE                    = "userIdle";
Event.USER_PRESENT                 = "userPresent";
Event.VIDEO_FRAME                  = "videoFrame";
Event.WORKER_STATE                 = "workerState";

/**
 * extends
 * @type {OriginalObject}
 */
Event.prototype = Object.create(OriginalObject.prototype);
Event.prototype.constructor = Event;

/**
 * properties
 */
Object.defineProperties(Event.prototype, {
    bubbles: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$bubbles;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {
        }
    },
    cancelable: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$cancelable;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {
        }
    },
    currentTarget: {
        /**
         * @return {object}
         */
        get: function () {
            return this._$target;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {
        }
    },
    eventPhase: {
        /**
         * @return {number}
         */
        get: function () {
            return EventPhase.AT_TARGET;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {
        }
    },
    target: {
        /**
         * @return {object}
         */
        get: function () {
            return this._$target;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {
        }
    },
    type: {
        /**
         * @return {string}
         */
        get: function () {
            return this._$type;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    }
});

/**
 * @return {Event}
 */
Event.prototype.clone = function ()
{
    var event = new Event(this.type, this.bubbles, this.cancelable);
    event._$target = this._$target;

    return event;
};

/**
 * @return {string}
 */
Event.prototype.toString = function ()
{
    return "[Event type=" + this.type
        + " bubbles="     + this.bubbles
        + " cancelable="  + this.cancelable
        + " eventPhase="  + this.eventPhase
        +"]";
};





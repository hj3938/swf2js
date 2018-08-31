/**
 * @constructor
 */
var EventDispatcher = function (target)
{
    OriginalObject.call(this);

    // origin param
    this._$events = {};
};

/**
 * extends
 * @type {OriginalObject}
 */
EventDispatcher.prototype = Object.create(OriginalObject.prototype);
EventDispatcher.prototype.constructor = EventDispatcher;

/**
 * properties
 */
Object.defineProperties(EventDispatcher.prototype, {
    onEnterFrame: {
        get: function () {
            return this.getOnEvent("onEnterFrame");
        },
        set: function (onEnterFrame) {
            this.setOnEvent("onEnterFrame", onEnterFrame);
        }
    },
    onPress: {
        get: function () {
            return this.getOnEvent("onPress");
        },
        set: function (onPress) {
            this.setOnEvent("onPress", onPress);
        }
    },
    onRelease: {
        get: function () {
            return this.getOnEvent("onRelease");
        },
        set: function (onRelease) {
            this.setOnEvent("onRelease", onRelease);
        }
    },
    onReleaseOutside: {
        get: function () {
            return this.getOnEvent("onReleaseOutside");
        },
        set: function (onReleaseOutside) {
            this.setOnEvent("onReleaseOutside", onReleaseOutside);
        }
    },
    onRollOver: {
        get: function () {
            return this.getOnEvent("onRollOver");
        },
        set: function (onRollOver) {
            this.setOnEvent("onRollOver", onRollOver);
        }
    },
    onRollOut: {
        get: function () {
            return this.getOnEvent("onRollOut");
        },
        set: function (onRollOut) {
            this.setOnEvent("onRollOut", onRollOut);
        }
    },
    onData: {
        get: function () {
            return this.getOnEvent("onData");
        },
        set: function (onData) {
            this.setOnEvent("onData", onData);
        }
    },
    onMouseDown: {
        get: function () {
            return this.getOnEvent("onMouseDown");
        },
        set: function (onMouseDown) {
            this.setOnEvent("onMouseDown", onMouseDown);
        }
    },
    onMouseUp: {
        get: function () {
            return this.getOnEvent("onMouseUp");
        },
        set: function (onMouseUp) {
            this.setOnEvent("onMouseUp", onMouseUp);
        }
    },
    onMouseMove: {
        get: function () {
            return this.getOnEvent("onMouseMove");
        },
        set: function (onMouseMove) {
            this.setOnEvent("onMouseMove", onMouseMove);
        }
    },
    onDragOut: {
        get: function () {
            return this.getOnEvent("onDragOut");
        },
        set: function (onDragOut) {
            this.setOnEvent("onDragOut", onDragOut);
        }
    },
    onDragOver: {
        get: function () {
            return this.getOnEvent("onDragOver");
        },
        set: function (onDragOver) {
            this.setOnEvent("onDragOver", onDragOver);
        }
    },
    onKeyDown: {
        get: function () {
            return this.getOnEvent("onKeyDown");
        },
        set: function (onKeyDown) {
            this.setOnEvent("onKeyDown", onKeyDown);
        }
    },
    onKeyUp: {
        get: function () {
            return this.getOnEvent("onKeyUp");
        },
        set: function (onKeyUp) {
            this.setOnEvent("onKeyUp", onKeyUp);
        }
    },
    onLoad: {
        get: function () {
            return this.getOnEvent("onLoad");
        },
        set: function (onLoad) {
            this.setOnEvent("onLoad", onLoad);
        }
    },
    onUnLoad: {
        get: function () {
            return this.getOnEvent("onUnLoad");
        },
        set: function (onUnLoad) {
            this.setOnEvent("onUnLoad", onUnLoad);
        }
    }
});

/**
 * @return {string}
 */
EventDispatcher.prototype.toString = function ()
{
    return "[object EventDispatcher]";
};

/**
 * @param  {string}   type
 * @return {boolean}
 */
EventDispatcher.prototype.hasOnEvent = function (type)
{
    return (type in this._$variables);
};

/**
 * @param   {string}   type
 * @returns {function}
 */
EventDispatcher.prototype.getOnEvent = function (type)
{
    return this.hasOnEvent(type) ? this._$variables[type]: null;
};

/**
 * @param {string} type
 * @param {*} action_script
 */
EventDispatcher.prototype.setOnEvent = function (type, action_script)
{
    this._$variables[type] = action_script;
};

/**
 * @param {string}   type
 * @param {Function} listener
 * @param {boolean}  use_capture
 * @param {number}   priority
 * @param {boolean}  use_weak_reference
 */
EventDispatcher.prototype.addEventListener = function (
    type, listener, use_capture, priority, use_weak_reference
) {
    if (typeof listener === "function") {

        // init
        type = type + "";
        if (!(type in this._$events)) {
            this._$events[type] = [];
        }

        // add
        if (typeof priority !== "number") {

            this._$events[type].unshift(listener);

        } else {

            // priority
            this._$events[type][priority] = listener;

        }
    }
};

/**
 *
 * @param  {Event}   event
 * @return {boolean}
 */
EventDispatcher.prototype.dispatchEvent = function (event)
{
    if (this.hasEventListener(event.type)) {

        event._$target = this;

        // set listeners
        var listeners = this._$events[event.type];

        // execute
        listeners.reverse();
        for (var idx in listeners) {

            if (!listeners.hasOwnProperty(idx)) {
                continue;
            }

            listeners[idx].apply(this, [event]);
        }
        listeners.reverse();

        return true;
    }

    return false;
};

/**
 * @param   {string} type
 * @returns {boolean}
 */
EventDispatcher.prototype.hasEventListener = function (type)
{
    return (type in this._$events);
};

/**
 * @param {string}   type
 * @param {Function} listener
 * @param {boolean}  use_capture
 */
EventDispatcher.prototype.removeEventListener = function (type, listener, use_capture)
{
    if (this.hasEventListener(type)) {

        var listeners = this._$events[type];
        for (var idx in listeners) {

            if (!listeners.hasOwnProperty(idx)) {
                continue;
            }

            if (listener === listeners[idx]) {

                delete listeners[idx];
                break;

            }

        }

    }
};

/**
 * @param  {string}  type
 * @return {boolean}
 */
EventDispatcher.prototype.willTrigger = function (type)
{
    if (this.hasEventListener(type)) {
        return true;
    }

    if (this.parent.toString() !== "[object MainTimeline]") {
        return this.parent.willTrigger(type);
    }

    return false;
};
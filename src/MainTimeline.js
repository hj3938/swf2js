/**
 * @constructor
 */
var MainTimeline = function ()
{
    MovieClip.call(this);
};

/**
 * extends
 */
MainTimeline.prototype = Object.create(MovieClip.prototype);
MainTimeline.prototype.constructor = MainTimeline;

/**
 * properties
 */
Object.defineProperties(MainTimeline.prototype, {
    root: {
        get: function () {
            return this;
        },
        set: function () {}
    },
    stage: {
        get: function () {
            return this.stage;
        },
        set: function () {}
    },
    parent: {
        get: function () {
            return this.stage;
        },
        set: function () {}
    }
});

/**
 * @returns {string}
 */
MainTimeline.prototype.toString = function ()
{
    return "[object MainTimeline]";
};
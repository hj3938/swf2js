/**
 * @constructor
 */
var MainTimeline = function ()
{
    MovieClip.call(this);

    // origin params
    this._$version             = 10;
    this._$actionScriptVersion = ActionScriptVersion.ACTIONSCRIPT2;
};

/**
 * extends
 * @type {MovieClip}
 */
MainTimeline.prototype = Object.create(MovieClip.prototype);
MainTimeline.prototype.constructor = MainTimeline;

/**
 * properties
 */
Object.defineProperties(MainTimeline.prototype, {
    version: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$version;
        },
        /**
         * @param {number} version
         */
        set: function (version) {
            if (typeof version !== "number") {
                version = 10;
            }
            this._$version = version;
        }
    },
    actionScriptVersion: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$actionScriptVersion;
        },
        /**
         * @param {number} action_script_version
         */
        set: function (action_script_version) {
            if (typeof actionScriptVersion !== "number") {
                action_script_version = ActionScriptVersion.ACTIONSCRIPT2;
            }
            this._$actionScriptVersion = action_script_version;
        }
    }
});

/**
 * @returns {string}
 */
MainTimeline.prototype.toString = function ()
{
    return "[object MainTimeline]";
};


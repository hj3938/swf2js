/**
 * @param {string} name
 * @param {array}  labels
 * @param {number} numFrames
 * @constructor
 */
var Scene = function (name, labels, numFrames)
{
    OriginalObject.call(this);

    this._$name = "";
    if (typeof name === "string") {
        this._$name = name + "";
    }

    this._$labels = [];
    if (this.$isArray(labels)) {
        this._$labels = labels;
    }

    this._$numFrames = 0;
    if (typeof numFrames === "number") {
        this._$numFrames = numFrames|0;
    }

    // origin param
    this._$offset = 0;
};

/**
 * extends
 * @type {OriginalObject}
 */
Scene.prototype = Object.create(OriginalObject.prototype);
Scene.prototype.constructor = Scene;

/**
 * properties
 */
Object.defineProperties(Scene.prototype, {
    labels: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$labels;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    name: {
        /**
         * @return {string}
         */
        get: function () {
            return this._$name;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    numFrames: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$numFrames;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    }
});

/**
 * @returns {string}
 */
Scene.prototype.toString = function ()
{
    return "[object Scene]";
};
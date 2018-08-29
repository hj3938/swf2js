/**
 * @param {number} vol
 * @param {number} panning
 * @constructor
 */
var SoundTransform = function (vol, panning)
{
    OriginalObject.call(this);

    // init
    this._$leftToLeft   = 1;
    this._$leftToRight  = 0;
    this._$pan          = 0;
    this._$rightToLeft  = 0;
    this._$rightToRight = 1;
    this._$volume       = 1;

    // volume
    if (vol !== undefined) {
        this._$volume = (typeof vol === "number") ? vol : "";
    }

    // pan
    if (panning !== undefined) {
        if (typeof panning === "number") {
            this._$pan = (panning > 1)
                ? +"NaN"
                : panning
        } else {
            this._$pan = "";
        }
    }
};

/**
 * extends
 * @type {OriginalObject}
 */
SoundTransform.prototype = Object.create(OriginalObject.prototype);
SoundTransform.prototype.constructor = SoundTransform;

/**
 * properties
 */
Object.defineProperties(SoundTransform.prototype, {
    leftToLeft: {
        /**
         * @return {number|NaN}
         */
        get: function () {
            return this._$leftToLeft;
        },
        /**
         * @param  {number} left_to_left
         * @return void
         */
        set: function (left_to_left) {
            this._$leftToLeft = +left_to_left;

        }
    },
    leftToRight: {
        /**
         * @return {number|NaN}
         */
        get: function () {
            return this._$leftToRight;
        },
        /**
         * @param  {number} left_to_right
         * @return void
         */
        set: function (left_to_right) {
            this._$leftToRight = +left_to_right;
        }
    },
    pan: {
        /**
         * @return {number|NaN|string}
         */
        get: function () {
            return this._$pan;
        },
        /**
         * @param  {number} pan
         * @return void
         */
        set: function (pan) {
            this._$pan = +pan;
        }
    },
    rightToLeft: {
        /**
         * @return {number|NaN}
         */
        get: function () {
            return this._$rightToLeft;
        },
        /**
         * @param  {number} right_to_left
         * @return void
         */
        set: function (right_to_left) {
            this._$rightToLeft = +right_to_left;
        }
    },
    rightToRight: {
        /**
         * @return {number|NaN}
         */
        get: function () {
            return this._$rightToRight;
        },
        /**
         * @param  {number} right_to_right
         * @return void
         */
        set: function (right_to_right) {
            this._$rightToRight = +right_to_right;
        }
    },
    volume: {
        /**
         * @return {number|NaN}
         */
        get: function () {
            return this._$volume;
        },
        /**
         * @param  {number} volume
         * @return void
         */
        set: function (volume) {
            this._$volume = +volume;
        }
    }
});

/**
 * @return {string}
 */
SoundTransform.prototype.toString = function ()
{
    return "[object SoundTransform]";
};
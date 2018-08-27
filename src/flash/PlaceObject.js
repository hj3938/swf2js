/**
 * @constructor
 */
var PlaceObject = function ()
{
    Util.call(this);

    this._$matrix         = new Matrix();
    this._$colorTransform = new ColorTransform();
    this._$filters        = null;
    this._$blendMode      = "normal";
};

/**
 * extends
 * @type {Util}
 */
PlaceObject.prototype = Object.create(Util.prototype);
PlaceObject.prototype.constructor = PlaceObject;


/**
 * properties
 */
Object.defineProperties(PlaceObject.prototype, {
    matrix: {
        /**
         * @returns {Matrix}
         */
        get: function () {
            return this._$matrix;
        },
        /**
         * @param   {Matrix} matrix
         * @returns void
         */
        set: function (matrix) {
            this._$matrix = matrix;
        }
    },
    colorTransform: {
        /**
         * @returns {ColorTransform}
         */
        get: function () {
            return this._$colorTransform;
        },
        /**
         * @param   {ColorTransform} colorTransform
         * @returns void
         */
        set: function (colorTransform) {
            this._$colorTransform = colorTransform;
        }
    },
    filters: {
        /**
         * @returns {array|null}
         */
        get: function () {
            return this._$filters;
        },
        /**
         * @param   {array} filters
         * @returns void
         */
        set: function (filters) {
            this._$filters = filters;
        }
    },
    blendMode: {
        /**
         * @returns {string}
         */
        get: function () {
            return this._$blendMode;
        },
        /**
         * @param   {string|number} blendMode
         * @returns void
         */
        set: function (blendMode) {
            this._$blendMode = this.getBlendName(blendMode);
        }
    }
});


/**
 * @param   {number|string} blendMode
 * @returns {string}
 */
PlaceObject.prototype.getBlendName = function (blendMode)
{
    var mode = null;
    switch (blendMode) {
        case 1:
        case "normal":
            mode = "normal";
            break;
        case 2:
        case "layer":
            mode = "layer";
            break;
        case 3:
        case "multiply":
            mode = "multiply";
            break;
        case 4:
        case "screen":
            mode = "screen";
            break;
        case 5:
        case "lighten":
            mode = "lighten";
            break;
        case 6:
        case "darken":
            mode = "darken";
            break;
        case 7:
        case "difference":
            mode = "difference";
            break;
        case 8:
        case "add":
            mode = "add";
            break;
        case 9:
        case "subtract":
            mode = "subtract";
            break;
        case 10:
        case "invert":
            mode = "invert";
            break;
        case 11:
        case "alpha":
            mode = "alpha";
            break;
        case 12:
        case "erase":
            mode = "erase";
            break;
        case 13:
        case "overlay":
            mode = "overlay";
            break;
        case 14:
        case "hardlight":
            mode = "hardlight";
            break;
        default:
            break;
    }
    return mode;
};

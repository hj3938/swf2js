/**
 * @constructor
 */
var PlaceObject = function ()
{
    this._$matrix         = [1, 0, 0, 1, 0, 0];
    this._$colorTransform = [1, 1, 1, 1, 0, 0, 0, 0];
    this._$filters        = null;
    this._$blendMode      = "normal";
    this._$clipDepth      = 0;
};

/**
 * extends
 */
PlaceObject.prototype = Object.create(Util.prototype);
PlaceObject.prototype.constructor = PlaceObject;


/**
 * properties
 */
Object.defineProperties(PlaceObject.prototype, {
    matrix: {
        /**
         * @returns {array}
         */
        get: function () {
            return this._$matrix;
        },
        /**
         * @param {array} matrix
         */
        set: function (matrix) {
            this._$matrix = this.$cloneArray(matrix);
        }
    },
    colorTransform: {
        /**
         * @returns {array}
         */
        get: function () {
            return this._$colorTransform;
        },
        /**
         * @param {array} colorTransform
         */
        set: function (colorTransform) {
            this._$colorTransform = this.$cloneArray(colorTransform);
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
         * @param {array} filters
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
         * @param {string|number} blendMode
         */
        set: function (blendMode) {
            this._$blendMode = this.getBlendName(blendMode);
        }
    },
    clipDepth: {
        /**
         * @returns {number}
         */
        get: function () {
            return this._$clipDepth;
        },
        /**
         * @param {number} clipDepth
         */
        set: function (clipDepth) {
            this._$clipDepth = clipDepth|0;
        }
    }

});

/**
 * @returns {PlaceObject}
 */
PlaceObject.prototype.clone = function ()
{
    var placeObject            = new PlaceObject();
    placeObject.matrix         = this.matrix;
    placeObject.colorTransform = this.colorTransform;
    placeObject.filters        = this.filters;
    placeObject.blendMode      = this.blendMode;
    placeObject.ratio          = this.ratio;
    placeObject.clipDepth      = this.clipDepth;
    return placeObject;
};

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

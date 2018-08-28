/**
 * @param {DisplayObject} src
 * @constructor
 */
var Transform = function (src)
{
    OriginalObject.call(this);

    // properties
    this._$colorTransform        = null;
    this._$matrix                = null;
    this._$matrix3D              = null;
    this._$perspectiveProjection = null;
    this._$pixelBounds           = null;

    // origin param
    this._$displayObject         = src;
};

/**
 * extends
 * @type {OriginalObject}
 */
Transform.prototype = Object.create(OriginalObject.prototype);
Transform.prototype.constructor = Transform;


/**
 * properties
 */
Object.defineProperties(Transform.prototype, {
    colorTransform: {
        /**
         * @return {ColorTransform}
         */
        get: function () {
            return (this._$colorTransform === null)
                ? this._$displayObject._$getPlaceObject().colorTransform
                : this._$colorTransform;
        },
        /**
         * @param  {ColorTransform} colorTransform
         * @return void
         */
        set: function (colorTransform) {
            if (colorTransform instanceof ColorTransform) {
                this._$colorTransform = colorTransform._$clone();
            }
        }
    },
    matrix: {
        /**
         * @return {Matrix}
         */
        get: function () {
            return (this._$matrix === null)
                ? this._$displayObject._$getPlaceObject().matrix
                : this._$matrix;
        },
        /**
         * @param  {Matrix} matrix
         * @return void
         */
        set: function (matrix) {
            if (matrix instanceof Matrix) {
                this._$matrix = matrix._$clone();
            }
        }
    },
    matrix3D: {
        get: function () {
            return this._$matrix3D;
        },
        set: function (matrix3D) {
            if (matrix3D instanceof Matrix3D) {
                this._$matrix3D = matrix3D;
            }
        }
    },
    perspectiveProjection: {
        get: function () {
            return this._$perspectiveProjection;
        },
        set: function (perspective_projection) {
            if (perspective_projection instanceof PerspectiveProjection) {
                this._$perspectiveProjection = perspective_projection;
            }
        }
    },
    pixelBounds: {
        get: function () {
            return this._$pixelBounds;
        },
        set: function () {} // readonly
    },
    concatenatedColorTransform: {
        get: function () {

        },
        set: function () {} // readonly
    },
    concatenatedMatrix: {
        get: function () {

        },
        set: function () {} // readonly
    }
});

/**
 * @returns {string}
 */
Transform.prototype.toString = function ()
{
    return "[object Transform]";
};

/**
 * @param {DisplayObject} relativeTo
 * @returns {Matrix3D}
 */
Transform.prototype.getRelativeMatrix3D = function (relativeTo)
{
    // todo
    return new Matrix3D();
};
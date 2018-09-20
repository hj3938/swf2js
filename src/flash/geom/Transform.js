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
    this._$filters               = null;
    this._$blendMode             = null;
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

            if (this._$colorTransform) {

                return this._$colorTransform;

            } else {

                var placeObject = this._$displayObject._$getPlaceObject();
                if (placeObject) {

                    return placeObject.colorTransform;

                }

                this._$transform();
                return this._$colorTransform;

            }

        },
        /**
         * @param  {ColorTransform} colorTransform
         * @return void
         */
        set: function (colorTransform) {
            if (colorTransform instanceof ColorTransform) {
                this._$transform(null, colorTransform._$colorTransform, null, null);
            }
        }
    },
    matrix: {
        /**
         * @return {Matrix}
         */
        get: function () {
            if (this._$matrix) {

                return this._$matrix;

            } else {

                var placeObject = this._$displayObject._$getPlaceObject();
                if (placeObject) {

                    return placeObject.matrix;

                }

                this._$transform();
                return this._$matrix;

            }
        },
        /**
         * @param  {Matrix} matrix
         * @return void
         */
        set: function (matrix) {
            if (matrix instanceof Matrix) {
                this._$transform(matrix._$matrix, null, null, null);
            }
        }
    },
    // TODO
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
    // TODO
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
    // TODO
    pixelBounds: {
        get: function () {
            return this._$pixelBounds;
        },
        set: function () {} // readonly
    },
    // TODO
    concatenatedColorTransform: {
        get: function () {

        },
        set: function () {} // readonly
    },
    // TODO
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

/**
 * @param  {array|null}  matrix
 * @param  {array|null}  color_transform
 * @param  {array|null}  filters
 * @param  {string|null} blend_mode
 * @return void
 */
Transform.prototype._$transform = function (matrix, color_transform, filters, blend_mode)
{
    var placeObject = this._$displayObject._$getPlaceObject();

    // Matrix
    switch (!matrix) {

        case true:

            this._$matrix = (!placeObject) ? new Matrix() : placeObject.matrix._$clone();

            break;

        default:

            this._$matrix = new Matrix();
            this._$matrix._$matrix = this.$cloneArray(matrix);

            break;
    }


    // ColorTransform
    switch (!color_transform) {

        case true:

            this._$colorTransform = (!placeObject) ?  new ColorTransform() : placeObject.colorTransform._$clone();

            break;

        default:

            this._$colorTransform = new ColorTransform(
                color_transform[0],
                color_transform[1],
                color_transform[2],
                color_transform[3],
                color_transform[4],
                color_transform[5],
                color_transform[6],
                color_transform[7]
            );

            break;
    }


    // Filter
    switch (this.$isArray(filters)) {

        case true:

            this._$filters = filters;

            break;

        default:

            this._$filters = (!placeObject) ? [] : placeObject.filters;

            break;
    }


    // BlendMode
    switch (!blend_mode) {

        case true:

            this._$blendMode = (!placeObject) ? BlendMode.NORMAL : placeObject.blendMode;

            break;

        default:

            this._$blendMode = blend_mode;

            break;
    }

};
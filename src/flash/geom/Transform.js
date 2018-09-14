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
    if (matrix) {

        if (!this._$matrix) {
            this._$matrix = new Matrix();
        }

        this._$matrix._$matrix = matrix;

    } else if (!this._$matrix) {

        if (!placeObject) {

            this._$matrix = new Matrix();

        } else {

            this._$matrix = placeObject.matrix._$clone();

        }

    }


    // ColorTransform
    if (color_transform) {

        if (!this._$colorTransform) {
            this._$colorTransform = new ColorTransform();
        }

        this._$colorTransform._$colorTransform = color_transform;

    } else if (!this._$colorTransform) {

        if (!placeObject) {

            this._$colorTransform = new ColorTransform();

        } else {

            this._$colorTransform = placeObject.colorTransform._$clone();

        }

    }


    // Filter
    if (this.$isArray(filters)) {

        this._$filters = filters;

    } else if (!this._$filters) {

        if (!placeObject) {

            this._$filters = [];

        } else {

            this._$filters = placeObject.filters;

        }

    }


    // BlendMode
    if (blend_mode) {

        this._$blendMode = blend_mode;

    } else if (!this._$blendMode) {

        if (!placeObject) {

            this._$blendMode = "normal";

        } else {

            this._$blendMode = placeObject.blendMode;

        }

    }

};
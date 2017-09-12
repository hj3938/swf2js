/**
 * @constructor
 */
var Transform = function ()
{
    this._colorTransform        = new ColorTransform();
    this._matrix                = new Matrix();
    this._matrix3D              = new Matrix3D();
    this._perspectiveProjection = new PerspectiveProjection();
    this._pixelBounds           = new Rectangle();
};

/**
 * util
 */
Transform.prototype = Object.create(OriginalObject.prototype);
Transform.prototype.constructor = Transform;


/**
 * properties
 */
Object.defineProperties(Transform.prototype, {
    colorTransform: {
        get: function () {
            return this._colorTransform;
        },
        set: function (colorTransform) {
            if (colorTransform instanceof ColorTransform) {
                this._colorTransform = colorTransform;
            }
        }
    },
    matrix: {
        get: function () {
            return this._matrix;
        },
        set: function (matrix) {
            if (matrix instanceof Matrix) {
                this._matrix = matrix;
            }
        }
    },
    matrix3D: {
        get: function () {
            return this._matrix3D;
        },
        set: function (matrix3D) {
            if (matrix3D instanceof Matrix3D) {
                this._matrix3D = matrix3D;
            }
        }
    },
    perspectiveProjection: {
        get: function () {
            return this._perspectiveProjection;
        },
        set: function (perspectiveProjection) {
            if (perspectiveProjection instanceof PerspectiveProjection) {
                this._perspectiveProjection = perspectiveProjection;
            }
        }
    },
    pixelBounds: {
        get: function () {
            return this._pixelBounds;
        },
        set: function (pixelBounds) {
            if (pixelBounds instanceof Rectangle) {
                this._pixelBounds = pixelBounds;
            }
        }
    },
    concatenatedColorTransform: {
        get: function () {

        },
        set: function () {}
    },
    concatenatedMatrix: {
        get: function () {

        },
        set: function () {}
    }
});



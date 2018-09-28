/**
 * @param {number}  thickness
 * @param {boolean} pixel_hinting
 * @param {string}  scale_mode
 * @param {string}  caps
 * @param {string}  joints
 * @param {number}  miter_limit
 * @param {*} fill
 * @constructor
 */
var GraphicsStroke = function (
    thickness, pixel_hinting, scale_mode,
    caps, joints, miter_limit, fill
) {

    // default
    this._$thickness    = 0;
    this._$pixelHinting = false;
    this._$scaleMode    = LineScaleMode.NORMAL;
    this._$caps         = CapsStyle.NONE;
    this._$joints       = JointStyle.ROUND;
    this._$miterLimit   = 10;
    this._$fill         = null;

    // init
    this.thickness    = thickness;
    this.pixelHinting = pixel_hinting;
    this.scaleMode    = scale_mode;
    this.caps         = caps;
    this.joints       = joints;
    this.miterLimit   = miter_limit;
    this.fill         = fill;
};

/**
 * extends
 * @type {OriginalObject}
 */
GraphicsStroke.prototype = Object.create(OriginalObject.prototype);
GraphicsStroke.prototype.constructor = GraphicsStroke;

/**
 * properties
 */
Object.defineProperties(GraphicsStroke.prototype, {
    caps: {
        /**
         * @returns {string}
         */
        get: function () {
            return this._$caps;
        },
        /**
         * @param  {string} caps
         * @return void
         */
        set: function (caps) {

            switch (caps) {

                case CapsStyle.ROUND:
                case CapsStyle.SQUARE:
                    this._$caps = caps;
                    break;

                default:
                    this._$caps = CapsStyle.NONE;
                    break;

            }
        }
    },
    fill: {
        /**
         * @return {*}
         */
        get: function () {
            return this._$fill;
        },
        /**
         * @param {*} fill
         */
        set: function (fill) {
            this._$fill = fill;
        }
    },
    joints: {
        /**
         * @return {string}
         */
        get: function () {
            return this._$joints;
        },
        /**
         * @param  {string} joints
         * @return void
         */
        set: function (joints) {

            switch (joints) {

                case JointStyle.BEVEL:
                case JointStyle.MITER:
                    this._$joints = joints;
                    break;

                default:
                    this._$joints = JointStyle.ROUND;
                    break;

            }

        }
    },
    miterLimit: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$miterLimit;
        },
        /**
         * @param  {number} miter_limit
         * @return void
         */
        set: function (miter_limit) {

            miter_limit = +miter_limit;

            if (this.$isNaN(miter_limit)) {
                miter_limit = 10;
            }

            if (miter_limit < 1) {
                miter_limit = 1;
            }

            if (miter_limit > 255) {
                miter_limit = 255;
            }

            this._$miterLimit = miter_limit;
        }
    },
    pixelHinting: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$pixelHinting;
        },
        /**
         * @param  {boolean} pixel_hinting
         * @return void
         */
        set: function (pixel_hinting) {
            if (typeof pixel_hinting === "boolean") {
                this._$pixelHinting = pixel_hinting;
            }
        }
    },
    scaleMode: {
        /**
         * @return {string}
         */
        get: function () {
            return this._$scaleMode;
        },
        /**
         * @param  {string} scale_mode
         * @return void
         */
        set: function (scale_mode) {

            switch (scale_mode) {

                case LineScaleMode.HORIZONTAL:
                case LineScaleMode.NONE:
                case LineScaleMode.NORMAL:
                case LineScaleMode.VERTICAL:
                    this._$scaleMode = scale_mode;
                    break;

                default:
                    this._$scaleMode = LineScaleMode.NORMAL;
                    break;
            }

        }
    },
    thickness: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$thickness / 20;
        },
        /**
         * @param  {number} thickness
         * @return void
         */
        set: function (thickness) {

            thickness = +thickness;
            if (this.$isNaN(thickness)) {
                thickness = 0;
            }

            if (thickness < 0) {
                thickness = 0;
            }

            if (thickness > 255) {
                thickness = 255;
            }

            this._$thickness = +(thickness * 20);
        }
    }
});

/**
 * @return {string}
 */
GraphicsStroke.prototype.toString = function ()
{
    return "[object GraphicsStroke]";
};
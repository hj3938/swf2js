/**
 * @constructor
 */
var Bitmap = function (bitmap_data, pixel_snapping, smoothing)
{
    DisplayObject.call(this);

    // default
    this._$bitmapData    = null;
    this._$pixelSnapping = PixelSnapping.AUTO;
    this._$smoothing     = false;

    // init
    this.bitmapData    = bitmap_data;
    this.pixelSnapping = pixel_snapping;
    this.smoothing     = smoothing;
};

/**
 * @type {DisplayObject}
 */
Bitmap.prototype = Object.create(DisplayObject.prototype);
Bitmap.prototype.constructor = Bitmap;

/**
 * properties
 */
Object.defineProperties(Bitmap.prototype, {
    bitmapData: {
        /**
         * @return {BitmapData|null}
         */
        get: function () {
            return this._$bitmapData;
        },
        /**
         * @param {BitmapData} bitmap_data
         */
        set: function (bitmap_data) {

            // reset
            this._$bitmapData = null;

            if (bitmap_data instanceof BitmapData) {
                this._$bitmapData = bitmap_data;
            }

        }
    },
    pixelSnapping: {
        /**
         * @return {string}
         */
        get: function () {
            return this._$pixelSnapping;
        },
        /**
         *
         * @param {string} pixel_snapping
         */
        set: function (pixel_snapping) {

            switch (pixel_snapping) {

                case PixelSnapping.ALWAYS:
                case PixelSnapping.NEVER:

                    this._$pixelSnapping = pixel_snapping;

                    break;

                default:

                    this._$pixelSnapping = PixelSnapping.AUTO;

                    break;
            }

        }
    },
    smoothing: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$smoothing;
        },
        /**
         * @param {boolean} smoothing
         */
        set: function (smoothing) {
            if (typeof smoothing === "boolean") {
                this._$smoothing = smoothing;
            }
        }
    }
});

/**
 * @returns {string}
 */
Bitmap.prototype.toString = function ()
{
    return "[object Bitmap]";
};

/**
 * @param   {array}   matrix
 * @param   {array}   color_transform
 * @param   {boolean} is_clip
 * @param   {boolean} visible
 * @returns void
 */
Bitmap.prototype._$draw = function (matrix, color_transform, is_clip, visible)
{

    // not set
    if (!this.bitmapData) {
        return ;
    }

    // bitmap data
    var image  = this.bitmapData._$context;
    var width  = image.canvas.width|0;
    var height = image.canvas.height|0;

    var alpha = +(color_transform[3] + (color_transform[7] / 255));
    if (visible && alpha && width && height) {

        var ctx = this.parent.stage.player.preContext;

        // color transform
        if (color_transform[0] !== 1 ||
            color_transform[1] !== 1 ||
            color_transform[2] !== 1 ||
            color_transform[4] ||
            color_transform[5] ||
            color_transform[6]
        ) {

            var canvas       = this.$cacheStore.getCanvas();
            canvas.width     = width|0;
            canvas.height    = height|0;

            var context = canvas.getContext("2d");
            context.drawImage(image.canvas, 0, 0, width, height);

            image = this.$generateImageTransform(context, color_transform);

        }

        if ("imageSmoothingEnabled" in ctx) {
            ctx.imageSmoothingEnabled = this.smoothing;
        }

        ctx.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
        ctx.drawImage(image.canvas, 0, 0, width, height);

        if (is_clip) {
            ctx.clip();
        }

        // reset
        if ("imageSmoothingEnabled" in ctx) {
            ctx.imageSmoothingEnabled = false;
        }
    }

};
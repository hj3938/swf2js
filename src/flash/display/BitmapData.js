/**
 * @param {number}  width
 * @param {number}  height
 * @param {boolean} transparent
 * @param {number}  fill_color
 * @constructor
 */
var BitmapData = function (width, height, transparent, fill_color)
{
    OriginalObject.call(this);

    // init
    this._$rect        = new Rectangle(0, 0, width|0, height|0);
    this._$transparent = (typeof transparent === "boolean") ? transparent : true;

    // origin param
    this._$lock       = false;
    this._$fillColor = fill_color|0;



    // create canvas
    if (this._$rect._$width && this._$rect._$height) {

        var canvas     = this.$cacheStore.getCanvas();
        canvas.width   = this._$rect._$width;
        canvas.height  = this._$rect._$height;
        this._$context = canvas.getContext("2d");

        // fill style
        var color;
        switch (this._$transparent) {

            case true:

                color = this.$uintToARGB(fill_color|0);

                break;

            default:

                color = this.$intToRGBA(fill_color|0, 100);

                break;
        }
        this._$context.fillStyle = "rgba("+ color.R +","+ color.G +","+ color.B +","+ color.A +")";


        this._$context.fillRect(0, 0, canvas.width, canvas.height);
        this._$context.fill();
    }

};

/**
 * extends
 * @type {OriginalObject}
 */
BitmapData.prototype = Object.create(OriginalObject.prototype);
BitmapData.prototype.constructor = BitmapData;

/**
 * properties
 */
Object.defineProperties(BitmapData.prototype, {
    height: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$rect.height;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    rect: {
        /**
         * @return {Rectangle}
         */
        get: function () {
            return this._$rect;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    transparent: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$transparent;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    width: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$rect.width;
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
BitmapData.prototype.toString = function ()
{
    return "[object BitmapData]";
};

/**
 * TODO
 * @param   {BitmapData}   source_bitmap_data
 * @param   {Rectangle}    source_rect
 * @param   {Point}        dest_point
 * @param   {BitmapFilter} filter
 * @returns void
 */
BitmapData.prototype.applyFilter = function (source_bitmap_data, source_rect, dest_point, filter)
{

};

/**
 * TODO
 * @returns {BitmapData}
 */
BitmapData.prototype.clone = function ()
{
    return new BitmapData(this.width, this.height, this.transparent, this._$fillColor);
};

/**
 * TODO
 * @param   {Rectangle}      rect
 * @param   {ColorTransform} color_transform
 * @returns void
 */
BitmapData.prototype.colorTransform = function (rect, color_transform)
{

};

/**
 * TODO
 * @param   {BitmapData} other_bitmap_data
 * @returns {object}
 */
BitmapData.prototype.compare = function (other_bitmap_data)
{
    return {};
};

/**
 * TODO
 * @param   {BitmapData} source_bitmap_data
 * @param   {Rectangle}  source_rect
 * @param   {Point}      dest_point
 * @param   {number}     source_channel
 * @param   {number}     dest_channel
 * @returns void
 */
BitmapData.prototype.copyChannel = function (
    source_bitmap_data, source_rect, dest_point,
    source_channel, dest_channel
) {

};

/**
 * TODO
 * @param   {BitmapData} source_bitmap_data
 * @param   {Rectangle}  source_rect
 * @param   {Point}      dest_point
 * @param   {BitmapData} alpha_bitmap_data
 * @param   {Point}      alpha_point
 * @param   {boolean}    merge_alpha
 * @returns void
 */
BitmapData.prototype.copyPixels = function (
    source_bitmap_data, source_rect, dest_point,
    alpha_bitmap_data, alpha_point, merge_alpha
) {

};

/**
 * TODO
 * @returns void
 */
BitmapData.prototype.dispose = function ()
{

};

/**
 * TODO
 * @param   {BitmapData}     source
 * @param   {Matrix}         matrix
 * @param   {ColorTransform} color_transform
 * @param   {string}         blend_mode
 * @param   {Rectangle}      clip_rect
 * @param   {boolean}        smoothing
 * @returns void
 */
BitmapData.prototype.draw = function (
    source, matrix, color_transform,
    blend_mode, clip_rect, smoothing
) {

};

/**
 * TODO
 * @param   {Rectangle} rect
 * @param   {number}    color
 * @returns void
 */
BitmapData.prototype.fillRect = function (rect, color)
{

};

/**
 * TODO
 * @param   {number} x
 * @param   {number} y
 * @param   {number} color
 * @returns void
 */
BitmapData.prototype.floodFill = function (x, y, color)
{

};

/**
 * TODO
 * @param   {Rectangle}    source_rect
 * @param   {BitmapFilter} filter
 * @returns Rectangle
 */
BitmapData.prototype.generateFilterRect = function (source_rect, filter)
{
    return new Rectangle();
};

/**
 * TODO
 * @param   {number}  mask
 * @param   {number}  color
 * @param   {boolean} find_color
 * @returns {Rectangle}
 */
BitmapData.prototype.getColorBoundsRect = function (mask, color, find_color)
{
    return new Rectangle();
};

/**
 * TODO
 * @param   {number} x
 * @param   {number} y
 * @returns {number}
 */
BitmapData.prototype.getPixel = function (x, y)
{
    return 0;
};

/**
 * TODO
 * @param   {number} x
 * @param   {number} y
 * @returns {number}
 */
BitmapData.prototype.getPixel32 = function (x, y)
{
    return 0;
};

/**
 * TODO
 * @param   {Rectangle} rect
 * @returns {Array}
 */
BitmapData.prototype.getPixels = function (rect)
{
    return [];
};

/**
 * TODO
 * @param   {Rectangle} rect
 * @returns {Vector}
 */
BitmapData.prototype.getVector = function (rect)
{
    return new Vector();
};

/**
 * TODO
 * @param   {Rectangle} hRect
 * @returns {Vector}
 */
BitmapData.prototype.histogram = function (hRect)
{
    return new Vector();
};

/**
 * TODO
 * @param   {Point}  first_point
 * @param   {number} first_alpha_threshold
 * @param   {object} second_object
 * @param   {Point}  second_bitmap_data_point
 * @param   {number} second_alpha_threshold
 * @returns {boolean}
 */
BitmapData.prototype.hitTest = function (
    first_point, first_alpha_threshold, second_object,
    second_bitmap_data_point, second_alpha_threshold
) {
    return true;
};

/**
 * @returns void
 */
BitmapData.prototype.lock = function ()
{
    this._$lock = true;
};

/**
 * TODO
 * @param   {BitmapData} source_bitmap_data
 * @param   {Rectangle}  source_rect
 * @param   {Point}      dest_point
 * @param   {number}     red_multiplier
 * @param   {number}     green_multiplier
 * @param   {number}     blue_multiplier
 * @param   {number}     alpha_multiplier
 * @returns void
 */
BitmapData.prototype.merge = function (
    source_bitmap_data, source_rect, dest_point,
    red_multiplier, green_multiplier, blue_multiplier, alpha_multiplier
) {

};

/**
 * TODO
 * @param   {number}  randomSeed
 * @param   {number}  low
 * @param   {number}  high
 * @param   {number}  channelOptions
 * @param   {boolean} grayScale
 * @returns void
 */
BitmapData.prototype.noise = function (randomSeed, low, high, channelOptions, grayScale)
{

};

/**
 * TODO
 * @param   {BitmapData} source_bitmap_data
 * @param   {Rectangle}  source_rect
 * @param   {Point}      dest_point
 * @param   {array}      red_array
 * @param   {array}      green_array
 * @param   {array}      blue_array
 * @param   {array}      alpha_array
 * @returns void
 */
BitmapData.prototype.paletteMap = function (
    source_bitmap_data, source_rect, dest_point,
    red_array, green_array, blue_array, alpha_array
) {

};

/**
 * TODO
 * @param   {number}  base_x
 * @param   {number}  base_y
 * @param   {number}  num_octaves
 * @param   {number}  random_seed
 * @param   {boolean} stitch
 * @param   {boolean} fractal_noise
 * @param   {number}  channel_options
 * @param   {boolean} gray_scale
 * @param   {array}   offsets
 * @returns void
 */
BitmapData.prototype.perlinNoise = function (
    base_x, base_y, num_octaves, random_seed, stitch,
    fractal_noise, channel_options, gray_scale, offsets
) {

};

/**
 * TODO
 * @param   {BitmapData} source_bitmap_data
 * @param   {Rectangle}  source_rect
 * @param   {Point}      dest_point
 * @param   {number}     random_seed
 * @param   {number}     num_pixels
 * @param   {number}     fill_color
 * @returns {number}
 */
BitmapData.prototype.pixelDissolve = function (
    source_bitmap_data, source_rect, dest_point,
    random_seed, num_pixels, fill_color
) {
    return 0;
};

/**
 * TODO
 * @param   {number} x
 * @param   {number} y
 * @returns void
 */
BitmapData.prototype.scroll = function (x, y)
{

};

/**
 * TODO
 * @param   {number} x
 * @param   {number} y
 * @param   {number} color
 * @returns void
 */
BitmapData.prototype.setPixel = function (x, y, color)
{

};

/**
 * TODO
 * @param   {number} x
 * @param   {number} y
 * @param   {number} color
 * @returns void
 */
BitmapData.prototype.setPixel32 = function (x, y, color)
{

};

/**
 * TODO
 * @param {Rectangle} rect
 * @param {array}     input_byte_array
 * @returns void
 */
BitmapData.prototype.setPixels = function (rect, input_byte_array)
{

};

/**
 * TODO
 * @param   {Rectangle} rect
 * @param   {Vector}    input_vector
 * @returns void
 */
BitmapData.prototype.setVector = function (rect, input_vector)
{

};

/**
 * TODO
 * @param   {BitmapData} source_bitmap_data
 * @param   {Rectangle}  source_rect
 * @param   {Point}      dest_point
 * @param   {string}     operation
 * @param   {number}     threshold
 * @param   {number}     color
 * @param   {number}     mask
 * @param   {boolean}    copy_source
 * @returns {number}
 */
BitmapData.prototype.threshold = function (
    source_bitmap_data, source_rect, dest_point,
    operation, threshold, color, mask, copy_source
) {
    return 0;
};

/**
 * TODO
 * @param   {Rectangle} change_rect
 * @returns void
 */
BitmapData.prototype.unlock = function (change_rect)
{
    this._$lock = false;
};

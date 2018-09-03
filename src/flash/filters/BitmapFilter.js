/**
 * @constructor
 */
var BitmapFilter = function ()
{
    OriginalObject.call(this);
};

/**
 * extends
 * @type {OriginalObject}
 */
BitmapFilter.prototype = Object.create(OriginalObject.prototype);
BitmapFilter.prototype.constructor = BitmapFilter;

/**
 * @return {string}
 */
BitmapFilter.prototype.toString = function ()
{
    return "[object BitmapFilter]";
};

/**
 * @param   {boolean} inner
 * @param   {boolean} knockout
 * @param   {boolean} hide_object
 * @returns {string}
 */
BitmapFilter.prototype._$filterOperation = function (inner, knockout, hide_object)
{
    switch (knockout) {

        case true:

            return (inner) ? "source-in" : "source-out";

        default:

            switch (hide_object) {

                case true:

                    return (inner) ? "source-in" : "copy";

                default:

                    return (inner) ? "source-atop" : "destination-over";

            }
    }
};

/**
 * @param   {CanvasRenderingContext2D} context
 * @param   {object}  color
 * @param   {boolean} inner
 * @param   {number}  strength
 * @returns {CanvasRenderingContext2D}
 */
BitmapFilter.prototype._$coatOfColor = function (context, color, inner, strength)
{
    var imgData = context.getImageData(0, 0, context.canvas.width, context.canvas.height);

    var i = 0;
    var R = color.R|0;
    var G = color.G|0;
    var B = color.B|0;

    var pxData = imgData.data;
    var length = pxData.length|0;

    var idx, alpha;
    switch (inner) {

        case true:

            while (i < length) {
                idx  = (i + 3)|0;
                alpha = pxData[idx]|0;

                if (alpha !== 255) {
                    pxData[i    ] = R | 0;
                    pxData[i + 1] = G | 0;
                    pxData[i + 2] = B | 0;
                    pxData[idx]   = (255 - alpha) | 0;
                } else {
                    pxData[idx]   = 0;
                }

                i = (i + 4)|0;
            }

            break;

        default:

            while (i < length) {
                idx = (i + 3)|0;
                alpha = pxData[idx]|0;

                if (alpha !== 0) {
                    pxData[i    ] = R|0;
                    pxData[i + 1] = G|0;
                    pxData[i + 2] = B|0;
                    pxData[idx]   = alpha|0;
                }

                i = (i + 4)|0;
            }

            break;

    }


    context.putImageData(imgData, 0, 0);


    if (strength > 0) {
        i = 1;
        while (strength > i) {
            i = (i + 1)|0;
            context.drawImage(context.canvas, 0, 0);
        }
    }

    return context;
};

/**
 * @return {BitmapFilter}
 */
BitmapFilter.prototype.clone = function ()
{

    var clone = new this.constructor();

    for (var prop in this) {

        if (!this.hasOwnProperty(prop)) {
            continue;
        }

        var value = this[prop];

        switch (this.$isArray(value)) {

            case true:

                clone[prop] = this.$cloneArray(this[prop]);

                break;

            default:

                clone[prop] = this[prop];

                break;
        }
    }

    return clone;
};
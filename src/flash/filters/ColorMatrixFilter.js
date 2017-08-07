/**
 * @constructor
 */
var ColorMatrixFilter = function ()
{
    BitmapFilter.call(this);

    this.filterId = 6;

    // default
    this._matrix = null;

    this.matrix = arguments[0];
};

/**
 * extends
 * @type {BitmapFilter}
 */
ColorMatrixFilter.prototype = Object.create(BitmapFilter.prototype);
ColorMatrixFilter.prototype.constructor = ColorMatrixFilter;

/**
 * properties
 */
Object.defineProperties(ColorMatrixFilter.prototype, {
    matrix: {
        get: function () {
            return this._matrix;
        },
        set: function (matrix) {
            if (matrix instanceof Array && matrix.length === 20) {
                this._matrix = matrix;
            }
        }
    }
});

/**
 * @param cache
 * @param colorTransform
 * @param stage
 * @returns {*}
 */
ColorMatrixFilter.prototype.render = function (cache, colorTransform, stage)
{
    var matrix = this.matrix;
    if (!matrix) {
        return cache;
    }

    var cacheCanvas = cache.canvas;
    var width       = cacheCanvas.width|0;
    var height      = cacheCanvas.height|0;

    var matrixCanvas    = this.$cacheStore.getCanvas();
    matrixCanvas.width  = width;
    matrixCanvas.height = height;
    var matrixCtx       = matrixCanvas.getContext("2d");
    matrixCtx.drawImage(cacheCanvas, 0, 0);

    var imageData = matrixCtx.getImageData(0, 0, width, height);
    var pxData    = imageData.data;
    var length    = pxData.length;

    // red
    var m0 = matrix[0];
    var m1 = matrix[1];
    var m2 = matrix[2];
    var m3 = matrix[3];
    var m4 = matrix[4];

    // green
    var m5 = matrix[5];
    var m6 = matrix[6];
    var m7 = matrix[7];
    var m8 = matrix[8];
    var m9 = matrix[9];

    // blue
    var m10 = matrix[10];
    var m11 = matrix[11];
    var m12 = matrix[12];
    var m13 = matrix[13];
    var m14 = matrix[14];

    // alpha
    var m15 = matrix[15];
    var m16 = matrix[16];
    var m17 = matrix[17];
    var m18 = matrix[18];
    var m19 = matrix[19];

    var R, G, B, A;
    var i = 0;
    while (i < length) {
        R = pxData[i    ]|0;
        G = pxData[i + 1]|0;
        B = pxData[i + 2]|0;
        A = pxData[i + 3]|0;

        pxData[i    ] = ((R * m0)  + (G * m1)  + (B * m2)  + (A * m3)  + m4 )|0;
        pxData[i + 1] = ((R * m5)  + (G * m6)  + (B * m7)  + (A * m8)  + m9 )|0;
        pxData[i + 2] = ((R * m10) + (G * m11) + (B * m12) + (A * m13) + m14)|0;
        pxData[i + 3] = ((R * m15) + (G * m16) + (B * m17) + (A * m18) + m19)|0;

        i = (i + 4)|0;
    }

    matrixCtx.putImageData(imageData, 0, 0);
    matrixCtx._offsetX = +cache._offsetX;
    matrixCtx._offsetY = +cache._offsetY;

    this.$cacheStore.destroy(cache);

    return matrixCtx;
};
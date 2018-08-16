/**
 * @param width
 * @param height
 * @param transparent
 * @param fillColor
 * @constructor
 */
var BitmapData = function (width, height, transparent, fillColor)
{
    OriginalObject.call(this);

    this._width       = width|0;
    this._height      = height|0;
    this._transparent = (typeof transparent === "boolean") ? transparent : true;
    this._fillColor   = (typeof fillColor === "number") ? fillColor : 0xFFFFFFFF;
    this._rect        = new Rectangle(0, 0, this._width, this._height);
};

/**
 * extends
 */
BitmapData.prototype = Object.create(OriginalObject.prototype);
BitmapData.prototype.constructor = BitmapData;

/**
 * properties
 */
Object.defineProperties(BitmapData.prototype, {
    width: {
        get: function () {
            return this._width;
        },
        set: function () {}
    },
    height: {
        get: function () {
            return this._height;
        },
        set: function () {}
    },
    transparent: {
        get: function () {
            return this._transparent;
        },
        set: function () {}
    },
    rect: {
        get: function () {
            return this._rect;
        },
        set: function () {}
    }
});

/**
 * @param {BitmapData} sourceBitmapData
 * @param {Rectangle} sourceRect
 * @param {Point} destPoint
 * @param {BitmapFilter} filter
 * @returns void
 */
BitmapData.prototype.applyFilter = function (sourceBitmapData, sourceRect, destPoint, filter)
{

};

/**
 * @returns {BitmapData}
 */
BitmapData.prototype.clone = function ()
{
    return new BitmapData();
};

/**
 *
 * @param {Rectangle} rect
 * @param {ColorTransform} colorTransform
 */
BitmapData.prototype.colorTransform = function (rect, colorTransform)
{

};

/**
 * @param {BitmapData} otherBitmapData
 * @returns {object}
 */
BitmapData.prototype.compare = function (otherBitmapData)
{
    return {};
};

/**
 *
 * @param {BitmapData} sourceBitmapData
 * @param {Rectangle} sourceRect
 * @param {Point} destPoint
 * @param {number} sourceChannel
 * @param {number} destChannel
 * @returns void
 */
BitmapData.prototype.copyChannel = function (sourceBitmapData, sourceRect, destPoint, sourceChannel, destChannel)
{

};

/**
 * @param {BitmapData} sourceBitmapData
 * @param {Rectangle} sourceRect
 * @param {Point} destPoint
 * @param {BitmapData} alphaBitmapData
 * @param {Point} alphaPoint
 * @param {boolean} mergeAlpha
 * @returns void
 */
BitmapData.prototype.copyPixels = function (sourceBitmapData, sourceRect, destPoint, alphaBitmapData, alphaPoint, mergeAlpha)
{

};

/**
 * @returns void
 */
BitmapData.prototype.dispose = function ()
{

};

/**
 * @param {BitmapData} source
 * @param {Matrix} matrix
 * @param {ColorTransform} colorTransform
 * @param {string} blendMode
 * @param {Rectangle} clipRect
 * @param {boolean} smoothing
 * @returns void
 */
BitmapData.prototype.draw = function (source, matrix, colorTransform, blendMode, clipRect, smoothing)
{

};

/**
 * @param {Rectangle} rect
 * @param {number} color
 * @returns void
 */
BitmapData.prototype.fillRect = function (rect, color)
{

};

/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} color
 * @returns void
 */
BitmapData.prototype.floodFill = function (x, y, color)
{

};

/**
 * @param {Rectangle} sourceRect
 * @param {BitmapFilter} filter
 * @returns Rectangle
 */
BitmapData.prototype.generateFilterRect = function (sourceRect, filter)
{
    return new Rectangle();
};

/**
 * @param {number} mask
 * @param {number} color
 * @param {boolean} findColor
 * @returns {Rectangle}
 */
BitmapData.prototype.getColorBoundsRect = function (mask, color, findColor)
{
    return new Rectangle();
};

/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
BitmapData.prototype.getPixel = function (x, y)
{
    return 0;
};

/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
BitmapData.prototype.getPixel32 = function (x, y)
{
    return 0;
};

/**
 * @param {Rectangle} rect
 * @returns {Array}
 */
BitmapData.prototype.getPixels = function (rect)
{
    return [];
};

/**
 * @param rect
 * @returns {Vector}
 */
BitmapData.prototype.getVector = function (rect)
{
    return new Vector();
};

/**
 * @param {Rectangle} hRect
 * @returns {Vector}
 */
BitmapData.prototype.histogram = function (hRect)
{
    return new Vector();
};

/**
 * @param {Point} firstPoint
 * @param {number} firstAlphaThreshold
 * @param {object} secondObject
 * @param {Point} secondBitmapDataPoint
 * @param {number} secondAlphaThreshold
 * @returns {boolean}
 */
BitmapData.prototype.hitTest = function (firstPoint, firstAlphaThreshold, secondObject, secondBitmapDataPoint, secondAlphaThreshold)
{
    return true;
};

/**
 * @returns void
 */
BitmapData.prototype.lock = function ()
{

};

/**
 * @param {BitmapData} sourceBitmapData
 * @param {Rectangle} sourceRect
 * @param {Point} destPoint
 * @param {number} redMultiplier
 * @param {number} greenMultiplier
 * @param {number} blueMultiplier
 * @param {number} alphaMultiplier
 * @returns void
 */
BitmapData.prototype.merge = function (sourceBitmapData, sourceRect, destPoint, redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier)
{

};

/**
 * @param {number} randomSeed
 * @param {number} low
 * @param {number} high
 * @param {number} channelOptions
 * @param {boolean} grayScale
 * @returns void
 */
BitmapData.prototype.noise = function (randomSeed, low, high, channelOptions, grayScale)
{

};

/**
 * @param {BitmapData} sourceBitmapData
 * @param {Rectangle} sourceRect
 * @param {Point} destPoint
 * @param {array} redArray
 * @param {array} greenArray
 * @param {array} blueArray
 * @param {array} alphaArray
 * @returns void
 */
BitmapData.prototype.paletteMap = function (sourceBitmapData, sourceRect, destPoint, redArray, greenArray, blueArray, alphaArray)
{

};

/**
 * @param {number} baseX
 * @param {number} baseY
 * @param {number} numOctaves
 * @param {number} randomSeed
 * @param {boolean} stitch
 * @param {boolean} fractalNoise
 * @param {number} channelOptions
 * @param {boolean} grayScale
 * @param {array} offsets
 * @returns void
 */
BitmapData.prototype.perlinNoise = function (baseX, baseY, numOctaves, randomSeed, stitch, fractalNoise, channelOptions, grayScale, offsets)
{

};

/**
 * @param {BitmapData} sourceBitmapData
 * @param {Rectangle} sourceRect
 * @param {Point} destPoint
 * @param {number} randomSeed
 * @param {number} numPixels
 * @param {number} fillColor
 * @returns {number}
 */
BitmapData.prototype.pixelDissolve = function (sourceBitmapData, sourceRect, destPoint, randomSeed, numPixels, fillColor)
{
    return 0;
};

/**
 * @param {number} x
 * @param {number} y
 * @returns void
 */
BitmapData.prototype.scroll = function (x, y)
{

};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} color
 * @returns void
 */
BitmapData.prototype.setPixel = function (x, y, color)
{

};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} color
 * @returns void
 */
BitmapData.prototype.setPixel32 = function (x, y, color)
{

};

/**
 * @param {Rectangle} rect
 * @param {array} inputByteArray
 * @returns void
 */
BitmapData.prototype.setPixels = function (rect, inputByteArray)
{

};

/**
 * @param {Rectangle} rect
 * @param {Vector} inputVector
 * @returns void
 */
BitmapData.prototype.setVector = function (rect, inputVector)
{

};

/**
 * @param {BitmapData} sourceBitmapData
 * @param {Rectangle} sourceRect
 * @param {Point} destPoint
 * @param {string} operation
 * @param {number} threshold
 * @param {number} color
 * @param {number} mask
 * @param {boolean} copySource
 * @returns {number}
 */
BitmapData.prototype.threshold = function (sourceBitmapData, sourceRect, destPoint, operation, threshold, color, mask, copySource)
{
    return 0;
};

/**
 * @param {Rectangle} changeRect
 * @returns void
 */
BitmapData.prototype.unlock = function (changeRect)
{

};

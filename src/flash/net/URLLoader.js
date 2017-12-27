/**
 * @param url
 * @constructor
 */
var URLLoader = function (url)
{
    this._url = "";
};

/**
 * extends
 */
URLLoader.prototype = Object.create(OriginalObject.prototype);
URLLoader.prototype.constructor = URLLoader;

/**
 * properties
 */
Object.defineProperties(URLLoader.prototype, {
    url: {
        get: function () {
            return this._url;
        },
        set: function (url) {
            if (url) {
                this._url = url;
            }
        }
    },
    pixelSnapping: {
        get: function () {
            return this._pixelSnapping;
        },
        set: function (pixelSnapping) {
            this._pixelSnapping = pixelSnapping;
        }
    },
    smoothing: {
        get: function () {
            return this._smoothing;
        },
        set: function (smoothing) {
            this._smoothing = smoothing;
        }
    }
});


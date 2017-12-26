/**
 * @constructor
 * @param url
 */
var URLRequest = function (url)
{
    this._contentType     = "application/x-www-form-urlencoded";
    this._data            = null;
    this._digest          = null;
    this._followRedirects = null;
    this._method          = null;
    this._requestHeaders  = [];
    this._url             = url;
    this._userAgent       = null;
};

/**
 * extends
 */
URLRequest.prototype = Object.create(OriginalObject.prototype);
URLRequest.prototype.constructor = URLRequest;

/**
 * properties
 */
Object.defineProperties(URLRequest.prototype, {
    url: {
        get: function () {
            return this._url;
        },
        set: function (url) {
            this._url = url;
        }
    },
    contentType: {
        get: function () {
            return this._contentType;
        },
        set: function (contentType) {
            this._contentType = contentType;
        }
    },
    data: {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        }
    }
});

/**
 * @returns {string}
 */
URLRequest.prototype.toString = function ()
{
    return "[object URLRequest]";
};

/**
 * @returns {string}
 */
URLRequest.prototype.getURL = function ()
{
    return this._url;
};

/**
 *  @param url
 */
URLRequest.prototype.setURL = function (url)
{
    this._url = url;
};

/**
 * @returns {string}
 */
URLRequest.prototype.getContentType = function ()
{
    return this._contentType;
};

/**
 * @param contentType
 */
URLRequest.prototype.setContentType = function (contentType)
{
    this._contentType = contentType;
};
/**
 * @constructor
 * @param url
 */
var URLRequest = function (url)
{
    // init
    this._contentType     = "application/x-www-form-urlencoded";
    this._data            = null;
    this._digest          = null;
    this._followRedirects = true;
    this._method          = URLRequestMethod.GET;
    this._requestHeaders  = [];
    this._url             = "";
    this._userAgent       = null;

    // set
    this.url = url;
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
    contentType: {
        get: function () {
            return this._contentType;
        },
        set: function (contentType) {
            if (typeof contentType === "string") {
                this._contentType = contentType;
            }
        }
    },
    data: {
        get: function () {
            return this._data;
        },
        set: function (data) {
            if (typeof data === "object") {
                this._data = data;
            }
        }
    },
    digest: {
        get: function () {
            return this._digest;
        },
        set: function (digest) {
            if (typeof digest === "string") {
                this._digest = digest;
            }
        }
    },
    followRedirects: {
        get: function () {
            return this._followRedirects;
        },
        set: function (followRedirects) {
            if (typeof followRedirects === "boolean") {
                this._followRedirects = followRedirects;
            }
        }
    },
    method: {
        get: function () {
            return this._method;
        },
        set: function (method) {
            if (typeof method === "string") {
                this._method = method;
            }
        }
    },
    requestHeaders: {
        get: function () {
            return this._requestHeaders;
        },
        set: function (requestHeaders) {
            if (this.$isArray(requestHeaders)) {
                this._requestHeaders = requestHeaders;
            }
        }
    },
    url: {
        get: function () {
            return this._url;
        },
        set: function (url) {
            if (typeof url === "string") {
                this._url = url;
            }
        }
    },
    userAgent: {
        get: function () {
            return this._userAgent;
        },
        set: function (userAgent) {
            if (typeof userAgent === "string") {
                this._userAgent = userAgent;
            }
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
 *
 * @param  {URLRequest} sourceRequest
 * @param  {boolean}    wholeURL
 * @param  {*}          pattern
 * @param  {string}     replace
 * @return void
 */
URLRequest.prototype.useRedirectedURL = function (sourceRequest, wholeURL, pattern, replace)
{
    // TODO
};


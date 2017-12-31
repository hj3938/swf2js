/**
 * @param {URLRequest} request
 * @constructor
 */
var URLLoader = function (request)
{
    // init
    this._bytesLoaded = 0;
    this._bytesTotal  = 0;
    this._data        = null;
    this._dataFormat  = URLLoaderDataFormat.TEXT;

    if (request instanceof URLRequest) {
        this.load(request);
    }
};

/**
 * extends
 */
URLLoader.prototype = Object.create(EventDispatcher.prototype);
URLLoader.prototype.constructor = URLLoader;

/**
 * properties
 */
Object.defineProperties(URLLoader.prototype, {
    bytesLoaded: {
        get: function () {
            return this._bytesLoaded;
        },
        set: function (bytesLoaded) {
            if (typeof bytesLoaded === "number") {
                this._bytesLoaded = bytesLoaded;
            }
        }
    },
    bytesTotal: {
        get: function () {
            return this._bytesTotal;
        },
        set: function (bytesTotal) {
            if (typeof bytesTotal === "number") {
                this._bytesTotal = bytesTotal;
            }
        }
    },
    data: {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        }
    },
    dataFormat: {
        get: function () {
            return this._dataFormat;
        },
        set: function (dataFormat) {
            if (typeof dataFormat === "string") {
                this._dataFormat = dataFormat;
            }
        }
    }
});

/**
 * @returns {string}
 */
URLLoader.prototype.toString = function ()
{
    return "[object URLLoader]";
};

/**
 * @return void
 */
URLLoader.prototype.close = function ()
{
    // TODO
};

/**
 * @param {URLRequest} request
 */
URLLoader.prototype.load = function (request)
{
    if (request instanceof URLRequest) {
        var self = this;
        this.$ajax({
            "url":     request.url,
            "method":  request.method,
            "headers": request.requestHeaders,
            "event": {
                "loadstart": function (event)
                {
                    self.bytesTotal = event.total;
                    self.dispatchEvent("open", request.player);
                },
                "progress": function (event)
                {
                    self.bytesLoaded = event.loaded;
                    self.dispatchEvent("progress", request.player);
                },
                "loadend": function ()
                {
                    // data set
                    switch (self.dataFormat) {
                        case URLLoaderDataFormat.BINARY:
                            self.data = (this.response) ? this.response : this.responseText;
                            break;
                        case URLLoaderDataFormat.TEXT:
                            self.data = this.responseText;
                            break;
                        case URLLoaderDataFormat.VARIABLES:
                            self.data = new URLVariables(this.responseText);
                            break;
                    }

                    self.dispatchEvent("complete", request.player);
                },
                "error": function ()
                {
                    self.dispatchEvent("ioerror", request.player);
                }
            }
        });
    }
};


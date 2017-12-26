/**
 * @constructor
 * @param name
 * @param value
 */
var URLRequestHeader = function (name, value)
{
    // init
    this._name  = "";
    this._value = "";

    // set
    this.name  = name;
    this.value = value;
};

/**
 * extends
 */
URLRequestHeader.prototype = Object.create(OriginalObject.prototype);
URLRequestHeader.prototype.constructor = URLRequestHeader;

/**
 * properties
 */
Object.defineProperties(URLRequestHeader.prototype, {
    name: {
        get: function () {
            return this._name;
        },
        set: function (name) {
            if (typeof name === "string") {
                this._name = name;
            }
        }
    },
    value: {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (typeof value === "string") {
                this._value = value;
            }
        }
    }
});

/**
 * @returns {string}
 */
URLRequestHeader.prototype.toString = function ()
{
    return "[object URLRequestHeader]";
};

/**
 * @constructor
 */
var URLVariables = function (source)
{
    if (source) {
        this.decode(source);
    }
};

/**
 * extends
 */
URLVariables.prototype = Object.create(OriginalObject.prototype);
URLVariables.prototype.constructor = URLVariables;

/**
 * @returns {string}
 */
URLVariables.prototype.toString = function ()
{
    return this.$encodeVars(this);
};

/**
 * @param source
 * @return void
 */
URLVariables.prototype.decode = function (source)
{
    if (typeof source === "string") {
        var pairs  = source.split("&");
        var length = pairs.length;

        var idx = 0;
        while (length > idx) {
            var pair   = pairs[idx];
            var values = pair.split("=");

            // set
            if (values.length === 2) {
                this[values[0]] = values[1];
            }

            idx = (idx + 1)|0;
        }
    }
};
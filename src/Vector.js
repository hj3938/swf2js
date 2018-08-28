/**
 * @param {number}  length
 * @param {boolean} fixed
 * @constructor
 */
var Vector = function (length, fixed)
{
    // reset
    this._length = 0;
    this._fixed  = false;

    // init
    this.length  = length;
    this.fixed   = fixed;
};

/**
 * extends
 */
Vector.prototype = Object.create(OriginalObject.prototype);
Vector.prototype.constructor = Vector;

/**
 * properties
 */
Object.defineProperties(Vector.prototype, {
    length: {
        get: function () {
            return this._length;
        },
        set: function (length) {
            if (typeof length === "number") {
                this._length = length|0;
            }
        }
    },
    fixed: {
        get: function () {
            return this._fixed;
        },
        set: function (fixed) {
            if (typeof fixed === "boolean") {
                this._fixed = fixed;
            }
        }
    }
});

/**
 * @param {number}  length
 * @param {boolean} fixed
 * @constructor
 */
var Vector = function (length, fixed)
{

    OriginalObject.call(this);

    // reset
    this._$fixed = false;
    this._$type  = "int";
    this._$array = [];

    // init
    this.length  = length|0;
    this.fixed   = fixed;
    
    return new Proxy(this, {
        /**
         * @param {Vector} obj
         * @param {number} prop
         * @param {*}      value
         */
        set: function(obj, prop, value) {

            if (!obj.$isNaN(prop)) {

                // TODO
                switch (obj._$type) {
                    case "Int":
                    case "int":

                        obj._$array[prop|0] = value|0;

                        break;

                    case "String":

                        obj._$array[prop|0] = value +"";

                        break;

                    default:

                        obj._$array[prop|0] = value;

                        break;

                }

            }

            // properties
            switch (prop) {

                case "length":
                case "fixed":
                case "_$array":
                case "_$fixed":
                case "_$type":
                    return obj[prop] = value;

                default:
                    break
            }
        },
        /**
         * @param  {Vector} obj
         * @param  {number} prop
         * @return {*}
         */
        get: function (obj, prop) {

            if (!obj.$isNaN(prop) && prop > -1 && obj.length > prop) {

                // TODO
                switch (obj._$type) {
                    case "Int":
                    case "int":

                        return obj._$array[prop]|0;

                    default:

                        // valid
                        if (!(prop in obj._$array)) {
                            return null;
                        }

                        return obj._$array[prop];
                }

            }

            // properties
            switch (prop) {

                case "length":
                case "fixed":
                case "_$array":
                case "_$fixed":
                case "_$type":
                    return obj[prop];

                default:
                    break
            }

        }
    });
};

/**
 * extends
 * @type {OriginalObject}
 */
Vector.prototype = Object.create(OriginalObject.prototype);
Vector.prototype.constructor = Vector;

/**
 * properties
 */
Object.defineProperties(Vector.prototype, {
    length: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$array.length;
        },
        /**
         * @param  {number} length
         * @return void
         */
        set: function (length) {

            if (typeof length === "number") {

                var idx = 0;
                var arr = [];
                while (length > idx) {

                    if (idx in this._$array) {

                        arr[idx] = this._$array[idx];
                        idx = (idx + 1)|0;

                        continue;

                    }

                    arr[idx] = 0;

                    idx = (idx + 1)|0;
                }

                this._$array = arr;

            }

        }
    },
    fixed: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$fixed;
        },
        /**
         * @param  {boolean} fixed
         * @return void
         */
        set: function (fixed) {
            if (typeof fixed === "boolean") {
                this._$fixed = fixed;
            }
        }
    }
});

/**
 * @return {string}
 */
Vector.prototype.toString = function ()
{
    return this._$array.join(", ");
};




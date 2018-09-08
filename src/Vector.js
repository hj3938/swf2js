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
         * @param  {Vector} obj
         * @param  {number} prop
         * @return {*}
         */
        get: function (obj, prop) {

            // properties
            switch (obj.$isNaN(prop)) {

                case true:

                    return obj[prop];

                default:

                    prop = prop | 0;
                    if (prop > -1 && (!obj.fixed || (obj.fixed && obj.length > prop))) {

                        // TODO
                        switch (obj._$type) {
                            case "Number":
                            case "int":

                                return obj._$array[prop] | 0;

                            default:

                                // valid
                                if (!(prop in obj._$array)) {
                                    return null;
                                }

                                return obj._$array[prop];
                        }

                    }

                    break
            }
        },
        /**
         * @param {Vector} obj
         * @param {number} prop
         * @param {*}      value
         */
        set: function(obj, prop, value) {

            // properties
            switch (obj.$isNaN(prop)) {

                case true:

                    obj[prop] = value;

                    break;

                default:

                    prop = prop|0;
                    if (prop > -1 && (!obj.fixed || (obj.fixed && obj.length > prop))) {

                        // TODO
                        switch (obj._$type) {
                            case "Number":
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

                    break;
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

/**
 * @return {Vector}
 */
Vector.prototype.concat = function ()
{
    var vector = new Vector();

    var length = arguments.length|0;
    var idx    = 0;
    while (length > idx) {

        var v = arguments[idx];

        if (v instanceof Vector) {

            vector._$array = vector._$array.concat(v._$array);

        }

        idx = (idx + 1)|0;
    }

    return vector;
};




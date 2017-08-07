/**
 * @param x
 * @param y
 * @constructor
 */
var Point = function (x, y)
{
    this._x = 0;
    this._y = 0;

    this.x = x;
    this.y = y;
};

/**
 * properties
 */
Object.defineProperties(Point.prototype, {
    x: {
        get: function () {
            return this._x;
        },
        set: function (x) {
            if (!this.$isNaN(x)) {
                this._x = x;
            }
        }
    },
    y: {
        get: function () {
            return this._y;
        },
        set: function (y) {
            if (!this.$isNaN(y)) {
                this._y = y;
            }
        }
    }
});
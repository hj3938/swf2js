/**
 * @param a
 * @param b
 * @param c
 * @param d
 * @param tx
 * @param ty
 * @constructor
 */
var Matrix = function (a, b, c, d, tx, ty)
{
    // default
    this._matrix  = [1, 0, 0, 1, 0, 0];

    // init
    this.a  = a;
    this.b  = b;
    this.c  = c;
    this.d  = d;
    this.tx = tx;
    this.ty = ty;
};

/**
 * extends
 */
Matrix.prototype = Object.create(OriginalObject.prototype);
Matrix.prototype.constructor = Matrix;

/**
 * properties
 */
Object.defineProperties(Matrix.prototype, {
    a: {
        get: function () {
            return this.getA();
        },
        set: function (a) {
            this.setA(a);
        }
    },
    b: {
        get: function () {
            return this.getB();
        },
        set: function (b) {
            this.setB(b);
        }
    },
    c: {
        get: function () {
            return this.getC();
        },
        set: function (c) {
            this.setC(c);
        }
    },
    d: {
        get: function () {
            return this.getD();
        },
        set: function (d) {
            this.setD(d);
        }
    },
    tx: {
        get: function () {
            return this.getTx();
        },
        set: function (tx) {
            this.setTx(tx);
        }
    },
    ty: {
        get: function () {
            return this.getTy();
        },
        set: function (ty) {
            this.setTy(ty);
        }
    }
});

/**
 * @returns {number}
 */
Matrix.prototype.getA = function ()
{
    return this._matrix[0];
};

/**
 * @param a
 */
Matrix.prototype.setA = function (a)
{
    if (!this.$isNaN(a)) {
        this._matrix[0] = a;
    }
};

/**
 * @returns {number}
 */
Matrix.prototype.getB = function ()
{
    return this._matrix[1];
};

/**
 * @param b
 */
Matrix.prototype.setB = function (b)
{
    if (!this.$isNaN(b)) {
        this._matrix[1] = b;
    }
};

/**
 * @returns {number}
 */
Matrix.prototype.getC = function ()
{
    return this._matrix[2];
};

/**
 * @param c
 */
Matrix.prototype.setC = function (c)
{
    if (!this.$isNaN(c)) {
        this._matrix[2] = c;
    }
};

/**
 * @returns {number}
 */
Matrix.prototype.getD = function ()
{
    return this._matrix[3];
};

/**
 * @param d
 */
Matrix.prototype.setD = function (d)
{
    if (!this.$isNaN(d)) {
        this._matrix[3] = d;
    }
};

/**
 * @returns {number}
 */
Matrix.prototype.getTx = function ()
{
    return this._matrix[4];
};

/**
 * @param tx
 */
Matrix.prototype.setTx = function (tx)
{
    if (!this.$isNaN(tx)) {
        this._matrix[4] = tx;
    }
};

/**
 * @returns {number}
 */
Matrix.prototype.getTy = function ()
{
    return this._matrix[5];
};

/**
 * @param ty
 */
Matrix.prototype.setTy = function (ty)
{
    if (!this.$isNaN(ty)) {
        this._matrix[5] = ty;
    }
};

/**
 * @returns {Matrix}
 */
Matrix.prototype.clone = function ()
{
    return new Matrix(this.a, this.b, this.c, this.d, this.tx, this.ty);
};

/**
 * @param {Matrix} m
 */
Matrix.prototype.concat = function (m)
{
    this._matrix = this.$multiplicationMatrix([this._matrix], [m._matrix]);
};

/**
 * @returns {string}
 */
Matrix.prototype.toString = function ()
{
    return "(a="+ this.a +", b="+ this.b +", c="+ this.c +", d="+ this.d +", tx="+ this.tx +", ty="+ this.ty +")";
};

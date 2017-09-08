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
    this.identity();

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
 * @param {number} a
 * @returns void
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
 * @param {number} b
 * @returns void
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
 * @param {number} c
 * @returns void
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
 * @param {number} d
 * @returns void
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
    return this._matrix[4] / 20;
};

/**
 * @param {number} tx
 * @returns void
 */
Matrix.prototype.setTx = function (tx)
{
    if (!this.$isNaN(tx)) {
        this._matrix[4] = tx * 20;
    }
};

/**
 * @returns {number}
 */
Matrix.prototype.getTy = function ()
{
    return this._matrix[5] / 20;
};

/**
 * @param {number} ty
 * @returns void
 */
Matrix.prototype.setTy = function (ty)
{
    if (!this.$isNaN(ty)) {
        this._matrix[5] = ty * 20;
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
 * @returns void
 */
Matrix.prototype.concat = function (m)
{
    this._matrix = this.$multiplicationMatrix(m._matrix, this._matrix);
};

/**
 * @param {number} column
 * @param {Vector3D} vector3D
 * @returns void
 */
Matrix.prototype.copyColumnFrom = function (column, vector3D)
{
    // todo
};

/**
 * @param {number} column
 * @param {Vector3D} vector3D
 * @returns void
 */
Matrix.prototype.copyColumnTo = function (column, vector3D)
{
    // todo
};

/**
 * @param {Matrix} sourceMatrix
 * @returns void
 */
Matrix.prototype.copyFrom = function (sourceMatrix)
{
    // todo
};

/**
 * @param {number} row
 * @param {Vector3D} vector3D
 * @returns void
 */
Matrix.prototype.copyRowFrom = function (row, vector3D)
{
    // todo
};

/**
 * @param {number} row
 * @param {Vector3D} vector3D
 * @returns void
 */
Matrix.prototype.copyRowTo = function (row, vector3D)
{
    // todo
};

/**
 * @param {number} scaleX
 * @param {number} scaleY
 * @param {number} rotation
 * @param {number} tx
 * @param {number} ty
 * @returns void
 */
Matrix.prototype.createBox = function (scaleX, scaleY, rotation, tx, ty)
{
    this.identity();
    this.scale(scaleX, scaleY);
    this.rotate(rotation);
    this.translate(tx, ty);
};

/**
 * @param {number} width
 * @param {number} height
 * @param {number} rotation
 * @param {number} tx
 * @param {number} ty
 * @returns void
 */
Matrix.prototype.createGradientBox = function (width, height, rotation, tx, ty)
{
    this.identity();
    this.scale(width / 1638.4, height / 1638.4);
    this.rotate(rotation);
    this.translate(width / 2 + tx, height / 2 + ty);
};


/**
 * @param {Point} point
 * @returns {Point}
 */
Matrix.prototype.deltaTransformPoint = function (point)
{
    return point;
};

/**
 * @returns void
 */
Matrix.prototype.identity = function ()
{
    this._matrix = [1, 0, 0, 1, 0, 0];
};

/**
 * @returns void
 */
Matrix.prototype.invert = function ()
{
    // todo
};

/**
 * @param {number} rotation
 * @returns void
 */
Matrix.prototype.rotate = function (rotation)
{
    var matrix  = this._matrix;
    var radianX = this.$atan2(matrix[1],  matrix[0]);
    var radianY = this.$atan2(-matrix[2], matrix[3]);
    var scaleX  = this.$sqrt(matrix[0] * matrix[0] + matrix[1] * matrix[1]);
    var scaleY  = this.$sqrt(matrix[2] * matrix[2] + matrix[3] * matrix[3]);

    radianY = radianY + rotation - radianX;
    radianX = rotation;

    matrix[0] = scaleX  * this.$cos(radianX);
    matrix[2] = -scaleX * this.$sin(radianX);
    matrix[1] = scaleY  * this.$sin(radianY);
    matrix[3] = scaleY  * this.$cos(radianY);

    this._matrix = matrix;
};

/**
 * @param {number} sx
 * @param {number} sy
 * @returns void
 */
Matrix.prototype.scale = function (sx, sy)
{
    var matrix  = this._matrix;
    var radianX = this.$atan2(matrix[1],  matrix[0]);
    var radianY = this.$atan2(-matrix[2], matrix[3]);

    matrix[0] = sx  * this.$cos(radianX);
    matrix[2] = -sx * this.$sin(radianX);
    matrix[1] = sy  * this.$sin(radianY);
    matrix[3] = sy  * this.$cos(radianY);
};

/**
 * @param {number} aa
 * @param {number} ba
 * @param {number} ca
 * @param {number} da
 * @param {number} txa
 * @param {number} tya
 * @returns void
 */
Matrix.prototype.setTo = function (aa, ba, ca, da, txa, tya)
{
    this.a  = aa;
    this.b  = ba;
    this.c  = ca;
    this.d  = da;
    this.tx = txa;
    this.ty = tya;
};

/**
 * @returns {string}
 */
Matrix.prototype.toString = function ()
{
    return "(a="+ this.a +", b="+ this.b +", c="+ this.c +", d="+ this.d +", tx="+ this.tx +", ty="+ this.ty +")";
};

/**
 * @param {Point} point
 * @returns {Point}
 */
Matrix.prototype.transformPoint = function (point)
{
    // todo
    return point;
};

/**
 * @param {number} dx
 * @param {number} dy
 * @returns void
 */
Matrix.prototype.translate = function (dx, dy)
{
    this.tx = dx;
    this.ty = dy;
};


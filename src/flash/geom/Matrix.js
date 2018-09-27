/**
 * @param {number|undefined} a
 * @param {number|undefined} b
 * @param {number|undefined} c
 * @param {number|undefined} d
 * @param {number|undefined} tx
 * @param {number|undefined} ty
 * @constructor
 */
var Matrix = function (a, b, c, d, tx, ty)
{
    OriginalObject.call(this);
    
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
 * @type {OriginalObject}
 */
Matrix.prototype = Object.create(OriginalObject.prototype);
Matrix.prototype.constructor = Matrix;

/**
 * properties
 */
Object.defineProperties(Matrix.prototype, {
    a: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$matrix[0];
        },
        /**
         * @param  {number} a
         * @return void
         */
        set: function (a) {
            a = +a;
            if (!this.$isNaN(a)) {
                this._$matrix[0] = a;
            }
        }
    },
    b: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$matrix[1];
        },
        /**
         * @param  {number} b
         * @return void
         */
        set: function (b) {
            b = +b;
            if (!this.$isNaN(b)) {
                this._$matrix[1] = b;
            }
        }
    },
    c: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$matrix[2];
        },
        /**
         * @param  {number} c
         * @return void
         */
        set: function (c) {
            c = +c;
            if (!this.$isNaN(c)) {
                this._$matrix[2] = c;
            }
        }
    },
    d: {
        /**
         * @return {number}
         */
        get: function () {
            return +this._$matrix[3];
        },
        /**
         * @param  {number} d
         * @return void
         */
        set: function (d) {
            d = +d;
            if (!this.$isNaN(d)) {
                this._$matrix[3] = +d;
            }
        }
    },
    tx: {
        /**
         * @return {number}
         */
        get: function () {
            return +(this._$matrix[4] / 20);
        },
        /**
         * @param  {number} tx
         * @return void
         */
        set: function (tx) {
            tx = +tx;
            if (!this.$isNaN(tx)) {
                this._$matrix[4] = +(tx * 20);
            }
        }
    },
    ty: {
        /**
         * @return {number}
         */
        get: function () {
            return +(this._$matrix[5] / 20);
        },
        /**
         * @param  {number} ty
         * @return void
         */
        set: function (ty) {
            ty = +ty;
            if (!this.$isNaN(ty)) {
                this._$matrix[5] = +(ty * 20);
            }
        }
    }
});

/**
 * @returns {Matrix}
 */
Matrix.prototype._$clone = function ()
{
    return new Matrix(this.a, this.b, this.c, this.d, this.tx, this.ty);
};

/**
 * @param   {Matrix} m
 * @returns void
 */
Matrix.prototype.concat = function (m)
{
    this._$matrix = this.$multiplicationMatrix(m._$matrix, this._$matrix);
};

/**
 * @param   {number}   column
 * @param   {Vector3D} vector3D
 * @returns void
 */
Matrix.prototype.copyColumnFrom = function (column, vector3D)
{
    // todo
};

/**
 * @param   {number}   column
 * @param   {Vector3D} vector3D
 * @returns void
 */
Matrix.prototype.copyColumnTo = function (column, vector3D)
{
    // todo
};

/**
 * @param   {Matrix} sourceMatrix
 * @returns void
 */
Matrix.prototype.copyFrom = function (sourceMatrix)
{
    // todo
};

/**
 * @param   {number}   row
 * @param   {Vector3D} vector3D
 * @returns void
 */
Matrix.prototype.copyRowFrom = function (row, vector3D)
{
    // todo
};

/**
 * @param   {number}   row
 * @param   {Vector3D} vector3D
 * @returns void
 */
Matrix.prototype.copyRowTo = function (row, vector3D)
{
    // todo
};

/**
 * @param   {number} scaleX
 * @param   {number} scaleY
 * @param   {number} rotation
 * @param   {number} tx
 * @param   {number} ty
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
 * @param   {number} width
 * @param   {number} height
 * @param   {number} rotation
 * @param   {number} tx
 * @param   {number} ty
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
 * @param   {Point} point
 * @returns {Point}
 */
Matrix.prototype.deltaTransformPoint = function (point)
{
    var m = new Matrix();
    m.translate(point.x, point.y);

    var clone = this._$clone();
    clone.tx = 0;
    clone.ty = 0;

    m.concat(clone);

    return new Point(m.tx, m.ty);
};

/**
 * @returns void
 */
Matrix.prototype.identity = function ()
{
    this._$matrix = [1, 0, 0, 1, 0, 0];
};

/**
 * @returns void
 */
Matrix.prototype.invert = function ()
{
    var det = 1;
    var m   = [[this.a, this.c], [this.b, this.d]];

    var i = 0;
    while (i < 2) {

        var j = 0;
        while (j < 2) {

            if (i < j) {
                var buf = m[j][i] / m[i][i];

                var k = 0;
                while (k < 2) {
                    m[j][k] = m[j][k] - m[i][k] * buf;
                    k = (k + 1)|0;
                }
            }
            j = (j + 1)|0;
        }
        i = (i + 1)|0;
    }

    i = 0;
    while (i < 2) {
        det = det * m[i][i];
        i = (i + 1)|0;
    }

    this.a  =  this.a  / det;
    this.b  = -this.b  / det;
    this.c  = -this.c  / det;
    this.d  =  this.d  / det;
    this.tx = -this.tx / det;
    this.ty = -this.ty / det;
};

/**
 * @param   {number} rotation
 * @returns void
 */
Matrix.prototype.rotate = function (rotation)
{
    var radianX = this.$atan2(this.b,  this.a);
    var radianY = this.$atan2(-this.c, this.d);
    var scaleX  = this.$sqrt(this.a * this.a + this.b * this.b);
    var scaleY  = this.$sqrt(this.c * this.c + this.d * this.d);

    radianY = radianY + rotation - radianX;
    radianX = rotation;

    this.a = scaleX  * this.$cos(radianX);
    this.c = -scaleX * this.$sin(radianX);
    this.b = scaleY  * this.$sin(radianY);
    this.d = scaleY  * this.$cos(radianY);

    var tx  = this.a * this.tx + this.c * this.ty;
    var ty  = this.b * this.tx + this.d * this.ty;
    this.tx = tx;
    this.ty = ty;
};

/**
 * @param   {number} sx
 * @param   {number} sy
 * @returns void
 */
Matrix.prototype.scale = function (sx, sy)
{
    var radianX = this.$atan2(this.b,  this.a);
    var radianY = this.$atan2(-this.c, this.d);

    this.a = sx  * this.$cos(radianX);
    this.c = -sx * this.$sin(radianX);
    this.b = sy  * this.$sin(radianY);
    this.d = sy  * this.$cos(radianY);
};

/**
 * @param   {number} aa
 * @param   {number} ba
 * @param   {number} ca
 * @param   {number} da
 * @param   {number} txa
 * @param   {number} tya
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
 * @param   {Point} point
 * @returns {Point}
 */
Matrix.prototype.transformPoint = function (point)
{
    var m = new Matrix();
    m.translate(point.x, point.y);
    m.concat(this);
    return new Point(m.tx, m.ty);
};

/**
 * @param   {number} dx
 * @param   {number} dy
 * @returns void
 */
Matrix.prototype.translate = function (dx, dy)
{
    this.tx = this.tx + dx;
    this.ty = this.ty + dy;
};


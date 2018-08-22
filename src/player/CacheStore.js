/**
 * @constructor
 */
var CacheStore = function ()
{
    Util.call(this);

    this._$pool  = [];
    this._$store = [];
    this._$size  = 73400320;
};

/**
 * extends
 */
CacheStore.prototype = Object.create(Util.prototype);
CacheStore.prototype.constructor = CacheStore;

/**
 * @returns void
 */
CacheStore.prototype.reset = function ()
{
    var store = this._$store;

    for (var key in store) {

        if (!store.hasOwnProperty(key)) {
            continue;
        }

        var value = store[key];
        if (!(value instanceof CanvasRenderingContext2D)) {
            continue;
        }

        this.destroy(value);
    }

    this._$store = [];
    this._$size  = 73400320;
};

/**
 * @param   {CanvasRenderingContext2D|WebGLRenderingContext} ctx
 * @returns void
 */
CacheStore.prototype.destroy = function (ctx)
{
    var canvas = ctx.canvas;
    var width  = canvas.width|0;
    var height = canvas.height|0;

    this._$size = (this._$size + width * height)|0;

    if (this.$canWebGL) {
        ctx.clear(ctx.STENCIL_BUFFER_BIT | ctx.COLOR_BUFFER_BIT);
    } else {
        ctx.clearRect(0, 0, width + 1, height + 1);
    }

    // canvas reset
    canvas.width = canvas.height = 1;

    // pool
    this._$pool[this._$pool.length] = canvas;
};

/**
 * @returns {CanvasRenderingContext2D|WebGLRenderingContext}
 */
CacheStore.prototype.getCanvas = function ()
{
    return this._$pool.pop() || this.$document.createElement("canvas");
};

/**
 * @param   {string} key
 * @returns {CanvasRenderingContext2D|WebGLRenderingContext|null}
 */
CacheStore.prototype.getCache = function (key)
{
    if (typeof key !== "string") {
        key = key + "";
    }

    return (key in this._$store) ? this._$store[key] : null;
};

/**
 * @param {string} key
 * @param {CanvasRenderingContext2D|WebGLRenderingContext} value
 */
CacheStore.prototype.setCache = function (key, value)
{
    if (this._$size > 0) {
        if (value instanceof CanvasRenderingContext2D) {
            var canvas  = value.canvas;
            this._$size = (this._$size - (canvas.width * canvas.height))|0;
        }

        if (typeof key !== "string") {
            key = key + "";
        }

        this._$store[key] = value;
    }
};

/**
 * @param   {string} uniqueKey
 * @param   {array}  cxForm
 * @returns {string}
 */
CacheStore.prototype.generateKey = function (uniqueKey, cxForm)
{
    // color
    if (
           cxForm[0] !== 1
        || cxForm[1] !== 1
        || cxForm[2] !== 1
        || cxForm[3] !== 1
        || cxForm[4] !== 0
        || cxForm[5] !== 0
        || cxForm[6] !== 0
        || cxForm[7] !== 0
    ) {

        var R =   this.$max(0, this.$min((255 * cxForm[0]) + cxForm[4], 255))|0;
        var G =   this.$max(0, this.$min((255 * cxForm[1]) + cxForm[5], 255))|0;
        var B =   this.$max(0, this.$min((255 * cxForm[2]) + cxForm[6], 255))|0;
        var A = +(this.$max(0, this.$min((255 * cxForm[3]) + cxForm[7], 255)) / 255);

        uniqueKey = uniqueKey +"_"+ R +"_"+ G +"_"+ B +"_"+ A;
    }

    return uniqueKey + "";
};

Util.prototype.$cacheStore = new CacheStore();
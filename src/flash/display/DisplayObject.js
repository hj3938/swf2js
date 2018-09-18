/**
 * @constructor
 */
var DisplayObject = function ()
{
    EventDispatcher.call(this);

    // origin param
    this._$id          = null;
    this._$characterId = null;
    this._$stageId     = null;
    this._$containerId = null;
    this._$parent      = null;
    this._$variables   = {};
    this._$poolContext = null;


    // controller
    this._$index           = 0;
    this._$startFrame      = 1;
    this._$endFrame        = 0;


    // clip
    this._$clipDepth = 0;

    // property
    this._$accessibilityProperties = new AccessibilityProperties();
    this._$name                    = "";
    this._$transform               = new Transform(this);

};

/**
 * extends
 * @type {EventDispatcher}
 */
DisplayObject.prototype = Object.create(EventDispatcher.prototype);
DisplayObject.prototype.constructor = DisplayObject;

/**
 * properties
 */
Object.defineProperties(DisplayObject.prototype, {
    id: {
        /**
         * @returns {number}
         */
        get: function () {
            return this._$id;
        },
        /**
         * @param  {number} id
         * @return void
         */
        set: function (id) {
            if (typeof id === "number") {
                this._$id = id;
            }
        }
    },
    characterId: {
        /**
         * @returns {number}
         */
        get: function () {
            return this._$characterId;
        },
        /**
         * @param  {number} character_id
         * @return void
         */
        set: function (character_id) {
            if (typeof character_id === "number") {
                this._$characterId = character_id;
            }
        }
    },
    container: {
        /**
         * @returns {Stage}
         */
        get: function () {
            return (this._$containerId !== null) ? this.$stages[this._$containerId] : this._$containerId;
        },
        /**
         * @param  {Stage} stage
         * @return void
         */
        set: function (stage) {
            if (this._$containerId === null && stage instanceof Stage) {
                this._$containerId = stage.id;
            }
        }
    },
    stage: {
        /**
         * @returns {Stage}
         */
        get: function () {
            return (this._$stageId !== null) ? this.$stages[this._$stageId] : this._$stageId;
        },
        /**
         * @param  {Stage} stage
         * @return void
         */
        set: function (stage) {
            if (this._$stageId === null && stage instanceof Stage) {
                this._$stageId = stage.id;
            }
        }
    },
    accessibilityProperties: {
        /**
         * @returns {AccessibilityProperties}
         */
        get: function () {
            return this._$accessibilityProperties;
        },
        /**
         * @param  {AccessibilityProperties} accessibility_properties
         * @return void
         */
        set: function (accessibility_properties) {
            if (accessibility_properties instanceof AccessibilityProperties) {
                this._$accessibilityProperties = accessibility_properties;
            }
        }
    },
    alpha: {
        /**
         * @returns {number}
         */
        get: function () {
            var colorTransform = this.transform.colorTransform._$colorTransform;
            return +(colorTransform[3] + (colorTransform[7] / 255));
        },
        /**
         * @param   {number} alpha
         * @returns void
         */
        set: function (alpha) {

            if (typeof alpha !== "number") {
                alpha = +alpha;
            }

            if (this.$isNaN(alpha)) {
                alpha = 0;
            }

            // clone
            var colorTransform = this.transform.colorTransform;

            // set
            colorTransform._$colorTransform[3] = alpha;
            colorTransform._$colorTransform[7] = 0;

            this.transform.colorTransform = colorTransform;
        }
    },
    _alpha: {
        /**
         * @return {number}
         */
        get: function () {
            return +(this.alpha * 100);
        },
        /**
         * @param  {number} alpha
         * @return void
         */
        set: function (alpha) {
            this.alpha = +(alpha / 100);
        }
    },
    blendMode: {
        /**
         * @return {string}
         */
        get: function () {

            if (this.transform._$blendMode) {

                return this.transform._$blendMode;

            }

            var placeObject = this._$getPlaceObject();
            if (placeObject) {

                return placeObject.blendMode;

            }

            this.transform._$transform();
            return this.transform._$blendMode;

        },
        /**
         * @param  {string|number} blend_mode
         * @return void
         */
        set: function (blend_mode) {
            this.transform._$transform(null, null, null, blend_mode);
        }
    },
    // TODO
    blendShader: {
        /**
         * @return void
         */
        get: function () {},
        /**
         * @param {Shader} blend_shader
         */
        set: function (blend_shader) {

        }
    },
    // TODO
    cacheAsBitmap: {
        get: function () {

        },
        set: function (cache_as_bitmap) {

        }
    },
    filters: {
        /**
         * @return {string}
         */
        get: function () {

            if (this.transform._$filters) {

                return this.transform._$filters;

            }

            var placeObject = this._$getPlaceObject();
            if (placeObject) {

                return placeObject.filters;

            }

            this.transform._$transform();
            return this.transform._$filters;

        },
        /**
         * @param  {array} filters
         * @return void
         */
        set: function (filters) {
            this.transform._$transform(null, null, filters, null);
        }
    },
    height: {
        /**
         * @return {number}
         */
        get: function () {
            var bounds = this._$getBounds(this.transform.matrix._$matrix);
            return this.$abs(bounds.yMax - bounds.yMin);
        },
        /**
         * @param  {number} height
         * @return void
         */
        set: function (height) {

            if (typeof height !== "number") {
                height = +height;
            }

            if (!this.$isNaN(height)) {

                var matrix = this.transform.matrix;
                var bounds = this._$getBounds(matrix._$matrix);

                // set
                matrix.d = +(height * matrix.d / this.$abs(bounds.yMax - bounds.yMin));

                this.transform.matrix = matrix;

            }
        }
    },
    // TODO
    loaderInfo: {
        get: function () {

        },
        set: function () {}
    },
    // TODO
    mask: {
        get: function () {

        },
        set: function () {

        }
    },
    // TODO
    metaData: {
        get: function () {

        },
        set: function () {

        }
    },
    mouseX:{
        // TODO
        get: function () {

        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    _xmouse:{
        get: function () {
            return this.mouseX;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    mouseY:{
        // TODO
        get: function () {

        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    _ymouse:{
        get: function () {
            return this.mouseY;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    name: {
        /**
         * @returns {string}
         */
        get: function () {
            return this._$name + "";
        },
        /**
         * @param  {string} name
         * @return void
         */
        set: function (name) {
            this._$name = name + "";
        }
    },
    _name: {
        /**
         * @returns {string}
         */
        get: function () {
            return this.name;
        },
        /**
         * @param  {string} name
         * @return void
         */
        set: function (name) {
            this.name = name + "";
        }
    },
    // TODO
    opaqueBackground: {
        get: function () {

        },
        set: function () {

        }
    },
    parent: {
        /**
         * @returns {DisplayObject}
         */
        get: function () {
            return this._$parent;
        },
        /**
         * @param {DisplayObject} parent
         */
        set: function (parent) {
            if (parent instanceof DisplayObject) {
                this._$parent = parent;
            }
        }
    },
    _parent: {
        /**
         * @returns {DisplayObject}
         */
        get: function () {
            return this.parent;
        },
        /**
         * @param {DisplayObject} parent
         */
        set: function (parent) {
            this.parent = parent;
        }
    },
    root: {
        /**
         * @returns {MainTimeline}
         */
        get: function () {
            return this.stage._root;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    _root: {
        /**
         * @returns {MainTimeline}
         */
        get: function () {
            return this.root;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    rotation: {
        /**
         * @return {number}
         */
        get: function () {
            var matrix = this.transform.matrix;
            return this.$atan2(matrix.b, matrix.a) * 180 / this.$PI;
        },
        /**
         * @param  {number} rotation
         * @return void
         */
        set: function (rotation) {

            if (typeof rotation !== "number") {
                rotation = +rotation;
            }

            if (!this.$isNaN(rotation)) {

                var matrix  = this.transform.matrix;

                var radianX = this.$atan2(matrix.b,  matrix.a);
                var radianY = this.$atan2(-matrix.c, matrix.d);
                var ScaleX  = this.$sqrt(matrix.a * matrix.a + matrix.b * matrix.b);
                var ScaleY  = this.$sqrt(matrix.c * matrix.c + matrix.d * matrix.d);

                rotation    = rotation * this.$PI / 180;
                radianY     = radianY + rotation - radianX;
                radianX     = rotation;

                matrix.a    = ScaleX  * this.$cos(radianX);
                matrix.b    = ScaleX  * this.$sin(radianX);
                matrix.c    = -ScaleY * this.$sin(radianY);
                matrix.d    = ScaleY  * this.$cos(radianY);

                this.transform.matrix = matrix;

            }
        }
    },
    _rotation: {
        /**
         * @return {number}
         */
        get: function () {
            return this.rotation;
        },
        /**
         * @param  {number} rotation
         * @return void
         */
        set: function (rotation) {
            this.rotation = rotation;
        }
    },




    transform: {
        /**
         * @returns {Transform}
         */
        get: function () {
            return this._$transform;
        },
        /**
         * @param   {Transform} transform
         * @returns void
         */
        set: function (transform) {
            if (transform instanceof Transform) {
                this._$transform = transform;
            }
        }
    }
});

/**
 * @return {PlaceObject|null}
 */
DisplayObject.prototype._$getPlaceObject = function ()
{
    var parent = this.parent;
    if (!parent) {
        return null;
    }

    var frame = parent.currentFrame|0;
    if (!(frame in parent._$placeController)) {
        return null;
    }

    var id = parent._$placeController[frame][this._$index];

    return parent._$placeObjects[id];
};

/**
 * @param   {MovieClip} parent
 * @param   {object}    tag
 * @returns void
 */
DisplayObject.prototype._$commonBuild = function (parent, tag)
{
    // set param
    this._$index = tag.Depth|0;

    if ("StartFrame" in tag) {
        this._$startFrame = tag.StartFrame|0;
    }

    if ("EndFrame" in tag) {
        this._$endFrame = tag.EndFrame|0;
    }
};

/**
 * @param  {array} matrix
 * @return {array}
 */
DisplayObject.prototype._$preDraw = function (matrix)
{

    if (this.filters.length || this.blendMode !== BlendMode.NORMAL) {

        this._$poolContext = this.stage.player._$preContext;

        // reset
        this.stage.player._$preContext = null;

        var xScale = +(this.$sqrt(matrix[0] * matrix[0] + matrix[1] * matrix[1]));
        var yScale = +(this.$sqrt(matrix[2] * matrix[2] + matrix[3] * matrix[3]));
        xScale = +(this.$pow(this.$SQRT2, this.$ceil(this.$log(xScale) / this.$LN2_2 - this.$LOG1P)));
        yScale = +(this.$pow(this.$SQRT2, this.$ceil(this.$log(yScale) / this.$LN2_2 - this.$LOG1P)));

        var bounds = this._$getBounds(null);
        var xMax   = +bounds.xMax;
        var xMin   = +bounds.xMin;
        var yMax   = +bounds.yMax;
        var yMin   = +bounds.yMin;

        var width  = this.$abs(this.$ceil((xMax - xMin) * xScale))|0;
        var height = this.$abs(this.$ceil((yMax - yMin) * yScale))|0;

        // start canvas
        var canvas    = this.$cacheStore.getCanvas();
        canvas.width  = width;
        canvas.height = height;

        // start context
        var context = canvas.getContext("2d");

        // offset
        context._$offsetX = 0;
        context._$offsetY = 0;

        this.stage.player._$preContext = context;

        return [xScale, 0, 0, yScale, -xMin * xScale, -yMin * yScale];

    }

    return matrix;
};

/**
 * @param  {array} matrix
 * @param  {array} pre_matrix
 * @param  {array} color_transform
 * @return void
 */
DisplayObject.prototype._$postDraw = function (matrix, pre_matrix, color_transform)
{
    if (this._$poolContext) {

        var ctx = this.stage.player._$preContext;


        // filter
        var offsetX = 0;
        var offsetY = 0;

        var length  = this.filters.length;
        if (length) {

            var idx = 0;
            while (length > idx) {

                var filter = this.filters[idx];

                ctx = filter._$applyFilter(ctx, pre_matrix, color_transform, this.stage.player);

                idx = (idx + 1)|0;
            }

            offsetX = ctx._$offsetX;
            offsetY = ctx._$offsetY;

        }

        // blend
        var width  = ctx.canvas.width|0;
        var height = ctx.canvas.height|0;

        ctx.setTransform(1,0,0,1,0,0);
        ctx.globalAlpha = 1;
        if (this.blendMode !== BlendMode.NORMAL) {

            var operation = "source-over";
            switch (this.blendMode) {

                case BlendMode.MULTIPLY:
                    operation = BlendMode.MULTIPLY;
                    break;

                case BlendMode.SCREEN:
                    operation = BlendMode.SCREEN;
                    break;

                case BlendMode.LIGHTEN:
                    operation = BlendMode.LIGHTEN;
                    break;

                case BlendMode.DARKEN:
                    operation = BlendMode.DARKEN;
                    break;

                case BlendMode.DIFFERENCE:
                    operation = BlendMode.DIFFERENCE;
                    break;

                case BlendMode.ADD:
                    operation = "lighter";
                    break;

                case BlendMode.SUBTRACT:

                    ctx.globalCompositeOperation = BlendMode.DIFFERENCE;
                    ctx.fillStyle = "rgb(255,255,255)";
                    ctx.fillRect(0, 0, width, height);

                    ctx.globalCompositeOperation = BlendMode.DARKEN;
                    ctx.fillStyle = "rgb(255,255,255)";
                    ctx.fillRect(0, 0, width, height);

                    operation = "color-burn";
                    break;

                case BlendMode.INVERT:

                    ctx.globalCompositeOperation = BlendMode.DIFFERENCE;
                    ctx.fillStyle = "rgb(255,255,255)";
                    ctx.fillRect(0, 0, width, height);

                    ctx.globalCompositeOperation = "lighter";
                    ctx.fillStyle = "rgb(255,255,255)";
                    ctx.fillRect(0, 0, width, height);

                    operation = BlendMode.DIFFERENCE;
                    break;

                case BlendMode.ALPHA:
                    operation = "source-over";
                    break;

                case BlendMode.ERASE:
                    operation = "destination-out";
                    break;

                case BlendMode.OVERLAY:
                    operation = BlendMode.OVERLAY;
                    break;

                case BlendMode.HARDLIGHT:
                    operation = "hard-light";
                    break;

                default:
                    break;

            }

            ctx.globalCompositeOperation = operation;

        }

        var xScale = pre_matrix[0];
        var yScale = pre_matrix[3];

        // draw
        var m = this.$multiplicationMatrix(
            matrix, [1 / xScale, 0, 0, 1 / yScale, -pre_matrix[4]/xScale, -pre_matrix[5]/yScale]
        );

        this._$poolContext.setTransform(m[0], m[1], m[2], m[3], m[4], m[5]);
        this._$poolContext.drawImage(ctx.canvas, -offsetX, -offsetY, width, height);


        this.stage.player._$preContext = this._$poolContext;

        // reset
        this._$poolContext = null;
    }
};
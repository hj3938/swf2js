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
    this._$visible                 = true;
    this._$scrollRect              = null;
    this._$opaqueBackground        = null;
    this._$mask                    = null;

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

            alpha = +alpha;
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
        get: function () {

        },
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

            height = +height;

            if (!this.$isNaN(height)) {

                var matrix = this.transform.matrix;
                var bounds = this._$getBounds(matrix._$matrix);

                // set
                matrix.d = +(height * matrix.d / this.$abs(bounds.yMax - bounds.yMin));

                this.transform.matrix = matrix;

            }
        }
    },
    _height: {
        /**
         * @return {number}
         */
        get: function () {
            return this.height;
        },
        /**
         * @param  {number} height
         * @return void
         */
        set: function (height) {
            this.height = height;
        }
    },
    // TODO
    loaderInfo: {
        get: function () {

        },
        set: function () {

        }
    },
    // TODO
    mask: {
        /**
         * @return {DisplayObject|null}
         */
        get: function () {
            return this._$mask;
        },
        /**
         * @param  {DisplayObject|null} mask
         * @return void
         */
        set: function (mask) {
            if (mask === null || mask instanceof DisplayObject) {
                this._$mask = mask;
            }
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
        /**
         * @returns {number|null}
         */
        get: function () {
            return this._$opaqueBackground;
        },
        /**
         * @param  {number|null} opaque_background
         * @return void
         */
        set: function (opaque_background) {
            if (typeof opaque_background === "string") {
                opaque_background = this.$colorStringToInt(opaque_background);
            }

            if (typeof opaque_background === "number" || opaque_background === null) {
                this._$opaqueBackground = opaque_background;
            }
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
         * @param  {DisplayObject} parent
         * @return void
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
         * @param  {DisplayObject} parent
         * @return void
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

            rotation = +rotation;

            if (!this.$isNaN(rotation)) {

                var sign = 1;
                if (rotation < 0) {
                    sign = -1;
                }

                // clamp
                var value = this.$abs(rotation);
                if (value >= 360) {

                    while (value >= 360) {
                        value = value - 360;
                    }

                    rotation = value * sign;

                }

                var matrix  = this.transform.matrix;
                var radianX = this.$atan2(matrix.b,  matrix.a);
                var radianY = this.$atan2(-matrix.c, matrix.d);
                var ScaleX  = this.$sqrt(matrix.a * matrix.a + matrix.b * matrix.b);
                var ScaleY  = this.$sqrt(matrix.c * matrix.c + matrix.d * matrix.d);

                var radian  = rotation * this.$PI / 180;
                radianY     = radianY + radian - radianX;
                radianX     = radian;

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
    // TODO
    rotationX: {
        get: function () {
        },
        set: function () {
        }
    },
    // TODO
    rotationY: {
        get: function () {
        },
        set: function () {
        }
    },
    // TODO
    rotationZ: {
        get: function () {
        },
        set: function () {
        }
    },
    // TODO
    scale9Grid: {
        get: function () {
        },
        set: function () {
        }
    },
    scaleX: {
        /**
         * @return {number}
         */
        get: function () {
            var matrix = this.transform.matrix;
            var xScale = this.$sqrt(matrix.a * matrix.a + matrix.b * matrix.b);
            return (0 < matrix.a) ? xScale : -xScale;
        },
        /**
         * @param  {number} scale_x
         * @return void
         */
        set: function (scale_x) {

            scale_x = +scale_x;

            if (!this.$isNaN(scale_x)) {

                var matrix  = this.transform.matrix;
                var radianX = this.$atan2(matrix.b, matrix.a);

                matrix.a = scale_x * this.$cos(radianX);
                matrix.b = scale_x * this.$sin(radianX);

                this.transform.matrix = matrix;
            }
        }
    },
    _xscale: {
        /**
         * @return {number}
         */
        get: function () {
            return this.scaleX * 100;
        },
        /**
         * @param  {number} x_scale
         * @return void
         */
        set: function (x_scale) {

            x_scale = +x_scale;

            if (!this.$isNaN(x_scale)) {
                this.scaleX = x_scale / 100;
            }
        }
    },
    scaleY: {
        /**
         * @return {number}
         */
        get: function () {
            var matrix = this.transform.matrix;
            var yScale = this.$sqrt(matrix.c * matrix.c + matrix.d * matrix.d);
            return (0 < matrix.d) ? yScale : -yScale;
        },
        /**
         * @param  scale_y
         * @return void
         */
        set: function (scale_y) {

            scale_y = +scale_y;

            if (!this.$isNaN(scale_y)) {

                var matrix  = this.transform.matrix;
                var radianY = this.$atan2(-matrix.c, matrix.d);

                matrix.c = -scale_y * this.$sin(radianY);
                matrix.d = scale_y  * this.$cos(radianY);

                this.transform.matrix = matrix;
            }
        }
    },
    _yscale: {
        /**
         * @return {number}
         */
        get: function () {
            return this.scaleY * 100;
        },
        /**
         * @param  y_scale
         * @return void
         */
        set: function (y_scale) {

            y_scale = +y_scale;

            if (!this.$isNaN(y_scale)) {
                this.scaleY = y_scale / 100;
            }
        }
    },
    // TODO
    scaleZ: {
        get: function () {
        },
        set: function () {
        }
    },
    // TODO
    scrollRect: {
        /**
         * @return {Rectangle}
         */
        get: function () {
            return this._$scrollRect;
        },
        /**
         * @param  {Rectangle} scroll_rect
         * @return void
         */
        set: function (scroll_rect) {
            if (scroll_rect instanceof Rectangle) {
                this._$scrollRect = scroll_rect;
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
    },
    visible: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$visible;
        },
        /**
         * @param  {boolean} visible
         * @return void
         */
        set: function (visible) {
            if (typeof visible === "boolean") {
                this._$visible = visible;
            }
        }
    },
    _visible: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this.visible;
        },
        /**
         * @param  {boolean} visible
         * @return void
         */
        set: function (visible) {
            this.visible = visible;
        }
    },
    width: {
        /**
         * @return {number}
         */
        get: function () {
            var bounds = this._$getBounds(this.transform.matrix._$matrix);
            return this.$abs(bounds.xMax - bounds.xMin);
        },
        /**
         * @param  {number} width
         * @return void
         */
        set: function (width) {

            width = +width;

            if (!this.$isNaN(width)) {
                var matrix = this.transform.matrix;
                var bounds = this._$getBounds(matrix._$matrix);
                var xScale = width * matrix.a / this.$abs(bounds.xMax - bounds.xMin);

                if (this.$isNaN(xScale)) {
                    xScale = 0;
                }

                matrix.a = xScale;

                this.transform.matrix = matrix;
            }
        }
    },
    _width: {
        /**
         * @return {number}
         */
        get: function () {
            return this.width;
        },
        /**
         * @param  {number} width
         * @return void
         */
        set: function (width) {
            this.width = width;
        }
    },
    x: {
        /**
         * @return {number}
         */
        get: function () {
            return this.transform.matrix.tx;
        },
        /**
         * @param  {number} x
         * @return void
         */
        set: function (x) {

            x = +x;

            if (!this.$isNaN(x)) {
                var matrix = this.transform.matrix;
                matrix.tx  = x;
                this.transform.matrix = matrix;
            }
        }
    },
    _x: {
        /**
         * @return {number}
         */
        get: function () {
            return this.x;
        },
        /**
         * @param  {number} x
         * @return void
         */
        set: function (x) {
            this.x = x;
        }
    },
    y: {
        /**
         * @return {number}
         */
        get: function () {
            return this.transform.matrix.ty;
        },
        /**
         * @param  {number} y
         * @return void
         */
        set: function (y) {

            y = +y;

            if (!this.$isNaN(y)) {
                var matrix = this.transform.matrix;
                matrix.ty  = y;
                this.transform.matrix = matrix;
            }
        }
    },
    _y: {
        /**
         * @return {number}
         */
        get: function () {
            return this.y;
        },
        /**
         * @param  {number} y
         * @return void
         *
         */
        set: function (y) {
            this.y = y;
        }
    },
    // TODO
    z: {
        get: function () {
        },
        set: function () {
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

/**
 * @param  {DisplayObject} target_coordinate_space
 * @return {Rectangle}
 */
DisplayObject.prototype.getBounds = function (target_coordinate_space)
{

    var bounds = this._$getBounds();

    if (target_coordinate_space !== this) {

        var matrix = this.$multiplicationMatrix(
            target_coordinate_space.transform.matrix._$matrix,
            this.transform.matrix._$matrix
        );

        bounds = this.$boundsMatrix(bounds, matrix);
    }

    return new Rectangle(
        bounds.xMin / 20,
        bounds.yMin / 20,
        this.$abs(bounds.xMax - bounds.xMin) / 20,
        this.$abs(bounds.yMax - bounds.yMin) / 20
    );
};

/**
 * @param  {DisplayObject} target_coordinate_space
 * @return {Rectangle}
 */
DisplayObject.prototype.getRect = function (target_coordinate_space)
{

    var rect = this._$getRect();

    if (target_coordinate_space !== this) {

        var matrix = this.$multiplicationMatrix(
            target_coordinate_space.transform.matrix._$matrix,
            this.transform.matrix._$matrix
        );

        rect = this.$boundsMatrix(rect, matrix);
    }

    return new Rectangle(
        rect.xMin,
        rect.yMin,
        this.$abs(rect.xMax - rect.xMin),
        this.$abs(rect.yMax - rect.yMin)
    );
};

DisplayObject.prototype.globalToLocal = function ()
{};

DisplayObject.prototype.globalToLocal3D = function ()
{};

DisplayObject.prototype.hitTestObject = function ()
{};

DisplayObject.prototype.hitTestPoint = function ()
{};

DisplayObject.prototype.local3DToGlobal = function ()
{};

DisplayObject.prototype.localToGlobal = function ()
{};
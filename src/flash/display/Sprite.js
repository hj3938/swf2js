/**
 * @constructor
 */
var Sprite = function ()
{

    DisplayObjectContainer.call(this);

    // properties
    this._$buttonMode     = false;
    this._$dropTarget     = null;
    this._$graphics       = new Graphics();
    this._$hitArea        = null;
    this._$soundTransform = new SoundTransform();
    this._$useHandCursor  = false;

};

/**
 * extends
 * @type {DisplayObjectContainer}
 */
Sprite.prototype = Object.create(DisplayObjectContainer.prototype);
Sprite.prototype.constructor = Sprite;

/**
 * properties
 */
Object.defineProperties(Sprite.prototype, {
    buttonMode: {
        /**
         * @returns {boolean}
         */
        get: function () {
            return this._$buttonMode;
        },
        set: function (button_mode) {
            if (typeof button_mode === "boolean") {
                this._$buttonMode = button_mode;
            }
        }
    },
    dropTarget: {
        /**
         * @returns {DisplayObject|null}
         */
        get: function () {
            return this._$dropTarget;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    graphics: {
        /**
         * @returns {Graphics}
         */
        get: function () {
            return this._$graphics;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    hitArea: {
        /**
         * @returns {Sprite|null}
         */
        get: function () {
            return this._$hitArea;
        },
        /**
         * @param  {Sprite|null} hit_area
         * @return void
         */
        set: function (hit_area) {
            if (hit_area === null || hit_area instanceof Sprite) {
                this._$hitArea = hit_area;
            }
        }
    },
    soundTransform: {
        /**
         * @returns {SoundTransform}
         */
        get: function () {
            return this._$soundTransform;
        },
        /**
         * @param  {SoundTransform} sound_transform
         * @return void
         */
        set: function (sound_transform) {
            if (sound_transform instanceof SoundTransform) {
                this._$soundTransform = sound_transform;
            }
        }
    },
    useHandCursor: {
        /**
         * @returns {boolean}
         */
        get: function () {
            return this._$useHandCursor;
        },
        /**
         * @param  {boolean} use_hand_cursor
         * @return void
         */
        set: function (use_hand_cursor) {
            if (typeof use_hand_cursor === "boolean") {
                this._$useHandCursor = use_hand_cursor;
            }
        }
    }
});

/**
 * @returns {string}
 */
Sprite.prototype.toString = function ()
{
    return "[object Sprite]";
};

/**
 * @param  {boolean}   lock_center
 * @param  {Rectangle} bounds
 * @return void
 */
Sprite.prototype.startDrag = function (lock_center, bounds)
{


};

/**
 * @param  {number}    touch_point_id
 * @param  {boolean}   lock_center
 * @param  {Rectangle} bounds
 * @return void
 */
Sprite.prototype.startTouchDrag = function (touch_point_id, lock_center, bounds)
{


};

/**
 * @return void
 */
Sprite.prototype.stopDrag = function ()
{


};

/**
 * @param  {number} touch_point_id
 * @return void
 */
Sprite.prototype.stopTouchDrag = function (touch_point_id)
{


};

/**
 * @param  {array}   matrix
 * @param  {array}   color_transform
 * @param  {boolean} is_clip
 * @param  {boolean} visible
 * @return void
 */
Sprite.prototype._$draw = function (matrix, color_transform, is_clip, visible)
{
    var instance;
    var controller = [];
    var instances  = this._$instances;

    // build controller
    var length = instances.length;
    var idx    = 0;
    while (length > idx) {

        instance = instances[idx];

        controller[instance._$index] = instance;

        idx = (idx + 1)|0;
    }

    // children draw
    var version = this.root.actionScriptVersion|0;
    for (var depth in controller) {

        if (!controller.hasOwnProperty(depth)) {
            continue;
        }

        instance = controller[depth];
        if (version === ActionScriptVersion.ACTIONSCRIPT3) {

            // next frame
            instance._$putFrame();

        }

        // Transform
        var transform = instance.transform;

        // next draw
        instance._$draw(
            this.$multiplicationMatrix(matrix, transform.matrix._$matrix),
            this.$multiplicationColor(color_transform, transform.colorTransform._$colorTransform),
            is_clip,
            visible
        );

        // case action script 1 or 2
        if (instance.toString() === "[object MovieClip]"
            && version === ActionScriptVersion.ACTIONSCRIPT2
        ) {

            instance._$putFrame();

        }
    }
};

/**
 * @param  {array|null|undefined} matrix
 * @return {{xMin: number, xMax: number, yMin: number, yMax: number}}
 */
Sprite.prototype._$getBounds = function (matrix)
{
    var xMax = 0;
    var yMax = 0;
    var xMin = 0;
    var yMin = 0;

    // var graphics = this.graphics;
    // var isDraw = graphics.isDraw;
    //
    // if (isDraw) {
    //     var maxWidth  = graphics.maxWidth;
    //     var halfWidth = maxWidth / 2;
    //     var gBounds   = this.boundsMatrix(graphics.bounds, matrix);
    //     var twips = (matrix) ? 20 : 1;
    //     xMin = +((gBounds.xMin - halfWidth) / twips);
    //     xMax = +((gBounds.xMax + halfWidth) / twips);
    //     yMin = +((gBounds.yMin - halfWidth) / twips);
    //     yMax = +((gBounds.yMax + halfWidth) / twips);
    // }

    var instances  = this._$instances;

    var length = instances.length;
    var idx    = 0;
    while (length > idx) {

        var instance = instances[idx];
        idx = (idx + 1)|0;

        // Transform
        var transform = instance.transform;

        var bounds  = instance._$getBounds(
            matrix ? this.$multiplicationMatrix(matrix, transform.matrix._$matrix) : transform.matrix._$matrix
        );

        xMin = +this.$min(xMin, bounds.xMin);
        xMax = +this.$max(xMax, bounds.xMax);
        yMin = +this.$min(yMin, bounds.yMin);
        yMax = +this.$max(yMax, bounds.yMax);
    }

    return {
        xMin: xMin,
        xMax: xMax,
        yMin: yMin,
        yMax: yMax
    };
};

/**
 * @param  {number} x
 * @param  {number} y
 * @param  {array}  matrix
 * @return {boolean}
 */
Sprite.prototype._$hit = function (x, y, matrix)
{
    var instances = this._$instances;

    var length = instances.length;
    var idx    = 0;
    while (length > idx) {

        var instance = instances[idx];
        idx = (idx + 1)|0;

        // Transform
        var transform = instance.transform;

        // next hit test
        var hit = instance._$hit(
            x, y,
            this.$multiplicationMatrix(matrix, transform.matrix._$matrix)
        );

        if (hit) {
            return hit;
        }
    }

    return false;
};
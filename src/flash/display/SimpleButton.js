/**
 * @param {DisplayObject|null} upState
 * @param {DisplayObject|null} overState
 * @param {DisplayObject|null} downState
 * @param {DisplayObject|null} hitTestState
 * @constructor
 */
var SimpleButton = function (upState, overState, downState, hitTestState)
{
    InteractiveObject.call(this);

    // properties
    this._$downState      = null;
    this._$enabled        = true;
    this._$hitTestState   = null;
    this._$overState      = null;
    this._$soundTransform = new SoundTransform();
    this._$trackAsMenu    = false;
    this._$upState        = null;
    this._$useHandCursor  = true;

    // init
    this.downState        = downState;
    this.hitTestState     = hitTestState;
    this.overState        = overState;
    this.upState          = upState;

    // origin param
    this._$actions        = [];
    this._$characters     = [];
    this._$status         = "up";
};

/**
 * extends
 * @type {InteractiveObject}
 */
SimpleButton.prototype = Object.create(InteractiveObject.prototype);
SimpleButton.prototype.constructor = SimpleButton;

/**
 * properties
 */
Object.defineProperties(SimpleButton.prototype, {
    downState: {
        /**
         * @return {DisplayObject}
         */
        get: function () {
            return this._$downState;
        },
        /**
         * @param  {DisplayObject} down_state
         * @return void
         */
        set: function (down_state) {
            if (down_state instanceof DisplayObject) {
                this._$downState = down_state;
            }
        }
    },
    enabled: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$enabled;
        },
        /**
         * @param  {boolean} enabled
         * @return void
         */
        set: function (enabled) {
            if (typeof enabled === "boolean") {
                this._$enabled = enabled;
            }
        }
    },
    hitTestState: {
        /**
         * @return {DisplayObject}
         */
        get: function () {
            return (this._$hitTestState) ? this._$hitTestState : this.upState;
        },
        /**
         * @param  {DisplayObject} hit_test_state
         * @return void
         */
        set: function (hit_test_state) {
            if (hit_test_state instanceof DisplayObject) {
                this._$hitTestState = hit_test_state;
            }
        }
    },
    overState: {
        /**
         * @return {DisplayObject}
         */
        get: function () {
            return this._$overState;
        },
        /**
         * @param  {DisplayObject} over_state
         * @return void
         */
        set: function (over_state) {
            if (over_state instanceof DisplayObject) {
                this._$overState = over_state;
            }
        }
    },
    soundTransform: {
        /**
         * @return {SoundTransform}
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
    trackAsMenu: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$trackAsMenu;
        },
        /**
         * @param {boolean} track_as_menu
         */
        set: function (track_as_menu) {
            if (typeof track_as_menu === "boolean") {
                this._$trackAsMenu = track_as_menu;
            }
        }
    },
    upState: {
        /**
         * @return {DisplayObject}
         */
        get: function () {
            return this._$upState;
        },
        /**
         * @param  {DisplayObject} up_state
         * @return void
         */
        set: function (up_state) {
            if (up_state instanceof DisplayObject) {
                this._$upState = up_state;
            }
        }
    },
    useHandCursor: {
        /**
         * @return {boolean}
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
SimpleButton.prototype.toString = function ()
{
    return "[object SimpleButton]";
};

/**
 * @param   {MovieClip}    parent
 * @param   {number}       index
 * @param   {object}       tag
 * @param   {boolean}      should_action
 * @returns {SimpleButton}
 */
SimpleButton.prototype._$build = function (parent, index, tag, should_action)
{
    var button = new SimpleButton();
    var stage  = parent.stage;

    // init
    button.id          = index;
    button.characterId = this.characterId;
    button.parent      = parent;
    button.stage       = stage;

    // common build
    button._$commonBuild(parent, tag);

    console.log(tag);

    /**
     * set place data
     */
    // name
    if (tag.PlaceFlagHasName === 1) {
        button.name = tag.Name;
    }


    var length = this._$characters.length;
    var idx    = 0;

    // state init
    var downState    = new Sprite();
    downState.parent = parent;
    downState.stage  = stage;

    var hitTestState    = new Sprite();
    hitTestState.parent = parent;
    hitTestState.stage  = stage;

    var overState    = new Sprite();
    overState.parent = parent;
    overState.stage  = stage;

    var upState    = new Sprite();
    upState.parent = parent;
    upState.stage  = stage;


    // build children
    var characters = stage._$characters;
    while (length > idx) {

        var btnTag = this._$characters[idx];

        // set new button
        button._$characters[idx] = btnTag;

        // state character
        var character = characters[btnTag.CharacterId];

        var id = 0;
        if (btnTag.ButtonStateDown) {
            id = downState._$instances.length|0;
            downState._$instances[id] = this._$buildChild(parent, id, btnTag, character);
        }

        if (btnTag.ButtonStateHitTest) {
            id = hitTestState._$instances.length|0;
            hitTestState._$instances[id] = this._$buildChild(parent, id, btnTag, character);
        }

        if (btnTag.ButtonStateOver) {
            id = overState._$instances.length|0;
            overState._$instances[id] = this._$buildChild(parent, id, btnTag, character);
        }

        if (btnTag.ButtonStateUp) {
            id = upState._$instances.length|0;
            upState._$instances[id] = this._$buildChild(parent, id, btnTag, character);
        }

        idx = (idx + 1)|0;
    }

    // set state
    button.downState    = downState;
    button.hitTestState = hitTestState;
    button.overState    = overState;
    button.upState      = upState;

    return button;
};

/**
 * @param  {string} status
 * @return void
 */
SimpleButton.prototype._$changeState = function (status)
{
    var sprite    = new Sprite();
    sprite.parent = this.parent;
    sprite.stage  = this.stage;

    // change state string
    var state = "ButtonState" + this._$status.charAt(0).toUpperCase() + this._$status.slice(1);

    var characters = this.stage._$characters;

    var length = this._$characters.length|0;
    var idx    = 0;
    while (length > idx) {

        var tag = this._$characters[idx];

        // state character
        var character = characters[tag.CharacterId];

        // build
        if (tag[state]) {
            var id = sprite._$instances.length|0;
            sprite._$instances[id] = this._$buildChild(this.parent, id, tag, character);
        }

        idx = (idx + 1)|0;
    }

    // reset
    this[this._$status + "State"] = sprite;

    // set
    this._$status = status;
};

/**
 * @param  {MovieClip}     parent
 * @param  {number}        id
 * @param  {object}        tag
 * @param  {DisplayObject} character
 * @return {DisplayObject}
 */
SimpleButton.prototype._$buildChild = function (parent, id, tag, character)
{
    // create new instance
    var instance = character._$build(parent, id, tag, false);

    // Matrix
    var matrix                  = new Matrix();
    matrix._$matrix             = this.$cloneArray(tag.Matrix);
    instance.transform._$matrix = matrix;

    // ColorTransform
    var colorTransform                  = new ColorTransform();
    colorTransform._$colorTransform     = this.$cloneArray(tag.ColorTransform);
    instance.transform._$colorTransform = colorTransform;

    // TODO filter and blend


    return instance;
};

/**
 * @param   {array}   matrix
 * @param   {array}   color_transform
 * @param   {boolean} is_clip
 * @param   {boolean} visible
 * @returns void
 */
SimpleButton.prototype._$draw = function (matrix, color_transform, is_clip, visible)
{
    var player = this.stage.player;

    var state = this[this._$status + "State"];
    state._$draw(matrix, color_transform, is_clip, visible);

    // add button
    player.addEventObject(
        this,
        this.$cloneArray(matrix),
        this._$getBounds(null, "hitTest")
    );
};

/**
 * @param  {number} x
 * @param  {number} y
 * @param  {array}  matrix
 * @return {boolean}
 */
SimpleButton.prototype._$hit = function (x, y, matrix)
{
    return this.hitTestState._$hit(x, y, matrix);
};

/**
 * @param  {array|null|undefined} matrix
 * @param  {string} state
 * @return {{xMin: number, xMax: number, yMin: number, yMax: number}}
 */
SimpleButton.prototype._$getBounds = function (matrix, state)
{
    if (!state) {
        state = this._$status;
    }
    return this[state + "State"]._$getBounds(matrix);
};
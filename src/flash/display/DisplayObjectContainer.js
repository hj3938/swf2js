/**
 * @constructor
 */
var DisplayObjectContainer = function ()
{
    InteractiveObject.call(this);

    // property init
    this._mouseChildren = true;
    this._numChildren   = 0;
    this._tabChildren   = true;
    this._textSnapshot  = new TextSnapshot();

    // origin param
    this._children      = [];
    this._ratio         = 0;


};

/**
 * extends
 * @type {InteractiveObject}
 */
DisplayObjectContainer.prototype = Object.create(InteractiveObject.prototype);
DisplayObjectContainer.prototype.constructor = DisplayObjectContainer;

/**
 * properties
 */
Object.defineProperties(DisplayObjectContainer.prototype, {
    mouseChildren: {
        get: function () {
            return this._mouseChildren;
        },
        set: function (mouseChildren) {
            if (typeof mouseChildren === "boolean") {
                this._mouseChildren = mouseChildren;
            }
        }
    },
    numChildren: {
        get: function () {
            return this._numChildren;
        },
        set: function () {}
    },
    tabChildren: {
        get: function () {
            return this._tabChildren;
        },
        set: function (tabChildren) {
            if (typeof tabChildren === "boolean") {
                this._tabChildren = tabChildren;
            }
        }
    },
    textSnapshot: {
        get: function () {
            return this._textSnapshot;
        },
        set: function () {}
    },
    ratio: {
        get: function () {
            return this._ratio;
        },
        set: function (ratio) {
            if (typeof ratio === "number") {
                this._ratio = ratio;
            }
        }
    }
});

/**
 * @param   {DisplayObject} child
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype.addChild = function (child)
{
    return this.$addChild(child);
};

/**
 * @param   {DisplayObject} child
 * @param   {number}        index
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype.addChildAt = function (child, index)
{
    return this.$addChild(child, index);
};

/**
 * @param   {DisplayObject} child
 * @param   {number}        index
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype.$addChild = function (child, index)
{
    if (!(child instanceof DisplayObject)) {
        throw new Error("this child is not DisplayObject.");
    }

    // init
    index = index || this.numChildren;
    if (index > this.numChildren) {
        throw new Error("index is out of range.");
    }

    // id
    child.id = this.player.$numInstanceId;
    this.player.$numInstanceId = (this.player.$numInstanceId + 1)|0;

    // set stage
    var stage = this.stage;
    child._stageId = stage.id;
    stage.setInstance(child);

    // set child data
    var children = this._children;
    if (index in children) {
        this.$addChild(this.stage.getInstance(children[index]), index + 1);
    }
    this._children[index] = child.id;

    // count up
    this._numChildren = (index + 1)|0;

    // event
    child.dispatchEvent(Event.ADDED, this.stage);
    this.dispatchEvent(Event.ADDED, this.stage);

    return child;
};

/**
 * @param {Point} point
 * @returns {boolean}
 */
DisplayObjectContainer.prototype.areInaccessibleObjectsUnderPoint = function (point)
{
    // TODO
    return true;
};

/**
 * @param {DisplayObject} child
 * @returns {boolean}
 */
DisplayObjectContainer.prototype.contains = function (child)
{
    if (!(child instanceof DisplayObject)) {
        throw new Error("this child is not DisplayObject.");
    }

    var idx = 0;
    while (this.numChildren > idx) {
        if (idx in this._children) {
            var id = this._children[idx];
            if (id === child.id) {
                return true;
            }
        }
        idx = (idx + 1)|0;
    }

    return false;
};

/**
 * @param {number} index
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype.getChildAt = function (index)
{
    if (index > this.numChildren) {
        throw new Error("index is out of range.");
    }

    if (!(index in this._children)) {
        throw new Error("data not found.");
    }

    return this.stage.getInstance(this._children[index]);
};

/**
 *
 * @param {string} name
 * @returns {{DisplayObject}|null}
 */
DisplayObjectContainer.prototype.getChildByName = function (name)
{
    // to string
    name = name + "";

    var stage = this.stage;
    var idx   = 0;
    while (this.numChildren > idx) {
        if (idx in this._children) {
            var instance = stage.getInstance(this._children[idx]);
            if (instance && instance.name === name) {
                return instance;
            }
        }
        idx = (idx + 1)|0;
    }

    return null;
};




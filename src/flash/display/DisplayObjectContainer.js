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
    this._children      = [[]];
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
    index    = index || this.numChildren;

    // id
    child.id = this.player.$numInstanceId;
    this.player.$numInstanceId = (this.player.$numInstanceId + 1)|0;

    // set stage
    var stage = this.stage;
    child._stageId = stage.id;
    stage.setInstance(child);

    // set child data
    if (child instanceof MovieClip) {
        var frame = 1;
        var total = child.totalFrames + 1;
        while (total > frame) {
            this._children[frame][index] = child.id;
            frame = (frame + 1)|0;
        }
    } else {
        this._children[0][index] = child.id;
    }

    // count up
    this._numChildren = (index + 1)|0;

    // event
    child.dispatchEvent(Event.ADDED, this.stage);
    this.dispatchEvent(Event.ADDED, this.stage);

    return child;
};



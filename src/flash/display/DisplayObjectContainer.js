/**
 * @constructor
 */
var DisplayObjectContainer = function ()
{
    InteractiveObject.call(this);

    // property init
    this._$mouseChildren = true;
    this._$numChildren   = 0;
    this._$tabChildren   = true;
    this._$textSnapshot  = new TextSnapshot();
    this._$ratio         = 0;

    // origin param
    this._$children      = [];
    this._$places        = [];
    this._$placeObjects  = [];
    this._$controller    = [];
    this._$dictionary    = [];
    this._$instances     = [];
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
            return this._$mouseChildren;
        },
        set: function (mouseChildren) {
            if (typeof mouseChildren === "boolean") {
                this._$mouseChildren = mouseChildren;
            }
        }
    },
    numChildren: {
        get: function () {
            return this._$numChildren;
        },
        set: function () {}
    },
    tabChildren: {
        get: function () {
            return this._$tabChildren;
        },
        set: function (tabChildren) {
            if (typeof tabChildren === "boolean") {
                this._$tabChildren = tabChildren;
            }
        }
    },
    textSnapshot: {
        get: function () {
            return this._$textSnapshot;
        },
        set: function () {}
    },
    ratio: {
        get: function () {
            return this._$ratio;
        },
        set: function (ratio) {
            if (typeof ratio === "number") {
                this._$ratio = ratio;
            }
        }
    }
});

/**
 * @param   {boolean} shouldAction
 * @returns void
 */
DisplayObjectContainer.prototype._$characterBuild = function (shouldAction)
{
    var id = 0;
    var length = this._$dictionary.length|0;

    while (length > id) {

        // attach
        this._$createInstance(id, shouldAction);

        id = (id + 1)|0;
    }
};

/**
 * @param   {number}  id
 * @param   {boolean} shouldAction
 * @returns void
 */
DisplayObjectContainer.prototype._$createInstance = function (id, shouldAction)
{
    // build
    var tag       = this._$dictionary[id];
    var character = this.stage._$characters[tag.CharacterId];
    var obj       = character._$build(this, id, tag, shouldAction);

    this._$addInstance(id, obj);
};

/**
 * @param   {number} frame
 * @param   {number} depth
 * @returns PlaceObject
 */
DisplayObjectContainer.prototype._$getPlaceObject = function (frame, depth)
{
    if (frame in this._$places &&
        depth in this._$places[frame]
    ) {
        return this._$placeObjects[this._$places[frame][depth]];
    }

    console.log("[error]: PlaceObject");
    return new PlaceObject();
};

/**
 * @param {number}      frame
 * @param {number}      depth
 * @param {PlaceObject} placeObject
 */
DisplayObjectContainer.prototype._$setPlaceObject = function (frame, depth, placeObject)
{
    if (!(frame in this._$places)) {
        this._$places[frame] = [];
    }

    // set id
    var id = this._$placeObjects.length;

    this._$placeObjects[id]     = placeObject;
    this._$places[frame][depth] = id;
};

/**
 * @param   {number} frame
 * @param   {number} depth
 * @returns {number|null}
 */
DisplayObjectContainer.prototype._$getControllerAt = function(frame, depth)
{
    if (!(frame in this._$controller)) {
        return null;
    }

    if (!(depth in this._$controller[frame])) {
        return null;
    }

    return this._$controller[frame][depth];
};

/**
 * @param   {number} frame
 * @returns {array}
 */
DisplayObjectContainer.prototype._$getController = function(frame)
{
    if (!(frame in this._$controller)) {
        return [];
    }

    return this._$controller[frame];
};

/**
 * @param {number} frame
 * @param {number} depth
 * @param {number} instance_id
 */
DisplayObjectContainer.prototype._$setController = function (frame, depth, instance_id)
{
    if (!(frame in this._$controller)) {
        this._$controller[frame] = [];
    }

    this._$controller[frame][depth] = instance_id;
};

/**
 * @param   {object} placeObject
 * @returns {number}
 */
DisplayObjectContainer.prototype._$addDictionary = function (placeObject)
{
    var id = this._$dictionary.length|0;

    this._$dictionary[id] = placeObject;

    return id;
};

/**
 * @param {number}        index
 * @param {DisplayObject} instance
 */
DisplayObjectContainer.prototype._$addInstance = function (index, instance)
{
    this._$instances[index] = instance;
};

/**
 *
 * @param  {number} index
 * @return {DisplayObject}
 */
DisplayObjectContainer.prototype._$getInstance = function (index)
{
    return this._$instances[index];
};

/**
 * @param   {DisplayObject} child
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype.addChild = function (child)
{
    child = this._$addChild(child);

    this._$numChildren = (this._$numChildren + 1)|0;

    return child;
};

/**
 * @param   {DisplayObject} child
 * @param   {number}        index
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype.addChildAt = function (child, index)
{
    if (index > this.numChildren) {
        throw new Error("index is out of range.");
    }

    child = this._$addChild(child, index);

    this._$numChildren = (this._$numChildren + 1)|0;

    return child;
};

/**
 * @param   {DisplayObject}     child
 * @param   {number}            index
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype._$addChild = function (child, index)
{
    if (!(child instanceof DisplayObject)) {
        throw new Error("this child is not DisplayObject.");
    }

    // init
    index = index || this.numChildren;

    // stage insert origin data
    if (child.id === null) {
        child.id = this._$instances.length|0;
        this._$instances[child.id] = child;
    }

    // set param
    child.stage   = this.stage;
    child.parent  = this;

    this._$children[index] = child.id;

    // event
    child.dispatchEvent(Event.ADDED, this.stage);
    this.dispatchEvent(Event.ADDED,  this.stage);

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
        if (idx in this._$children) {
            var id = this._$children[idx];
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

    if (!(index in this._$children)) {
        throw new Error("child not found.");
    }

    return this._$getInstance(this._$children[index]);
};

/**
 *
 * @param   {string} name
 * @returns {{DisplayObject}|null}
 */
DisplayObjectContainer.prototype.getChildByName = function (name)
{
    // to string
    name = name + "";

    var stage = this.stage;
    var idx   = 0;
    while (this.numChildren > idx) {
        if (idx in this._$children) {
            var instance = stage.getInstance(this._$children[idx]);
            if (instance && instance.name === name) {
                return instance;
            }
        }
        idx = (idx + 1)|0;
    }

    return null;
};

/**
 * @param {DisplayObject} child
 * @returns {number}
 */
DisplayObjectContainer.prototype.getChildIndex = function (child)
{
    if (!(child instanceof DisplayObject)) {
        throw new Error("this child is not DisplayObject.");
    }

    if (!(child.index in this._$children) || child.id !== this._$children[child.index]) {
        throw new Error("child not found.");
    }

    return child.index;
};

/**
 * @param {Point} point
 * @returns {Array}
 */
DisplayObjectContainer.prototype.getObjectsUnderPoint = function (point)
{
    // todo
    return [];
};

/**
 * @param    {DisplayObject} child
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype.removeChild = function (child)
{
    if (!(child instanceof DisplayObject)) {
        throw new Error("this child is not DisplayObject.");
    }

    if (!(child.index in this._$children) || child.id !== this._$children[child.index]) {
        throw new Error("child not found.");
    }

    return this._$remove(child);
};

/**
 * @param   {number} index
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype.removeChildAt = function (index)
{
    if (!(index in this._$children)) {
        throw new Error("child not found.");
    }

    // reset
    var child = this.stage.getInstance(this._$children[index]);

    return this._$remove(child);
};

/**
 * @param   {DisplayObject} child
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype._$remove = function (child)
{

    // remove
    this._$children.splice(child.index, 1);
    this._$numChildren = (this._$numChildren - 1)|0;

    var idx = 0;
    while (this.numChildren > idx) {

        var instance     = this.stage.getInstance(this._$children[idx]);
        instance._$index = idx;

        idx = (idx + 1)|0;
    }

    // reset
    child._stageId     = null;
    child._$parentId   = null;
    child._$index      = null;

    return child;
};

/**
 * @param   {number} beginIndex
 * @param   {number} endIndex
 * @returns void
 */
DisplayObjectContainer.prototype.removeChildren = function (beginIndex, endIndex)
{
    if (0 > beginIndex || 0 > endIndex) {
        throw new Error("specify 0 or more.");
    }

    endIndex = (endIndex !== undefined) ? endIndex|0 : 0x7fffffff;
    if (endIndex > this.numChildren) {
        throw new Error("the number is over.");
    }

    var index = beginIndex;
    endIndex  = (endIndex + 1)|0;
    while (endIndex > index) {

        var child = this.stage.getInstance(this._$children[beginIndex]);
        this._$remove(child);

        index = (index + 1)|0;
    }

};


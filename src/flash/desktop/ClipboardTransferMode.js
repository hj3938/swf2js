/**
 * @constructor
 */
var ClipboardTransferMode = function ()
{
    OriginalObject.call(this);
};

ClipboardTransferMode.CLONE_ONLY         = "cloneOnly";
ClipboardTransferMode.CLONE_PREFERRED    = "clonePreferred";
ClipboardTransferMode.ORIGINAL_ONLY      = "originalOnly";
ClipboardTransferMode.ORIGINAL_PREFERRED = "originalPreferred";

/**
 * extends
 */
ClipboardTransferMode.prototype = Object.create(OriginalObject.prototype);
ClipboardTransferMode.prototype.constructor = ClipboardTransferMode;
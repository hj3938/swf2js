/**
 * @constructor
 */
var ClipboardTransferMode = function () {};

ClipboardTransferMode.CLONE_ONLY         = "cloneOnly";
ClipboardTransferMode.CLONE_PREFERRED    = "clonePreferred";
ClipboardTransferMode.ORIGINAL_ONLY      = "originalOnly";
ClipboardTransferMode.ORIGINAL_PREFERRED = "originalPreferred";

/**
 * extends
 */
ClipboardTransferMode.prototype = Object.create(OriginalObject.prototype);
ClipboardTransferMode.prototype.constructor = ClipboardTransferMode;
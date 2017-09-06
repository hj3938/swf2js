/**
 * @constructor
 */
var ClipboardFormats = function () {};

ClipboardFormats.HTML_FORMAT      = "air:html";
ClipboardFormats.RICH_TEXT_FORMAT = "air:rtf";
ClipboardFormats.TEXT_FORMA       = "air:text";

/**
 * extends
 */
ClipboardFormats.prototype = Object.create(OriginalObject.prototype);
ClipboardFormats.prototype.constructor = ClipboardFormats;
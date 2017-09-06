/**
 * @constructor
 */
var LastOperationStatus = function () {};

LastOperationStatus.BUFFER_OVERFLOW_ERROR     = "bufferOverflowError";
LastOperationStatus.ERROR_CODE_UNKNOWN        = "errorCodeUnknown";
LastOperationStatus.ILLEGAL_ARGUMENT_ERROR    = "illegalArgumentError";
LastOperationStatus.INDEX_OUT_OF_BOUNDS_ERROR = "indexOutOfBoundsError";
LastOperationStatus.INVALID_ATTR_VALUE        = "invalidAttrValue";
LastOperationStatus.INVALID_CHAR_FOUND        = "invalidCharFound";
LastOperationStatus.MEMORY_ALLOCATION_ERROR   = "memoryAllocationError";
LastOperationStatus.NO_ERROR                  = "noError";
LastOperationStatus.NUMBER_OVERFLOW_ERROR     = "numberOverflowError";
LastOperationStatus.PARSE_ERROR               = "parseError";
LastOperationStatus.PATTERN_SYNTAX_ERROR      = "patternSyntaxError";
LastOperationStatus.PLATFORM_API_FAILED       = "platformAPIFailed";
LastOperationStatus.TRUNCATED_CHAR_FOUND      = "truncatedCharFound";
LastOperationStatus.UNEXPECTED_TOKEN          = "unexpectedToken";
LastOperationStatus.UNSUPPORTED_ERROR         = "unsupportedError";
LastOperationStatus.USING_DEFAULT_WARNING     = "usingDefaultWarning";
LastOperationStatus.USING_FALLBACK_WARNING    = "usingFallbackWarning";

/**
 * extends
 */
LastOperationStatus.prototype = Object.create(OriginalObject.prototype);
LastOperationStatus.prototype.constructor = LastOperationStatus;



describe("LastOperationStatus.js property test", function()
{

    it("BUFFER_OVERFLOW_ERROR test", function () {
        expect(LastOperationStatus.BUFFER_OVERFLOW_ERROR).toBe("bufferOverflowError");
    });

    it("ERROR_CODE_UNKNOWN test", function () {
        expect(LastOperationStatus.ERROR_CODE_UNKNOWN).toBe("errorCodeUnknown");
    });

    it("ILLEGAL_ARGUMENT_ERROR test", function () {
        expect(LastOperationStatus.ILLEGAL_ARGUMENT_ERROR).toBe("illegalArgumentError");
    });

    it("INDEX_OUT_OF_BOUNDS_ERROR test", function () {
        expect(LastOperationStatus.INDEX_OUT_OF_BOUNDS_ERROR).toBe("indexOutOfBoundsError");
    });

    it("INVALID_ATTR_VALUE test", function () {
        expect(LastOperationStatus.INVALID_ATTR_VALUE).toBe("invalidAttrValue");
    });

    it("INVALID_CHAR_FOUND test", function () {
        expect(LastOperationStatus.INVALID_CHAR_FOUND).toBe("invalidCharFound");
    });

    it("MEMORY_ALLOCATION_ERROR test", function () {
        expect(LastOperationStatus.MEMORY_ALLOCATION_ERROR).toBe("memoryAllocationError");
    });

    it("NO_ERROR test", function () {
        expect(LastOperationStatus.NO_ERROR).toBe("noError");
    });

    it("NUMBER_OVERFLOW_ERROR test", function () {
        expect(LastOperationStatus.NUMBER_OVERFLOW_ERROR).toBe("numberOverflowError");
    });

    it("PARSE_ERROR test", function () {
        expect(LastOperationStatus.PARSE_ERROR).toBe("parseError");
    });

    it("PATTERN_SYNTAX_ERROR test", function () {
        expect(LastOperationStatus.PATTERN_SYNTAX_ERROR).toBe("patternSyntaxError");
    });

    it("PLATFORM_API_FAILED test", function () {
        expect(LastOperationStatus.PLATFORM_API_FAILED).toBe("platformAPIFailed");
    });

    it("TRUNCATED_CHAR_FOUND test", function () {
        expect(LastOperationStatus.TRUNCATED_CHAR_FOUND).toBe("truncatedCharFound");
    });

    it("UNEXPECTED_TOKEN test", function () {
        expect(LastOperationStatus.UNEXPECTED_TOKEN).toBe("unexpectedToken");
    });

    it("UNSUPPORTED_ERROR test", function () {
        expect(LastOperationStatus.UNSUPPORTED_ERROR).toBe("unsupportedError");
    });

    it("USING_DEFAULT_WARNING test", function () {
        expect(LastOperationStatus.USING_DEFAULT_WARNING).toBe("usingDefaultWarning");
    });

    it("USING_FALLBACK_WARNING test", function () {
        expect(LastOperationStatus.USING_FALLBACK_WARNING).toBe("usingFallbackWarning");
    });

    it("length test", function () {
        var length = 0;
        for (var idx in LastOperationStatus) {
            if (!LastOperationStatus.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(17);
    });

});
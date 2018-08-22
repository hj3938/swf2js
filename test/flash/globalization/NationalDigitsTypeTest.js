
describe("NationalDigitsType.js property test", function()
{

    it("ARABIC_INDIC test", function () 
    {
        expect(NationalDigitsType.ARABIC_INDIC).toBe(0x0660);
    });

    it("BALINESE test", function () 
    {
        expect(NationalDigitsType.BALINESE).toBe(0x1B50);
    });

    it("BENGALI test", function () 
    {
        expect(NationalDigitsType.BENGALI).toBe(0x09E6);
    });

    it("CHAM test", function () 
    {
        expect(NationalDigitsType.CHAM).toBe(0xAA50);
    });

    it("DEVANAGARI test", function () 
    {
        expect(NationalDigitsType.DEVANAGARI).toBe(0x0966);
    });

    it("EUROPEAN test", function () 
    {
        expect(NationalDigitsType.EUROPEAN).toBe(0x0030);
    });

    it("EXTENDED_ARABIC_INDIC test", function () 
    {
        expect(NationalDigitsType.EXTENDED_ARABIC_INDIC).toBe(0x06F0);
    });

    it("FULL_WIDTH test", function () 
    {
        expect(NationalDigitsType.FULL_WIDTH).toBe(0xFF10);
    });

    it("GUJARATI test", function () 
    {
        expect(NationalDigitsType.GUJARATI).toBe(0x0AE6);
    });

    it("GURMUKHI test", function () 
    {
        expect(NationalDigitsType.GURMUKHI).toBe(0x0A66);
    });

    it("KANNADA test", function () 
    {
        expect(NationalDigitsType.KANNADA).toBe(0x0CE6);
    });

    it("KAYAH_LI test", function () 
    {
        expect(NationalDigitsType.KAYAH_LI).toBe(0xA900);
    });

    it("KHMER test", function () 
    {
        expect(NationalDigitsType.KHMER).toBe(0x17E0);
    });

    it("LAO test", function () 
    {
        expect(NationalDigitsType.LAO).toBe(0x0ED0);
    });

    it("LEPCHA test", function () 
    {
        expect(NationalDigitsType.LEPCHA).toBe(0x1C40);
    });

    it("LIMBU test", function () 
    {
        expect(NationalDigitsType.LIMBU).toBe(0x1946);
    });

    it("MALAYALAM test", function () 
    {
        expect(NationalDigitsType.MALAYALAM).toBe(0x0D66);
    });

    it("MONGOLIAN test", function () 
    {
        expect(NationalDigitsType.MONGOLIAN).toBe(0x1810);
    });

    it("MYANMAR test", function () 
    {
        expect(NationalDigitsType.MYANMAR).toBe(0x1040);
    });

    it("MYANMAR_SHAN test", function () 
    {
        expect(NationalDigitsType.MYANMAR_SHAN).toBe(0x1090);
    });

    it("NEW_TAI_LUE test", function () 
    {
        expect(NationalDigitsType.NEW_TAI_LUE).toBe(0x19D0);
    });

    it("NKO test", function () 
    {
        expect(NationalDigitsType.NKO).toBe(0x07C0);
    });

    it("OL_CHIKI test", function () 
    {
        expect(NationalDigitsType.OL_CHIKI).toBe(0x1C50);
    });

    it("ORIYA test", function () 
    {
        expect(NationalDigitsType.ORIYA).toBe(0x0B66);
    });

    it("OSMANYA test", function () 
    {
        expect(NationalDigitsType.OSMANYA).toBe(0x104A0);
    });

    it("SAURASHTRA test", function () 
    {
        expect(NationalDigitsType.SAURASHTRA).toBe(0xA8D0);
    });

    it("SUNDANESE test", function () 
    {
        expect(NationalDigitsType.SUNDANESE).toBe(0x1BB0);
    });

    it("TAMIL test", function () 
    {
        expect(NationalDigitsType.TAMIL).toBe(0x0BE6);
    });

    it("TELUGU test", function () 
    {
        expect(NationalDigitsType.TELUGU).toBe(0x0C66);
    });

    it("THAI test", function () 
    {
        expect(NationalDigitsType.THAI).toBe(0x0E50);
    });

    it("TIBETAN test", function () 
    {
        expect(NationalDigitsType.TIBETAN).toBe(0x0F20);
    });

    it("VAI test", function () 
    {
        expect(NationalDigitsType.VAI).toBe(0xA620);
    });

    it("length test", function () 
    {
        var length = 0;
        for (var idx in NationalDigitsType) {
            if (!NationalDigitsType.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(32);
    });
});
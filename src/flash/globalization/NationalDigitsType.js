/**
 * @constructor
 */
var NationalDigitsType = function () {};

NationalDigitsType.ARABIC_INDIC          = 0x0660;
NationalDigitsType.BALINESE              = 0x1B50;
NationalDigitsType.BENGALI               = 0x09E6;
NationalDigitsType.CHAM                  = 0xAA50;
NationalDigitsType.DEVANAGARI            = 0x0966;
NationalDigitsType.EUROPEAN              = 0x0030;
NationalDigitsType.EXTENDED_ARABIC_INDIC = 0x06F0;
NationalDigitsType.FULL_WIDTH            = 0xFF10;
NationalDigitsType.GUJARATI              = 0x0AE6;
NationalDigitsType.GURMUKHI              = 0x0A66;
NationalDigitsType.KANNADA               = 0x0CE6;
NationalDigitsType.KAYAH_LI              = 0xA900;
NationalDigitsType.KHMER                 = 0x17E0;
NationalDigitsType.LAO                   = 0x0ED0;
NationalDigitsType.LEPCHA                = 0x1C40;
NationalDigitsType.LIMBU                 = 0x1946;
NationalDigitsType.MALAYALAM             = 0x0D66;
NationalDigitsType.MONGOLIAN             = 0x1810;
NationalDigitsType.MYANMAR               = 0x1040;
NationalDigitsType.MYANMAR_SHAN          = 0x1090;
NationalDigitsType.NEW_TAI_LUE           = 0x19D0;
NationalDigitsType.NKO                   = 0x07C0;
NationalDigitsType.OL_CHIKI              = 0x1C50;
NationalDigitsType.ORIYA                 = 0x0B66;
NationalDigitsType.OSMANYA               = 0x104A0;
NationalDigitsType.SAURASHTRA            = 0xA8D0;
NationalDigitsType.SUNDANESE             = 0x1BB0;
NationalDigitsType.TAMIL                 = 0x0BE6;
NationalDigitsType.TELUGU                = 0x0C66;
NationalDigitsType.THAI                  = 0x0E50;
NationalDigitsType.TIBETAN               = 0x0F20;
NationalDigitsType.VAI                   = 0xA620;

/**
 * extends
 */
NationalDigitsType.prototype = Object.create(OriginalObject.prototype);
NationalDigitsType.prototype.constructor = NationalDigitsType;
/**
 * @constructor
 */
var SWFVersion = function () {};

SWFVersion.FLASH1  = 1;
SWFVersion.FLASH10 = 10;
SWFVersion.FLASH11 = 11;
SWFVersion.FLASH12 = 12;
SWFVersion.FLASH2  = 2;
SWFVersion.FLASH3  = 3;
SWFVersion.FLASH4  = 4;
SWFVersion.FLASH5  = 5;
SWFVersion.FLASH6  = 6;
SWFVersion.FLASH7  = 7;
SWFVersion.FLASH8  = 8;
SWFVersion.FLASH9  = 9;

/**
 * extends
 */
SWFVersion.prototype = Object.create(OriginalObject.prototype);
SWFVersion.prototype.constructor = SWFVersion;
/**
 * @param requestedLocaleIDName
 * @param dateStyle
 * @param timeStyle
 * @constructor
 */
var DateTimeFormatter = function (requestedLocaleIDName, dateStyle, timeStyle)
{
    this._requestedLocaleIDName = "";
    this._dateStyle             = "long";
    this._timeStyle             = "long";
};
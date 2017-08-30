/**
 * @param type
 * @param bubbles
 * @param cancelable
 * @param init_dictionary
 * @param init_dataTime
 * @constructor
 */
var AVDictionaryDataEvent = function (
    type, bubbles, cancelable,
    init_dictionary, init_dataTime
)
{
    this._type            = "";
    this._bubbles         = false;
    this._cancelable      = false;
    this._init_dictionary = null;
    this.init_dataTime    = null;
};
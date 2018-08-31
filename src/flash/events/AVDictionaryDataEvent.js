/**
 * @param type
 * @param bubbles
 * @param cancelable
 * @param init_dictionary
 * @param init_data_time
 * @constructor
 */
var AVDictionaryDataEvent = function (
    type, bubbles, cancelable,
    init_dictionary, init_data_time
)
{
    this._$type            = "";
    this._$bubbles         = false;
    this._$cancelable      = false;
    this._$init_dictionary = null;
    this._$init_dataTime   = null;
};
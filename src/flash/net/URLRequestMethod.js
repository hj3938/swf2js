/**
 * @constructor
 */
var URLRequestMethod = function () {};

URLRequestMethod.GET     = "GET";
URLRequestMethod.DELETE  = "DELETE";
URLRequestMethod.HEAD    = "HEAD";
URLRequestMethod.OPTIONS = "OPTIONS";
URLRequestMethod.POST    = "POST";
URLRequestMethod.PUT     = "PUT";

/**
 * extends
 */
URLRequestMethod.prototype = Object.create(OriginalObject.prototype);
URLRequestMethod.prototype.constructor = URLRequestMethod;
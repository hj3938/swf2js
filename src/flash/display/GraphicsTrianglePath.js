/**
 * @param vertices
 * @param indices
 * @param uvtData
 * @param culling
 * @constructor
 */
var GraphicsTrianglePath = function (vertices, indices, uvtData, culling)
{
    this._vertices = null;
    this._indices  = null;
    this._uvtData  = null;
    this._culling  = "none";
};
/**
 * @constructor
 */
var ShaderParameterType = function () {};

ShaderParameterType.BOOL      = "bool";
ShaderParameterType.BOOL2     = "bool2";
ShaderParameterType.BOOL3     = "bool3";
ShaderParameterType.BOOL4     = "bool4";
ShaderParameterType.FLOAT     = "float";
ShaderParameterType.FLOAT2    = "float2";
ShaderParameterType.FLOAT3    = "float3";
ShaderParameterType.FLOAT4    = "float4";
ShaderParameterType.INT       = "int";
ShaderParameterType.INT2      = "int2";
ShaderParameterType.INT3      = "int3";
ShaderParameterType.INT4      = "int4";
ShaderParameterType.MATRIX2X2 = "matrix2x2";
ShaderParameterType.MATRIX3X3 = "matrix3x3";
ShaderParameterType.MATRIX4X4 = "matrix4x4";

/**
 * extends
 */
ShaderParameterType.prototype = Object.create(OriginalObject.prototype);
ShaderParameterType.prototype.constructor = ShaderParameterType;
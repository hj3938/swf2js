
describe("ShaderParameterType.js property test", function()
{

    it("BOOL test", function () 
    {
        expect(ShaderParameterType.BOOL).toBe("bool");
    });

    it("BOOL2 test", function () 
    {
        expect(ShaderParameterType.BOOL2).toBe("bool2");
    });

    it("BOOL3 test", function () 
    {
        expect(ShaderParameterType.BOOL3).toBe("bool3");
    });

    it("BOOL4 test", function () 
    {
        expect(ShaderParameterType.BOOL4).toBe("bool4");
    });

    it("FLOAT test", function () 
    {
        expect(ShaderParameterType.FLOAT).toBe("float");
    });

    it("FLOAT2 test", function () 
    {
        expect(ShaderParameterType.FLOAT2).toBe("float2");
    });

    it("FLOAT3 test", function () 
    {
        expect(ShaderParameterType.FLOAT3).toBe("float3");
    });

    it("FLOAT4 test", function () 
    {
        expect(ShaderParameterType.FLOAT4).toBe("float4");
    });

    it("INT test", function () 
    {
        expect(ShaderParameterType.INT).toBe("int");
    });

    it("INT2 test", function () 
    {
        expect(ShaderParameterType.INT2).toBe("int2");
    });

    it("INT3 test", function () 
    {
        expect(ShaderParameterType.INT3).toBe("int3");
    });

    it("INT4 test", function () 
    {
        expect(ShaderParameterType.INT4).toBe("int4");
    });

    it("MATRIX2X2 test", function () 
    {
        expect(ShaderParameterType.MATRIX2X2).toBe("matrix2x2");
    });

    it("MATRIX3X3 test", function () 
    {
        expect(ShaderParameterType.MATRIX3X3).toBe("matrix3x3");
    });

    it("MATRIX4X4 test", function () 
    {
        expect(ShaderParameterType.MATRIX4X4).toBe("matrix4x4");
    });

    it("length test", function () 
    {
        var length = 0;
        for (var idx in ShaderParameterType) {
            if (!ShaderParameterType.hasOwnProperty(idx)) {
                continue;
            }
            length++;
        }
        expect(length).toBe(15);
    });

});
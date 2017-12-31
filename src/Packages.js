/**
 * @constructor
 * @param {Player} player
 */
var Packages = function (player)
{
    this.player = player;
};

/**
 * @type {*}
 */
Packages.prototype = {
    "adobe": {
        "utils": {
            "CustomActions": CustomActions,
            "XMLUI": XMLUI
        },
        "MMEndCommand": function (endStatus, notifyString)
        {
            console.log("TODO: MMEndCommand");
        },
        "MMExecute": function (name)
        {
            console.log("TODO: MMExecute");
        }
    },
    "com": {
        "adobe": {
            "viewsource": {
                "ViewSource": ViewSource
            }
        }
    },
    "fl": {
        "accessibility": {
            "AccImpl": AccImpl,
            "ButtonAccImpl": ButtonAccImpl
        }
    },
    "flash": {
        "accessibility": {
            "Accessibility": Accessibility,
            "AccessibilityImplementation": AccessibilityImplementation,
            "AccessibilityProperties": AccessibilityProperties
        },
        "desktop": {
            "Clipboard": Clipboard,
            "ClipboardFormats": ClipboardFormats,
            "ClipboardTransferMode": ClipboardTransferMode
        },
        "display": {
            "ActionScriptVersion": ActionScriptVersion,
            "AVLoader": AVLoader,
            "AVM1Movie": AVM1Movie,
            "Bitmap": Bitmap,
            "BitmapData": BitmapData,
            "BitmapDataChannel": BitmapDataChannel,
            "BitmapEncodingColorSpace": BitmapEncodingColorSpace,
            "BlendMode": BlendMode,
            "CapsStyle": CapsStyle,
            "ColorCorrection": ColorCorrection,
            "ColorCorrectionSupport": ColorCorrectionSupport,
            "DisplayObject": DisplayObject,
            "DisplayObjectContainer": DisplayObjectContainer,
            "FrameLabel": FrameLabel,
            "GradientType": GradientType,
            "Graphics": Graphics,
            "GraphicsBitmapFill": GraphicsBitmapFill,
            "GraphicsEndFill": GraphicsEndFill,
            "GraphicsGradientFill": GraphicsGradientFill,
            "GraphicsPath": GraphicsPath,
            "GraphicsPathCommand": GraphicsPathCommand,
            "GraphicsPathWinding": GraphicsPathWinding,
            "GraphicsShaderFill": GraphicsShaderFill,
            "GraphicsSolidFill": GraphicsSolidFill,
            "GraphicsStroke": GraphicsStroke,
            "GraphicsTrianglePath": GraphicsTrianglePath,
            "InteractiveObject": InteractiveObject,
            "InterpolationMethod": InterpolationMethod,
            "JointStyle": JointStyle,
            "JPEGEncoderOptions": JPEGEncoderOptions,
            "JPEGXREncoderOptions": JPEGXREncoderOptions,
            "LineScaleMode": LineScaleMode,
            "Loader": Loader,
            "LoaderInfo": LoaderInfo,
            "MorphShape": MorphShape,
            "MovieClip": MovieClip,
            "PixelSnapping": PixelSnapping,
            "PNGEncoderOptions": PNGEncoderOptions,
            "Scene": Scene,
            "Shader": Shader,
            "ShaderData": ShaderData,
            "ShaderInput": ShaderInput,
            "ShaderJob": ShaderJob,
            "ShaderParameter": ShaderParameter,
            "ShaderParameterType": ShaderParameterType,
            "ShaderPrecision": ShaderPrecision,
            "Shape": Shape,
            "SimpleButton": SimpleButton,
            "SpreadMethod": SpreadMethod,
            "Sprite": Sprite,
            "Stage": Stage,
            "Stage3D": Stage3D,
            "StageAlign": StageAlign,
            "StageDisplayState": StageDisplayState,
            "StageQuality": StageQuality,
            "StageScaleMode": StageScaleMode,
            "SWFVersion": SWFVersion,
            "TriangleCulling": TriangleCulling
        },
        "display3D": {
            "Program3D": Program3D,
            "textures": {
                "CubeTexture": CubeTexture,
                "RectangleTexture": RectangleTexture,
                "Texture": Texture,
                "VideoTexture": VideoTexture
            }
        },
        "geom": {
            "ColorTransform": ColorTransform,
            "Matrix": Matrix,
            "Matrix3D": Matrix3D,
            "Orientation3D": Orientation3D,
            "PerspectiveProjection": PerspectiveProjection,
            "Point": Point,
            "Rectangle": Rectangle,
            "Transform": Transform,
            "Utils3D": Utils3D,
            "Vector3D": Vector3D
        },
        "errors": {
            "EOFError": EOFError,
            "IllegalOperationError": IllegalOperationError,
            "InvalidSWFError": InvalidSWFError,
            "IOError": IOError,
            "MemoryError": MemoryError,
            "ScriptTimeoutError": ScriptTimeoutError,
            "StackOverflowError": StackOverflowError
        },
        "events": {
            "AccelerometerEvent": AccelerometerEvent,
            "ActivityEvent": ActivityEvent,
            "AsyncErrorEvent": AsyncErrorEvent,
            "AVDictionaryDataEvent": AVDictionaryDataEvent,
            "AVHTTPStatusEvent": AVHTTPStatusEvent,
            "AVPauseAtPeriodEndEvent": AVPauseAtPeriodEndEvent,
            "ContextMenuEvent": ContextMenuEvent,
            "DataEvent": DataEvent,
            "Event": Event,
            "EventDispatcher": EventDispatcher,
            "MouseEvent": Util.prototype.$clipEvent
        },
        "external": {
            "ExternalInterface": ExternalInterface
        },
        "globalization": {
            "Collator": Collator,
            "CollatorMode": CollatorMode,
            "CurrencyFormatter": CurrencyFormatter,
            "CurrencyParseResult": CurrencyParseResult,
            "DateTimeFormatter": DateTimeFormatter,
            "DateTimeNameContext": DateTimeNameContext,
            "DateTimeNameStyle": DateTimeNameStyle,
            "DateTimeStyle": DateTimeStyle,
            "LastOperationStatus": LastOperationStatus,
            "LocaleID": LocaleID,
            "NationalDigitsType": NationalDigitsType,
            "NumberFormatter": NumberFormatter,
            "NumberParseResult": NumberParseResult,
            "StringTools": StringTools
        },
        "text": {
            "AntiAliasType": AntiAliasType,
            "CSMSettings": CSMSettings,
            "Font": Font,
            "FontStyle": FontStyle,
            "FontType": FontType,
            "GridFitType": GridFitType,
            "StaticText": StaticText,
            "StyleSheet": StyleSheet,
            "TextColorType": TextColorType,
            "TextDisplayMode": TextDisplayMode,
            "TextField": TextField,
            "TextFieldAutoSize": TextFieldAutoSize,
            "TextFieldType": TextFieldType,
            "TextFormat": TextFormat,
            "TextFormatAlign": TextFormatAlign,
            "TextLineMetrics": TextLineMetrics,
            "TextRenderer": TextRenderer,
            "TextSnapshot": TextSnapshot
        },
        "media": {
            "AVNetworkingParams": AVNetworkingParams,
            "AVURLLoader": AVURLLoader,
            "AVURLStream": AVURLStream,
            "Camera": Camera,
            "ID3Info": ID3Info,
            "Microphone": Microphone,
            "Sound": Sound,
            "SoundChannel": SoundChannel,
            "SoundCodec": SoundCodec,
            "SoundLoaderContext": SoundLoaderContext,
            "SoundMixer": SoundMixer,
            "SoundTransform": SoundTransform,
            "StageVideo": StageVideo,
            "StageVideoAvailability": StageVideoAvailability,
            "StageVideoAvailabilityReason": StageVideoAvailabilityReason,
            "Video": Video,
            "VideoStatus": VideoStatus
        },
        "filters": {
            "BevelFilter": BevelFilter,
            "BitmapFilter": BitmapFilter,
            "BitmapFilterQuality": BitmapFilterQuality,
            "BitmapFilterType": BitmapFilterType,
            "BlurFilter": BlurFilter,
            "ColorMatrixFilter": ColorMatrixFilter,
            "ConvolutionFilter": ConvolutionFilter,
            "DisplacementMapFilter": DisplacementMapFilter,
            "DisplacementMapFilterMode": DisplacementMapFilterMode,
            "DropShadowFilter": DropShadowFilter,
            "GlowFilter": GlowFilter,
            "GradientBevelFilter": GradientBevelFilter,
            "GradientGlowFilter": GradientGlowFilter,
            "ShaderFilter": ShaderFilter
        },
        "net": {
            "FileFilter": FileFilter,
            "FileReference": FileReference,
            "FileReferenceList": FileReferenceList,
            "GroupSpecifier": GroupSpecifier,
            "LocalConnection": LocalConnection,
            "NetConnection": NetConnection,
            "NetGroup": NetGroup,
            "NetGroupInfo": NetGroupInfo,
            "NetGroupReceiveMode": NetGroupReceiveMode,
            "NetGroupReplicationStrategy": NetGroupReplicationStrategy,
            "NetGroupSendMode": NetGroupSendMode,
            "NetGroupSendResult": NetGroupSendResult,
            "NetStream": NetStream,
            "NetStreamAppendBytesAction": NetStreamAppendBytesAction,
            "NetStreamInfo": NetStreamInfo,
            "NetStreamMulticastInfo": NetStreamMulticastInfo,
            "NetStreamPlayOptions": NetStreamPlayOptions,
            "NetStreamPlayTransitions": NetStreamPlayTransitions,
            "ObjectEncoding": ObjectEncoding,
            "Responder": Responder,
            "SecureSocket": SecureSocket,
            "SharedObject": SharedObject,
            "SharedObjectFlushStatus": SharedObjectFlushStatus,
            "Socket": Socket,
            "URLLoader": URLLoader,
            "URLLoaderDataFormat": URLLoaderDataFormat,
            "URLRequest": URLRequest,
            "URLRequestHeader": URLRequestHeader,
            "URLRequestMethod": URLRequestMethod,
            "URLStream": URLStream,
            "URLVariables": URLVariables,
            "XMLSocket": XMLSocket,
            "getClassByAlias": function (aliasName)
            {

            },
            "navigateToURL": function (request, window)
            {
                var form    = this.$document.createElement("form");
                form.action = request.url;
                form.method = request.method;
                form.target = "_self";

                if (typeof window === "string") {
                    switch (window.toLowerCase()) {
                        case "_blank":
                            form.target = "_blank";
                            break;
                        case "_top":
                            form.target = "_top";
                            break;
                        case "_parent":
                            form.target = "_parent";
                            break;
                    }
                }

                var data = request.data;
                if (data) {
                    for (var name in data) {
                        if (!data.hasOwnProperty(name)) {
                            continue;
                        }

                        var input   = this.$document.createElement("input");
                        input.type  = "hidden";
                        input.name  = this.$encodeURIComponent(name);
                        input.value = this.$encodeURIComponent(data[name]);
                        form.appendChild(input);
                    }
                }

                this.$document.body.appendChild(form);
                form.submit();
            },
            "registerClassAlias": function ()
            {

            },
            "sendToURL": function (request)
            {
                if (request instanceof URLRequest) {
                    var data = null;
                    if (request.data instanceof URLVariables) {
                        data = request.data.toString();
                    }

                    var headers = [];
                    if (request.requestHeaders) {
                        var requestHeaders = request.requestHeaders;
                        var length         = requestHeaders.length;

                        var idx = 0;
                        while (length > idx) {
                            var requestHeader = requestHeaders[idx];
                            if (requestHeader instanceof URLRequestHeader) {
                                headers[requestHeader.name] = requestHeader.value;
                            }
                            idx = (idx + 1)|0;
                        }
                    }

                    // execute
                    this.$ajax({
                        method:  request.method,
                        url:     request.url,
                        headers: headers,
                        data:    data
                    });
                }
            }

        },
        "printing": {
            "PrintJob": PrintJob,
            "PrintJobOptions": PrintJobOptions,
            "PrintJobOrientation": PrintJobOrientation
        },
        "system": {
            "fscommand": function ()
            {
                var command = arguments[0];
                var args    = arguments[1];
                if (args === undefined) {
                    args = "";
                }

                switch (command) {
                    case "quit":
                    case "fullscreen":
                    case "allowscale":
                    case "showmenu":
                    case "exec":
                    case "trapallkeys":
                        break;
                    default:
                        if (command) {
                            var method    = (this.tagId) ? this.tagId : this.getName();
                            var body      = method +"_DoFSCommand(command, args);";
                            var fscommand = new Func("command", "args", body);
                            fscommand(command, args);
                        }
                        break;
                }

                return true;
            }
        },
        "xml": {
            "XMLDocument": XMLDocument,
            "XMLNode": XMLNode,
            "XMLNodeType": XMLNodeType
        }
    }
};
/**
 * @param {MainTimeline|MovieClip} main
 * @param {BitIO} bitio
 * @constructor
 */
var SwfTag = function (main, bitio)
{
    Util.call(this);

    this.main              = main;
    this.bitio             = bitio;
    this.currentPosition   = {x: 0, y: 0};
    this.jpegTables        = null;
    this.sceneInfo         = [];
    this.frameInfo         = [];
};

/**
 * extends
 * @type {Util}
 */
SwfTag.prototype = Object.create(Util.prototype);
SwfTag.prototype.constructor = SwfTag;

/**
 * @returns {Stage}
 */
SwfTag.prototype.getStage = function()
{
    return this.main.stage;
};

/**
 *
 * @param   {number} character_id
 * @returns {object}
 */
SwfTag.prototype.getCharacter = function(character_id)
{
    return this.getStage()._$characters[character_id];
};

/**
 * @param   {number} character_id
 * @param   {object} instance
 * @returns void
 */
SwfTag.prototype.setCharacter = function(character_id, instance)
{
    this.getStage()._$characters[character_id] = instance;
};

/**
 * @param   {MovieClip} parent
 * @returns void
 */
SwfTag.prototype.parse = function (parent)
{
    // swf parse
    this.parseTags(this.bitio.data.length, parent);

    // init scenes
    var length = this.sceneInfo.length;
    if (length) {

        var idx    = 0;
        var scenes = [];
        while (length > idx) {

            var sceneInfo = this.sceneInfo[idx];


            // create Scene
            var scene         = new Scene(sceneInfo.name);
            scene._$offset    = sceneInfo.offset;


            // set numFrames
            var next   = (idx + 1)|0;
            var offset = parent.totalFrames;
            if (next in  this.sceneInfo) {
                offset = this.sceneInfo[next].offset|0;
            }
            scene._$numFrames = (offset - scene._$offset)|0;


            // set labels
            var labels = parent.currentLabels;
            var total  = labels.length|0;

            var i = 0;
            var sceneLabels = [];
            while (total > i) {

                var label = labels[i];

                if (label.frame > sceneInfo.offset && label.frame <= offset) {
                    sceneLabels[sceneLabels.length] = label;
                }

                i = (i + 1)|0;
            }
            scene._$labels = sceneLabels;


            // set array
            scenes[scenes.length] = scene;

            idx = (idx + 1)|0;
        }
    }

    parent._$scenes = scenes;
};

/**
 * @param   {MovieClip} parent
 * @param   {object}    tags
 * @param   {number}    frame
 * @param   {array}     cache_place_objects
 * @returns void
 */
SwfTag.prototype.showFrame = function (parent, tags, frame, cache_place_objects)
{
    var idx;
    var installed = [];

    // add total frame
    parent._$totalFrames  = frame;
    parent._$framesLoaded = frame;


    // action script
    var actions = tags.actions;
    if (actions.length) {
        for (idx in actions) {
            if (!actions.hasOwnProperty(idx)) {
                continue;
            }

            parent._$addAction(frame, actions[idx]);
        }
    }


    // Frame Label
    var labels = tags.frameLabel;
    if (labels.length) {
        for (idx in labels) {
            if (!labels.hasOwnProperty(idx)) {
                continue;
            }

            var label = labels[idx];

            // if frameInfo match case
            if (label.name in this.frameInfo) {
                label.frame = this.frameInfo[label.name]|0;
            }

            parent._$addFrameLabel(new FrameLabel(label.name, label.frame));
        }
    }


    // TODO sound
    var sounds = tags.sounds;
    if (sounds.length) {
        for (idx in sounds) {
            if (!sounds.hasOwnProperty(idx)) {
                continue;
            }

            parent._$addSound(frame, sounds[idx]);
        }
    }


    // remove objects
    var removeObjects = tags.removeObjects;
    if (removeObjects.length) {
        for (idx in removeObjects) {

            if (!removeObjects.hasOwnProperty(idx)) {
                continue;
            }

            var removeObject = removeObjects[idx];

            var id  = parent._$getControllerAt(frame - 1, removeObject.Depth);
            var tag = parent._$dictionary[id];

            tag.EndFrame = (frame - 1)|0;
            parent._$dictionary[id] = tag;

            installed[removeObject.Depth] = 1;
        }
    }


    // new cache
    if (!(frame in cache_place_objects)) {
        cache_place_objects[frame] = [];
    }

    // place objects
    var prevFrame        = (frame - 1)|0;
    var placeObjects     = tags.placeObjects;
    var prevPlaceObjects = cache_place_objects[prevFrame];
    for (idx in placeObjects) {

        if (!placeObjects.hasOwnProperty(idx)) {
            continue;
        }

        // id reset
        var instanceId = null;

        var placeObject = placeObjects[idx];

        // reset
        var prevPlaceObject = null;
        if (prevPlaceObjects && idx in prevPlaceObjects) {
            prevPlaceObject = prevPlaceObjects[idx];
        }

        // set prev characterId
        if (placeObject.PlaceFlagHasCharacter === 0 && prevPlaceObject) {

            placeObject.CharacterId = prevPlaceObject.CharacterId;

        }

        var isNewCharacter = false;
        if (placeObject.PlaceFlagMove === 0
            || placeObject.PlaceFlagMove === 1 && placeObject.PlaceFlagHasCharacter === 1
        ) {
            isNewCharacter = true;
        }

        // character clone
        if (prevFrame && !isNewCharacter) {
            instanceId = parent._$getControllerAt(prevFrame, placeObject.Depth);
            if (instanceId === null) {
                isNewCharacter = true;
            }
        }

        // prev data set
        if (placeObject.PlaceFlagMove === 1 && prevPlaceObject) {

            if (placeObject.PlaceFlagHasMatrix === 0
                && prevPlaceObject.PlaceFlagHasMatrix === 1
            ) {
                placeObject.PlaceFlagHasMatrix = 1;
                placeObject.Matrix = prevPlaceObject.Matrix;
            }

            if (placeObject.PlaceFlagHasColorTransform === 0
                && prevPlaceObject.PlaceFlagHasColorTransform === 1
            ) {
                placeObject.PlaceFlagHasColorTransform = 1;
                placeObject.ColorTransform = prevPlaceObject.ColorTransform;
            }

            if (placeObject.PlaceFlagHasClipDepth === 0
                && prevPlaceObject.PlaceFlagHasClipDepth === 1
            ) {
                placeObject.PlaceFlagHasClipDepth = 1;
                placeObject.ClipDepth = prevPlaceObject.ClipDepth;
            }

            if (placeObject.PlaceFlagHasClipActions === 0
                && prevPlaceObject.PlaceFlagHasClipActions === 1
            ) {
                placeObject.PlaceFlagHasClipActions = 1;
                placeObject.ClipActionRecords = prevPlaceObject.ClipActionRecords;
            }

            if (placeObject.PlaceFlagHasRatio === 0
                && prevPlaceObject.PlaceFlagHasRatio === 1
            ) {
                placeObject.PlaceFlagHasRatio = 1;
                placeObject.Ratio = prevPlaceObject.Ratio;
            }

            if (placeObject.PlaceFlagHasFilterList === 0
                && prevPlaceObject.PlaceFlagHasFilterList === 1
            ) {
                placeObject.PlaceFlagHasFilterList = 1;
                placeObject.SurfaceFilterList = prevPlaceObject.SurfaceFilterList;
            }

            if (placeObject.PlaceFlagHasBlendMode === 0
                && prevPlaceObject.PlaceFlagHasBlendMode === 1
            ) {
                placeObject.PlaceFlagHasBlendMode = 1;
                placeObject.BlendMode = prevPlaceObject.BlendMode;
            }
        }

        // character new build
        if (isNewCharacter) {

            placeObject.StartFrame = frame|0;
            placeObject.EndFrame   = 0;

            instanceId = parent._$addDictionary(placeObject);

        }

        // start set instance
        parent._$setController(frame,  placeObject.Depth, instanceId);
        parent._$addPlaceObject(frame, placeObject.Depth, this.buildPlaceObject(placeObject));

        // flag
        installed[placeObject.Depth] = 1;

        // cache
        cache_place_objects[frame][placeObject.Depth] = placeObject;
    }

    // clone prev frame
    if (prevFrame) {

        var depth;

        if (!(frame in parent._$controller)) {
            parent._$controller[frame] = [];
        }

        var controller = parent._$controller[prevFrame];
        for (depth in controller) {
            if (!controller.hasOwnProperty(depth)) {
                continue;
            }

            if (depth in installed) {
                continue;
            }

            // clone
            cache_place_objects[frame][depth] = cache_place_objects[prevFrame][depth];
            parent._$controller[frame][depth] = controller[depth];
        }


        if (!(frame in parent._$placeController)) {
            parent._$placeController[frame] = [];
        }

        var places = parent._$placeController[prevFrame];
        for (depth in places) {

            if (!places.hasOwnProperty(depth)) {
                continue;
            }

            if (depth in parent._$placeController[frame]) {
                continue;
            }

            parent._$placeController[frame][depth] = places[depth];

        }
    }
};

/**
 * @param   {object} tag
 * @returns {PlaceObject}
 */
SwfTag.prototype.buildPlaceObject = function (tag)
{
    var placeObject = new PlaceObject();

    // Matrix
    if (tag.PlaceFlagHasMatrix) {
        var matrix         = new Matrix();
        matrix._$matrix    = tag.Matrix;
        placeObject.matrix = matrix;
    }

    // ColorTransform
    if (tag.PlaceFlagHasColorTransform) {
        var colorTransform              = new ColorTransform();
        colorTransform._$colorTransform = tag.ColorTransform;
        placeObject.colorTransform      = colorTransform;
    }

    // Filter
    if (tag.PlaceFlagHasFilterList) {
        placeObject.filters = tag.SurfaceFilterList;
    }

    // BlendMode
    if (tag.PlaceFlagHasBlendMode) {
        placeObject.blendMode = tag.BlendMode;
    }

    return placeObject;
};

/**
 * @param tag
 * @param character
 * @param parent
 * @returns {TextField}
 */
SwfTag.prototype.buildTextField = function (tag, character, parent)
{
    var stage     = this.getStage();
    var textField = new TextField();
    textField.setStage(stage);
    textField.setParent(parent);
    textField.setInitParams();
    textField.setTagType(character.tagType);
    textField.setBounds(character.bounds);
    var target = "instance" + textField.instanceId;
    if (tag.PlaceFlagHasName) {
        textField.setName(tag.Name);
        target = tag.Name;
    }
    textField.setTarget(parent.getTarget() + "/" + target);

    var obj      = {};
    var data     = character.data;
    var fontData = null;
    var fontId   = data.FontID;
    if (data.HasFont) {
        fontData = stage.getCharacter(fontId);
    }

    textField.fontId    = fontId;
    textField.fontScale = data.FontHeight / 1024;
    if (fontData && fontData.ZoneTable) {
        textField.fontScale /= 20;
    }

    textField.initialText = data.InitialText;

    obj.autoSize = data.AutoSize;
    obj.border   = data.Border;
    if (obj.border) {
        obj.background = 1;
    }

    obj.bottomScroll  = 1;
    obj.condenseWhite = 0;
    obj.embedFonts    = (data.HasFont && data.UseOutlines && fontData.FontFlagsHasLayout && !data.Password) ? 1 : 0;
    obj.hscroll       = 0;
    obj.maxscroll     = 0;
    obj.scroll        = 0;
    obj.maxhscroll    = 0;
    obj.html          = data.HTML;
    obj.htmlText      = (data.HTML) ? data.InitialText : null;
    obj.length        = 0;
    obj.maxChars      = 0;
    obj.multiline     = data.Multiline;
    obj.password      = data.Password;
    obj.selectable    = data.NoSelect;
    obj.tabEnabled    = 0;
    obj.tabIndex      = 0;
    obj.text          = data.InitialText;
    obj.textColor     = data.TextColor;
    obj.textHeight    = 0;
    obj.textWidth     = 0;
    obj.type          = data.ReadOnly ? "dynamic" : "input";

    var variable = data.VariableName;
    obj.variable = variable;
    if (variable) {
        parent.setVariable(variable, data.InitialText);
    }

    obj.wordWrap = data.WordWrap;

    // TextFormat
    obj.blockIndent = 0;
    obj.bullet      = 0;

    if (fontData) {
        obj.bold   = fontData.FontFlagsBold;
        var font   = textField.getVariable("font");
        obj.font   = "'" + fontData.FontName + "', " + font;
        obj.italic = fontData.FontFlagsItalic;
    }

    if (data.HasLayout) {
        switch (data.Align) {
            case 1:
                obj.align = "right";
                break;
            case 2:
                obj.align = "center";
                break;
            case 3:
                obj.align = "justify";
                break;
        }
        obj.leftMargin  = data.LeftMargin;
        obj.rightMargin = data.RightMargin;
        obj.indent      = data.Indent;
        obj.leading     = (14400 > data.Leading) ? data.Leading : data.Leading - 65535;
    }

    obj.size      = data.FontHeight / 20;
    obj.tabStops  = [];
    obj.target    = null;
    obj.underline = 0;
    obj.url       = null;

    for (var name in obj) {
        if (!obj.hasOwnProperty(name)) {
            continue;
        }

        textField.setProperty(name, obj[name]);
    }

    if (obj.type === "input") {
        textField.setInputElement();
    }

    return textField;
};

/**
 * @param tag
 * @param character
 * @returns {StaticText}
 */
SwfTag.prototype.buildText = function (tag, character)
{
    var stage      = this.getStage();
    var staticText = new StaticText();
    staticText.setTagType(character.tagType);
    staticText.setBounds(character.bounds);

    var records     = character.textRecords;
    var length      = 0 | records.length;
    var offsetX     = 0;
    var offsetY     = 0;
    var scale       = 1;
    var textHeight  = 0;
    var ShapeTable  = null;
    var cMatrix     = character.matrix;
    var color       = null;
    var isZoneTable = false;
    var i = 0;
    while (i < length) {
        var record = records[i];
        if ("FontId" in record) {
            var fontId   = record.FontId;
            var fontData = stage.getCharacter(fontId);
            ShapeTable   = fontData.GlyphShapeTable;
            isZoneTable  = ("ZoneTable" in fontData);
        }

        if ("XOffset" in record) {
            offsetX = record.XOffset;
        }

        if ("YOffset" in record) {
            offsetY = record.YOffset;
        }

        if ("TextColor" in record) {
            color = record.TextColor;
        }

        if ("TextHeight" in record) {
            textHeight = record.TextHeight;
            if (isZoneTable) {
                textHeight /= 20;
            }
        }

        var entries = record.GlyphEntries;
        var count   = record.GlyphCount;
        scale       = textHeight / 1024;
        var idx     = 0;
        var vtc     = this.$vtc;
        while (idx < count) {
            var entry  = entries[idx];
            var shapes = ShapeTable[entry.GlyphIndex];
            var data   = vtc.convert(shapes);
            var matrix = [scale, cMatrix[1], cMatrix[2], scale, cMatrix[4] + offsetX, cMatrix[5] + offsetY];

            var textRecode = new TextRecord();
            textRecode.setData(data);
            textRecode.setColor(color);
            textRecode.setMatrix(matrix);
            staticText.addRecord(textRecode);
            offsetX += 0 | entry.GlyphAdvance;

            idx = 0 | idx + 1;
        }

        i = 0 | i + 1;
    }

    return staticText;
};

/**
 * @param character
 * @param tag
 * @param parent
 * @returns {SimpleButton}
 */
SwfTag.prototype.buildButton = function (character, tag, parent)
{
    var stage      = this.getStage();
    var characters = character.characters;

    var button = new SimpleButton();
    button.setStage(stage);
    button.setParent(parent);
    button.setLevel(tag.Depth);

    if ("actions" in character) {
        button.setActions(character.actions);
    }

    var target = "instance" + button.instanceId;
    if (tag.PlaceFlagHasName) {
        button.setName(tag.Name);
        target = tag.Name;
    }
    button.setTarget(parent.getTarget() + "/" + target);

    var downState = button.getSprite("down");
    if (character.ButtonStateDownSoundId) {
        downState.soundId   = character.ButtonStateDownSoundId;
        downState.soundInfo = character.ButtonStateDownSoundInfo;
    }

    var hitState = button.getSprite("hit");
    if (character.ButtonStateHitTestSoundId) {
        hitState.soundId   = character.ButtonStateHitTestSoundId;
        hitState.soundInfo = character.ButtonStateHitTestSoundInfo;
    }

    var overState = button.getSprite("over");
    if (character.ButtonStateOverSoundId) {
        overState.soundId   = character.ButtonStateOverSoundId;
        overState.soundInfo = character.ButtonStateOverSoundInfo;
    }

    var upState = button.getSprite("up");
    if (character.ButtonStateUpSoundId) {
        upState.soundId   = character.ButtonStateUpSoundId;
        upState.soundInfo = character.ButtonStateUpSoundInfo;
    }

    for (var depth in characters) {
        if (!characters.hasOwnProperty(depth)) {
            continue;
        }

        var tags = characters[depth];
        for (var idx in tags) {
            if (!tags.hasOwnProperty(idx)) {
                continue;
            }

            var bTag = tags[idx];
            var obj  = this.buildObject(bTag, button, false, 1);
            if (!obj) {
                continue;
            }

            var placeObject = this.buildPlaceObject(bTag);
            var Depth       = bTag.Depth;
            if (bTag.ButtonStateDown) {
                downState.addTag(Depth, obj);
                stage.setPlaceObject(placeObject, downState.instanceId, Depth, 0);
            }

            if (bTag.ButtonStateHitTest) {
                hitState.addTag(Depth, obj);
                stage.setPlaceObject(placeObject, hitState.instanceId, Depth, 0);
            }

            if (bTag.ButtonStateOver) {
                overState.addTag(Depth, obj);
                stage.setPlaceObject(placeObject, overState.instanceId, Depth, 0);
            }

            if (bTag.ButtonStateUp) {
                upState.addTag(Depth, obj);
                stage.setPlaceObject(placeObject, upState.instanceId, Depth, 0);
            }
        }
    }

    button.setSprite("down", downState);
    button.setSprite("hit",  hitState);
    button.setSprite("over", overState);
    button.setSprite("up",   upState);
    button.setTagType(character.tagType);

    return button;
};

/**
 * @param   {number}    data_length
 * @param   {MovieClip} parent
 * @returns void
 */
SwfTag.prototype.parseTags = function (data_length, parent)
{
    var frame   = 1;
    var tagType = 0;
    var bitio   = this.bitio;

    var tagStartOffset,
        tagLength,
        length,
        tagDataStartOffset,
        offset;

    var tags = {
        placeObjects:  [],
        actions:       [],
        sounds:        [],
        removeObjects: [],
        frameLabel:    []
    };

    var cachePlaceObjects = [];
    while (bitio.byte_offset < data_length) {

        tagStartOffset = bitio.byte_offset;
        if (tagStartOffset + 2 > data_length) {
            break;
        }

        tagLength = bitio.getUI16();
        tagType   = tagLength >> 6;

        // long
        length = tagLength & 0x3f;
        if (length === 0x3f) {
            if (tagStartOffset + 6 > data_length) {
                bitio.byte_offset = tagStartOffset;
                bitio.bit_offset  = 0;
                break;
            }
            length = bitio.getUI32();
        }

        tagDataStartOffset = bitio.byte_offset|0;
        this.parseTag(tagType, length, parent, frame, tags, cachePlaceObjects);

        if (tagType === 1) {

            // next frame
            frame = (frame + 1)|0;

            // tag reset
            tags = {
                placeObjects:  [],
                actions:       [],
                sounds:        [],
                removeObjects: [],
                frameLabel:    []
            };
        }

        offset = (bitio.byte_offset - tagDataStartOffset)|0;
        if (offset !== length) {
            if (offset < length) {
                bitio.byte_offset = (bitio.byte_offset + (length - offset))|0;
            }
        }

        bitio.bit_offset = 0;
    }
};

/**
 * @param {number}    tag_type
 * @param {number}    length
 * @param {MovieClip} parent
 * @param {number}    frame
 * @param {object}    tags
 * @param {array}     cache_place_objects
 */
SwfTag.prototype.parseTag = function (tag_type, length, parent, frame, tags, cache_place_objects)
{

    var obj = null;

    switch (tag_type) {
        case 0: // End
            break;
        case 1: // ShowFrame
            this.showFrame(parent, tags, frame, cache_place_objects);
            break;
        case 2:  // DefineShape
        case 22: // DefineShape2
        case 32: // DefineShape3
        case 83: // DefineShape4
            if (length < 10) {
                this.bitio.byte_offset += length;
            } else {
                this.parseDefineShape(tag_type);
            }
            break;
        case 9: // BackgroundColor
            this.getStage().player.setBackgroundColor(
                this.bitio.getUI8(),
                this.bitio.getUI8(),
                this.bitio.getUI8()
            );
            break;
        case 10: // DefineFont
        case 48: // DefineFont2
        case 75: // DefineFont3
            this.parseDefineFont(tag_type, length);
            break;
        case 13: // DefineFontInfo
        case 62: // DefineFontInfo2
            this.parseDefineFontInfo(tag_type, length);
            break;
        case 11: // DefineText
        case 33: // DefineText2
            this.parseDefineText(tag_type);
            break;
        case 4:  // PlaceObject
        case 26: // PlaceObject2
        case 70: // PlaceObject3
            var placeObject = this.parsePlaceObject(tag_type, length);
            tags.placeObjects[placeObject.Depth] = placeObject;
            break;
        case 37: // DefineEditText
            this.parseDefineEditText(tag_type);
            break;
        case 39: // DefineSprite
            this.parseDefineSprite(this.bitio.byte_offset + length, parent);
            break;
        case 12: // DoAction
            tags.actions[tags.actions.length] = this.parseDoAction(length);
            break;
        case 59: // DoInitAction
            this.parseDoInitAction(length);
            break;
        case 5:  // RemoveObject
        case 28: // RemoveObject2
            tags.removeObjects[tags.removeObjects.length] = this.parseRemoveObject(tag_type);
            break;
        case 7:  // DefineButton
        case 34: // DefineButton2
            obj = this.parseDefineButton(tag_type, length);
            break;
        case 43: // FrameLabel
            tags.frameLabel[tags.frameLabel.length] = this.parseFrameLabel();
            break;
        case 88: // DefineFontName
            this.parseDefineFontName();
            break;
        case 20: // DefineBitsLossless
        case 36: // DefineBitsLossless2
            this.parseDefineBitsLossLess(tag_type, length);
            break;
        case 6:  // DefineBits
        case 21: // DefineBitsJPEG2
        case 35: // DefineBitsJPEG3
        case 90: // DefineBitsJPEG4
            this.parseDefineBits(tag_type, length, this.jpegTables);
            break;
        case 8:  // JPEGTables
            this.jpegTables = this.parseJPEGTables(length);
            break;
        case 56: // ExportAssets
            this.parseExportAssets();
            break;
        case 46: // DefineMorphShape
        case 84: // DefineMorphShape2
            this.parseDefineMorphShape(tag_type);
            break;
        case 40: // NameCharacter
            this.bitio.getDataUntil("\0"); // NameCharacter
            break;
        case 24: // Protect
            this.bitio.byteAlign();
            break;
        case 63: // DebugID
            this.bitio.getUI8(); // UUID
            break;
        case 64: // EnableDebugger2
            this.bitio.getUI16(); // Reserved
            this.bitio.getDataUntil("\0"); // Password
            break;
        case 65: // ScriptLimits
            this.bitio.getUI16(); // MaxRecursionDepth
            this.bitio.getUI16(); // ScriptTimeoutSeconds
            break;
        case 69: // FileAttributes
            this.parseFileAttributes();
            break;
        case 77: // MetaData
            this.bitio.getDataUntil("\0"); // MetaData
            break;
        case 86: // DefineSceneAndFrameLabelData
            obj = this.parseDefineSceneAndFrameLabelData();
            break;
        case 18: // SoundStreamHead
        case 45: // SoundStreamHead2
            obj = this.parseSoundStreamHead(tag_type);
            break;
        case 72: // DoABC
        case 82: // DoABC2
            this.parseDoABC(tag_type, length);
            break;
        case 76: // SymbolClass
            this.parseSymbolClass();
            break;
        case 14: // DefineSound
            this.parseDefineSound(tag_type, length);
            break;
        case 15: // StartSound
        case 89: // StartSound2
            obj = this.parseStartSound(tag_type);
            break;
        case 17: // DefineButtonSound
            this.parseDefineButtonSound();
            break;
        case 73: // DefineFontAlignZones
            this.parseDefineFontAlignZones();
            break;
        case 74: // CSMTextSettings
            this.parseCSMTextSettings(tag_type);
            break;
        case 19: // SoundStreamBlock
            this.parseSoundStreamBlock(tag_type, length);
            break;
        case 60: // DefineVideoStream
            this.parseDefineVideoStream(tag_type);
            break;
        case 61: // VideoFrame
            this.parseVideoFrame(tag_type, length);
            break;
        case 78: // DefineScalingGrid
            this.parseDefineScalingGrid();
            break;
        case 41: // ProductInfo
            this.bitio.getUI32(); // ProductID
            this.bitio.getUI32(); // Edition
            this.bitio.getUI8(); // MajorVersion
            this.bitio.getUI8(); // MinorVersion
            this.bitio.getUI32(); // BuildLow
            this.bitio.getUI32(); // BuildHigh
            this.bitio.getUI32(); // CompilationDate
            this.bitio.getUI32(); // TODO
            break;
        // TODO Tags
        case 3:  // FreeCharacter
        case 16: // StopSound
        case 23: // DefineButtonCxform
        case 25: // PathsArePostScript
        case 29: // SyncFrame
        case 31: // FreeAll
        case 38: // DefineVideo
        case 42: // DefineTextFormat
        case 44: // DefineBehavior
        case 47: // FrameTag
        case 49: // GeProSet
        case 52: // FontRef
        case 53: // DefineFunction
        case 54: // PlaceFunction
        case 55: // GenTagObject
        case 57: // ImportAssets
        case 58: // EnableDebugger
        case 66: // SetTabIndex
        case 71: // ImportAssets2
        case 87: // DefineBinaryData
        case 91: // DefineFont4
        case 93: // EnableTelemetry
            console.log("[base] tagType -> " + tag_type);
            break;
        case 27: // 27 (invalid)
        case 30: // 30 (invalid)
        case 67: // 67 (invalid)
        case 68: // 68 (invalid)
        case 79: // 79 (invalid)
        case 80: // 80 (invalid)
        case 81: // 81 (invalid)
        case 85: // 85 (invalid)
        case 92: // 92 (invalid)
            break;
        default: // null
            break;
    }

    return obj;
};

/**
 * @param   {number} tag_type
 * @returns void
 */
SwfTag.prototype.parseDefineShape = function (tag_type)
{
    var characterId = this.bitio.getUI16()|0;
    var bounds      = this.rect();

    if (tag_type === 83) {
        var obj = {};

        obj.EdgeBounds = this.rect();

        // Reserved
        this.bitio.getUIBits(5);

        obj.UsesFillWindingRule   = this.bitio.getUIBits(1);
        obj.UsesNonScalingStrokes = this.bitio.getUIBits(1);
        obj.UsesScalingStrokes    = this.bitio.getUIBits(1);
    }

    // create data
    var data  = this.$vtc.convert(this.shapeWithStyle(tag_type), false);

    // build shape object
    var shape         = new Shape();
    shape._$data      = data;
    shape._$bounds    = bounds;
    shape.characterId = characterId;

    // set
    this.setCharacter(characterId, shape);
};

/**
 * @returns {{xMin: number, xMax: number, yMin: number, yMax: number}}
 */
SwfTag.prototype.rect = function ()
{
    // init
    this.bitio.byteAlign();

    var nBits = this.bitio.getUIBits(5);
    return {
        xMin: this.bitio.getSIBits(nBits),
        xMax: this.bitio.getSIBits(nBits),
        yMin: this.bitio.getSIBits(nBits),
        yMax: this.bitio.getSIBits(nBits)
    };
};

/**
 * @param   {number} tag_type
 * @returns {object}
 */
SwfTag.prototype.shapeWithStyle = function (tag_type)
{
    var fillStyles, lineStyles;
    switch (tag_type) {
        case 46:
        case 84:
            fillStyles = {fillStyleCount: 0, fillStyles: []};
            lineStyles = {lineStyleCount: 0, lineStyles: []};
            break;
        default:
            fillStyles = this.fillStyleArray(tag_type);
            lineStyles = this.lineStyleArray(tag_type);
            break;
    }

    var numBits      = this.bitio.getUI8();
    var NumFillBits  = numBits >> 4;
    var NumLineBits  = numBits & 0x0f;
    var ShapeRecords = this.shapeRecords(tag_type, {
        FillBits: NumFillBits,
        LineBits: NumLineBits
    });

    return {
        fillStyles:   fillStyles,
        lineStyles:   lineStyles,
        ShapeRecords: ShapeRecords
    };
};

/**
 * @param   {number} tag_type
 * @returns {{fillStyleCount: number, fillStyles: array}}
 */
SwfTag.prototype.fillStyleArray = function (tag_type)
{

    var fillStyleCount = this.bitio.getUI8()|0;
    if (tag_type > 2 && fillStyleCount === 0xff) {
        fillStyleCount = this.bitio.getUI16();
    }

    var fillStyles = [];

    var i = 0;
    while (i < fillStyleCount) {
        fillStyles[fillStyles.length] = this.fillStyle(tag_type);
        i = (i + 1)|0;
    }

    return {
        fillStyleCount: fillStyleCount,
        fillStyles:     fillStyles
    };
};

/**
 * @param   {number} tag_type
 * @returns {object}
 */
SwfTag.prototype.fillStyle = function (tag_type)
{
    var bitType = this.bitio.getUI8();

    var obj = {};
    obj.fillStyleType = bitType;

    switch (bitType) {
        case 0x00:
            switch (tag_type) {
                case 32:
                case 83:
                    obj.Color = this.rgba();
                    break;
                case 46:
                case 84:
                    obj.StartColor = this.rgba();
                    obj.EndColor   = this.rgba();
                    break;
                default:
                    obj.Color = this.rgb();
                    break;
            }
            break;
        case 0x10:
        case 0x12:
            switch (tag_type) {
                case 46:
                case 84:
                    obj.startGradientMatrix = this.matrix();
                    obj.endGradientMatrix   = this.matrix();
                    obj.gradient            = this.gradient(tag_type);
                    break;
                default:
                    obj.gradientMatrix = this.matrix();
                    obj.gradient       = this.gradient(tag_type);
                    break;
            }
            break;
        case 0x13:
            obj.gradientMatrix = this.matrix();
            obj.gradient       = this.focalGradient(tag_type);
            break;
        case 0x40:
        case 0x41:
        case 0x42:
        case 0x43:
            obj.bitmapId = this.bitio.getUI16()|0;
            switch (tag_type) {
                case 46:
                case 84:
                    obj.startBitmapMatrix = this.matrix();
                    obj.endBitmapMatrix   = this.matrix();
                    break;
                default:
                    obj.bitmapMatrix = this.matrix();
                    break;
            }
            break;
    }

    return obj;
};

/**
 * @return {{R: number, G: number, B: number, A: number}}
 */
SwfTag.prototype.rgb = function ()
{
    return {
        R: this.bitio.getUI8()|0,
        G: this.bitio.getUI8()|0,
        B: this.bitio.getUI8()|0,
        A: 1
    };
};

/**
 * @return {{R: number|*, G: number|*, B: number|*, A: number}}
 */
SwfTag.prototype.rgba = function ()
{
    return {
        R: this.bitio.getUI8(),
        G: this.bitio.getUI8(),
        B: this.bitio.getUI8(),
        A: this.bitio.getUI8() / 255
    };
};

/**
 * @returns {array}
 */
SwfTag.prototype.matrix = function ()
{
    // init
    this.bitio.byteAlign();

    var matrix = [1, 0, 0, 1, 0, 0];
    if (this.bitio.getUIBit()) {
        var nScaleBits = this.bitio.getUIBits(5);
        matrix[0]      = this.bitio.getSIBits(nScaleBits) / 0x10000;
        matrix[3]      = this.bitio.getSIBits(nScaleBits) / 0x10000;
    }

    if (this.bitio.getUIBit()) {
        var nRotateBits = this.bitio.getUIBits(5);
        matrix[1]       = this.bitio.getSIBits(nRotateBits) / 0x10000;
        matrix[2]       = this.bitio.getSIBits(nRotateBits) / 0x10000;
    }

    var nTranslateBits = this.bitio.getUIBits(5);

    matrix[4] = this.bitio.getSIBits(nTranslateBits);
    matrix[5] = this.bitio.getSIBits(nTranslateBits);

    return matrix;
};

/**
 * @param   {number} tag_type
 * @returns {{SpreadMode: number, InterpolationMode: number, GradientRecords: Array}}
 */
SwfTag.prototype.gradient = function (tag_type)
{
    var NumGradients;

    var SpreadMode        = 0;
    var InterpolationMode = 0;
    var GradientRecords   = [];

    // init
    this.bitio.byteAlign();

    switch (tag_type) {
        case 46:
        case 84:
            NumGradients = this.bitio.getUI8();
            break;
        default:
            SpreadMode        = this.bitio.getUIBits(2);
            InterpolationMode = this.bitio.getUIBits(2);
            NumGradients      = this.bitio.getUIBits(4);
            break;
    }

    var i = 0;
    while (i < NumGradients) {
        GradientRecords[GradientRecords.length] = this.gradientRecord(tag_type);
        i = (i + 1)|0;
    }

    return {
        SpreadMode:        SpreadMode,
        InterpolationMode: InterpolationMode,
        GradientRecords:   GradientRecords
    };
};

/**
 * @param  {number} tag_type
 * @return {object}
 */
SwfTag.prototype.gradientRecord = function (tag_type)
{
    switch (tag_type) {
        case 46:
        case 84:

            return {
                StartRatio: this.bitio.getUI8() / 255,
                StartColor: this.rgba(),
                EndRatio:   this.bitio.getUI8() / 255,
                EndColor:   this.rgba()
            };

        default:
            var Ratio = this.bitio.getUI8();
            var Color = (tag_type < 32) ? this.rgb() : this.rgba();

            return {
                Ratio: Ratio / 255,
                Color: Color
            };

    }
};

/**
 * @param  {number} tag_type
 * @return {{SpreadMode: number, InterpolationMode: number, GradientRecords: Array, FocalPoint: number}}
 */
SwfTag.prototype.focalGradient = function (tag_type)
{
    // init
    this.bitio.byteAlign();

    var SpreadMode        = this.bitio.getUIBits(2);
    var InterpolationMode = this.bitio.getUIBits(2);
    var numGradients      = this.bitio.getUIBits(4);
    var GradientRecords   = [];

    var i = 0;
    while (i < numGradients) {
        GradientRecords[GradientRecords.length] = this.gradientRecord(tag_type);
        i = (i + 1)|0;
    }

    var FocalPoint = this.bitio.getFloat16();

    return {
        SpreadMode:        SpreadMode,
        InterpolationMode: InterpolationMode,
        GradientRecords:   GradientRecords,
        FocalPoint:        FocalPoint
    };
};

/**
 * @param  {number} tag_type
 * @return {{lineStyleCount: number, lineStyles: Array}}
 */
SwfTag.prototype.lineStyleArray = function (tag_type)
{
    var lineStyleCount = this.bitio.getUI8()|0;
    if (tag_type > 2 && lineStyleCount === 0xff) {
        lineStyleCount = this.bitio.getUI16();
    }

    var lineStyles = [];
    var i = 0;
    while (i < lineStyleCount) {
        lineStyles[lineStyles.length] = this.lineStyles(tag_type);
        i = (i + 1)|0;
    }

    return {
        lineStyleCount: lineStyleCount,
        lineStyles:     lineStyles
    };
};

/**
 *
 * @param  {number} tag_type
 * @return {object}
 */
SwfTag.prototype.lineStyles = function (tag_type)
{
    var obj = {};
    obj.fillStyleType = 0;

    switch (tag_type) {
        case 46:
            obj = {
                StartWidth: this.bitio.getUI16(),
                EndWidth:   this.bitio.getUI16(),
                StartColor: this.rgba(),
                EndColor:   this.rgba()
            };
            break;
        case 84:

            obj.StartWidth       = this.bitio.getUI16();
            obj.EndWidth         = this.bitio.getUI16();
            obj.StartCapStyle    = this.bitio.getUIBits(2);
            obj.JoinStyle        = this.bitio.getUIBits(2);
            obj.HasFillFlag      = this.bitio.getUIBit();
            obj.NoHScaleFlag     = this.bitio.getUIBit();
            obj.NoVScaleFlag     = this.bitio.getUIBit();
            obj.PixelHintingFlag = this.bitio.getUIBit();

            this.bitio.getUIBits(5); // Reserved

            obj.NoClose     = this.bitio.getUIBit();
            obj.EndCapStyle = this.bitio.getUIBits(2);

            if (obj.JoinStyle === 2) {
                obj.MiterLimitFactor = this.bitio.getUI16();
            }

            if (obj.HasFillFlag) {
                obj.FillType = this.fillStyle(tag_type);
            } else {
                obj.StartColor = this.rgba();
                obj.EndColor   = this.rgba();
            }

            break;
        case 83: // DefineShape4
            obj.Width            = this.bitio.getUI16();
            obj.StartCapStyle    = this.bitio.getUIBits(2);
            obj.JoinStyle        = this.bitio.getUIBits(2);
            obj.HasFillFlag      = this.bitio.getUIBit();
            obj.NoHScaleFlag     = this.bitio.getUIBit();
            obj.NoVScaleFlag     = this.bitio.getUIBit();
            obj.PixelHintingFlag = this.bitio.getUIBit();

            this.bitio.getUIBits(5); // Reserved

            obj.NoClose          = this.bitio.getUIBit();
            obj.EndCapStyle      = this.bitio.getUIBits(2);

            if (obj.JoinStyle === 2) {
                obj.MiterLimitFactor = this.bitio.getUI16();
            }

            if (obj.HasFillFlag) {
                obj.FillType = this.fillStyle(tag_type);
            } else {
                obj.Color = this.rgba();
            }

            break;
        case 32: // DefineShape3
            obj.Width = this.bitio.getUI16();
            obj.Color = this.rgba();
            break;
        default:  // DefineShape1or2
            obj.Width = this.bitio.getUI16();
            obj.Color = this.rgb();
            break;
    }

    return obj;
};

/**
 * @param  {number} tag_type
 * @param  {object} current_num_bits
 * @return {array}
 */
SwfTag.prototype.shapeRecords = function (tag_type, current_num_bits)
{
    // reset
    this.currentPosition = {x: 0, y: 0};

    var shapeRecords = [];
    while (true) {

        // reset
        var shape = 0;

        var first6Bits = this.bitio.getUIBits(6);
        if (first6Bits & 0x20) {
            var numBits = first6Bits & 0x0f;
            if (first6Bits & 0x10) {
                shape = this.straightEdgeRecord(tag_type, numBits);
            } else {
                shape = this.curvedEdgeRecord(tag_type, numBits);
            }
        } else if (first6Bits) {
            shape = this.styleChangeRecord(tag_type, first6Bits, current_num_bits);
        }

        shapeRecords[shapeRecords.length] = shape;

        // end flag
        if (shape === 0) {
            this.bitio.byteAlign();
            break;
        }
    }

    return shapeRecords;
};

/**
 * @param  {number} tag_type
 * @param  {number} num_bits
 * @return {{ControlX: number, ControlY: number, AnchorX: number, AnchorY: number, isCurved: boolean, isChange: boolean}}
 */
SwfTag.prototype.straightEdgeRecord = function (tag_type, num_bits)
{
    var deltaX = 0;
    var deltaY = 0;

    if (this.bitio.getUIBit()) { // GeneralLineFlag

        deltaX = this.bitio.getSIBits(num_bits + 2);
        deltaY = this.bitio.getSIBits(num_bits + 2);

    } else {

        if (this.bitio.getUIBit()) { // VertLineFlag
            deltaY = this.bitio.getSIBits(num_bits + 2);
        } else {
            deltaX = this.bitio.getSIBits(num_bits + 2);
        }

    }

    var AnchorX = deltaX;
    var AnchorY = deltaY;

    switch (tag_type) {
        case 46:
        case 84:
            break;
        default:

            AnchorX = this.currentPosition.x + deltaX;
            AnchorY = this.currentPosition.y + deltaY;

            // position
            this.currentPosition.x = AnchorX;
            this.currentPosition.y = AnchorY;

            break;
    }

    return {
        ControlX: 0,
        ControlY: 0,
        AnchorX:  AnchorX,
        AnchorY:  AnchorY,
        isCurved: false,
        isChange: false
    };
};

/**
 * @param  {number} tag_type
 * @param  {number} num_bits
 * @return {{ControlX: number, ControlY: number, AnchorX: number, AnchorY: number, isCurved: boolean, isChange: boolean}}
 */
SwfTag.prototype.curvedEdgeRecord = function (tag_type, num_bits)
{

    var controlDeltaX = this.bitio.getSIBits(num_bits + 2);
    var controlDeltaY = this.bitio.getSIBits(num_bits + 2);
    var anchorDeltaX  = this.bitio.getSIBits(num_bits + 2);
    var anchorDeltaY  = this.bitio.getSIBits(num_bits + 2);

    var ControlX = controlDeltaX;
    var ControlY = controlDeltaY;
    var AnchorX  = anchorDeltaX;
    var AnchorY  = anchorDeltaY;

    switch (tag_type) {
        case 46:
        case 84:
            break;
        default:

            ControlX = this.currentPosition.x + controlDeltaX;
            ControlY = this.currentPosition.y + controlDeltaY;
            AnchorX  = ControlX + anchorDeltaX;
            AnchorY  = ControlY + anchorDeltaY;

            // position
            this.currentPosition.x = AnchorX;
            this.currentPosition.y = AnchorY;

            break;
    }

    return {
        ControlX: ControlX,
        ControlY: ControlY,
        AnchorX:  AnchorX,
        AnchorY:  AnchorY,
        isCurved: true,
        isChange: false
    };
};

/**
 * @param  {number} tag_type
 * @param  {number} change_flag
 * @param  {object} current_num_bits
 * @return {{isChange: boolean, FillStyle0: number, FillStyle1: number, LineStyle: number}}
 */
SwfTag.prototype.styleChangeRecord = function (tag_type, change_flag, current_num_bits)
{
    // init
    var obj = {
        isChange:   true,
        FillStyle0: 0,
        FillStyle1: 0,
        LineStyle:  0
    };

    obj.StateNewStyles  = (change_flag >> 4) & 1;
    obj.StateLineStyle  = (change_flag >> 3) & 1;
    obj.StateFillStyle1 = (change_flag >> 2) & 1;
    obj.StateFillStyle0 = (change_flag >> 1) & 1;
    obj.StateMoveTo     = change_flag & 1;

    if (obj.StateMoveTo) {
        var moveBits = this.bitio.getUIBits(5);
        obj.MoveX    = this.bitio.getSIBits(moveBits);
        obj.MoveY    = this.bitio.getSIBits(moveBits);

        // position
        this.currentPosition.x = obj.MoveX;
        this.currentPosition.y = obj.MoveY;
    }

    if (obj.StateFillStyle0) {
        obj.FillStyle0 = this.bitio.getUIBits(current_num_bits.FillBits);
    }

    if (obj.StateFillStyle1) {
        obj.FillStyle1 = this.bitio.getUIBits(current_num_bits.FillBits);
    }

    if (obj.StateLineStyle) {
        obj.LineStyle = this.bitio.getUIBits(current_num_bits.LineBits);
    }

    if (obj.StateNewStyles) {
        obj.FillStyles = this.fillStyleArray(tag_type);
        obj.LineStyles = this.lineStyleArray(tag_type);

        var numBits = this.bitio.getUI8();
        current_num_bits.FillBits = obj.NumFillBits = numBits >> 4;
        current_num_bits.LineBits = obj.NumLineBits = numBits & 0x0f;
    }

    return obj;
};

/**
 * TODO
 * @param {number} tag_type
 * @param {number} length
 */
SwfTag.prototype.parseDefineBitsLossLess = function (tag_type, length)
{
    var stage = this.getStage();

    var startOffset    = this.bitio.byte_offset;
    var CharacterId    = this.bitio.getUI16();
    var format         = this.bitio.getUI8();
    var width          = this.bitio.getUI16();
    var height         = this.bitio.getUI16();
    var isAlpha        = (tag_type === 36);
    var colorTableSize = (format === 3) ? this.bitio.getUI8() + 1 : 0;

    // unCompress
    var sub        = this.bitio.byte_offset - startOffset;
    var compressed = this.bitio.getData(length - sub);
    var data       = this.bitio.unzip(compressed, false);

    // canvas
    var canvas    = this.$cacheStore.getCanvas();
    canvas.width  = width;
    canvas.height = height;

    var imageContext = canvas.getContext("2d");
    var imgData      = imageContext.createImageData(width, height);
    var pxData       = imgData.data;

    var idx   = 0;
    var pxIdx = 0;
    var x     = width|0;
    var y     = height|0;
    if (format === 5 && !isAlpha) {

        idx   = 0;
        pxIdx = 0;
        y = height|0;
        while (y) {
            y = (y - 1)|0;

            x = width|0;
            while (x) {
                x = (x - 1)|0;

                idx = (idx + 1)|0;
                pxData[pxIdx] = data[idx];
                idx   = (idx   + 1)|0;
                pxIdx = (pxIdx + 1)|0;

                pxData[pxIdx] = data[idx];
                idx   = (idx   + 1)|0;
                pxIdx = (pxIdx + 1)|0;

                pxData[pxIdx] = data[idx];
                idx   = (idx   + 1)|0;
                pxIdx = (pxIdx + 1)|0;

                pxData[pxIdx] = 255;
                pxIdx = (pxIdx + 1)|0;
            }
        }
    } else {

        var bpp   = (isAlpha) ? 4 : 3;
        var cmIdx = (colorTableSize * bpp)|0;

        var pad = 0;
        if (colorTableSize) {
            pad = (((width + 3) & ~3) - width)|0;
        }

        var isAlphaBug = this.$isAlphaBug;

        y = height|0;
        while (y) {
            y = (y - 1)|0;

            x = width|0;
            while (x) {
                x = (x - 1)|0;

                idx = (colorTableSize) ? (data[cmIdx++] * bpp)|0 : (cmIdx++ * bpp)|0;

                if (!isAlpha) {
                    pxData[pxIdx] = data[idx];
                    pxIdx         = (pxIdx + 1)|0;
                    idx           = (idx   + 1)|0;
                    pxIdx         = (pxIdx + 1)|0;

                    pxData[pxIdx] = data[idx];
                    pxIdx         = (pxIdx + 1)|0;
                    idx           = (idx   + 1)|0;
                    pxIdx         = (pxIdx + 1)|0;

                    pxData[pxIdx] = data[idx];
                    pxIdx         = (pxIdx + 1)|0;
                    idx           = (idx   + 1)|0;
                    pxIdx         = (pxIdx + 1)|0;

                    pxData[pxIdx] = 255;
                    idx           = (idx   + 1)|0;
                    pxIdx         = (pxIdx + 1)|0;
                } else {
                    var alpha = (format === 3) ? data[idx + 3]|0 : data[idx]|0;
                    idx = (idx + 1)|0;

                    if (!isAlphaBug) {

                        pxData[pxIdx] = (data[idx] * 255 / alpha)|0;
                        idx           = (idx   + 1)|0;
                        pxIdx         = (pxIdx + 1)|0;

                        pxData[pxIdx] = (data[idx] * 255 / alpha)|0;
                        idx           = (idx   + 1)|0;
                        pxIdx         = (pxIdx + 1)|0;

                        pxData[pxIdx] = (data[idx] * 255 / alpha)|0;
                        idx           = (idx   + 1)|0;
                        pxIdx         = (pxIdx + 1)|0;

                    } else {

                        pxData[pxIdx] = data[idx]|0;
                        idx           = (idx   + 1)|0;
                        pxIdx         = (pxIdx + 1)|0;

                        pxData[pxIdx] = data[idx]|0;
                        idx           = (idx   + 1)|0;
                        pxIdx         = (pxIdx + 1)|0;

                        pxData[pxIdx] = data[idx]|0;
                        idx           = (idx   + 1)|0;
                        pxIdx         = (pxIdx + 1)|0;

                    }

                    pxData[pxIdx] = alpha|0;
                    pxIdx         = (pxIdx + 1)|0;

                    if (format === 3) {
                        idx = (idx + 1)|0;
                    }
                }
            }

            cmIdx = (cmIdx + pad)|0;
        }
    }

    imageContext.putImageData(imgData, 0, 0);
    this.setCharacter(CharacterId, imageContext);
};

/**
 * TODO
 * @returns void
 */
SwfTag.prototype.parseExportAssets = function ()
{
    var stage = this.getStage();
    var count = this.bitio.getUI16();

    var exportAssets = stage.exportAssets;
    var packages     = stage.packages;

    var idx = 0;
    while (idx < count) {
        var id   = this.bitio.getUI16();
        var name = this.bitio.getDataUntil("\0");
        if (name.substr(0, 10) === "__Packages") {
            packages[id] = 1;
        }
        exportAssets[name] = id;

        idx = 0 | idx + 1;
    }

    stage.exportAssets = exportAssets;
};

/**
 * @param   {number} length
 * @returns {string}
 */
SwfTag.prototype.parseJPEGTables = function (length)
{
    return this.bitio.getData(length);
};

/**
 * TODO
 * @param   {number} tag_type
 * @param   {number} length
 * @param   {string} jpeg_tables
 * @returns void
 */
SwfTag.prototype.parseDefineBits = function (tag_type, length, jpeg_tables)
{
    var bitio = this.bitio;

    var startOffset = bitio.byte_offset;
    var CharacterId = bitio.getUI16();

    var sub = (bitio.byte_offset - startOffset)|0;

    var ImageDataLen = (length - sub)|0;
    switch (tag_type) {
        case 35:
        case 90:
            ImageDataLen = bitio.getUI32();
            break;
        default:
            break;
    }

    if (tag_type === 90) {
        var DeblockParam = bitio.getUI16();
        console.log("TODO DeblockParam", DeblockParam);
    }

    var JPEGData = bitio.getData(ImageDataLen);

    var BitmapAlphaData = 0;
    switch (tag_type) {
        case 35:
        case 90:
            BitmapAlphaData = bitio.getData(length - sub - ImageDataLen);
            break;
        default:
            break;
    }
    bitio.byte_offset = (startOffset + length)|0;

    // render
    var stage = this.getStage();
    stage.imgUnLoadCount++;

    var cacheStore = this.$cacheStore;


    var image = this.$document.createElement("img");

    image.addEventListener("load", function()
    {
        var width  = this.width;
        var height = this.height;

        var canvas       = cacheStore.getCanvas();
        canvas.width     = width;
        canvas.height    = height;
        var imageContext = canvas.getContext("2d");
        imageContext.drawImage(this, 0, 0, width, height);

        if (BitmapAlphaData) {
            var data    = bitio.unzip(BitmapAlphaData, false);
            var imgData = imageContext.getImageData(0, 0, width, height);
            var pxData  = imgData.data;
            var pxIdx   = 3;

            var len = width * height;
            var i = 0;
            while (i < len) {
                pxData[pxIdx] = data[i];
                pxIdx = 0 | pxIdx + 4;
                i = 0 | i + 1;
            }

            imageContext.putImageData(imgData, 0, 0);
        }

        stage.setCharacter(CharacterId, imageContext);
        stage.imgUnLoadCount--;
    });

    if (jpeg_tables !== null && jpeg_tables.length > 4) {
        var margeData = [];

        var len = (jpeg_tables.length - 2)|0;
        var idx = 0;
        while (idx < len) {
            margeData[margeData.length] = jpeg_tables[idx];
            idx = (idx + 1)|0;
        }

        len = JPEGData.length|0;
        idx = 2;
        while (idx < len) {
            margeData[margeData.length] = JPEGData[idx];
            idx = (idx + 1)|0;
        }

        JPEGData = margeData;
    }

    image.src = "data:image/jpeg;base64," +
        this.base64encode(this.parseJpegData(JPEGData));

    // for android bug
    if (this.$isAndroid) {
        var timer = this.$setTimeout;
        timer(function () {}, 0);
    }
};

/**
 * @param  {array}  jpeg_data
 * @return {string}
 */
SwfTag.prototype.parseJpegData = function (jpeg_data)
{
    var i      = 0;
    var idx    = 0;
    var str    = "";
    var length = jpeg_data.length|0;

    // erroneous
    if (jpeg_data[0] === 0xFF && jpeg_data[1] === 0xD9 && jpeg_data[2] === 0xFF && jpeg_data[3] === 0xD8) {
        i = 4;
        while (i < length) {
            str += this.$fromCharCode(jpeg_data[i]);
            i = (i + 1)|0;
        }
    } else if (jpeg_data[0] === 0xFF && jpeg_data[1] === 0xD8) {
        idx = 0;
        i   = 2;
        while (idx < i) {
            str += this.$fromCharCode(jpeg_data[idx]);
            idx = (idx + 1)|0;
        }

        while (i < length) {
            if (jpeg_data[i] === 0xFF) {
                if (jpeg_data[i + 1] === 0xD9 && jpeg_data[i + 2] === 0xFF && jpeg_data[i + 3] === 0xD8) {

                    i = (i + 4)|0;

                    idx = i;
                    while (idx < length) {
                        str += this.$fromCharCode(jpeg_data[idx]);
                        idx = (idx + 1)|0;
                    }

                    break;
                } else if (jpeg_data[i + 1] === 0xDA) {

                    idx = i;
                    while (idx < length) {
                        str += this.$fromCharCode(jpeg_data[idx]);
                        idx = (idx + 1)|0;
                    }

                    break;
                } else {
                    var segmentLength = ((jpeg_data[i + 2] << 8) + jpeg_data[i + 3] + i + 2)|0;

                    idx = i;
                    while (idx < segmentLength) {
                        str += this.$fromCharCode(jpeg_data[idx]);
                        idx = (idx + 1)|0;
                    }

                    i = (i + (segmentLength - i))|0;
                }
            }
        }
    }

    return str;
};

/**
 * @param  {string} data
 * @return {string}
 */
SwfTag.prototype.base64encode = function (data)
{
    if (this.$canBtoa) {
        return window.btoa(data);
    }

    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    var out    = [];
    var i      = 0;
    var length = data.length;
    while (i < length) {
        var c1 = data.charCodeAt(i) & 0xff;
        i = (i + 1)|0;

        if (i === length) {
            out[out.length] = base64EncodeChars.charAt(c1 >> 2);
            out[out.length] = base64EncodeChars.charAt((c1 & 0x3) << 4);
            out[out.length] = "==";
            break;
        }

        var c2 = data.charCodeAt(i);
        i = (i + 1)|0;

        if (i === length) {
            out[out.length] = base64EncodeChars.charAt(c1 >> 2);
            out[out.length] = base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out[out.length] = base64EncodeChars.charAt((c2 & 0xF) << 2);
            out[out.length] = "=";
            break;
        }

        var c3 = data.charCodeAt(i);
        i = (i + 1)|0;

        out[out.length] = base64EncodeChars.charAt(c1 >> 2);
        out[out.length] = base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out[out.length] = base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out[out.length] = base64EncodeChars.charAt(c3 & 0x3F);
    }

    return out.join("");
};

/**
 * TODO
 * @param   {number} tag_type
 * @param   {number} length
 * @returns void
 */
SwfTag.prototype.parseDefineFont = function (tag_type, length)
{
    var stage = this.getStage();

    var endOffset = (this.bitio.byte_offset + length)|0;

    var i   = 0;
    var len = 0;

    var obj     = {};
    obj.tagType = tag_type;
    obj.FontId  = this.bitio.getUI16();

    var numGlyphs = 0;
    switch (tag_type) {
        case 48:
        case 75:
            var fontFlags            = this.bitio.getUI8();
            obj.FontFlagsHasLayout   = (fontFlags >>> 7) & 1;
            obj.FontFlagsShiftJIS    = (fontFlags >>> 6) & 1;
            obj.FontFlagsSmallText   = (fontFlags >>> 5) & 1;
            obj.FontFlagsANSI        = (fontFlags >>> 4) & 1;
            obj.FontFlagsWideOffsets = (fontFlags >>> 3) & 1;
            obj.FontFlagsWideCodes   = (fontFlags >>> 2) & 1;
            obj.FontFlagsItalic      = (fontFlags >>> 1) & 1;
            obj.FontFlagsBold        = (fontFlags) & 1;

            this.bitio.byteAlign();

            obj.LanguageCode = this.bitio.getUI8();
            obj.FontNameLen  = this.bitio.getUI8();
            if (obj.FontNameLen) {
                var startOffset = this.bitio.byte_offset|0;
                var data        = this.bitio.getData(obj.FontNameLen);


                len = obj.FontNameLen|0;
                i   = 0;

                var str = "";
                while (i < len) {
                    if (data[i] > 127) {
                        i = (i + 1)|0;
                        continue;
                    }

                    str += this.$fromCharCode(data[i]);
                    i = (i + 1)|0;
                }

                var fontName;
                if (obj.FontFlagsShiftJIS || obj.LanguageCode === 2) {
                    fontName = this.bitio.decodeToShiftJis(str);
                } else {
                    fontName = decodeURIComponent(str);
                }

                obj.FontName = this.getFontName(fontName);
                this.bitio.byte_offset = (startOffset + obj.FontNameLen)|0;
            }

            numGlyphs     = this.bitio.getUI16();
            obj.NumGlyphs = numGlyphs;
            break;
        default:
            break;
    }


    // offset
    var offset = this.bitio.byte_offset|0;
    if (tag_type === 10) {
        numGlyphs = this.bitio.getUI16();
    }

    if (numGlyphs) {
        var OffsetTable = [];
        if (tag_type === 10) {
            OffsetTable[0] = numGlyphs;
            numGlyphs /= 2;
            numGlyphs -= 1;
        }

        if (obj.FontFlagsWideOffsets) {
            i = 0;
            while (i < numGlyphs) {
                OffsetTable[OffsetTable.length] = this.bitio.getUI32();
                i = (i + 1)|0;
            }

            if (tag_type !== 10) {
                obj.CodeTableOffset = this.bitio.getUI32();
            }
        } else {
            i = 0;
            while (i < numGlyphs) {
                OffsetTable[OffsetTable.length] = this.bitio.getUI16();
                i = (i + 1)|0;
            }

            if (tag_type !== 10) {
                obj.CodeTableOffset = this.bitio.getUI16();
            }
        }

        // Shape
        var GlyphShapeTable = [];
        if (tag_type === 10) {
            numGlyphs += 1;
        }

        i = 0;
        while (i < numGlyphs) {
            this.bitio.setOffset(OffsetTable[i] + offset, 0);

            var numBits     = this.bitio.getUI8();
            var NumFillBits = numBits >> 4;
            var NumLineBits = numBits & 0x0f;

            var currentNumBits = {
                FillBits: NumFillBits,
                LineBits: NumLineBits
            };

            var shapes = {};
            shapes.ShapeRecords = this.shapeRecords(tag_type, currentNumBits);

            shapes.lineStyles = {
                lineStyles: [{
                    Color:         {R: 0, G: 0, B: 0, A: 1},
                    lineStyleType: 0
                }]
            };

            shapes.fillStyles = {
                fillStyles: [{
                    Color:         {R: 0, G: 0, B: 0, A: 1},
                    fillStyleType: 0
                }]
            };

            GlyphShapeTable[GlyphShapeTable.length] = shapes;

            i = (i + 1)|0;
        }
        obj.GlyphShapeTable = GlyphShapeTable;

        switch (tag_type) {
            case 48:
            case 75:

                this.bitio.setOffset(obj.CodeTableOffset + offset, 0);

                var CodeTable = [];
                if (obj.FontFlagsWideCodes) {
                    i = 0;
                    while (i < numGlyphs) {
                        CodeTable[CodeTable.length] = this.bitio.getUI16();
                        i = (i + 1)|0;
                    }
                } else {
                    i = 0;
                    while (i < numGlyphs) {
                        CodeTable[CodeTable.length] = this.bitio.getUI8();
                        i = (i + 1)|0;
                    }
                }
                obj.CodeTable = CodeTable;

                if (obj.FontFlagsHasLayout) {
                    obj.FontAscent  = this.bitio.getUI16();
                    obj.FontDescent = this.bitio.getUI16();
                    obj.FontLeading = this.bitio.getUI16();

                    var FontAdvanceTable = [];
                    i = 0;
                    while (i < numGlyphs) {
                        FontAdvanceTable[FontAdvanceTable.length] = this.bitio.getUI16();
                        i = (i + 1)|0;

                    }
                    obj.FontAdvanceTable = FontAdvanceTable;

                    var FontBoundsTable = [];
                    i = 0;
                    while (i < numGlyphs) {
                        FontBoundsTable[FontBoundsTable.length] = this.rect();
                        i = (i + 1)|0;
                    }
                    obj.FontBoundsTable = FontBoundsTable;

                    if (tag_type === 75) {
                        var count         = this.bitio.getUI16();
                        obj.KerningCount  = count;

                        i = 0;
                        var kRecord = [];
                        var flag = obj.FontFlagsWideCodes;
                        while (i < count) {
                            var FontKerningCode1 = (flag) ? this.bitio.getUI16() : this.bitio.getUI8();
                            var FontKerningCode2 = (flag) ? this.bitio.getUI16() : this.bitio.getUI8();
                            var FontKerningAdjustment = this.bitio.getSIBits(16);

                            kRecord[kRecord.length] = {
                                FontKerningCode1:      FontKerningCode1,
                                FontKerningCode2:      FontKerningCode2,
                                FontKerningAdjustment: FontKerningAdjustment
                            };
                            i = (i + 1)|0;
                        }

                        obj.KerningRecord = kRecord;
                    }
                }
                break;
            default:
                break;
        }

    }

    this.bitio.byte_offset = endOffset|0;

    stage.setCharacter(obj.FontId, obj);
    stage.fonts[obj.FontName] = obj;
};

/**
 * @param   {number} tag_type
 * @param   {number} length
 * @returns void
 */
SwfTag.prototype.parseDefineFontInfo = function (tag_type, length)
{
    var endOffset = (this.bitio.byte_offset + length)|0;

    var obj = {};
    obj.tagType = tag_type;
    obj.FontId  = this.bitio.getUI16();

    var len  = this.bitio.getUI8();
    var data = this.bitio.getData(len);
    var str  = "";
    var i    = 0;
    while (i < len) {
        if (data[i] > 127) {
            continue;
        }

        str += this.$fromCharCode(data[i]);

        i = (i + 1)|0;
    }

    obj.FontFlagsReserved  = this.bitio.getUIBits(2);
    obj.FontFlagsSmallText = this.bitio.getUIBits(1);
    obj.FontFlagsShiftJIS  = this.bitio.getUIBits(1);
    obj.FontFlagsANSI      = this.bitio.getUIBits(1);
    obj.FontFlagsItalic    = this.bitio.getUIBits(1);
    obj.FontFlagsBold      = this.bitio.getUIBits(1);
    obj.FontFlagsWideCodes = this.bitio.getUIBits(1);
    if (tag_type === 62) {
        obj.LanguageCode = this.bitio.getUI8();
    }

    var fontName;
    if (obj.FontFlagsShiftJIS || obj.LanguageCode === 2) {
        fontName = this.bitio.decodeToShiftJis(str);
    } else {
        fontName = decodeURIComponent(str);
    }
    obj.FontName = this.getFontName(fontName);

    this.bitio.byteAlign();

    var CodeTable = [];
    if (obj.FontFlagsWideCodes || tag_type === 62) {
        while (this.bitio.byte_offset < endOffset) {
            CodeTable[CodeTable.length] = this.bitio.getUI16();
        }
    } else {
        while (this.bitio.byte_offset < endOffset) {
            CodeTable[CodeTable.length] = this.bitio.getUI8();
        }
    }
    obj.CodeTable = CodeTable;
};

/**
 * @param   {string} font_name
 * @returns {string}
 */
SwfTag.prototype.getFontName = function (font_name)
{
    var length = font_name.length|0;

    var str = font_name.substr(length - 1);
    if (str.charCodeAt(0) === 0) {
        font_name = font_name.slice(0, -1);
    }

    switch (font_name) {
        case "_sans":
            return "sans-serif";
        case "_serif":
            return "serif";
        case "_typewriter":
            return "monospace";
        default:
            var ander = font_name.substr(0, 1);
            if (ander === "_") {
                return "sans-serif";
            }
            return font_name;
    }
};

/**
 * @returns void
 */
SwfTag.prototype.parseDefineFontName = function ()
{
    this.bitio.getUI16(); // FontId
    this.bitio.getDataUntil("\0"); // FontName
    this.bitio.getDataUntil("\0"); // FontCopyright
};

/**
 * @param   {number} tag_type
 * @returns void
 */
SwfTag.prototype.parseDefineText = function (tag_type)
{

    var characterId = this.bitio.getUI16();

    var obj         = {};
    obj.tagType     = tag_type;
    obj.bounds      = this.rect();
    obj.matrix      = this.matrix();

    var GlyphBits   = this.bitio.getUI8();
    var AdvanceBits = this.bitio.getUI8();
    obj.textRecords = this.getTextRecords(tag_type, GlyphBits, AdvanceBits);

    this.setCharacter(characterId, obj);
};

/**
 * @param   {number} tag_type
 * @param   {number} glyph_bits
 * @param   {number} advance_bits
 * @returns {Array}
 */
SwfTag.prototype.getTextRecords = function (tag_type, glyph_bits, advance_bits)
{
    var records = [];

    while (this.bitio.getUI8() !== 0) {

        this.bitio.incrementOffset(-1, 0);

        var obj                 = {};
        obj.TextRecordType       = this.bitio.getUIBits(1);
        obj.StyleFlagsReserved   = this.bitio.getUIBits(3);
        obj.StyleFlagsHasFont    = this.bitio.getUIBits(1);
        obj.StyleFlagsHasColor   = this.bitio.getUIBits(1);
        obj.StyleFlagsHasYOffset = this.bitio.getUIBits(1);
        obj.StyleFlagsHasXOffset = this.bitio.getUIBits(1);

        if (obj.StyleFlagsHasFont) {
            obj.FontId = this.bitio.getUI16();
        }

        if (obj.StyleFlagsHasColor) {
            if (tag_type === 11) {
                obj.TextColor = this.rgb();
            } else {
                obj.TextColor = this.rgba();
            }
        }

        if (obj.StyleFlagsHasXOffset) {
            obj.XOffset = this.bitio.getUI16();
        }

        if (obj.StyleFlagsHasYOffset) {
            obj.YOffset = this.bitio.getUI16();
        }

        if (obj.StyleFlagsHasFont) {
            obj.TextHeight = this.bitio.getUI16();
        }

        obj.GlyphCount   = this.bitio.getUI8();
        obj.GlyphEntries = this.getGlyphEntries(obj.GlyphCount, glyph_bits, advance_bits);

        records[records.length] = obj;
    }

    return records;
};

/**
 * @param   {number} count
 * @param   {number} glyph_bits
 * @param   {number} advance_bits
 * @returns {Array}
 */
SwfTag.prototype.getGlyphEntries = function (count, glyph_bits, advance_bits)
{
    var i = 0;

    var entries = [];
    while (i < count) {
        entries[entries.length] = {
            GlyphIndex:   this.bitio.getUIBits(glyph_bits),
            GlyphAdvance: this.bitio.getSIBits(advance_bits)
        };

        i = (i + 1)|0;
    }

    return entries;
};

/**
 * @param   {number} tag_type
 * @returns void
 */
SwfTag.prototype.parseDefineEditText = function (tag_type)
{
    var obj = {};
    obj.CharacterId = this.bitio.getUI16();

    var bounds = this.rect();

    var flag1        = this.bitio.getUI8();
    obj.HasText      = (flag1 >>> 7) & 1;
    obj.WordWrap     = (flag1 >>> 6) & 1;
    obj.Multiline    = (flag1 >>> 5) & 1;
    obj.Password     = (flag1 >>> 4) & 1;
    obj.ReadOnly     = (flag1 >>> 3) & 1;
    obj.HasTextColor = (flag1 >>> 2) & 1;
    obj.HasMaxLength = (flag1 >>> 1) & 1;
    obj.HasFont      = flag1 & 1;

    var flag2        = this.bitio.getUI8();
    obj.HasFontClass = (flag2 >>> 7) & 1;
    obj.AutoSize     = (flag2 >>> 6) & 1;
    obj.HasLayout    = (flag2 >>> 5) & 1;
    obj.NoSelect     = (flag2 >>> 4) & 1;
    obj.Border       = (flag2 >>> 3) & 1;
    obj.WasStatic    = (flag2 >>> 2) & 1;
    obj.HTML         = (flag2 >>> 1) & 1;
    obj.UseOutlines  = flag2 & 1;

    var isJis = 0;
    if (obj.HasFont) {
        obj.FontID   = this.bitio.getUI16();
        var fontData = this.getCharacter(obj.FontID);
        isJis = (fontData.FontFlagsShiftJIS) ? 1 : 0;

        if (obj.HasFontClass) {
            obj.FontClass = this.bitio.getDataUntil("\0");
        }
        obj.FontHeight = this.bitio.getUI16();
    }

    if (obj.HasTextColor) {
        obj.TextColor = this.rgba();
    }

    if (obj.HasMaxLength) {
        obj.MaxLength = this.bitio.getUI16();
    }

    if (obj.HasLayout) {
        obj.Align       = this.bitio.getUI8();
        obj.LeftMargin  = this.bitio.getUI16();
        obj.RightMargin = this.bitio.getUI16();
        obj.Indent      = this.bitio.getUI16();
        obj.Leading     = this.bitio.getUI16();
    }

    var VariableName = this.bitio.getDataUntil("\0", isJis) + "";
    obj.VariableName = (VariableName === "") ? null : VariableName;
    obj.InitialText  = "";
    if (obj.HasText) {
        var text = this.bitio.getDataUntil("\0", isJis);
        if (obj.HTML) {
            if (text.indexOf("<sbr />") !== -1) {
                text = text.replace(new RegExp("<sbr />", "gi"), "\n");
            }

            if (text.indexOf("<b>") !== -1) {
                text = text.replace(new RegExp("<b>", "gi"), "");
                text = text.replace(new RegExp("</b>", "gi"), "");
            }

            var span       = this.$document.createElement("span");
            span.innerHTML = text;

            var tags    = span.getElementsByTagName("p");
            var length  = 0 | tags.length;
            var tagData = [];

            var i = 0;
            while (i < length) {
                tagData[i] = tags[i];
                i = (i + 1)|0;
            }

            obj.InitialText = tagData;
        } else {
            obj.InitialText = text;
        }
    }

    this.setCharacter(obj.CharacterId, {
        data:    obj,
        bounds:  bounds,
        tagType: tag_type
    });
};

/**
 * TODO
 * @param {number} tag_type
 */
SwfTag.prototype.parseDefineMorphShape = function (tag_type)
{
    var stage = this.getStage();

    var obj = {};
    obj.tagType     = tag_type;
    obj.CharacterId = this.bitio.getUI16();
    obj.StartBounds = this.rect();
    obj.EndBounds   = this.rect();

    if (tag_type === 84) {
        obj.StartEdgeBounds = this.rect();
        obj.EndEdgeBounds   = this.rect();

        this.bitio.getUIBits(6); // Reserved

        obj.UsesNonScalingStrokes = this.bitio.getUIBits(1);
        obj.UsesScalingStrokes    = this.bitio.getUIBits(1);
    }

    var offset    = this.bitio.getUI32();
    var endOffset = this.bitio.byte_offset + offset;

    obj.MorphFillStyles = this.fillStyleArray(tag_type);
    obj.MorphLineStyles = this.lineStyleArray(tag_type);

    obj.StartEdges = this.shapeWithStyle(tag_type);
    if (this.bitio.byte_offset !== endOffset) {
        this.bitio.byte_offset = endOffset;
    }

    obj.EndEdges = this.shapeWithStyle(tag_type);

    // fill1 control
    var startPosition     = {x: 0, y: 0};
    var endPosition       = {x: 0, y: 0};
    var StartRecords      = obj.StartEdges.ShapeRecords;
    var EndRecords        = obj.EndEdges.ShapeRecords;
    var StartRecordLength = StartRecords.length;
    var EndRecordLength   = EndRecords.length;

    var length = this.$max(StartRecordLength, EndRecordLength);

    var i = 0;
    while (i < length) {
        var addRecode   = {};
        var StartRecord = StartRecords[i];
        var EndRecord   = EndRecords[i];
        if (!StartRecord && !EndRecord) {
            i = 0 | i + 1;
            continue;
        }

        if (!StartRecord.isChange && !EndRecord.isChange) {
            if (StartRecord.isCurved) {
                startPosition.x += StartRecord.ControlX + StartRecord.AnchorX;
                startPosition.y += StartRecord.ControlY + StartRecord.AnchorY;
            } else {
                startPosition.x += StartRecord.AnchorX;
                startPosition.y += StartRecord.AnchorY;
            }

            if (EndRecord.isCurved) {
                endPosition.x += EndRecord.ControlX + EndRecord.AnchorX;
                endPosition.y += EndRecord.ControlY + EndRecord.AnchorY;
            } else {
                endPosition.x += EndRecord.AnchorX;
                endPosition.y += EndRecord.AnchorY;
            }

            i = 0 | i + 1;
            continue;
        }

        if (StartRecord.isChange && !EndRecord.isChange) {
            addRecode = {
                FillStyle0:      StartRecord.FillStyle0,
                FillStyle1:      StartRecord.FillStyle1,
                LineStyle:       StartRecord.LineStyle,
                StateFillStyle0: StartRecord.StateFillStyle0,
                StateFillStyle1: StartRecord.StateFillStyle1,
                StateLineStyle:  StartRecord.StateLineStyle,
                StateMoveTo:     StartRecord.StateMoveTo,
                StateNewStyles:  StartRecord.StateNewStyles,
                isChange:        true
            };

            if (StartRecord.StateMoveTo) {
                addRecode.MoveX = endPosition.x;
                addRecode.MoveY = endPosition.y;
                startPosition.x = StartRecord.MoveX;
                startPosition.y = StartRecord.MoveY;
            }

            EndRecords.splice(i, 0, addRecode);
        } else if (!StartRecord.isChange && EndRecord.isChange) {
            addRecode = {
                FillStyle0:      EndRecord.FillStyle0,
                FillStyle1:      EndRecord.FillStyle1,
                LineStyle:       EndRecord.LineStyle,
                StateFillStyle0: EndRecord.StateFillStyle0,
                StateFillStyle1: EndRecord.StateFillStyle1,
                StateLineStyle:  EndRecord.StateLineStyle,
                StateMoveTo:     EndRecord.StateMoveTo,
                StateNewStyles:  EndRecord.StateNewStyles,
                isChange:        true
            };

            if (EndRecord.StateMoveTo) {
                addRecode.MoveX = startPosition.x;
                addRecode.MoveY = startPosition.y;
                endPosition.x   = EndRecord.MoveX;
                endPosition.y   = EndRecord.MoveY;
            }

            StartRecords.splice(i, 0, addRecode);
        } else {
            if (StartRecord.StateMoveTo) {
                startPosition.x = StartRecord.MoveX;
                startPosition.y = StartRecord.MoveY;
            }

            if (EndRecord.StateMoveTo) {
                endPosition.x = EndRecord.MoveX;
                endPosition.y = EndRecord.MoveY;
            }
        }

        i = 0 | i + 1;
    }


    var FillType  = 0;
    var FillStyle = 0;
    length = obj.StartEdges.ShapeRecords.length;
    i = 0;
    while (i < length) {
        var record = StartRecords[i];
        i = 0 | i + 1;

        if (!record.isChange) {
            continue;
        }

        if (record.StateFillStyle0) {
            FillStyle = record.FillStyle0;
        }

        if (FillStyle) {
            record.StateFillStyle0 = 1;
            record.StateFillStyle1 = 1;
            if (FillType) {
                record.FillStyle0 = 0;
                record.FillStyle1 = FillStyle;
            } else {
                record.FillStyle0 = FillStyle;
                record.FillStyle1 = 0;
            }
        } else {
            record.StateFillStyle1 = 1;
            record.FillStyle1 = 0;
        }

        FillType = (FillType) ? 0 : 1;
    }

    stage.setCharacter(obj.CharacterId, obj);
};

/**
 * TODO
 * @param char
 * @param ratio
 * @returns {{data: Array, bounds: {xMax: number, xMin: number, yMax: number, yMin: number}}}
 */
SwfTag.prototype.buildMorphShape = function (char, ratio)
{
    var per = (ratio === undefined) ? 0 : ratio / 65535;
    var startPer = 1 - per;
    var newShapeRecords = [];

    var morphLineStyles = char.MorphLineStyles;
    var lineStyles      = morphLineStyles.lineStyles;
    var lineStyleCount  = morphLineStyles.lineStyleCount;

    var morphFillStyles = char.MorphFillStyles;
    var fillStyles      = morphFillStyles.fillStyles;
    var fillStyleCount  = morphFillStyles.fillStyleCount;

    var StartEdges        = char.StartEdges;
    var StartShapeRecords = StartEdges.ShapeRecords;

    var EndEdges        = char.EndEdges;
    var EndShapeRecords = EndEdges.ShapeRecords;

    var shapes = {
        lineStyles: {
            lineStyleCount: lineStyleCount,
            lineStyles:     []
        },
        fillStyles: {
            fillStyleCount: fillStyleCount,
            fillStyles:     []
        },
        ShapeRecords: []
    };

    var position = {x: 0, y: 0};
    var len = StartShapeRecords.length;
    for (var i = 0; i < len; i++) {
        var StartRecord = StartShapeRecords[i];
        if (!StartRecord) {
            continue;
        }

        var newRecord = {};
        var EndRecord = EndShapeRecords[i];
        if (StartRecord.isChange) {
            var MoveX = 0;
            var MoveY = 0;

            if (StartRecord.StateMoveTo === 1) {
                MoveX      = StartRecord.MoveX * startPer + EndRecord.MoveX * per;
                MoveY      = StartRecord.MoveY * startPer + EndRecord.MoveY * per;
                position.x = MoveX;
                position.y = MoveY;
            }

            newRecord = {
                FillStyle0:       StartRecord.FillStyle0,
                FillStyle1:      StartRecord.FillStyle1,
                LineStyle:       StartRecord.LineStyle,
                MoveX:           MoveX,
                MoveY:           MoveY,
                StateFillStyle0: StartRecord.StateFillStyle0,
                StateFillStyle1: StartRecord.StateFillStyle1,
                StateLineStyle:  StartRecord.StateLineStyle,
                StateMoveTo:     StartRecord.StateMoveTo,
                StateNewStyles:  StartRecord.StateNewStyles,
                isChange:        true
            };
        } else {
            var AnchorX = 0;
            var AnchorY = 0;
            var ControlX = 0;
            var ControlY = 0;

            var startAnchorX = StartRecord.AnchorX;
            var startAnchorY = StartRecord.AnchorY;
            var endAnchorX   = EndRecord.AnchorX;
            var endAnchorY   = EndRecord.AnchorY;

            var startControlX = StartRecord.ControlX;
            var startControlY = StartRecord.ControlY;
            var endControlX   = EndRecord.ControlX;
            var endControlY   = EndRecord.ControlY;

            if (per > 0 && per < 1 && StartRecord.isCurved !== EndRecord.isCurved) {
                if (!StartRecord.isCurved) {
                    startAnchorX  = StartRecord.AnchorX / 2;
                    startAnchorY  = StartRecord.AnchorY / 2;
                    startControlX = startAnchorX;
                    startControlY = startAnchorY;
                }
                if (!EndRecord.isCurved) {
                    endAnchorX  = EndRecord.AnchorX / 2;
                    endAnchorY  = EndRecord.AnchorY / 2;
                    endControlX = endAnchorX;
                    endControlY = endAnchorY;
                }
            }

            ControlX = startControlX * startPer + endControlX * per + position.x;
            ControlY = startControlY * startPer + endControlY * per + position.y;
            AnchorX  = startAnchorX * startPer + endAnchorX * per + ControlX;
            AnchorY  = startAnchorY * startPer + endAnchorY * per + ControlY;

            position.x = AnchorX;
            position.y = AnchorY;

            newRecord = {
                AnchorX:  AnchorX,
                AnchorY:  AnchorY,
                ControlX: ControlX,
                ControlY: ControlY,
                isChange: false,
                isCurved: (StartRecord.isCurved || EndRecord.isCurved)
            };
        }

        newShapeRecords[i] = newRecord;
    }
    newShapeRecords[newShapeRecords.length] = 0;
    shapes.ShapeRecords = newShapeRecords;

    var EndColor;
    var StartColor;
    var color;
    for (i = 0; i < lineStyleCount; i++) {
        var lineStyle = lineStyles[i];
        EndColor      = lineStyle.EndColor;
        StartColor    = lineStyle.StartColor;
        color = {
            R: this.$floor(StartColor.R * startPer + EndColor.R * per),
            G: this.$floor(StartColor.G * startPer + EndColor.G * per),
            B: this.$floor(StartColor.B * startPer + EndColor.B * per),
            A: StartColor.A * startPer + EndColor.A * per
        };

        var EndWidth   = lineStyles[i].EndWidth;
        var StartWidth = lineStyles[i].StartWidth;
        shapes.lineStyles.lineStyles[i] = {
            Width: this.$floor(StartWidth * startPer + EndWidth * per),
            Color: color,
            fillStyleType: 0
        };
    }

    for (i = 0; i < fillStyleCount; i++) {
        var fillStyle     = fillStyles[i];
        var fillStyleType = fillStyle.fillStyleType;

        if (fillStyleType === 0x00) {
            EndColor   = fillStyle.EndColor;
            StartColor = fillStyle.StartColor;
            color = {
                R: this.$floor(StartColor.R * startPer + EndColor.R * per),
                G: this.$floor(StartColor.G * startPer + EndColor.G * per),
                B: this.$floor(StartColor.B * startPer + EndColor.B * per),
                A: StartColor.A * startPer + EndColor.A * per
            };

            shapes.fillStyles.fillStyles[i] = {
                Color:         color,
                fillStyleType: fillStyleType
            };
        } else {
            var EndGradientMatrix = fillStyle.endGradientMatrix;
            var StartGradientMatrix = fillStyle.startGradientMatrix;
            var matrix = [
                StartGradientMatrix[0] * startPer + EndGradientMatrix[0] * per,
                StartGradientMatrix[1] * startPer + EndGradientMatrix[1] * per,
                StartGradientMatrix[2] * startPer + EndGradientMatrix[2] * per,
                StartGradientMatrix[3] * startPer + EndGradientMatrix[3] * per,
                StartGradientMatrix[4] * startPer + EndGradientMatrix[4] * per,
                StartGradientMatrix[5] * startPer + EndGradientMatrix[5] * per
            ];

            var gRecords = [];
            var gradient = fillStyle.gradient;
            var GradientRecords = gradient.GradientRecords;
            var gLen = GradientRecords.length;
            for (var gIdx = 0; gIdx < gLen; gIdx++) {
                var gRecord = GradientRecords[gIdx];
                EndColor    = gRecord.EndColor;
                StartColor  = gRecord.StartColor;

                color = {
                    R: this.$floor(StartColor.R * startPer + EndColor.R * per),
                    G: this.$floor(StartColor.G * startPer + EndColor.G * per),
                    B: this.$floor(StartColor.B * startPer + EndColor.B * per),
                    A: StartColor.A * startPer + EndColor.A * per
                };

                gRecords[gIdx] = {
                    Color: color,
                    Ratio: gRecord.StartRatio * startPer + gRecord.EndRatio * per
                };
            }

            shapes.fillStyles.fillStyles[i] = {
                gradient:       {GradientRecords: gRecords},
                gradientMatrix: matrix,
                fillStyleType:  fillStyleType
            };
        }
    }

    var EndBounds   = char.EndBounds;
    var StartBounds = char.StartBounds;
    var bounds = {
        xMax: StartBounds.xMax * startPer + EndBounds.xMax * per,
        xMin: StartBounds.xMin * startPer + EndBounds.xMin * per,
        yMax: StartBounds.yMax * startPer + EndBounds.yMax * per,
        yMin: StartBounds.yMin * startPer + EndBounds.yMin * per
    };

    return {
        data: this.$vtc.convert(shapes, true),
        bounds: bounds
    };
};

/**
 * @return {{name: string, frame: number}}
 */
SwfTag.prototype.parseFrameLabel = function ()
{
    return {
        name:  this.bitio.getDataUntil("\0"),
        frame: 0
    };
};

/**
 * @param  {number} tag_type
 * @return {object}
 */
SwfTag.prototype.parseRemoveObject = function (tag_type)
{
    switch (tag_type) {
        case 5:
            console.log("TODO: RemoveObject");
            return {
                CharacterId: this.bitio.getUI16()|0,
                Depth:       this.bitio.getUI16()|0
            };
        default:
            return {
                Depth: this.bitio.getUI16()|0
            };
    }
};

/**
 * @param   {number} tag_type
 * @param   {number} length
 * @returns {object}
 */
SwfTag.prototype.parseDefineButton = function (tag_type, length)
{
    var obj = {};
    obj.tagType   = tag_type;

    var endOffset = (this.bitio.byte_offset + length)|0;
    obj.ButtonId  = this.bitio.getUI16();

    var ActionOffset = 0;
    if (tag_type !== 7) {
        obj.ReservedFlags = this.bitio.getUIBits(7);
        obj.TrackAsMenu   = this.bitio.getUIBits(1);
        ActionOffset      = this.bitio.getUI16();
    }

    obj.characters = this.buttonCharacters(endOffset);

    // actionScript
    if (tag_type === 7) {

        var offset = (endOffset - this.bitio.byte_offset)|0;

        if (offset > 0) {
            obj.actions = this.parseDoAction(offset);
        }

    } else if (ActionOffset > 0) {
        obj.actions = this.buttonActions(endOffset);
    }

    // set layer
    this.setCharacter(obj.ButtonId, obj);
    if (this.bitio.byte_offset !== endOffset) {
        this.bitio.byte_offset = endOffset|0;
    }

    return obj;
};

/**
 * @param   {number} offset
 * @returns {array}
 */
SwfTag.prototype.buttonCharacters = function (offset)
{
    var characters = [];
    while (this.bitio.getUI8() !== 0) {

        this.bitio.incrementOffset(-1, 0);

        var cacheOffset = this.bitio.byte_offset|0;

        var record = this.buttonRecord();
        if (this.bitio.byte_offset > offset) {
            this.bitio.byte_offset = cacheOffset|0;
            break;
        }

        var depth = record.Depth;
        if (!(record.Depth in characters)) {
            characters[depth] = [];
        }

        var length = characters[depth].length;
        characters[depth][length] = record;
    }

    return characters;
};

/**
 * @returns {{}}
 */
SwfTag.prototype.buttonRecord = function ()
{

    this.bitio.getUIBits(2); // Reserved

    var obj = {};
    obj.PlaceFlagHasBlendMode  = this.bitio.getUIBits(1);
    obj.PlaceFlagHasFilterList = this.bitio.getUIBits(1);
    obj.ButtonStateHitTest     = this.bitio.getUIBits(1);
    obj.ButtonStateDown        = this.bitio.getUIBits(1);
    obj.ButtonStateOver        = this.bitio.getUIBits(1);
    obj.ButtonStateUp          = this.bitio.getUIBits(1);
    obj.CharacterId            = this.bitio.getUI16();
    obj.Depth                  = this.bitio.getUI16();
    obj.PlaceFlagHasMatrix     = 1;
    obj.Matrix                 = this.matrix();
    obj.ColorTransform         = this.colorTransform();

    obj.PlaceFlagHasColorTransform = (obj.ColorTransform === undefined) ? 0 : 1;
    if (obj.PlaceFlagHasBlendMode) {
        obj.BlendMode = this.bitio.getUI8();
    }

    if (obj.PlaceFlagHasFilterList) {
        obj.SurfaceFilterList = this.getFilterList();
    }

    obj.PlaceFlagHasRatio     = 0;
    obj.PlaceFlagHasClipDepth = 0;
    obj.Sound                 = null;

    return obj;
};

/**
 * @param   {number} end_offset
 * @returns {array}
 */
SwfTag.prototype.buttonActions = function (end_offset)
{
    var actions = [];

    while (true) {

        var obj            = {};
        var startOffset    = this.bitio.byte_offset|0;
        var CondActionSize = this.bitio.getUI16();

        obj.CondIdleToOverDown    = this.bitio.getUIBits(1);
        obj.CondOutDownToIdle     = this.bitio.getUIBits(1);
        obj.CondOutDownToOverDown = this.bitio.getUIBits(1);
        obj.CondOverDownToOutDown = this.bitio.getUIBits(1);
        obj.CondOverDownToOverUp  = this.bitio.getUIBits(1);
        obj.CondOverUpToOverDown  = this.bitio.getUIBits(1);
        obj.CondOverUpToIdle      = this.bitio.getUIBits(1);
        obj.CondIdleToOverUp      = this.bitio.getUIBits(1);
        obj.CondKeyPress          = this.bitio.getUIBits(7);
        obj.CondOverDownToIdle    = this.bitio.getUIBits(1);

        // ActionScript
        var length = (end_offset - this.bitio.byte_offset + 1)|0;

        obj.ActionScript = this.parseDoAction(length);

        actions[actions.length] = obj;

        if (!CondActionSize) {
            break;
        }

        this.bitio.byte_offset = (startOffset + CondActionSize)|0;
    }

    return actions;
};

/**
 * @param   {number} tag_type
 * @param   {number} length
 * @returns {object}
 */
SwfTag.prototype.parsePlaceObject = function (tag_type, length)
{
    var version = this.main.version;

    var startOffset = this.bitio.byte_offset|0;

    var obj = {};
    obj.tagType = tag_type;

    switch (tag_type) {
        case 4:
            obj.CharacterId = this.bitio.getUI16();
            obj.Depth       = this.bitio.getUI16();
            obj.Matrix      = this.matrix();
            obj.PlaceFlagHasMatrix = 1;

            this.bitio.byteAlign();

            if ((this.bitio.byte_offset - startOffset) < length) {
                obj.ColorTransform = this.colorTransform();
                obj.PlaceFlagHasColorTransform = 1;
            }
            break;
        default:
            obj.PlaceFlagHasClipActions = this.bitio.getUIBits(1);
            if (version < 5) {
                obj.PlaceFlagHasClipActions = 0;
            }

            obj.PlaceFlagHasClipDepth      = this.bitio.getUIBits(1);
            obj.PlaceFlagHasName           = this.bitio.getUIBits(1);
            obj.PlaceFlagHasRatio          = this.bitio.getUIBits(1);
            obj.PlaceFlagHasColorTransform = this.bitio.getUIBits(1);
            obj.PlaceFlagHasMatrix         = this.bitio.getUIBits(1);
            obj.PlaceFlagHasCharacter      = this.bitio.getUIBits(1);
            obj.PlaceFlagMove              = this.bitio.getUIBits(1);

            // PlaceObject3
            if (tag_type === 70) {
                this.bitio.getUIBits(1); // Reserved

                obj.PlaceFlagOpaqueBackground = this.bitio.getUIBits(1);
                obj.PlaceFlagHasVisible       = this.bitio.getUIBits(1);
                obj.PlaceFlagHasImage         = this.bitio.getUIBits(1);
                obj.PlaceFlagHasClassName     = this.bitio.getUIBits(1);
                obj.PlaceFlagHasCacheAsBitmap = this.bitio.getUIBits(1);
                obj.PlaceFlagHasBlendMode     = this.bitio.getUIBits(1);
                obj.PlaceFlagHasFilterList    = this.bitio.getUIBits(1);
            }

            obj.Depth = this.bitio.getUI16();

            if (obj.PlaceFlagHasClassName ||
                (obj.PlaceFlagHasImage && obj.PlaceFlagHasCharacter)
            ) {
                obj.ClassName = this.bitio.getDataUntil("\0");
            }

            if (obj.PlaceFlagHasCharacter) {
                obj.CharacterId = this.bitio.getUI16();
            }

            if (obj.PlaceFlagHasMatrix) {
                obj.Matrix = this.matrix();
            }

            if (obj.PlaceFlagHasColorTransform) {
                obj.ColorTransform = this.colorTransform();
            }

            if (obj.PlaceFlagHasRatio) {
                obj.Ratio = this.bitio.getUI16();
            }

            if (obj.PlaceFlagHasName) {
                obj.Name = this.bitio.getDataUntil("\0");
            }

            if (obj.PlaceFlagHasClipDepth) {
                obj.ClipDepth = this.bitio.getUI16();
            }

            if (tag_type === 70) {
                if (obj.PlaceFlagHasFilterList) {
                    obj.SurfaceFilterList = this.getFilterList();
                }
                if (obj.PlaceFlagHasBlendMode) {
                    obj.BlendMode = this.bitio.getUI8();
                }
                if (obj.PlaceFlagHasCacheAsBitmap) {
                    obj.BitmapCache = this.bitio.getUI8();
                }
                if (obj.PlaceFlagHasVisible) {
                    obj.Visible = this.bitio.getUI8();
                    obj.BackgroundColor = this.rgba();
                }
            }

            if (obj.PlaceFlagHasClipActions) {

                this.bitio.getUI16(); // Reserved

                obj.AllEventFlags = this.parseClipEventFlags();

                var endLength = startOffset + length;

                var actionRecords = [];
                while (this.bitio.byte_offset < endLength) {
                    var clipActionRecord = this.parseClipActionRecord(endLength);
                    actionRecords[actionRecords.length] = clipActionRecord;
                    if (endLength <= this.bitio.byte_offset) {
                        break;
                    }

                    var endFlag = (version <= 5) ? this.bitio.getUI16() : this.bitio.getUI32();
                    if (!endFlag) {
                        break;
                    }

                    if (version <= 5) {
                        this.bitio.byte_offset -= 2;
                    } else {
                        this.bitio.byte_offset -= 4;
                    }

                    if (clipActionRecord.KeyCode) {
                        this.bitio.byte_offset -= 1;
                    }
                }
                obj.ClipActionRecords = actionRecords;
            }

            break;
    }

    this.bitio.byteAlign();

    this.bitio.byte_offset = (startOffset + length)|0;

    return obj;
};

/**
 * @param  {number} end_length
 * @return {object}
 */
SwfTag.prototype.parseClipActionRecord = function (end_length)
{

    var obj = {};
    var EventFlags = this.parseClipEventFlags();
    if (end_length > this.bitio.byte_offset) {

        var ActionRecordSize = this.bitio.getUI32();
        if (EventFlags.keyPress) {
            obj.KeyCode = this.bitio.getUI8();
        }

        obj.EventFlags = EventFlags;
        obj.Actions    = this.parseDoAction(ActionRecordSize);
    }

    return obj;
};

/**
 * @returns {object}
 */
SwfTag.prototype.parseClipEventFlags = function ()
{
    var version = this.main.version;

    var obj = {};
    obj.keyUp      = this.bitio.getUIBits(1);
    obj.keyDown    = this.bitio.getUIBits(1);
    obj.mouseUp    = this.bitio.getUIBits(1);
    obj.mouseDown  = this.bitio.getUIBits(1);
    obj.mouseMove  = this.bitio.getUIBits(1);
    obj.unload     = this.bitio.getUIBits(1);
    obj.enterFrame = this.bitio.getUIBits(1);
    obj.load       = this.bitio.getUIBits(1);

    if (version >= 6) {
        obj.dragOver       = this.bitio.getUIBits(1);
        obj.rollOut        = this.bitio.getUIBits(1);
        obj.rollOver       = this.bitio.getUIBits(1);
        obj.releaseOutside = this.bitio.getUIBits(1);
        obj.release        = this.bitio.getUIBits(1);
        obj.press          = this.bitio.getUIBits(1);
        obj.initialize     = this.bitio.getUIBits(1);
    }

    obj.data = bitio.getUIBits(1);

    if (version >= 6) {

        this.bitio.getUIBits(5); // Reserved

        obj.construct = this.bitio.getUIBits(1);
        obj.keyPress  = this.bitio.getUIBits(1);
        obj.dragOut   = this.bitio.getUIBits(1);

        this.bitio.getUIBits(8); // Reserved
    }

    this.bitio.byteAlign();

    return obj;
};

/**
 * @returns {array|null}
 */
SwfTag.prototype.getFilterList = function ()
{
    var NumberOfFilters = this.bitio.getUI8()|0;
    var i = 0;

    var list = [];
    while (i < NumberOfFilters) {

        var filter = this.getFilter();
        if (filter) {
            list[list.length] = filter;
        }

        i = (i + 1)|0;
    }

    return (list.length) ? list : null;
};

/**
 * @return {object|null}
 */
SwfTag.prototype.getFilter = function ()
{
    var filterId = this.bitio.getUI8()|0;

    var filter = null;
    switch (filterId) {
        case 0:
            filter = this.dropShadowFilter();
            break;
        case 1:
            filter = this.blurFilter();
            break;
        case 2:
            filter = this.glowFilter();
            break;
        case 3:
            filter = this.bevelFilter();
            break;
        case 4:
            filter = this.gradientGlowFilter();
            break;
        case 5:
            filter = this.convolutionFilter();
            break;
        case 6:
            filter = this.colorMatrixFilter();
            break;
        case 7:
            filter = this.gradientBevelFilter();
            break;
    }

    return filter;
};

/**
 * @returns {DropShadowFilter}
 */
SwfTag.prototype.dropShadowFilter = function ()
{
    var rgba  = this.rgba();
    var alpha = rgba.A;
    var color = rgba.R << 16 | rgba.G << 8 | rgba.B;

    var blurX      = this.bitio.getUI32() / 0x10000;
    var blurY      = this.bitio.getUI32() / 0x10000;
    var angle      = this.bitio.getUI32() / 0x10000 * 180 / this.$PI;
    var distance   = this.bitio.getUI32() / 0x10000;
    var strength   = this.bitio.getFloat16() / 256;
    var inner      = (this.bitio.getUIBits(1)) ? true  : false;
    var knockout   = (this.bitio.getUIBits(1)) ? true  : false;
    var hideObject = (this.bitio.getUIBits(1)) ? false : true;
    var quality    = this.bitio.getUIBits(5);

    if (!strength) {
        return null;
    }

    return new DropShadowFilter(
        distance, angle, color, alpha, blurX, blurY,
        strength, quality, inner, knockout, hideObject
    );
};

/**
 * @returns {BlurFilter}
 */
SwfTag.prototype.blurFilter = function ()
{
    var blurX   = this.bitio.getUI32() / 0x10000;
    var blurY   = this.bitio.getUI32() / 0x10000;
    var quality = this.bitio.getUIBits(5);

    this.bitio.getUIBits(3); // Reserved

    return new BlurFilter(blurX, blurY, quality);
};

/**
 * @returns {GlowFilter}
 */
SwfTag.prototype.glowFilter = function ()
{
    var rgba     = this.rgba();
    var alpha    = rgba.A;
    var color    = rgba.R << 16 | rgba.G << 8 | rgba.B;
    var blurX    = this.bitio.getUI32() / 0x10000;
    var blurY    = this.bitio.getUI32() / 0x10000;
    var strength = this.bitio.getFloat16() / 256;
    var inner    = (this.bitio.getUIBits(1)) ? true : false;
    var knockout = (this.bitio.getUIBits(1)) ? true : false;

    this.bitio.getUIBits(1); // CompositeSource

    var quality = this.bitio.getUIBits(5);

    if (!strength) {
        return null;
    }

    return new GlowFilter(
        color, alpha, blurX, blurY,
        strength, quality, inner, knockout
    );
};

/**
 * @returns {BevelFilter}
 */
SwfTag.prototype.bevelFilter = function ()
{
    var rgba;
    rgba = this.rgba();
    var highlightAlpha = rgba.A;
    var highlightColor = rgba.R << 16 | rgba.G << 8 | rgba.B;

    rgba = this.rgba();
    var shadowAlpha = rgba.A;
    var shadowColor = rgba.R << 16 | rgba.G << 8 | rgba.B;

    var blurX    = this.bitio.getUI32() / 0x10000;
    var blurY    = this.bitio.getUI32() / 0x10000;
    var angle    = this.bitio.getUI32() / 0x10000 * 180 / this.$PI;
    var distance = this.bitio.getUI32() / 0x10000;
    var strength = this.bitio.getFloat16() / 256;
    var inner    = (this.bitio.getUIBits(1)) ? true : false;
    var knockout = (this.bitio.getUIBits(1)) ? true : false;

    this.bitio.getUIBits(1); // CompositeSource

    var OnTop   = this.bitio.getUIBits(1);
    var quality = this.bitio.getUIBits(4);

    var type = "inner";
    if (!inner) {
        if (OnTop) {
            type = "full";
        } else {
            type = "outer";
        }
    }

    if (!strength) {
        return null;
    }

    return new BevelFilter(
        distance, angle, highlightColor, highlightAlpha,
        shadowColor, shadowAlpha, blurX, blurY,
        strength, quality, type, knockout
    );
};

/**
 * @returns {GradientGlowFilter}
 */
SwfTag.prototype.gradientGlowFilter = function ()
{
    var NumColors = this.bitio.getUI8()|0;

    var colors = [];
    var alphas = [];

    var i = 0;
    while (i < NumColors) {
        var rgba = this.rgba();
        alphas[alphas.length] = rgba.A;
        colors[colors.length] = (rgba.R << 16 | rgba.G << 8 | rgba.B)|0;
        i = (i + 1)|0;
    }

    i = 0;
    var ratios = [];
    while (i < NumColors) {
        ratios[ratios.length] = +(this.bitio.getUI8() / 255);
        i = (i + 1)|0;
    }

    var blurX    = this.bitio.getUI32() / 0x10000;
    var blurY    = this.bitio.getUI32() / 0x10000;
    var angle    = this.bitio.getUI32() / 0x10000 * 180 / this.$PI;
    var distance = this.bitio.getUI32() / 0x10000;
    var strength = this.bitio.getFloat16() / 256;
    var inner    = (this.bitio.getUIBits(1)) ? true : false;
    var knockout = (this.bitio.getUIBits(1)) ? true : false;

    this.bitio.getUIBits(1); // CompositeSource

    var OnTop   = this.bitio.getUIBits(1);
    var quality = this.bitio.getUIBits(4);

    var type = "inner";
    if (!inner) {
        if (OnTop) {
            type = "full";
        } else {
            type = "outer";
        }
    }

    if (!strength) {
        return null;
    }

    return new GradientGlowFilter(
        distance, angle, colors, alphas, ratios,
        blurX, blurY, strength, quality, type, knockout
    );
};

/**
 * @returns {ConvolutionFilter}
 */
SwfTag.prototype.convolutionFilter = function ()
{
    var matrixX = this.bitio.getUI8();
    var matrixY = this.bitio.getUI8();
    var divisor = this.bitio.getFloat32;
    var bias    = this.bitio.getFloat32;

    // matrix
    var count = (matrixX * matrixY)|0;
    var matrix = [];
    while (count) {
        count = (count - 1)|0;
        matrix[matrix.length] = this.bitio.getFloat32();
    }

    var color = this.rgba();

    // Reserved
    this.bitio.getUIBits(6);

    var clamp         = (this.bitio.getUIBits(1)) ? true :false;
    var preserveAlpha = (this.bitio.getUIBits(1)) ? true :false;

    return new ConvolutionFilter(
        matrixX, matrixY, matrix, divisor, bias,
        preserveAlpha, clamp, color
    );
};

/**
 * @returns {GradientBevelFilter}
 */
SwfTag.prototype.gradientBevelFilter = function ()
{

    var NumColors = this.bitio.getUI8()|0;

    var colors = [];
    var alphas = [];

    var i = 0;
    while (i < NumColors) {
        var rgba = this.rgba();
        alphas[alphas.length] = rgba.A;
        colors[colors.length] = (rgba.R << 16 | rgba.G << 8 | rgba.B)|0;
        i = (i + 1)|0;
    }


    i = 0;
    var ratios = [];
    while (i < NumColors) {
        ratios[ratios.length] = +(this.bitio.getUI8() / 255);
        i = (i + 1)|0;
    }

    var blurX    = this.bitio.getUI32() / 0x10000;
    var blurY    = this.bitio.getUI32() / 0x10000;
    var angle    = this.bitio.getUI32() / 0x10000 * 180 / this.$PI;
    var distance = this.bitio.getUI32() / 0x10000;
    var strength = this.bitio.getFloat16() / 256;
    var inner    = (this.bitio.getUIBits(1)) ? true : false;
    var knockout = (this.bitio.getUIBits(1)) ? true : false;

    this.bitio.getUIBits(1); // CompositeSource

    var OnTop   = this.bitio.getUIBits(1);
    var quality = this.bitio.getUIBits(4);

    var type = "inner";
    if (!inner) {
        if (OnTop) {
            type = "full";
        } else {
            type = "outer";
        }
    }

    if (!strength) {
        return null;
    }

    return new GradientBevelFilter(
        distance, angle, colors, alphas, ratios,
        blurX, blurY, strength, quality, type, knockout
    );
};

/**
 * @returns {ColorMatrixFilter}
 */
SwfTag.prototype.colorMatrixFilter = function ()
{
    var matrix = [];
    for (var i = 0; i < 20; i++) {
        matrix[matrix.length] = this.bitio.getFloat32();
    }

    return new ColorMatrixFilter(matrix);
};

/**
 * @returns {number[]}
 */
SwfTag.prototype.colorTransform = function ()
{
    this.bitio.byteAlign();

    var colorTransform = [1, 1, 1, 1, 0, 0, 0, 0];

    var first6bits    = this.bitio.getUIBits(6);
    var HasAddTerms   = first6bits >> 5;
    var HasMultiTerms = (first6bits >> 4) & 1;
    var nbits         = first6bits & 0x0f;

    if (HasMultiTerms) {
        colorTransform[0] = this.bitio.getSIBits(nbits) / 256;
        colorTransform[1] = this.bitio.getSIBits(nbits) / 256;
        colorTransform[2] = this.bitio.getSIBits(nbits) / 256;
        colorTransform[3] = this.bitio.getSIBits(nbits) / 256;
    }

    if (HasAddTerms) {
        colorTransform[4] = this.bitio.getSIBits(nbits);
        colorTransform[5] = this.bitio.getSIBits(nbits);
        colorTransform[6] = this.bitio.getSIBits(nbits);
        colorTransform[7] = this.bitio.getSIBits(nbits);
    }

    return colorTransform;
};

/**
 * @param   {number}    length
 * @param   {MovieClip} parent
 * @returns void
 */
SwfTag.prototype.parseDefineSprite = function (length, parent)
{
    var characterId = this.bitio.getUI16()|0;
    this.bitio.getUI16(); // FrameCount

    // new MovieClip
    var mc = new MovieClip();
    mc.characterId = characterId|0;
    mc.stage       = parent.stage;

    // set
    this.setCharacter(characterId, mc);

    // parse
    this.parseTags(length, mc);
};

/**
 * @param   {number} length
 * @returns {ActionScript}
 */
SwfTag.prototype.parseDoAction = function (length)
{
    var data = this.bitio.getData(length);
    return new ActionScript(data);
};

/**
 * TODO
 * @param   {number} length
 * @returns void
 */
SwfTag.prototype.parseDoInitAction = function (length)
{
    var stage = this.getStage();

    var spriteId = this.bitio.getUI16();

    var as = new ActionScript(this.bitio.getData(length - 2), undefined, undefined, true);
    var mc = stage.getParent();
    mc.variables = {};
    var action = mc.createActionScript2(as);
    var packages = stage.packages;
    if (spriteId in packages) {
        mc.active = true;
        action.apply(mc);
        mc.active = false;
    }
    stage.initActions[spriteId] = action;
};

/**
 * @return void
 */
SwfTag.prototype.parseDefineSceneAndFrameLabelData = function ()
{

    var i, count;

    // sceneInfo
    i = 0;
    count = this.bitio.getU30()|0;
    while (i < count) {

        this.sceneInfo[this.sceneInfo.length] = {
            "offset": this.bitio.getU30(),
            "name"  : decodeURIComponent(this.bitio.getDataUntil("\0")) + ""
        };

        i = (i + 1)|0;
    }


    // frameInfo
    i = 0;
    count = this.bitio.getU30()|0;
    while (i < count) {

        var frame = (this.bitio.getU30() + 1)|0;
        var name  = decodeURIComponent(this.bitio.getDataUntil("\0")) + "";

        this.frameInfo[name] = frame;

        i = (i + 1)|0;
    }
};

/**
 * @param   {number} tag_type
 * @returns {object}
 */
SwfTag.prototype.parseSoundStreamHead = function (tag_type)
{
    var obj = {};
    obj.tagType = tag_type;

    this.bitio.getUIBits(4); // Reserved

    // 0 = 5.5kHz, 1 = 11kHz, 2 = 22kHz, 3 = 44kHz
    obj.PlaybackSoundRate = this.bitio.getUIBits(2);

    // 0 = 8-bit, 1 = 16-bit
    obj.PlaybackSoundSize = this.bitio.getUIBits(1);

    // 0 = Mono, 1 = Stereo
    obj.PlaybackSoundType = this.bitio.getUIBits(1);

    // 0 = Uncompressed(native-endian)
    // 1 = ADPCM
    // 2 = MP3
    // 3 = Uncompressed(little-endian)
    // 4 = Nellymoser 16 kHz
    // 5 = Nellymoser 8 kHz
    // 6 = Nellymoser
    // 11 = Speex
    obj.StreamSoundCompression = this.bitio.getUIBits(4);

    // 0 = 5.5kHz, 1 = 11kHz, 2 = 22kHz, 3 = 44kHz
    obj.StreamSoundRate = this.bitio.getUIBits(2);

    // 0 = 8-bit, 1 = 16-bit
    obj.StreamSoundSize = this.bitio.getUIBits(1);

    // 0 = Mono, 1 = Stereo
    obj.StreamSoundType = this.bitio.getUIBits(1);

    obj.StreamSoundSampleCount = this.bitio.getUI16();

    if (obj.StreamSoundCompression === 2) {
        obj.LatencySeek = this.bitio.getSIBits(2);
    }

    return obj;
};

/**
 * @param   {number} tag_type
 * @param   {number} length
 * @returns void
 */
SwfTag.prototype.parseDoABC = function (tag_type, length)
{
    this.bitio.byte_offset = this.bitio.byte_offset + length;
    return ;
    var stage = this.getStage();

    stage.abcFlag = true;

    var startOffset = this.bitio.byte_offset;

    var obj = {};
    obj.tagType = tag_type;
    obj.Flags   = this.bitio.getUI32();
    obj.Name    = this.bitio.getDataUntil("\0");

    // ABCBitIO
    var offset   = (length - (this.bitio.byte_offset - startOffset))|0;
    var ABCData  = this.bitio.getData(offset);
    var ABCBitIO = new BitIO();
    ABCBitIO.setData(ABCData);

    // version
    obj.minorVersion   = ABCBitIO.getUI16();
    obj.majorVersion   = ABCBitIO.getUI16();

    // integer
    obj.integer        = this.ABCInteger(ABCBitIO);

    // uinteger
    obj.uinteger       = this.ABCUinteger(ABCBitIO);

    // double
    obj.double         = this.ABCDouble(ABCBitIO);

    // string_info
    obj.string         = this.ABCStringInfo(ABCBitIO);

    // namespace_info
    obj.namespace      = this.ABCNameSpaceInfo(ABCBitIO);

    // ns_set_info
    obj.nsSet          = this.ABCNsSetInfo(ABCBitIO);

    // multiname_info;
    obj.multiname_info = this.ABCMultiNameInfo(ABCBitIO);

    var i = 0;

    // method_info
    obj.method = [];
    var methodCount = 0 | ABCBitIO.getU30();
    if (methodCount) {
        var method = [];
        i = 0;
        while (i < methodCount) {
            method[i] = this.ABCMethodInfo(ABCBitIO);
            i = (i + 1)|0;
        }
        obj.method = method;
    }

    // metadata_info
    obj.metadata = [];
    var metadataCount = 0 | ABCBitIO.getU30();
    if (metadataCount) {
        var metadataInfo = [];
        i = 0;
        while (i < metadataCount) {
            metadataInfo[i] = this.ABCMetadataInfo(ABCBitIO);
            i = (i + 1)|0;
        }
        obj.metadata = metadataInfo;
    }

    var classCount = 0 | ABCBitIO.getU30();
    obj.instance   = [];
    obj.class      = [];
    // console.log(classCount);
    if (classCount) {
        // instance_info
        var instance = [];
        i = 0;
        while (i < classCount) {
            instance[i] = this.ABCInstanceInfo(ABCBitIO);
            i = (i + 1)|0;
        }
        // console.log(instance);
        obj.instance = instance;

        // class_info
        var classInfo = [];
        i = 0;
        while (i < classCount) {
            classInfo[i] = this.ABCClassInfo(ABCBitIO);
            i = (i + 1)|0;
        }
        obj.class = classInfo;
    }

    // script_info
    obj.script = [];
    var scriptCount = ABCBitIO.getU30();
    if (scriptCount) {
        var script = [];
        i = 0;
        while (i < scriptCount) {
            script[i] = this.ABCScriptInfo(ABCBitIO);
            i = (i + 1)|0;
        }
        obj.script = script;
    }

    // method_body_info
    obj.methodBody = [];
    var methodBodyCount  = ABCBitIO.getU30();
    if (methodBodyCount) {
        var methodBody = [];
        i = 0;
        while (i < methodBodyCount) {
            var mBody = this.ABCMethodBodyInfo(ABCBitIO);
            methodBody[mBody.method] = mBody;
            i = (i + 1)|0;
        }
        obj.methodBody = methodBody;
    }

    // build names
    obj = this.ABCMultinameToString(obj);

    // build instance
    this.ABCBuildInstance(obj);
};

/**
 * @param obj
 */
SwfTag.prototype.ABCBuildInstance = function (obj)
{
    var stage = this.getStage();

    var instances  = obj.instance;
    var length     = instances.length|0;
    var namespaces = obj.namespace;
    var string     = obj.string;
    var names      = obj.names;

    var i = 0;
    while (i < length) {
        var instance = instances[i];
        var flag     = instance.flags;

        var nsIndex = null;
        if (flag & 0x08) {
            nsIndex = instance.protectedNs;
        }

        var object = {};
        if (nsIndex) {
            var nObj = namespaces[nsIndex];
            object   = string[nObj.name];
        } else {
            object = names[instance.name];
        }

        var values    = object.split(":");
        var className = values.pop();
        var ns        = values.pop();

        // build parent
        var AVM2 = function (mc) { this["__swf2js__::builder"] = mc; };
        var prop = AVM2.prototype;

        // constructor
        prop[className] = this.ABCCreateActionScript3(obj, instance.iinit, object);

        // prototype
        var traits   = instance.trait;
        var tLength  = 0 | traits.length;
        var register = [];
        var rCount = 1;
        if (tLength) {
            var idx = 0;
            while (idx < tLength) {
                var trait  = traits[idx];
                var tName  = names[trait.name];
                var tNames = tName.split("::");
                var pName  =  tNames.pop();
                var kind   = trait.kind;

                var val = undefined;
                switch (kind) {
                    case 0: // Slot
                        register[rCount] = pName;
                        rCount = 0 | rCount + 1;
                        break;
                    case 1: // Method
                    case 2: // Getter
                    case 3: // Setter
                        val = this.ABCCreateActionScript3(obj, trait.data.info, object);
                        break;
                    case 4: // Class
                        console.log("build: Class");
                        break;
                    case 5: // Function
                        console.log("build: Function");
                        break;
                    case 6: // Const
                        console.log("build: Const");
                        break;
                }

                prop[pName] = val;
                idx = 0 | idx + 1;
            }
        }

        var localName   = "__swf2js__:"+ object;
        prop[localName] = {};

        // extends
        var superName           = instance.superName;
        prop[localName].extends = names[superName];

        // register
        prop[localName].register = register;

        // build
        var abc = {};//stage.abc;
        var classObj = {};//stage.avm2;
        if (ns) {
            var nss  = ns.split(".");
            var nLen = 0 | nss.length;
            var nIdx = 0;
            while (nIdx < nLen) {
                if (!(nss[nIdx] in classObj)) {
                    classObj[nss[nIdx]] = {};
                    abc[nss[nIdx]] = {};
                }

                classObj = classObj[nss[nIdx]];
                abc      = abc[nss[nIdx]];

                nIdx = 0 | nIdx + 1;
            }
        }

        abc[className]      = AVM2;
        classObj[className] = new AVM2();

        i = 0 | i + 1;
    }
};

/**
 * @param   {object} obj
 * @param   {number} methodId
 * @param   {string} abcKey
 * @returns Function
 */
SwfTag.prototype.ABCCreateActionScript3 = function (obj, methodId, abcKey)
{
    var stage = this.getStage();
    return (function (data, id, ns, stage)
    {
        return function ()
        {
            var as3    = new ActionScript3(data, id, ns, stage);
            as3.caller = this;
            as3.args   = arguments;
            return as3.execute();
        };
    })(obj, methodId, abcKey, stage);
};

/**
 * @param   {object} obj
 * @returns {object}
 */
SwfTag.prototype.ABCMultinameToString = function (obj)
{
    var multinames = obj.multiname_info;

    var length = multinames.length|0;
    var string = obj.string;

    var ns = obj.namespace;

    var names = [];
    var i = 1;
    while (i < length) {
        var info = multinames[i];
        var str = "";

        switch (info.kind) {
            case 0x07: // QName
            case 0x0D: // QNameA
                var namespace_info = ns[info.ns];
                switch (namespace_info.kind) {
                    default:
                        str += string[namespace_info.name];
                        break;
                    case 0x05:
                        str += "private";
                        break;
                }

                if (str !== "") {
                    str += "::";
                }

                str += string[info.name];
                break;
            case 0x0F: // RTQName
            case 0x10: // RTQNameA
                console.log("RTQName", i, info);
                break;
            case 0x09: // Multiname
            case 0x0E: // MultinameA
                str = string[info.name];
                break;
            case 0x1B: // MultinameL
            case 0x1C: // MultinameLA
                str = null;
                break;
            case 0x11: // RTQNameL
            case 0x12: // RTQNameLA
                console.log("RTQNameL", i, info);

                break;
        }

        names[i] = str;

        i = (i + 1)|0;
    }

    obj.names = names;

    return obj;
};

/**
 * @param   {BitIO} ABCBitIO
 * @returns {array}
 */
SwfTag.prototype.ABCInteger = function (ABCBitIO)
{
    var array = [];

    var count = ABCBitIO.getU30()|0;
    if (count) {
        var i = 1;
        while (i < count) {
            array[i] = ABCBitIO.getS30();

            i = (i + 1)|0;
        }
    }

    return array;
};

/**
 * @param   {BitIO} ABCBitIO
 * @returns {array}
 */
SwfTag.prototype.ABCUinteger = function (ABCBitIO)
{
    var array = [];

    var count = ABCBitIO.getU30()|0;
    if (count) {
        var i = 1;
        while (i < count) {
            array[i] = ABCBitIO.getU30();

            i = (i + 1)|0;
        }
    }

    return array;
};

/**
 * @param   {BitIO} bitio
 * @returns {array}
 */
SwfTag.prototype.ABCDouble = function (bitio)
{
    var array = [];

    var count = bitio.getU30()|0;
    if (count) {
        var i = 1;
        while (i < count) {
            array[i] = bitio.getFloat64LittleEndian();

            i = (i + 1)|0;
        }
    }

    return array;
};

/**
 * @param   {BitIO} bitio
 * @returns {array}
 */
SwfTag.prototype.ABCStringInfo = function (bitio)
{
    var array = [];

    var count = bitio.getU30()|0;
    if (count) {
        var i = 1;
        while (i < count) {
            array[i] = bitio.AbcReadString();

            i = (i + 1)|0;
        }
    }

    return array;
};

/**
 * @param   {BitIO} bitio
 * @returns {array}
 */
SwfTag.prototype.ABCNameSpaceInfo = function (bitio)
{
    var array = [];

    var count = bitio.getU30()|0;
    if (count) {
        var i = 1;
        while (i < count) {
            array[i] = {
                kind: bitio.getUI8(),
                name: bitio.getU30()
            };

            i = (i + 1)|0;
        }
    }

    return array;
};

/**
 * @param   {BitIO} bitio
 * @returns {array}
 */
SwfTag.prototype.ABCNsSetInfo = function (bitio)
{
    var array = [];

    var count = bitio.getU30()|0;
    if (count) {
        var i = 1;
        while (i < count) {

            var nsCount = bitio.getU30()|0;

            var ns = [];
            if (nsCount) {
                var j = 0;
                while (j < nsCount) {
                    ns[j] = bitio.getU30();

                    j = (j + 1)|0;
                }
            }

            array[i] = ns;

            i = (i + 1)|0;
        }
    }

    return array;
};

/**
 * @param   {BitIO} bitio
 * @returns {array}
 */
SwfTag.prototype.ABCMultiNameInfo = function (bitio)
{
    var array = [];

    var count = bitio.getU30()|0;
    if (count) {

        var i = 1;
        while (i < count) {

            var obj = {};
            obj.kind = bitio.getUI8();
            switch (obj.kind) {
                case 0x07: // QName
                case 0x0D: // QNameA
                    obj.ns   = bitio.getU30();
                    obj.name = bitio.getU30();
                    break;
                case 0x0F: // RTQName
                case 0x10: // RTQNameA
                    obj.name = bitio.getU30();
                    break;
                case 0x09: // Multiname
                case 0x0E: // MultinameA
                    obj.name   = bitio.getU30();
                    obj.ns_set = bitio.getU30();
                    break;
                case 0x1B: // MultinameL
                case 0x1C: // MultinameLA
                    obj.ns_set = bitio.getU30();
                    break;
                case 0x11: // RTQNameL
                case 0x12: // RTQNameLA
                    break;
            }

            array[i] = obj;

            i = (i + 1)|0;
        }
    }

    return array;
};

/**
 * @param   {BitIO}  bitio
 * @returns {object}
 */
SwfTag.prototype.ABCMethodInfo = function (bitio)
{
    var obj = {};
    var i;
    var count = bitio.getU30()|0;

    obj.paramCount = count|0;
    obj.returnType = bitio.getU30();
    obj.paramType  = [];
    if (count) {
        var paramType = [];

        i = 0;
        while (i < count) {
            paramType[paramType.length] = bitio.getU30();

            i = (i + 1)|0;
        }
        obj.paramType = paramType;
    }

    obj.name  = bitio.getU30();
    obj.flags = bitio.getUI8();

    obj.options = [];
    if (obj.flags === 0x08) {
        var options = [];
        var optionCount = bitio.getU30()|0;
        if (optionCount) {
            i = 0;
            while (i < optionCount) {
                options[options.length] = {
                    val:  bitio.getU30(),
                    kind: bitio.getUI8()
                };

                i = (i + 1)|0;
            }
        }
        obj.options = options;
    }

    obj.paramName = [];
    if (obj.flags === 0x80) {
        var paramName = [];
        if (count) {
            i = 0;
            while (i < count) {
                paramName[paramName.length] = bitio.getU30();

                i = (i + 1)|0;
            }
        }
        obj.paramName = paramName;
    }

    return obj;
};

/**
 * @param   {BitIO}  bitio
 * @returns {object}
 */
SwfTag.prototype.ABCMetadataInfo = function (bitio)
{
    var obj = {};

    obj.name  = bitio.getU30();
    obj.items = [];

    var count = bitio.getU30()|0;
    if (count) {
        var items = [];
        var i = 0;
        while (i < count) {
            items[items.length] = {
                key:   bitio.getU30(),
                value: bitio.getU30()
            };

            i = (i + 1)|0;
        }
        obj.items = items;
    }

    return obj;
};

/**
 * @param   {BitIO}  bitio
 * @returns {object}
 */
SwfTag.prototype.ABCInstanceInfo = function (bitio)
{
    var obj = {};
    obj.name      = bitio.getU30();
    obj.superName = bitio.getU30();
    obj.flags     = bitio.getUI8();

    if (obj.flags & 0x08) {
        obj.protectedNs = bitio.getU30();
    }

    var count = bitio.getU30()|0;
    obj.interfaces = [];
    if (count) {
        var interfaces = [];
        var i = 0;
        while (i < count) {
            interfaces[interfaces.length] = bitio.getU30();

            i = (i + 1)|0;
        }
        obj.interfaces = interfaces;
    }

    obj.iinit = bitio.getU30();
    obj.trait = this.ABCTrait(bitio);

    return obj;
};

/**
 * @param   {BitIO}  bitio
 * @returns {object}
 */
SwfTag.prototype.ABCClassInfo = function (bitio)
{
    var obj = {};
    obj.cinit = bitio.getU30();
    obj.trait = this.ABCTrait(bitio);
    return obj;
};

/**
 * @param   {BitIO}  bitio
 * @returns {object}
 */
SwfTag.prototype.ABCScriptInfo = function (bitio)
{
    var obj = {};
    obj.init  = bitio.getU30();
    obj.trait = this.ABCTrait(bitio);
    return obj;
};

/**
 * @param   {BitIO}  bitio
 * @returns {object}
 */
SwfTag.prototype.ABCMethodBodyInfo = function (bitio)
{
    var obj = {};
    obj.method         = bitio.getU30();
    obj.maxStack       = bitio.getU30();
    obj.localCount     = bitio.getU30();
    obj.initScopeDepth = bitio.getU30();
    obj.maxScopeDepth  = bitio.getU30();

    var count = bitio.getU30()|0;
    var codes = [];
    if (count) {
        codes = this.ABCBuildCode(bitio, count);
    }
    obj.codes = codes;

    count = bitio.getU30()|0;
    var exceptions = [];
    if (count) {
        var i = 0;
        while (i < count) {
            exceptions[exceptions.length] = this.ABCException(bitio);

            i = (i + 1)|0;
        }
    }

    obj.exceptions = exceptions;
    obj.trait      = this.ABCTrait(bitio);

    return obj;
};

/**
 * @param   {BitIO}  bitio
 * @param   {number} count
 * @returns {array}
 */
SwfTag.prototype.ABCBuildCode = function (bitio, count)
{
    var array = [];
    var cacheOffset = 0;
    var i = 0;
    while (i < count) {

        var obj    = {};
        var offset = 0;

        var code = bitio.getUI8();

        obj.code = code;
        switch (code) {
            case 0x86: // astype
            case 0x41: // call
            case 0x80: // coerce
            case 0x42: // construct
            case 0x49: // constructsuper
            case 0xf1: // debugfile
            case 0xf0: // debugline
            case 0x94: // declocal
            case 0xc3: // declocal_i
            case 0x6a: // deleteproperty
            case 0x06: // dxns
            case 0x5e: // findproperty
            case 0x5d: // findpropstrict
            case 0x59: // getdescendants
            case 0x6e: // getglobalslot
            case 0x60: // getlex
            case 0x62: // getlocal
            case 0x66: // getproperty
            case 0x6c: // getslot
            case 0x04: // getsuper
            case 0x92: // inclocal
            case 0xc2: // inclocal_i
            case 0x68: // initproperty
            case 0xb2: // istype
            case 0x08: // kill
            case 0x56: // newarray
            case 0x5a: // newcatch
            case 0x58: // newclass
            case 0x40: // newfunction
            case 0x55: // newobject
            case 0x2f: // pushdouble
            case 0x2d: // pushint
            case 0x31: // pushnamespace
            case 0x25: // pushshort
            case 0x2c: // pushstring
            case 0x2e: // pushuint
            case 0x63: // setlocal
            case 0x6f: // setglobalslot
            case 0x61: // setproperty
            case 0x6d: // setslot
            case 0x05: // setsuper
                cacheOffset = bitio.byte_offset;
                obj.value1  = bitio.getU30();

                offset      = (offset + (bitio.byte_offset - cacheOffset))|0;
                break;
            case 0x1b: // lookupswitch
                obj.value1  = bitio.getSI24();
                offset      = (offset + 3)|0;

                cacheOffset = bitio.byte_offset;
                obj.value2  = bitio.getSI24();
                offset      = (offset + (bitio.byte_offset - cacheOffset))|0;

                obj.value3  = bitio.getSI24();
                offset      = (offset + 3)|0;
                break;
            case 0x65: // getscopeobject
            case 0x24: // pushbyte
                obj.value1  = bitio.getSI8();
                offset      = (offset + 1)|0;
                break;
            case 0x32: // hasnext2
                obj.value1  = bitio.getSI8();
                obj.value2  = bitio.getSI8();
                offset      = (offset + 2)|0;
                break;
            case 0x13: // ifeq
            case 0x12: // iffalse
            case 0x18: // ifge
            case 0x17: // ifgt
            case 0x16: // ifle
            case 0x15: // iflt
            case 0x0f: // ifnge
            case 0x0e: // ifngt
            case 0x0d: // ifnle
            case 0x0c: // ifnlt
            case 0x14: // ifne
            case 0x19: // ifstricteq
            case 0x1a: // ifstrictne
            case 0x11: // iftrue
            case 0x10: // jump
                obj.value1  = bitio.getSI24();
                offset      = (offset + 3)|0;
                break;
            case 0x43: // callmethod
            case 0x46: // callproperty
            case 0x4c: // callproplex
            case 0x4f: // callpropvoid
            case 0x44: // callstatic
            case 0x45: // callsuper
            case 0x4e: // callsupervoid
            case 0x4a: // constructprop
            case 0xef: // debug
                cacheOffset  = bitio.byte_offset;
                obj.value1   = bitio.getU30();
                obj.value2   = bitio.getU30();
                offset       = (offset + (bitio.byte_offset - cacheOffset))|0;
                break;
        }

        obj.offset = offset|0;

        array[i] = obj;

        i = (i + offset)|0;
    }

    return array;
};

/**
 * @param   {BitIO}  bitio
 * @returns {object}
 */
SwfTag.prototype.ABCException = function (bitio)
{
    var obj = {};
    obj.from    = bitio.getU30();
    obj.to      = bitio.getU30();
    obj.target  = bitio.getU30();
    obj.excType = bitio.getU30();
    obj.varName = bitio.getU30();
    return obj;
};

/**
 * @param   {BitIO} bitio
 * @returns {array}
 */
SwfTag.prototype.ABCTrait = function (bitio)
{
    var count = bitio.getU30()|0;

    var trait = [];
    if (count) {
        var i = 0;
        while (i < count) {
            var tObj  = {};
            tObj.name = bitio.getU30();

            var tag        = bitio.getUI8();
            var kind       = tag & 0x0f;
            var attributes = (kind >> 4) & 0x0f;

            var data = {};
            switch (kind) {
                default:
                    console.log("ERROR:"+ kind);
                    break;
                case 0: // Trait_Slot
                case 6: // Trait_Const
                    data.id    = bitio.getU30();
                    data.name  = bitio.getU30();
                    data.index = bitio.getU30();
                    data.kind  = null;
                    if (data.index !== 0) {
                        data.kind = bitio.getUI8();
                    }
                    break;
                case 1: // Trait_Method
                case 2: // Trait_Getter
                case 3: // Trait_Setter
                    data.id   = bitio.getU30();
                    data.info = bitio.getU30();
                    break;
                case 4: // Trait_Class
                    data.id   = bitio.getU30();
                    data.info = bitio.getU30();
                    break;
                case 5: // Trait_Function
                    data.id   = bitio.getU30();
                    data.info = bitio.getU30();
                    break;
            }
            tObj.kind = kind;
            tObj.data = data;

            if (attributes & 0x04) {
                var metadataCount = bitio.getU30()|0;
                var metadata = [];
                if (metadataCount) {
                    var j = 0;
                    while (j < metadataCount) {
                        metadata[metadata.length] = bitio.getU30();

                        j = (j + 1)|0;
                    }
                }

                tObj.metadata = metadata;
            }

            trait[trait.length] = tObj;

            i = (i + 1)|0;
        }
    }

    return trait;
};

/**
 * TODO
 * parseSymbolClass
 */
SwfTag.prototype.parseSymbolClass = function ()
{
    var symbols = {}; //stage.symbols;
    var count   = this.bitio.getUI16();
    if (count) {

        var i = 0;
        while (i < count) {
            var tagId      = this.bitio.getUI16();
            symbols[tagId] = this.bitio.getDataUntil("\0");
            i = (i + 1)|0;
        }

    }
};

/**
 * TODO
 * @param {number} tag_type
 * @param {number} length
 */
SwfTag.prototype.parseDefineSound = function (tag_type, length)
{
    var stage = this.getStage();

    var startOffset = bitio.byte_offset;

    var obj = {};
    obj.tagType          = tag_type;
    obj.SoundId          = this.bitio.getUI16();
    obj.SoundFormat      = this.bitio.getUIBits(4);
    obj.SoundRate        = this.bitio.getUIBits(2);
    obj.SoundSize        = this.bitio.getUIBit();
    obj.SoundType        = this.bitio.getUIBit();
    obj.SoundSampleCount = this.bitio.getUI32();

    var sub        = (this.bitio.byte_offset - startOffset)|0;
    var dataLength = (length - sub)|0;
    var data       = bitio.getData(dataLength);
    var SoundData  = "";

    var i = 0;
    while (i < dataLength) {
        SoundData += this.$fromCharCode(data[i]);
        i = (i + 1)|0;
    }

    this.bitio.byte_offset = (startOffset + length)|0;

    var mimeType = "";
    switch (obj.SoundFormat) {
        case 0: // Uncompressed native-endian
        case 3: // Uncompressed little-endian
            mimeType = "wave";
            break;
        case 1: // ADPCM ? 32KADPCM
            mimeType = "wave";
            break;
        case 2: // MP3
            mimeType = "mpeg";
            break;
        case 4: // Nellymoser 16
        case 5: // Nellymoser 8
        case 6: //
            mimeType = "nellymoser";
            break;
        case 11: // Speex
            mimeType = "speex";
            break;
        case 15:
            mimeType = "x-aiff";
            break;
    }

    obj.base64 = "data:audio/" + mimeType + ";base64," + window.btoa(SoundData);
    stage.sounds[obj.SoundId] = obj;
};

/**
 * TODO
 * @param {number} tag_type
 */
SwfTag.prototype.parseStartSound = function (tag_type)
{

    var stage = this.getStage();

    var obj = {};
    obj.tagType = tag_type;
    obj.SoundId = this.bitio.getUI16();
    if (tag_type === 89) {
        obj.SoundClassName = this.bitio.getDataUntil("\0");
    }

    obj.SoundInfo = this.parseSoundInfo();
    stage.setCharacter(obj.SoundId, obj);

    var sound = stage.sounds[obj.SoundId];
    var audio = this.$document.createElement("audio");
    audio.onload = function ()
    {
        this.load();
        this.preload  = "auto";
        this.autoplay = false;
        this.loop     = false;
    };

    audio.src = sound.base64;

    var loadSounds = stage.loadSounds;
    loadSounds[loadSounds.length] = audio;

    return {
        SoundId: obj.SoundId,
        Audio:   audio,
        tagType: tag_type
    };
};

/**
 * parseDefineButtonSound
 */
SwfTag.prototype.parseDefineButtonSound = function ()
{

    var buttonId = this.bitio.getUI16();
    var button   = this.getCharacter(buttonId);

    for (var i = 0; i < 4; i++) {
        var soundId = this.bitio.getUI16();
        if (soundId) {
            var soundInfo = this.parseSoundInfo();
            switch (i) {
                case 0:
                    button.ButtonStateUpSoundInfo      = soundInfo;
                    button.ButtonStateUpSoundId        = soundId;
                    break;
                case 1:
                    button.ButtonStateOverSoundInfo    = soundInfo;
                    button.ButtonStateOverSoundId      = soundId;
                    break;
                case 2:
                    button.ButtonStateDownSoundInfo    = soundInfo;
                    button.ButtonStateDownSoundId      = soundId;
                    break;
                case 3:
                    button.ButtonStateHitTestSoundInfo = soundInfo;
                    button.ButtonStateHitTestSoundId   = soundId;
                    break;
            }
        }
    }

    this.setCharacter(buttonId, button);
};

/**
 * @return {object}
 */
SwfTag.prototype.parseSoundInfo = function ()
{

    this.bitio.getUIBits(2); // Reserved

    var obj = {};
    obj.SyncStop       = this.bitio.getUIBit();
    obj.SyncNoMultiple = this.bitio.getUIBit();
    obj.HasEnvelope    = this.bitio.getUIBit();
    obj.HasLoops       = this.bitio.getUIBit();
    obj.HasOutPoint    = this.bitio.getUIBit();
    obj.HasInPoint     = this.bitio.getUIBit();

    if (obj.HasInPoint) {
        obj.InPoint = this.bitio.getUI32();
    }

    if (obj.HasOutPoint) {
        obj.OutPoint = this.bitio.getUI32();
    }

    if (obj.HasLoops) {
        obj.LoopCount = this.bitio.getUI16();
    }

    if (obj.HasEnvelope) {

        var i     = 0;
        var point = this.bitio.getUI8()|0;

        var EnvelopeRecords = [];
        while (i < point) {

            EnvelopeRecords[i] = {
                Pos44:      this.bitio.getUI32(),
                LeftLevel:  this.bitio.getUI16(),
                RightLevel: this.bitio.getUI16()
            };

            i = (i + 1)|0;
        }

        obj.EnvPoints       = point;
        obj.EnvelopeRecords = EnvelopeRecords;
    }

    return obj;
};

/**
 * TODO
 * @returns void
 */
SwfTag.prototype.parseDefineFontAlignZones = function ()
{
    var stage = this.getStage();

    var FontId = bitio.getUI16();
    var tag    = stage.getCharacter(FontId);

    tag.CSMTableHint = this.bitio.getUIBits(2);

    this.bitio.getUIBits(6); // Reserved

    var NumGlyphs = 0 | tag.NumGlyphs;
    var ZoneTable = [];
    var i = 0;
    while (i < NumGlyphs) {
        var NumZoneData = this.bitio.getUI8()|0;

        var ZoneData = [];
        var idx = 0;
        while (idx < NumZoneData) {
            ZoneData[idx] = this.bitio.getUI32();
            idx = (idx + 1)|0;
        }

        ZoneTable[i] = {
            ZoneData: ZoneData,
            Mask: this.bitio.getUI8()
        };

        i = (i + 1)|0;
    }

    this.bitio.byteAlign();

    tag.ZoneTable = ZoneTable;
    stage.setCharacter(FontId, tag);
};

/**
 * TODO
 * @param {number} tag_type
 */
SwfTag.prototype.parseCSMTextSettings = function (tag_type)
{
    var obj = {};
    obj.tagType      = tag_type;
    obj.TextID       = this.bitio.getUI16();
    obj.UseFlashType = this.bitio.getUIBits(2);
    obj.GridFit      = this.bitio.getUIBits(3);

    this.bitio.getUIBits(3); // Reserved

    obj.Thickness = this.bitio.getUI32();
    obj.Sharpness = this.bitio.getUI32();

    this.bitio.getUI8(); // Reserved
};

/**
 * TODO
 * @param {number} tag_type
 * @param {number} length
 */
SwfTag.prototype.parseSoundStreamBlock = function (tag_type, length)
{
    var obj = {};
    obj.tagType    = tag_type;
    obj.compressed = this.bitio.getData(length);
};

/**
 * TODO
 * @param {number} tag_type
 */
SwfTag.prototype.parseDefineVideoStream = function (tag_type)
{
    var stage = this.getStage();

    var obj = {};
    obj.tagType     = tag_type;
    obj.CharacterId = this.bitio.getUI16();
    obj.NumFrames   = this.bitio.getUI16();
    obj.Width       = this.bitio.getUI16();
    obj.Height      = this.bitio.getUI16();

    this.bitio.getUIBits(4); // Reserved

    obj.VideoFlagsDeblocking = this.bitio.getUIBits(3);
    obj.VideoFlagsSmoothing  = this.bitio.getUIBits(1);
    obj.CodecID              = this.bitio.getUI8();

    stage.setCharacter(obj.CharacterId, obj);
    console.log(obj);
};

/**
 * TODO
 * @param {number} tag_type
 * @param {number} length
 */
SwfTag.prototype.parseVideoFrame = function (tag_type, length)
{
    var stage = this.getStage();

    var startOffset = this.bitio.byte_offset;

    var obj = {};
    obj.tagType  = tag_type;
    obj.StreamID = this.bitio.getUI16();
    obj.FrameNum = this.bitio.getUI16();

    var StreamData = stage.getCharacter(obj.StreamID);
    var sub        = (this.bitio.byte_offset - startOffset)|0;
    var dataLength = (length - sub)|0;
    var VideoData;
    switch (StreamData.CodecID) {
        case 4:
            VideoData = this.parseVp6SwfVideoPacket(dataLength);
            break;
    }

    this.bitio.byte_offset = startOffset + length;

    // obj.base64 = 'data:image/jpeg;base64,' + window.btoa(VideoData);
    stage.videos[obj.StreamID] = obj;
};

/**
 * TODO
 * @param   {number} length
 * @returns {string}
 */
SwfTag.prototype.parseVp6SwfVideoPacket = function (length)
{

    var VideoData = "";
    var data = this.bitio.getData(length);

    console.log(data);

    return VideoData;
};

/**
 * @returns void
 */
SwfTag.prototype.parseFileAttributes = function ()
{

    this.bitio.getUIBit(); // Reserved

    var obj = {};
    obj.UseDirectBlit = this.bitio.getUIBit();
    obj.UseGPU        = this.bitio.getUIBit();
    obj.HasMetadata   = this.bitio.getUIBit();
    obj.ActionScript3 = this.bitio.getUIBit();

    // Reserved
    this.bitio.getUIBits(3);

    obj.UseNetwork    = this.bitio.getUIBit();

    // Reserved
    this.bitio.getUIBits(24);

    if (obj.ActionScript3) {
        this.main.actionScriptVersion = ActionScriptVersion.ACTIONSCRIPT3;
    } else {
        this.main.actionScriptVersion = ActionScriptVersion.ACTIONSCRIPT2;
    }

};

/**
 * @returns void
 */
SwfTag.prototype.parseDefineScalingGrid = function ()
{
    var obj         = {};
    obj.CharacterId = this.bitio.getUI16();
    obj.Splitter    = this.rect();
};
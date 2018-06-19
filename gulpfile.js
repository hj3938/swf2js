var gulp    = require("gulp");
var browser = require("browser-sync").create();
var concat  = require("gulp-concat");
var uglify  = require("gulp-uglify");
var Server  = require("karma").Server;

/**
 * server setting
 */
gulp.task("server", function ()
{
    browser.init({
        server: {
            baseDir: "./",
            index: "index.html"
        }
    });
});

/**
 * browser reload
 */
gulp.task("reload", function ()
{
    browser.reload();
});

/**
 * output swf2js
 */
gulp.task("output", function ()
{
    gulp.src([
            "copyright.file",
            "header.file",
            "src/util/Setting.js",
            "src/util/CanvasToWebGL.js",
            "src/util/Util.js",
            "src/dynamic/*.js",
            "src/adobe/utils/*.js",
            "src/com/adobe/viewsource/*.js",
            "src/fl/accessibility/*.js",
            "src/flash/*.js",
            "src/flash/events/Swf2jsEvent.js",
            "src/flash/errors/*.js",
            "src/flash/external/*.js",
            "src/flash/events/*.js",
            "src/flash/geom/*.js",
            "src/flash/globalization/*.js",
            "src/flash/filters/BitmapFilter.js",
            "src/flash/filters/*.js",
            "src/flash/accessibility/*.js",
            "src/flash/display/DisplayObject.js",
            "src/flash/display/InteractiveObject.js",
            "src/flash/display/DisplayObjectContainer.js",
            "src/flash/display/Sprite.js",
            "src/flash/display/*.js",
            "src/flash/display3D/*.js",
            "src/flash/display3D/textures/*.js",
            "src/flash/desktop/*.js",
            "src/flash/text/*.js",
            "src/flash/media/*.js",
            "src/flash/net/*.js",
            "src/flash/printing/*.js",
            "src/flash/xml/*.js",
            "src/actionscript/*.js",
            "src/*.js",
            "src/parser/*.js",
            "src/player/*.js",
            "footer.file"
        ])
        .pipe(concat("swf2js.js"))
        // .pipe(uglify({ output: { comments: /^!/ } }))
        .pipe(gulp.dest("."));
});

/**
 * default setting
 */
gulp.task("default", ["server"], function ()
{
    gulp.watch(["src/**/*.js"], ["tdd"]);
    gulp.watch(["swf2js.js"], ["reload"]);
});

/**
 * test-driven development
 */
gulp.task("tdd", function (done)
{
    new Server({
        configFile: __dirname + "/karma.conf.js",
        singleRun: false
    }, done)
        .on("run_complete", function (browsers, results)
        {
            if (results.failed) {
                throw new Error("failed");
            }
            gulp.start.apply(gulp, ["output"]);
        })
        .on("error", function (err) {
            done(err);
        })
        .start();
});

/**
 * Run test once and exit
 */
gulp.task("test", function (done)
{
    new Server({
        configFile: __dirname + "/karma.conf.js",
        singleRun: true
    }, done).start();
});
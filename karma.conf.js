// Karma configuration
// Generated on Wed Sep 06 2017 20:07:29 GMT+0900 (JST)

module.exports = function(config)
{
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        "node_modules/proxy-polyfill/proxy.min.js",
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
        "test/**/*.js"
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'src/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['FirefoxHeadless'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};

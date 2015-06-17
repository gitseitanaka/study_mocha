module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    frameworks: [
        'mocha',
        'browserify'
    ],
    // ブラウザから参照するファイルパスの指定
    files: [
        'test/*.js',            // 例：サーバ向けテストコードjs群
        'js.front/*.js',        // 例：フロント向けjs群  *
        'test/front/*.js'       // 例：フロント向けテストコードjs群 *
        // "lib/jquery.js"      // 必要に応じて、jqueryなどのパスも追加
    ],
    // list of files to exclude
    exclude: [],
    // ブラウザ用向けに(browserifyで)変換するファイル群の指定
    // ここに記載するとrequire('power-assert')がテストコードで利用できる。
    // (テストコードのスクリプトの配置を記載する)
    preprocessors: {
        'test/*.js': ['browserify'],
        'test/front/*.js': ['browserify']
    },
    // browserify option
    browserify: {
      debug: true,
      transform: [
        ['babelify', {plugins: ['babel-plugin-espower']}]
      ]
    },
    // test results reporter to use
    reporters: ['mocha'],
    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging. possible values:
    //   config.LOG_DISABLE || config.LOG_ERROR
    //   || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // テストに用いるブラウザを指定する
    // 複数指定可。
    // https://www.npmjs.com/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    // Continuous Integration mode
    singleRun: false
  });
};
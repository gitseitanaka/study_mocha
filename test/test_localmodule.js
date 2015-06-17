var assert = require("power-assert");

var localmodule = require('../localmodule');

describe('local module', function () {
    describe('helloSync', function () {
        it('引数に応じて決まった文字列を返すこと', function () {
            assert.equal(localmodule.helloSync('taro'), 'Hello taro');
        });
    });

    describe('hello', function () {
        it('引数に応じてコールバック内で決まった文字列になること', function (done) {
            localmodule.hello('hanako', function (name) {
                assert.equal(name, 'Hello hanako');
                done();
            });
        });
    });
})
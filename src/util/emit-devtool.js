/**
 * @file 给 devtool 发通知消息
 * @author errorrik(errorrik@gmail.com)
 */

var san = require('../main');

// #[begin] devtool
/**
 * 给 devtool 发通知消息
 *
 * @param {string} name 消息名称
 * @param {*} arg 消息参数
 */
function emitDevTool(name, arg) {
    if (san.debug && root.__san_devtool__) {
        root.__san_devtool__.emit(name, arg);
    }
}
// #[end]

exports = module.exports = emitDevTool;
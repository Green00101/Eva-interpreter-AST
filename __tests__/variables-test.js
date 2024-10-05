const testUtil = require("./test-util");

module.exports = (eva) => {
    testUtil.test(eva, `(var x 10)`, 10);
    testUtil.test(eva, `x`, 10);
    testUtil.test(eva, `(var y 100)`, 100);
    testUtil.test(eva, `y`, 100);
    testUtil.test(eva, `(var isUser true)`, true);
    testUtil.test(eva, `VERSION`, `1.0`);
    testUtil.test(eva, `(var z (* 2 2))`, 4);
    testUtil.test(eva, `z`, 4);
}
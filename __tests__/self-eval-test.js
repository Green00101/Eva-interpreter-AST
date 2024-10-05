const testUtil = require("./test-util");

module.exports = (eva) => {
    testUtil.test(eva, `1`, 1);
    testUtil.test(eva, `"hello"`, 'hello');
}


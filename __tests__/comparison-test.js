const testUtil = require("./test-util");

module.exports = (eva) => {
    testUtil.test(eva, `(< 1 5)`, true);
    testUtil.test(eva, `(<= 5 5)`, true);
    testUtil.test(eva, `(<= 6 5)`, false);
    testUtil.test(eva, `(> (- 3 2) 5)`, false);
    testUtil.test(eva, `(>= (- 7 2) 5)`, true);
    testUtil.test(eva, `(== (- 7 2) 5)`, true);
}
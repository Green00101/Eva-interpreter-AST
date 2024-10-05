const testUtil = require("./test-util");

module.exports = (eva) => {
    testUtil.test(eva, `(+ 1 5)`, 6);
    testUtil.test(eva, `(+ (+ 3 2) 5)`, 10);
    testUtil.test(eva, `(* 2 5)`, 10);

    testUtil.test(eva, `(< 1 5)`, true);
    testUtil.test(eva, `(<= 5 5)`, true);
    testUtil.test(eva, `(> (- 3 2) 5)`, false);
}
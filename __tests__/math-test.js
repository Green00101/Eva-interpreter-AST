const testUtil = require("./test-util");

module.exports = (eva) => {
    // Addition
    testUtil.test(eva, `(+ 1 5)`, 6);
    testUtil.test(eva, `(+ (+ 3 2) 5)`, 10);
    // Subtraction
    testUtil.test(eva, `(- 1 5)`, -4);
    testUtil.test(eva, `(+ (- 3 2) 5)`, 6);
    // Multiplication
    testUtil.test(eva, `(* 2 5)`, 10);
    testUtil.test(eva, `(+ (* 3 2) 5)`, 11);
    // Division
    testUtil.test(eva, `(/ 4 2)`, 2);
    testUtil.test(eva, `(+ (/ 4 2) 5)`, 7);
    // Modulo
    testUtil.test(eva, `(% 4 2)`, 0);
    testUtil.test(eva, `(% 5 2)`, 1);
    testUtil.test(eva, `(+ (% 5 2) 5)`, 6);
}
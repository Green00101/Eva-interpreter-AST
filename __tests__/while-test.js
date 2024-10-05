const testUtil = require("./test-util");

/**
 * (while
 *     <condition>
 *     <Exp>
 * )
 * */
module.exports = (eva) => {
    testUtil.test(
        eva,
        `(begin
            (var counter 0)
            (var result 0)
            (while (< counter 10)
                (begin
                    (set result (+ result 1))
                    (set counter (+ counter 1))
                )
            )
            result
        )`,
        10);
};
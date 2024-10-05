const testUtil = require('./test-util');

module.exports = (eva) => {
    testUtil.test(
        eva,
        `
        (begin
          (var result 0)
          (for (var i 0) (< i 5) (set i (+ i 1))
            (set result (+ result i)))
          result
        )
        `,
        10
    );
};
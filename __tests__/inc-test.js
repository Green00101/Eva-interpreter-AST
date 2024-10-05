const testUtil = require('./test-util');

module.exports = (eva) => {
    testUtil.test(
        eva,
        `
        (begin
          (var result 0)
          (++ result)
          result
        )
        `,
        1);
};
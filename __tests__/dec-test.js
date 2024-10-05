const testUtil = require('./test-util');

module.exports = (eva) => {
    testUtil.test(
        eva,
        `
        (begin
          (var result 1)
          (-- result)
          result
        )
        `,
        0);
};
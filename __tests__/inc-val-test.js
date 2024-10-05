const testUtil = require('./test-util');

module.exports = (eva) => {
    testUtil.test(
        eva,
        `
        (begin
          (var result 0)
          (+= result 5)
          result
        )
        `,
        5);
};
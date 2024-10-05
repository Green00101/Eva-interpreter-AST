const testUtil = require('./test-util');

module.exports = (eva) => {
    testUtil.test(
        eva,
        `
        (begin
          (var result 7)
          (-= result 5)
          result
        )
        `,
        2);
};
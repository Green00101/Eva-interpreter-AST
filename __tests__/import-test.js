const testUtil = require('./test-util');

module.exports = (eva) => {
    testUtil.test(
        eva,
        `
        (import Math)
        ((prop Math abs) (- 10))
        `,
        10
    );
    testUtil.test(
        eva,
        `
        (var abs (prop Math abs))
        (abs (- 10))
        `,
        10
    );
    testUtil.test(
        eva,
        `
        (prop Math MAX_VALUE)
        `,
        1000
    );
};
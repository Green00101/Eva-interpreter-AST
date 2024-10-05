const testUtil = require('./test-util');

module.exports = (eva) => {

    testUtil.test(
        eva,
        `
        (module Math
          (begin
            (def abs (value)
              (if (< value 0)
                  (- value)
                  value))
            (def square (x)
              (* x x))
            (var MAX_VALUE 1000)
          )
        )
        ((prop Math abs) (- 10))
        `,
        10);

    testUtil.test(
        eva,
        `
        (var abs (prop Math abs))
        (abs (- 10))
        `,
        10);

    testUtil.test(
        eva,
        `
        (prop Math MAX_VALUE)
        `,
        1000);
};
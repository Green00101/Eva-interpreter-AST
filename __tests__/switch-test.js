const testUtil = require('./test-util');

module.exports = (eva) => {
    // Pass lambda as a callback
    testUtil.test(
        eva,
        `
        (begin
          (var x 10)
          (switch ((== x 10) 100)
                  ((> x 10) 200)
                  (else     300))
        )
        `,
        100
    );
};
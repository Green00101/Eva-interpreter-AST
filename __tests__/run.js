const Eva = require("../eva");

const tests = [
    require("./self-eval-test"),
    require("./math-test"),
    require("./comparison-test"),
    require("./variables-test"),
    require("./blocks-test"),
    require("./if-test"),
    require("./while-test"),
    require("./built-in-function-test"),
    require("./user-defined-function-test"),
    require("./lambda-function-test"),
    require("./switch-test"),
    require("./for-test"),
    require("./inc-test"),
    require("./inc-val-test"),
    require("./dec-test"),
    require("./dec-val-test"),
    require("./class-test"),
    require("./module-test")
];

const eva = new Eva();

tests.forEach(test => test(eva));

console.log("All assertions passed!");
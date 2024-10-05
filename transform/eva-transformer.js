/**
 * AST Transformer
 * */
class Transformer {
    /**
     * Translates a 'def' expression into variable declaration with lambda
     * */
    transformDefToLambda(defExp) {
        const [_tag, name, params, body] = defExp;
        return ['var', name, ['lambda', params, body]];
    }

    /**
     * Translates a 'switch' statement into nested if statement
     * */
    transformSwitchToIf(switchExp) {
        const [_tag, ...cases] = switchExp;
        const ifExp = ['if', null, null, null];

        let current = ifExp;
        for (let i = 0; i < cases.length - 1; i++) {
            const [currentCond, currentBlock] = cases[i];
            current[1] = currentCond;
            current[2] = currentBlock;

            const next = cases[i + 1];
            const [nextCond, nextBlock] = next;

            current[3] = nextCond === 'else'
                ? nextBlock
                : ['if'];

            current = current[3];
        }

        return ifExp;
    }

    /**
     * Translates 'for loop' into while loop
     * */
    transformForToWhile(forExp) {
        const [_tag, init, condition, modifier, exp] = forExp;
        return ['begin', init, ['while', condition, ['begin', exp, modifier]]];
    }

    transformIncToSet(incrExp) {
        const [_tag, varName] = incrExp;
        return ['set', varName, ['+', varName, 1]];
    }

    transformIncValToSet(incExp) {
        const [_tag, varName, value] = incExp;
        return ['set', varName, ['+', varName, value]];
    }

    transformDecToSet(decExp) {
        const [_tag, varName] = decExp;
        return ['set', varName, ['-', varName, 1]];
    }

    transformDecValToSet(decExp) {
        const [_tag, varName, value] = decExp;
        return ['set', varName, ['-', varName, value]];
    }
}

module.exports = Transformer;
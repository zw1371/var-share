const assert = require('assert');
const getVarCodeHintList = require('../../src/varcode-hint');

suite('var-code-hint Test Suite', () => {

	test('if input is not a declaration statement, return empty list', () => {
                let string = 'window.alert';

                let hints = getVarCodeHintList(string);

                assert.equal(0, hints.length);
	});

    test('if input is a declaration statement, return a list include one element', () => {
        let string = 'window.alert; var he';

        let hints = getVarCodeHintList(string);

        assert.equal(1, hints.length);
});
});

const assert = require('assert');
const extractVarname = require('../../src/vardata-generate/varname-extract');


suite('var-data-generate Test Suite', () => {

	test('input a declaration statement which include a name, return a list which include that name', () => {
                let string = 'var tea ';

                let varnames = extractVarname(string);

                assert.equal(1, varnames.length);
                assert.equal(true, varnames.includes('tea'));
	});
});

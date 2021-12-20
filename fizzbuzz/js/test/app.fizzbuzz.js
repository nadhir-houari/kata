const assert = require('assert');
const fizzbuzz = require('../src/fizzbuzz');

describe('Should return only numbers', () => {
    it('should return [1, 2]', () => {
        assert.deepStrictEqual(fizzbuzz.play(2), [1, 2]);
    });
});


describe('Should return only numbers', () => {
    it('should return [1, 2, fizz]', () => {
        assert.deepStrictEqual(fizzbuzz.play(3), [1, 2, 'fizz']);
    });
});

describe('Should return only numbers', () => {
    it('should return [1, 2, fizz, 4, buzz]', () => {
        assert.deepStrictEqual(fizzbuzz.play(5), [1, 2, 'fizz', 4, 'buzz']);
    });
});
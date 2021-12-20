"use strict";

var assert = require('assert');

var fizzbuzz = require('../src/fizzbuzz');

describe('Should return only numbers', function () {
  it('should return [1, 2]', function () {
    assert.deepStrictEqual(fizzbuzz.play(2), [1, 3]);
  });
});
/* eslint-env node, mocha */
const assert = require('chai').assert;
const Adder= require('../src/Adder.js');


describe('Test about Adder', () => {
    let myAdder = null;
    beforeEach(() => {
      myAdder = new Adder("Adder");
    });

    it('an adder is identificable', () => {
        assert.equal(myAdder.name, "Adder");
        assert.isNotNull(myAdder.id);
    });
});

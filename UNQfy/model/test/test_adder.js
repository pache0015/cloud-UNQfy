/* eslint-env node, mocha */
const assert = require('chai').assert;
const Adder = require('../src/EntityManager.js');
const {AlreadyExist} = require('../src/exceptions.js');
const Identificable = require('../src/Identificable.js');


describe('Test about Adder', () => {
    let myAdder = null;
    beforeEach(() => {
      myAdder = new Adder("Adder");
    });

    it('belongsElement return false when the element isnot in the adder', () => {
      const anIdentificable = new Identificable("");
      assert.isFalse(myAdder.belongsElement(anIdentificable));
    });

    it('belongsElement return true when the element is in the adder', () => {
      const anIdentificable = new Identificable("");
      myAdder.addElement(anIdentificable);
      assert.isTrue(myAdder.belongsElement(anIdentificable));
    });

    it('an adder is identificable', () => {
        assert.equal(myAdder.name, "Adder");
        assert.isNotNull(myAdder.id);
    });

    it('should add a element', () => {
      const anIdentificable = new Identificable("");
      myAdder.addElement(anIdentificable);
      assert.isTrue(myAdder.belongsElement(anIdentificable));
    });

    it('add a element when adder already it throw a AlreadyExist', () => {
      const anIdentificable = new Identificable("");
      myAdder.addElement(anIdentificable);
      const exercise = () => myAdder.addElement(anIdentificable);
      assert.throws(exercise, AlreadyExist);
    });

  it('add identificable & remove element', () => {
    const anIdentificable = new Identificable("");
    myAdder.addElement(anIdentificable);
    myAdder.removeElement(anIdentificable);
    assert.isFalse(myAdder.belongsElement(anIdentificable));
  });

});

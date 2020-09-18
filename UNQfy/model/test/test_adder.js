/* eslint-env node, mocha */
const assert = require('chai').assert;
const {Adder, NotFoundElement, AlreadyExist} = require('../src/Adder.js');
const Identificable = require('../src/Identificable.js');


describe('Test about Adder', () => {
  class CustomException extends Error{
    constructor(){
      super("");
      this.name = "CustomException";
    }
  }
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

    it('remove a element when adder has none throw a NotFoundElement', () => {
      const anIdentificable = new Identificable("");
      const exercise = () => myAdder.removeElements(anIdentificable);
      assert.throws(exercise, NotFoundElement);
    });

    it('remove a element when adder has none throw a CustomException in the argment', () => {
      const anIdentificable = new Identificable("");
      const exercise = () => myAdder.removeElements(anIdentificable, new CustomException());
      assert.throws(exercise, CustomException);
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

    it('radd a element when adder already it throw a  a CustomException in the argment', () => {
      const anIdentificable = new Identificable("");
      myAdder.addElement(anIdentificable);
      const exercise = () => myAdder.addElement(anIdentificable, new CustomException());
      assert.throws(exercise, CustomException);
    });


});

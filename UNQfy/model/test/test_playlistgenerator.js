/* eslint-env node, mocha */

const assert = require('chai').assert;
const PartialSearcher = require('../src/PartialSearcher.js');

class DummyIdentificable{
  constructor(aName){
    this.name = aName;
  }
}

describe('Search entities with a partial name', () => {
  let my_search = null;
  let uniq_identificable = null;
  let list_with_a_uniq_identificable = null;
  let list_witH_a_uniq_identificable_with_others = null;
  let list_witH_diferent_identificables = null;

  beforeEach(() => {
    my_search = new PartialSearcher();
    uniq_identificable = new DummyIdentificable("Sarasa");
    list_with_a_uniq_identificable = [uniq_identificable];
    list_witH_a_uniq_identificable_with_others = [uniq_identificable, new DummyIdentificable("A"), new DummyIdentificable("B"), new DummyIdentificable("C"), new DummyIdentificable("D")]
    list_witH_diferent_identificables = [new DummyIdentificable("Pepe"), new DummyIdentificable("Pepe y sus amigos"), new DummyIdentificable("Regalame un sentimiento"), new DummyIdentificable("Pepemania")]
  });

  it('should return a empty list when search in a empty list', () => {
    const searchInAEmptyList = my_search.searchAllWithPartialName([],"Sarasa");
    assert.lengthOf(searchInAEmptyList, 0);
  });

  it('should return a list with an unique object when the list has a uniq element and its name matchs exactly  with the argument', () => {
    const resultList = my_search.searchAllWithPartialName(list_with_a_uniq_identificable,"Sarasa");
    assert.lengthOf(resultList, 1);
    assert.isTrue(resultList.includes(uniq_identificable));
  });

  it('should return a list with an unique object when the list has a uniq element and its name matchs exactly, but in UpperCase  ', () => {
    const resultList = my_search.searchAllWithPartialName(list_with_a_uniq_identificable,"SARASA");
    assert.lengthOf(resultList, 1);
    assert.isTrue(resultList.includes(uniq_identificable));
  });

  it('should return a list with an unique object when the list of the argument has a unique object when the name matchs exactly but in LowerCase  ', () => {
    const resultList = my_search.searchAllWithPartialName(list_with_a_uniq_identificable,"sarasa");
    assert.lengthOf(resultList, 1);
    assert.isTrue(resultList.includes(uniq_identificable));
  });

  it('should return a list with an unique object when the list of the argument has a unique object when argument is its partial name  ', () => {
    const resultList = my_search.searchAllWithPartialName(list_with_a_uniq_identificable,"sarasa");
    assert.lengthOf(resultList, 1);
    assert.isTrue(resultList.includes(uniq_identificable));
  });

  it('should return a list with an unique object when the list of the argument has a unique object when argument is its partial name between other Identificables with different name', () => {
    const resultList = my_search.searchAllWithPartialName(list_witH_a_uniq_identificable_with_others,"Saras")
    assert.lengthOf(resultList, 1);
    assert.isTrue(resultList.includes(uniq_identificable));
  });

  it('should return a list with an unique object when the list of the argument has a unique object when argument is its partial name in UppererCase, between other Identificables with different name', () => {
    const resultList = my_search.searchAllWithPartialName(list_witH_a_uniq_identificable_with_others,"SARA")
    assert.lengthOf(resultList, 1);
    assert.isTrue(resultList.includes(uniq_identificable));
  });

  it('should return a list with an unique object when the list of the argument has a unique object when argument is its partial name in LowerCase, between other Identificables with different name', () => {
    const resultList = my_search.searchAllWithPartialName(list_witH_a_uniq_identificable_with_others,"saras")
    assert.lengthOf(resultList, 1);
    assert.isTrue(resultList.includes(uniq_identificable));
  });

  it('should return a empty list when the object is not in the list of the argument', () => {
    const resultList = my_search.searchAllWithPartialName(list_witH_diferent_identificables,"saras")
    assert.lengthOf(resultList, 0);
  });

  it('should return a list with 3 objects when the partial name matchs with the name of 3 identificables', () => {
    const resultList = my_search.searchAllWithPartialName(list_witH_diferent_identificables,"Pepe")
    assert.lengthOf(resultList, 3);
  });

});

/* eslint-env node, mocha */

const assert = require('chai').assert;
const PlayListGenerator = require('../src/PlayListGenerator.js');


describe('Generation of playlists', () => {
  let myPlayListGenerator = null;
  let myExampleException = null;

  beforeEach(() => {
    myPlayListGenerator = new PlayListGenerator();
    myExampleException = new Error("Asd");
  });

  it('should return a empty list when search in a empty list', () => {

  });

});
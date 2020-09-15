/* eslint-env node, mocha */
const assert = require('chai').assert;
const Artist = require('../src/Artist.js')
describe('IDGenerator', () => {
    it('x', () => {
        identificable_artista = new Artist("Juan", "Quiaca")
        assert.equal(identificable_artista.id, 0);
    });
    it('x1', () => {
        identificable_artista = new Artist("Pepe", "QuiacaSur")
        assert.equal(identificable_artista.id, 1);
    });
});
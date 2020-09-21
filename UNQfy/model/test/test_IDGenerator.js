/* eslint-env node, mocha */
const assert = require('chai').assert;
const Artist = require('../src/Artist.js');

describe('IDGenerator', () => {
    let identificable_artista = null;
    it('x', () => {
        identificable_artista = new Artist("Juan", "Quiaca")
        assert.isNotNull(identificable_artista.id);
    });
    it('x1', () => {
        identificable_artista = new Artist("Pepe", "QuiacaSur")
        assert.isNotNull(identificable_artista.id);
    });
});
/* eslint-env node, mocha */
const assert = require('chai').assert;
const Artist = require('../src/Artist.js');

describe('IDGenerator', () => {
    const identificable_artista0 = new Artist("Juan", "Quiaca");
    const identificable_artista1 = new Artist("Pepe", "QuiacaSur");

    it('x', () => {
        assert.isNotNull(identificable_artista0.id);
    });
    it('x1', () => {
        assert.isNotNull(identificable_artista1.id);
    });
    it('x1', () => {
        assert.isTrue(identificable_artista0.id < identificable_artista1.id);
    });
});
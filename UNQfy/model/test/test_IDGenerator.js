/* eslint-env node, mocha */
const assert = require('chai').assert;
const Artist = require('../src/Artist.js');

describe('IDGenerator', () => {
    const identificable_artista0 = new Artist("Juan", "Quiaca");
    const identificable_artista1 = new Artist("Pepe", "QuiacaSur");

    it('to intance an identificable has a ID', () => {
        assert.isNotNull(identificable_artista0.id);
        assert.isNumber(identificable_artista0.id);
    });
    it('the ID of identificables is incremental', () => {
        assert.isTrue(identificable_artista0.id < identificable_artista1.id);
    });
});
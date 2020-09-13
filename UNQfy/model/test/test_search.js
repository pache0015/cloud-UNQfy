/* eslint-env node, mocha */

const assert = require('chai').assert;
const Searcher = require('../src/Searcher.js');


describe('Search entities with a partial name', () => {
  beforeEach(() => {
    my_search = new Searcher();
  });

  it('should return a empty list when search in a empty list', () => {
    let searchInAEmptyList = my_search.searchAllWithPartialName([],"Sarasa",)
    assert.lengthOf(searchInAEmptyList, 0);
  });

  it('', () => {
    let list_with_uniq_identificable = [new ("Sarasa")]
    let searchInAEmptyList = my_search.searchAllWithPartialName([],"Sarasa",)
    assert.lengthOf(searchInAEmptyList, 0);
  });


  it('', () => {
    let list_with_uniq_identificable = [new ("SARASA")]
    let searchInAEmptyList = my_search.searchAllWithPartialName([],"Sarasa",)
    assert.lengthOf(searchInAEmptyList, 0);
  });

  it('', () => {
    let list_with_uniq_identificable = [new ("sarasa")]
    let searchInAEmptyList = my_search.searchAllWithPartialName([],"Sarasa",)
    assert.lengthOf(searchInAEmptyList, 0);
  });

  it('', () => {
    let list_with_uniq_identificable = [new ("Sarasa y sus amigos")]
    let searchInAEmptyList = my_search.searchAllWithPartialName([],"Sarasa",)
    assert.lengthOf(searchInAEmptyList, 0);
  });


  it('', () => {
    let list_with_uniq_identificable = [new ("Sarasa y sus amigos")]
    let searchInAEmptyList = my_search.searchAllWithPartialName([],"Sarasa",)
    assert.lengthOf(searchInAEmptyList, 0);
  });

 it('', () => {
    let list_with_uniq_identificable = [new ("Sarasa y sus amigos")]
    let searchInAEmptyList = my_search.searchAllWithPartialName([],"Sarasa",)
    assert.lengthOf(searchInAEmptyList, 0);
  });
});

//    assert.equal(track.name, 'Welcome to the jungle');
//    assert.strictEqual(track.duration, 200);
//    assert.equal(track.genres.includes('rock'), true);
//    assert.equal(track.genres.includes('hard rock'), true);
//    assert.lengthOf(track.genres, 2);
//  });

//  it('should find different things by name', () => {
//    const artist1 = createAndAddArtist(unqfy, 'Guns n\' Roses', 'USA');
//    const album1 = createAndAddAlbum(unqfy, artist1.id, 'Roses Album', 1987);
//    const track = createAndAddTrack(unqfy, album1.id, 'Roses track', 200, ['pop', 'movie']);
//    const playlist = unqfy.createPlaylist('Roses playlist', ['pop'], 1400);
//
//    const results = unqfy.searchByName('Roses');
//    assert.deepEqual(results, {
//      artists: [artist1],
//      albums: [album1],
//      tracks: [track],
//      playlists: [playlist],
//    });
//  });
//
//  it('should get all tracks matching genres', () => {
//    const artist1 = createAndAddArtist(unqfy, 'Guns n\' Roses', 'USA');
//    const album1 = createAndAddAlbum(unqfy, artist1.id, 'Appetite for Destruction', 1987);
//    const t0 = createAndAddTrack(unqfy, album1.id, 'Welcome to the jungle', 200, ['rock', 'hard rock', 'movie']);
//    const t1 = createAndAddTrack(unqfy, album1.id, 'Sweet Child o\' Mine', 500, ['rock', 'hard rock', 'pop', 'movie']);
//
//    const artist2 = createAndAddArtist(unqfy, 'Michael Jackson', 'USA');
//    const album2 = createAndAddAlbum(unqfy, artist2.id, 'Thriller', 1987);
//    const t2 = createAndAddTrack(unqfy, album2.id, 'Trhiller', 200, ['pop', 'movie']);
//    createAndAddTrack(unqfy, album2.id, 'Another song', 500, ['classic']);
//    const t3 = createAndAddTrack(unqfy, album2.id, 'Another song II', 500, ['movie']);
//
//    const tracksMatching = unqfy.getTracksMatchingGenres(['pop', 'movie']);
//
//    // assert.equal(tracks.matching.constructor.name, Array);
//    assert.isArray(tracksMatching);
//    assert.lengthOf(tracksMatching, 4);
//    assert.equal(tracksMatching.includes(t0), true);
//    assert.equal(tracksMatching.includes(t1), true);
//    assert.equal(tracksMatching.includes(t2), true);
//    assert.equal(tracksMatching.includes(t3), true);
//  });
//
//  it('should get all tracks matching artist', () => {
//    const artist = createAndAddArtist(unqfy, 'Guns n\' Roses', 'USA');
//    const album = createAndAddAlbum(unqfy, artist.id, 'Appetite for Destruction', 1987);
//    const t1 = createAndAddTrack(unqfy, album.id, 'Welcome to the jungle', 200, ['rock', 'hard rock']);
//    const t2 = createAndAddTrack(unqfy, album.id, 'It\'s so easy', 200, ['rock', 'hard rock']);
//
//    const album2 = createAndAddAlbum(unqfy, artist.id, 'Use Your Illusion I', 1992);
//    const t3 = createAndAddTrack(unqfy, album2.id, 'Don\'t Cry', 500, ['rock', 'hard rock']);
//
//    const artist2 = createAndAddArtist(unqfy, 'Michael Jackson', 'USA');
//    const album3 = createAndAddAlbum(unqfy, artist2.id, 'Thriller', 1987);
//    createAndAddTrack(unqfy, album3.id, 'Thriller', 200, ['pop', 'movie']);
//    createAndAddTrack(unqfy, album3.id, 'Another song', 500, ['classic']);
//    createAndAddTrack(unqfy, album3.id, 'Another song II', 500, ['movie']);
//
//    const matchingTracks = unqfy.getTracksMatchingArtist(artist.name);
//
//    assert.isArray(matchingTracks);
//    assert.lengthOf(matchingTracks, 3);
//    assert.isTrue(matchingTracks.includes(t1));
//    assert.isTrue(matchingTracks.includes(t2));
//    assert.isTrue(matchingTracks.includes(t3));
//  });
//});
//
//describe('Playlist Creation and properties', () => {
//  let unqfy = null;
//
//  beforeEach(() => {
//    unqfy = new libunqfy.UNQfy();
//  });
//
//  it('should create a playlist as requested', () => {
//    const artist = createAndAddArtist(unqfy, 'Guns n\' Roses', 'USA');
//    const album = createAndAddAlbum(unqfy, artist.id, 'Appetite for Destruction', 1987);
//    const t1 = createAndAddTrack(unqfy, album.id, 'Welcome to the jungle', 200, ['rock', 'hard rock', 'movie']);
//    createAndAddTrack(unqfy, album.id, 'Sweet Child o\' Mine', 1500, ['rock', 'hard rock', 'pop', 'movie']);
//
//    const artist2 = createAndAddArtist(unqfy, 'Michael Jackson', 'USA');
//    const album2 = createAndAddAlbum(unqfy, artist2.id, 'Thriller', 1987);
//    const t2 = createAndAddTrack(unqfy, album2.id, 'Thriller', 200, ['pop', 'movie']);
//    const t3 = createAndAddTrack(unqfy, album2.id, 'Another song', 500, ['pop']);
//    const t4 = createAndAddTrack(unqfy, album2.id, 'Another song II', 500, ['pop']);
//
//    const playlist = unqfy.createPlaylist('my playlist', ['pop', 'rock'], 1400);
//
//    assert.equal(playlist.name, 'my playlist');
//    assert.isAtMost(playlist.duration(), 1400);
//    assert.isTrue(playlist.hasTrack(t1));
//    assert.isTrue(playlist.hasTrack(t2));
//    assert.isTrue(playlist.hasTrack(t3));
//    assert.isTrue(playlist.hasTrack(t4));
//    assert.lengthOf(playlist.tracks, 4);
//  });


#!/bin/bash
cd ..

# id = 0
node main.js addArtist "Louis Amstrong" "USA"

# id = 1
node main.js addAlbum 0 "Vida" 2010

# id = 2
node main.js addTrack 1 "Maquiavelico" 248 Rock Rap

# id = 4
node main.js createPlaylist "Insomio" 3000 Rap

# id = 6
node main.js addUser Pache0015


node main.js userListenTrack 6 3
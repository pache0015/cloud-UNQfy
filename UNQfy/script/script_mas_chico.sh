#!/bin/bash
cd ..

node main.js addArtist "Louis Amstrong" "USA"

node main.js addAlbum 0 "Vida" 2010

node main.js addTrack 1 "Maquiavelico" 248 Rock Rap

node main.js createPlaylist "Insomio" 3000 Rap
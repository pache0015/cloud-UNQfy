#!/bin/bash
cd ..

# ARTISTS >>>>>>>>>>>>>>>>>>>>>>>>>>><

node main.js addArtist "Louis Amstrong" "USA"
node main.js addArtist "Canserbero" "Venezuela"
node main.js addArtist "Led Zeppelin" "USA"
node main.js addArtist "Astor Piazzolla" "Argentina"


# ALBUMS >>>>>>>>>>>>>>>>>>>>>>>>>>><

node main.js addAlbum 0 "Vida" 2010
node main.js addAlbum 0 "Muerte" 2012
node main.js addAlbum 1 "Blue" 2006
node main.js addAlbum 2 "Greater hits" 1974
node main.js addAlbum 2 "A donde jugaran las niñas" 5 1997
node main.js addAlbum 3 "Piazzolla Project" 2006


# TRACKS: >>>>>>>>>>>>>>>>>>>>>>>>>>><


node main.js addTrack 1 "Maquiavelico" 248 Rock Rap
node main.js addTrack 1 "Es epico" 336 Rock Heavy Rap Clasico Rap
node main.js addTrack 1 "Advertencia" 262 Rock Heavy Clasico Rap
node main.js addTrack 1 "Paseo por el barrio" 334 Rock Pop Rap
node main.js addTrack 2 "Ciudad de piedra" 277 Rock Rap
node main.js addTrack 2 "Stop" 270 Rock Alternativo Rap
node main.js addTrack 2 "Jeremias" 171 Rock Clasico Rap
node main.js addTrack 2 "A name" 206 Rock
node main.js addTrack 3 "El hombre de la estrella" 202 Rock
node main.js addTrack 3 "El revelde" 224 Rock
node main.js addTrack 3 "El aparato" 198 Pop Alternativo
node main.js addTrack 3 "La ingrata" 212 Pop Jazz
node main.js addTrack 4 "Black Dog" 255 Clasico Heavy Rock
node main.js addTrack 4 "Since i have been loving you" 188 Pop Alternativo
node main.js addTrack 4 "Dazed and confused" 246 Pop Clasico
node main.js addTrack 4 "Adios nonino" 266 Blues Clasica


# PLAYLISTS  >>>>>>>>>>>>>>>>>>>>>>>>>>><

node main.js createPlaylist "Insomio" 3000 Rap
node main.js createPlaylist "Relaxing Music" 1400 Blues Clasica


# USERS  >>>>>>>>>>>>>>>>>>>>>>>>>>><

node main.js addUser Pache0015
node main.js addUser H

node main.js userListenTrack 1 3
node main.js userListenTrack 1 4
node main.js userListenTrack 2 1
node main.js userListenTrack 2 2
node main.js userListenTrack 2 3
node main.js userListenTrack 2 4

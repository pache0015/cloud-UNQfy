#!/bin/bash
cd ../model/api

# ARTISTS >>>>>>>>>>>>>>>>>>>>>>>>>>><

node main.js addArtist "Louis Amstrong" "USA"
node main.js addArtist "Canserbero" "Venezuela"
node main.js addArtist "Led Zeppelin" "USA"
node main.js addArtist "Astor Piazzolla" "Argentina"


#ALBUMS >>>>>>>>>>>>>>>>>>>>>>>>>>><

node main.js addAlbum 1 "Vida" 2010 #4
node main.js addAlbum 1 "Muerte" 2012 #5
node main.js addAlbum 0 "Blue" 2006 #6
node main.js addAlbum 2 "Greater hits" 1974 #7
node main.js addAlbum 2 "A donde jugaran las niñas" 1997 #8
node main.js addAlbum 3 "Piazzolla Project" 2006 #9


# TRACKS: >>>>>>>>>>>>>>>>>>>>>>>>>>><


node main.js addTrack 4 "Maquiavelico" 248 Rock Rap #10
node main.js addTrack 4 "Es epico" 336 Rock Heavy Rap Clasico Rap #11
node main.js addTrack 5 "Advertencia" 262 Rock Heavy Clasico Rap #12
node main.js addTrack 5 "Paseo por el barrio" 334 Rock Pop Rap #13
node main.js addTrack 5 "Ciudad de piedra" 277 Rock Rap #14
node main.js addTrack 4 "Stop" 270 Rock Alternativo Rap #15
node main.js addTrack 5 "Jeremias" 171 Rock Clasico Rap #16
node main.js addTrack 6 "A name" 206 Rock #17
node main.js addTrack 6 "El hombre de la estrella" 202 Rock  #18
node main.js addTrack 6 "El revelde" 224 Rock #19
node main.js addTrack 8 "El aparato" 198 Pop Alternativo #20
node main.js addTrack 8 "La ingrata" 212 Pop Jazz  #21
node main.js addTrack 7 "Black Dog" 255 Clasico Heavy Rock  #22
node main.js addTrack 7 "Since i have been loving you" 188 Pop Alternativo  #23
node main.js addTrack 7 "Dazed and confused" 246 Pop Clasico  #24
node main.js addTrack 9 "Adios nonino" 266 Blues Clasica  #25


# PLAYLISTS  >>>>>>>>>>>>>>>>>>>>>>>>>>><

#node main.js createPlaylist "Insomio" 3000 Rap  #26
#node main.js createPlaylist "Relaxing Music" 1400 Blues Clasica #27


# USERS  >>>>>>>>>>>>>>>>>>>>>>>>>>><

node main.js addUser Pache0015  #28
node main.js addUser H #29

node main.js userListenTrack 28 10
node main.js userListenTrack 28 11
node main.js userListenTrack 28 12
node main.js userListenTrack 29 10
node main.js userListenTrack 29 13
node main.js userListenTrack 29 14

#!/bin/bash
cd ../model/api

# ARTISTS >>>>>>>>>>>>>>>>>>>>>>>>>>><

node main.js addArtist "Louis Amstrong" "USA"
node main.js addArtist "Canserbero" "Venezuela"
node main.js addArtist "Led Zeppelin" "USA"
node main.js addArtist "Astor Piazzolla" "Argentina"


#ALBUMS >>>>>>>>>>>>>>>>>>>>>>>>>>><

node main.js addAlbum 1 "Vida" 2010 #5
node main.js addAlbum 1 "Muerte" 2012 #6
node main.js addAlbum 1 "Blue" 2006 #7
node main.js addAlbum 2 "Greater hits" 1974 #8
node main.js addAlbum 3 "A donde jugaran las niñas" 1997 #9
node main.js addAlbum 3 "Piazzolla Project" 2006 #10


# TRACKS: >>>>>>>>>>>>>>>>>>>>>>>>>>><


node main.js addTrack 5 "Maquiavelico" 248 Rock Rap #11
node main.js addTrack 5 "Es epico" 336 Rock Heavy Rap Clasico Rap #12
node main.js addTrack 6 "Advertencia" 262 Rock Heavy Clasico Rap #13
node main.js addTrack 6 "Paseo por el barrio" 334 Rock Pop Rap #14
node main.js addTrack 6 "Ciudad de piedra" 277 Rock Rap #15
node main.js addTrack 5 "Stop" 270 Rock Alternativo Rap #16
node main.js addTrack 6 "Jeremias" 171 Rock Clasico Rap #17
node main.js addTrack 7 "A name" 206 Rock #18
node main.js addTrack 7 "El hombre de la estrella" 202 Rock  #19
node main.js addTrack 7 "El revelde" 224 Rock #20
node main.js addTrack 9 "El aparato" 198 Pop Alternativo #21
node main.js addTrack 9 "La ingrata" 212 Pop Jazz  #22
node main.js addTrack 8 "Black Dog" 255 Clasico Heavy Rock  #23
node main.js addTrack 8 "Since i have been loving you" 188 Pop Alternativo  #24
node main.js addTrack 8 "Dazed and confused" 246 Pop Clasico  #25
node main.js addTrack 10 "Adios nonino" 266 Blues Clasica  #26
node main.js addTrack 8 "Stairway to heaven" 420 Rock #27

# PLAYLISTS  >>>>>>>>>>>>>>>>>>>>>>>>>>><

node main.js createPlaylist "Insomio" 3000 Rap  #28
node main.js createPlaylist "Relaxing Music" 1400 Blues Clasica #29


# USERS  >>>>>>>>>>>>>>>>>>>>>>>>>>><

node main.js addUser Pache0015  #30
node main.js addUser H #31

node main.js userListenTrack 30 10
node main.js userListenTrack 30 11
node main.js userListenTrack 30 12
node main.js userListenTrack 31 10
node main.js userListenTrack 31 13
node main.js userListenTrack 31 14


node main.js addArtist "Radiohead" "USA"
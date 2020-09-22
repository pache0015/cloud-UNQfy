#!/bin/bash
cd ..;




# ARTISTS >>>>>>>>>>>>>>>>>>>>>>>>>>><

node main.js addArtist "Canserbero" "Venezuela"
node main.js addArtist "Louis Amstrong" "USA"
node main.js addArtist "Led Zeppelin" "USA"
node main.js addArtist "Astor Piazzolla" "Argentina"


# ALBUMS >>>>>>>>>>>>>>>>>>>>>>>>>>><

node main.js addAlbum 1 "Despedazado por mil partes" 1995
node main.js addAlbum 1"La Renga" 1 1998
node main.js addAlbum 2"Raro" 6 2006
node main.js addAlbum 2"Raro" 6 2006
node main.js addAlbum 3"F.A.M.E." 4 2018
node main.js addAlbum 3"A donde jugaran las niñas" 5 1997
node main.js addAlbum 4"Raro" 6 2006
node main.js addAlbum 4"Raro" 6 2006


# TRACKS: >>>>>>>>>>>>>>>>>>>>>>>>>>><


node main.js addTrack 1 "Desnudo para siempre" 248 Rock Heavy
node main.js addTrack 1 "A la carga mi rock and roll" 336 Rock Heavy
node main.js addTrack 1 "Cuando Vendran" 262 Rock Heavy
node main.js addTrack 1 "Psilosibe Mexicana" 1 334 Rock Pop
node main.js addTrack 2 "El final es en donde parti" 1 277 Rock
node main.js addTrack 2 "El terco" 2 270 Rock Alternativo
node main.js addTrack 2 "Tripa y corazon" 2 171 Rock Clasico
node main.js addTrack 2 "Bien alto" 2 206 Rock
node main.js addTrack 3 "El hombre de la estrella" 2 202 Rock
node main.js addTrack 3 "El revelde" 2 224 Rock
node main.js addTrack 3 "El aparato" 3 198 Pop Alternativo
node main.js addTrack 3 "La ingrata" 3 212 Pop Jazz
node main.js addTrack 4 "El ciclon" 3 255 Pop Alternativo
node main.js addTrack 4 "El borrego" 3 188 Pop Alternativo
node main.js addTrack 4 "Esa noche" 3 246 Pop Clasico
node main.js addTrack 4 "Genesis" 4 266 Pop Alternativo


# PLAYLISTS  >>>>>>>>>>>>>>>>>>>>>>>>>>><

node main.js generatePlaylist "Insomio" 3000 Rap
node main.js generatePlaylist "Relaxing Music" 1400 Blues Clasica


# USERS  >>>>>>>>>>>>>>>>>>>>>>>>>>><

node main.js addUser Pache0015
node main.js addUser H

node main.js userListenTrack 1 5
node main.js userListenTrack 1 2
node main.js userListenTrack 2 1
node main.js userListenTrack 2 2
node main.js userListenTrack 2 2
node main.js userListenTrack 2 2

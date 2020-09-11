# Seminario: Taller de Desarrollos de Servicios Web / Cloud Modernos - 2020 2s - 

## UNQfy
 
El presente software toma como motivación principal el [trabajo practico](https://docs.google.com/document/d/1Tfkl6l1_ly4FybquDjTqMHa5gdmrYgvvZpXZaneRFvA/edit#) de la materia *Seminario: Taller de Desarrollos de Servicios Web / Cloud Modernos*, el cual pide modelar (diseñar e implementar) una aplicación similar a Spotify, llamada **UNQfy** .  En esta, existe una gran cantidad de temas musicales (_tracks_)  los cuales siempre pertenecen a un _álbum_. Un _álbum_ tiene un sólo _artista_ como autor pero un _artista_ puede ser autor de múltiples _albumes_. Cada _track_ tiene asociado uno o más _géneros_, que son strings. También existen _playlists_, que son conjuntos de _tracks_ que pueden pertenecer a diferentes _álbumes_.
En **UNQfy**, además de las típicas operaciones de alta, baja y modificación de todos estos elementos (_tracks, albums, artistas_), es posible:

* Realizar búsquedas de temas. 
* Recuperar todas las canciones (_tracks_) que fueron interpretadas por un determinado _artista_, y todas las canciones que se correspondan con un determinado género.
* Autogenerar una _Playlist_ en base a una lista de géneros, es decir, rellenar una _playlist_ con canciones de determinados géneros y con una duración máxima.

Para operar con **UNQfy** vamos a usar, en principio, la línea de comando. Esto implica tener una serie de comandos que permitan alterar e inspeccionar el modelo de objetos de **UNQfy**.


### **Integrantes:**

| Integrante |   Legajo  |   email   | github user |
| :------:   | :-------: | :------:  |  :-------:  |
|  - **Facundo Pacheco** | Leg. ????? | [pache.facundo@gmail.com ](pache.facundo@gmail.com) | [pache0015](https://github.com/pache0015) |
|- **Horacio Valenzuela** | Leg. 38613 | [valenzuelahoracioe@gmail.com](valenzuelahoracioe@gmail.com) | [UnderABloodySky](https://github.com/UnderABloodySky) |

------


### Pre-requisitos 📋

Los *requisitos* necesarios para correr el proyecto:_

- [nodejs](https://nodejs.org/) >= v10.x. 
- [npm](https://www.npmjs.com/) >= 6.x.y 
- **FALTA?**



## Construido con 🛠️

Se menciona brevemente las herramientas que se utilizon para crear el proyecto_

- Se utilizó Programacion Orientada a Objetos para el desarrollo del mismo,
  definiendo clases con la sintaxis [ECMA Script 6](https://www.w3schools.com/Js/js_es6.asp).
- [Javascript](https://www.javascript.com/)
- [nodejs](https://nodejs.org/) - Para el back-end (Utilizamos la version 12.8.x).
**Falta?**


## Patrones utilizados:

| **Patrón** |   **Documentacion/Agentes**   |
| :------:   |            :-------:          |
| - [Facade](https://es.wikipedia.org/wiki/Facade_(patr%C3%B3n_de_dise%C3%B1o)): |                   |

**Falta**


### Instalación 🔧

Más allá de la instalación de los pre-requisitos, el proyecto no necesita de ninguna instalación previa. 


## Comenzando 🚀

Una vez clonado el repositorio, se interactúa con el programa desde la línea de comandos (*CLI*), para esto se debe contar con [`nodejs`](https://nodejs.org/) instalado y ejecutar `npm install` en una terminal desde la carpeta **falta**.

**Aclaración**: Todos los comandos se deben correr desde la carpeta *FALTA**




## Despliegue 📦

Ejecutar `npm test` para correr los tests del proyecto.




### Documentación de uso


A continuación se listan los comandos que acepta y cómo deben ser usados los mismos:

**tabla de contenidos**

Links a tipos de comandos:


- [Instanciadores](#Instanciadores)
- [Getters](#Getters)
- [Eliminadores](#Eliminadores)
- [Search & Print](#Search & Print)
- [Miscelaneos](#Miscelaneos)



### Instanciadores
**Aclaración A:** Al ingresar _tracks, álbumes_ y _artistas_, hay que tener en cuenta que para dar de alta, por ejemplo, un _álbum_ el _artista_ debe existir, y para agregar un _track_ el _álbum_ al que pertenece debe existir.  Si los mismos, no existen entonces se reporta en la consola que no se pudo completar dicha operación, indicando el error correspondiente.
**Aclaración B:** Todo dato ingresado debe ser válido. En caso contrario, se levantara la excepción correspondiente. 

1. **Agregar artista** 

  ```bash
  node main.js addArtist <aName> <aCountry>
  ```

  Reemplazar `aName`  por el nombre del artista y `aCountry` por el país del mismo.

2. **Agregar album**

  ```bash
  node main.js addAlbum <aName> <aArtistID> <aYear>
  ```

  Reemplazar `aName` por el nombre del _albúm_, `aArtistID` por el ID del _artista_ **autor** del mismo, `aYear` por su año de lanzamiento.

3. **Agregar track**

  ```bash
  node main.js addTrack <aAlbumID> <aName>  <aDuration> <genre1> <genre2> .. <genreN>
  ```

  Reemplazar `aAlbumID` por el ID de su _album, `aName` por el nombre del _track_, _, `aDuration` por la duración del mismo, y el resto de los argumentos, los géneros  (`genre1`, `genre2`, etc. Hasta el `genreN`).

**Aclaración:** Debe darse al menos un genero

4. **Agregar usuario**

  ```bash
  node main.js addUser <aNickname> 
  ```

  Reemplazar `aNickname` por el alías del _usuario_ a crear.

5. **Generar un playlist con duración máxima y de ciertos géneros**

  ```bash
  node main.js generatePlaylist <name> <maxDuration> <genre1> <genre2> .. <genreN>
  ```

  Reemplazar `aName` por el nombre del _playlist_, `aMaxDuration` por la duración máxima de la misma, y `genre1`, `genre2`,etc, hasta `genreN` para los posibles géneros para sus _tracks_.

------


#### Getters

1. **Obtener todxs lxs artistas de la aplicación**

  ```bash
  node main.js getArtists
  ```

2. **Obtener todos los albumes de unx artista dado**

  ```bash
  node main.js getAlbums <aArtistID>
  ```

  Reemplazar `aArtistID` por el id del _artista_ a buscar, que es autor de los _albumes_.

3. **Obtener todos los tracks de un album**

  ```bash
  node main.js getTracks <aAlbumID>
  ```

  Reemplazar `aAlbumID` por el ID del _album_ a buscar, donde pertenecen los _tracks_.

4. **Obtener todas las playlists**

  ```bash
  node main.js getPlaylists
  ```

5. **Obetener todxs lxs users**

  ```bash
  node main.js getUsers
  ```


6. **Obtener artista**

  ```bash
  node main.js getArtist <aArtistID>
  ```

  Reemplazar `aArtistID` por el id del _artista_ a buscar.

7. **Obtener album**

  ```bash
  node main.js getAlbum <aAlbumID>
  ```

  Reemplazar `aAlbumID` por el Id del _album_ a buscar.

8. **Obtener track**

  ```bash
  node main.js getTrack <aTrackID>
  ```

  Reemplazar `aTrackID` por el ID del _track_ a buscar.

9. **Obtener playlist**

  ```bash
  node main.js getPlaylist <aPlaylistID>
  ```

  Reemplazar `aPlaylistID` por el ID de la _playlist_ a buscar.

10. **Obtener user**

  ```bash
  node main.js getUser <aUserID>
  ```

  Reemplazar `aUserID` por el ID del _user_ a buscar.


11. **Buscar todos los tracks de un artista**

  ```bash
  node main.js getTracksMatchingArtist <aArtistID>
  ```

  Reemplazar `aArtistsID` por el ID del _artista_ a buscar.

12. **Buscar tracks por géneros**

  ```bash
  node main.js getTracksMatchingGenres <genre1> <genre2> .. <genreN>
  ```

  Reemplazar `genre1`, `genre2` y todos los siguientes argumentos por los géneros de todos los _tracks_ a buscar.

------

#### Eliminadores

1. **Eliminar artista**

  ```bash
  node main.js removeArtist <aArtistID>
  ```

  Reemplazar `aArtistID` por el id del _artista_.

2. **Elminar album**

  ```bash
  node main.js removeAlbum <aAlbumID>
  ```

  Reemplazar `aAlbumID` el iD del _album_.

3. **Eliminar track**

  ```bash
  node main.js removeTrack <aTrackID>
  ```

  Reemplazar `aTrackID` por el iD del _track_.

4. **Eliminar playlist**

  ```bash
  node main.js removePlaylist <aPlaylistID>
  ```

  Reemplazar `aPlaylistID` por el ID del _playlist_.

------

#### Search & Print:


1. **Buscar todas las entidades por nombre parcial (artistas, albumes, tracks y playlists)**

  ```bash
  node main.js searchAllWithPartialName <stringToSearch>
  ```

  Reemplazar `stringToSearch` por el nombre parcial a buscar.

2. **Buscar tracks por nombre parcial**

  ```bash
  node main.js searchTracksWithPartialName <stringToSearch>
  ```

  Reemplazar `stringToSearch` por el nombre parcial a buscar.

3. **Buscar albumes por nombre parcial**

  ```bash
  node main.js searchAlbumsWithPartialName <stringToSearch>
  ```

  Reemplazar `stringToSearch` por el nombre parcial a buscar.

4. **Buscar artistas por nombre parcial**

  ```bash
  node main.js searchArtistsWithPartialName <stringToSearch>
  ```

  Reemplazar `stringToSearch` por el nombre parcial a buscar.

5. **Buscar playlists por nombre parcial**

  ```bash
  node main.js searchPlaylistsWithPartialName <stringToSearch>
  ```

  Reemplazar `stringToSearch` por el nombre parcial a buscar.


------

#### Miscelaneos:

1. **Cantidad de veces que un user escuchó un track particular**

  ```bash
  node main.js timesUserListenedTrack <userId> <trackId>
  ```

  Reemplazar `userId` por el id del user, y `trackId` por el id del track.


2. **Top 3 tracks más escuchados de un artista**

  ```bash
  node main.js top3TracksFromArtist <artistId>
  ```

  Reemplazar `artistId` por el id del artista.


3. **Unx usuarix escucha un track**

  ```bash
  node main.js userListenTrack <aUserID> <aTrackID>
  ```

  Reemplazar `aUserID` por el ID del _usuario_, y `aTrackID` por el ID del _track_.

------

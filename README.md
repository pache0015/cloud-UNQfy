# Seminario: Taller de Desarrollos de Servicios Web / Cloud Modernos - 2020 2s - 

## UNQfy
 
El presente software toma como motivación principal el [trabajo practico](https://docs.google.com/document/d/1Tfkl6l1_ly4FybquDjTqMHa5gdmrYgvvZpXZaneRFvA/edit#) de la materia *Seminario: Taller de Desarrollos de Servicios Web / Cloud Modernos*, el cual pide modelar (diseñar e implementar) una aplicación similar a Spotify, llamada **UNQfy** .  En esta, existe una gran cantidad de temas musicales (_tracks_)  los cuales siempre pertenecen a un _álbum_. Un _álbum_ tiene un sólo _artista_ como autor pero un _artista_ puede ser autor de múltiples _albumes_. Cada _track_ tiene asociado uno o más _géneros_, que son strings. También existen _playlists_, que son conjuntos de _tracks_ que pueden pertenecer a diferentes _álbumes_.
En **UNQfy**, además de las típicas operaciones de alta, baja y modificación de todos estos elementos (_tracks, albums, artistas_), es posible:

* Realizar búsquedas de temas. 
* Recuperar todas las canciones (_tracks_) que fueron interpretadas por un determinado _artista_, y todas las canciones que se correspondan con un determinado género.
* Autogenerar una _Playlist_ en base a una lista de géneros, es decir, rellenar una _playlist_ con canciones de determinados géneros y con una duración máxima.

Para operar con **UNQfy** vamos a usar, en principio, la línea de comando. Posteriormente se explican los detalles, pero a grandes rasgos implica tener una serie de comandos que permitan alterar e inspeccionar el modelo de objetos de **UNQfy**.


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

- Se utilizó Programacion Orientada a Objetos para el desarrollo del mismo.
- [Javascript ES6](https://www.w3schools.com/Js/js_es6.asp)
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


### Instanciadores
**Aclaración A:** Al ingresar _tracks, álbumes_ y _artistas_, hay que tener en cuenta que para dar de alta, por ejemplo, un _álbum_ el _artista_ debe existir, y para agregar un _track_ el _álbum_ al que pertenece debe existir.  Si no existen reportan en la consola que no se pudo completar la operación, indicando el error correspondiente.
**Aclaración B:** Lo sdatos deben ser validos. COnsiderando valido,como:
    **Falta listar reglas**
* Una regla
* Dos reglas


1. **Agregar artista** 

  ```bash
  node main.js addArtist <aName> <aCountry> 
  ```

  Reemplazar `aName` por el nombre del artista y `aCountry` por el país del mismo.

2. **Agregar album**

  ```bash
  node main.js addAlbum <aName> <aArtistID> <aYear>
  ```

  Reemplazar `aName` por el nombre del _albúm_, `aArtistID` por el ID del _artista_ **autor** del mismo, `aYear` por su año de lanzamiento.

3. **Agregar track**

  ```bash
  node main.js addTrack <aName> <aAlbumID> <aDuration> <genre1> <genre2> .. <genreN>
  ```

  Reemplazar `aName` por el nombre del _track_, `aAlbumID` por el ID de su _album_, `aDuration` por la duración del mismo, y el resto de los argumentos, los géneros  (`genre1`, `genre2`, etc. Hasta el `genreN`).

**Aclaración:** Debe darse al menos un genero


4. **Agregar usuario**

  ```bash
  node main.js addUser <aName> 
  ```

  Reemplazar `aName` por el nombre del _usuario_ a crear.

------

#### Eliminadores

- **Eliminar artista**

  ```bash
  node main.js deleteArtist <aArtistID>
  ```

  Reemplazar `aArtistID` por el id del _artista_.

- **Elminar album**

  ```bash
  node main.js deleteAlbum <aAlbumID>
  ```

  Reemplazar `aAlbumID` el iD del _album_.

- **Eliminar track**

  ```bash
  node main.js deleteTrack <aTrackID>
  ```

  Reemplazar `aTrackID` por el iD del _track_.

- **Eliminar playlist**

  ```bash
  node main.js deletePlaylist <aPlaylistID>
  ```

  Reemplazar `aPlaylistID` por el ID del _playlist_.

------

#### Getters

- **Obtener todxs lxs artistas de la aplicación**

  ```bash
  node main.js getArtists
  ```

- **Obtener todos los albumes de unx artista dado**

  ```bash
  node main.js getAlbums <aArtistID>
  ```

  Reemplazar `aArtistID` por el id del _artista_ a buscar, que es autor de los _albumes_.

- **Obtener todos los tracks de un album**

  ```bash
  node main.js getTracks <aAlbumID>
  ```

  Reemplazar `aAlbumID` por el ID del _album_ a buscar, donde pertenecen los _tracks_.

- **Obtener todos los playlists**

  ```bash
  node main.js getPlaylists
  ```

- **Obetener todxs lxs users**

  ```bash
  node main.js getUsers
  ```

- **Obtener artista**

  ```bash
  node main.js getArtist <aArtistID>
  ```

  Reemplazar `aArtistID` por el id del _artista_ a buscar.

- **Obtener album**

  ```bash
  node main.js getAlbum <aAlbumID>
  ```

  Reemplazar `aAlbumID` por el Id del _album_ a buscar.

- **Obtener track**

  ```bash
  node main.js getTrack <aTrackID>
  ```

  Reemplazar `aTrackID` por el ID del _track_ a buscar.

- **Obtener playlist**

  ```bash
  node main.js getPlaylist <aPlaylistID>
  ```

  Reemplazar `aPlaylistID` por el ID de la _playlist_ a buscar.

- **Obtener user**

  ```bash
  node main.js getUser <aUserID>
  ```

  Reemplazar `aUserID` por el ID del _user_ a buscar.


- **Buscar tracks de un artista**

  ```bash
  node main.js getTracksMatchingArtist <aArtistID>
  ```

  Reemplazar `aArtistsID` por el ID del _artista_ a buscar.

- **Buscar tracks por géneros**

  ```bash
  node main.js getTracksMatchingGenres <genre1> <genre2> .. <genreN>
  ```

  Reemplazar `genre1`, `genre2` y todos los siguientes argumentos por los géneros de todos los _tracks_ a buscar.

------

#### Miscelaneos:


- **Top 3 tracks más escuchados de un artista**

  ```bash
  node main.js top3TracksFromArtist <artistId>
  ```

  Reemplazar `artistId` por el id del artista.

- **Generar un playlist con duración máxima y de ciertos géneros**

  ```bash
  node main.js generatePlaylist <name> <maxDuration> <genre1> <genre2> .. <genreN>
  ```

  Reemplazar `aName` por el nombre del _playlist_, `aMaxDuration` por la duración máxima de la misma, y `genre1`, `genre2`,etc, hasta `genreN` para los posibles géneros para sus _tracks_.

- **Unx usuarix escucha un track**

  ```bash
  node main.js userListenTrack <aUserID> <aTrackID>
  ```

  Reemplazar `aUserID` por el ID del _usuario_, y `aTrackID` por el ID del _track_.



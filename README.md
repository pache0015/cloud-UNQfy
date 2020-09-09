# cloud-UNQfy

# Seminario servicios Cloud - 2020 2s - 
 
_El presente software toma como motivación principal Modele (diseñe e implemente) una aplicación similar a Spotify, que llamaremos UNQfy

En UNQfy existe una gran cantidad de temas musicales (tracks)  los cuales siempre pertenecen a un álbum. Un álbum tiene un sólo artista como autor pero un artista puede ser autor de múltiples albumes. Cada track tiene asociado uno o más géneros, que son strings. También existen playlists, que son conjuntos de tracks que pueden pertenecer a diferentes álbumes.

En UNQfy, además de las típicas operaciones de alta, baja y modificación de todos estos elementos (tracks, albums, artistas), es posible:
realizar búsquedas de temas. 
Debe ser posible recuperar todas las canciones que fueron interpretadas por un determinado artista, y
todas las canciones que se correspondan con un determinado género.
También se desea la opción de autogenerar  una Playlist en base a una lista de géneros, es decir, rellenar una playlist con canciones de determinados géneros y con una duración máxima.


###**Integrantes:**

| Integrante |   Legajo  |   email   | github user |
| :------:   | :-------: | :------:  |  :-------:  |
|  - **Facundo Pacheco** | Leg. ????? | [pache.facundo@gmail.com ](pache.facundo@gmail.com) | [pache0015](https://github.com/pache0015) |
|- **Horacio Valenzuela** | Leg. 38613 | [valenzuelahoracioe@gmail.com](valenzuelahoracioe@gmail.com) | [UnderABloodySky](https://github.com/UnderABloodySky) |

------


### Pre-requisitos 📋

_Las *requisitos* necesarios para correr el proyecto:_
    - [nodejs](https://nodejs.org/) >= v10.x. 
    - [npm](https://www.npmjs.com/) >= 6.x.y 
    - **FALTA?**

## Construido con 🛠️

_Menciona las herramientas que se utilizon para crear el proyecto_

**Falta**

- [Python](https://www.python.org/) - Para el back-end (Utilizamos la version **3.6.8**).
- [Geopy](https://pypi.org/project/geopy/) - Para obtener los puntos desde la ubicación de la secuencia.


### Instalación 🔧

_Mas allá de la instalación de los pre-requisitos, el proyecto no necesita de ninguna instalación previa. 

## Despliegue 📦

**FALTA LA PARTE DE LOS TEST**


## Comenzando 🚀

Se interactúa con el programa desde la línea de comandos (*CLI*), para esto se debe contar con [`nodejs`](https://nodejs.org/) instalado y ejecutar `npm install` en una terminal desde la carpeta **falta**.

**Aclaración: Todos los comandos se deben correr desde la carpeta *FALTA**



### Documentación de uso


A continuación se listan los comandos que acepta y cómo deben ser usardos los mismos:

### Instanciadores

1. **Agregar artista** 

  ```bash
  node main.js addArtist <name> <country>
  ```

  Reemplazar `name` por el nombre del artista y `country` por el país del mismo.

2. **Agregar album**

  ```bash
  node main.js addAlbum <name> <artistId> <year>
  ```

  Reemplazar `name` por el nombre del album, `artistId` por el id del artista autor del mismo, `year` por su año de lanzamiento.

3. **Agregar track**

  ```bash
  node main.js addTrack <name> <albumId> <duration> <genre1> <genre2> .. <genreN>
  ```

  Reemplazar `name` por el nombre del track, `albumId` por el id de su album, `duration` por la duración del mismo, y el resto de los argumentos van a ser leidos como géneros (`genre1`, `genre2`, etc).

4. **Agregar usuario**

  ```bash
  node main.js addUser <name>
  ```

  Reemplazar `name` por el nombre del usuario.

------

#### Eliminadores

- **Eliminar artista**

  ```bash
  node main.js deleteArtist <artistId>
  ```

  Reemplazar `artistId` por el id del artista.

- **Elminar album**

  ```bash
  node main.js deleteAlbum <albumId>
  ```

  Reemplazar `albumId` el id del album.

- **Eliminar track**

  ```bash
  node main.js deleteTrack <trackId>
  ```

  Reemplazar `trackId` por el id del track.

- **Eliminar playlist**

  ```bash
  node main.js deletePlaylist <playlistId>
  ```

  Reemplazar `playlistId` por el id del playlist.

------

#### Getters

- **Obtener todos los artistas**

  ```bash
  node main.js getArtists
  ```

- **Obtener todos los albumes de un artista**

  ```bash
  node main.js getAlbums <artistId>
  ```

  Reemplazar `artistId` por el id del artista autor de los albumes.

- **Obtener todos los tracks de un album**

  ```bash
  node main.js getTracks <albumId>
  ```

  Reemplazar `albumId` por el id del album de los tracks.

- **Obtener todos los playlists**

  ```bash
  node main.js getPlaylists
  ```

- **Obetener todos los users**

  ```bash
  node main.js getUsers
  ```

- **Obtener artista**

  ```bash
  node main.js getArtist <artistId>
  ```

  Reemplazar `artistId` por el id del artista.

- **Obtener album**

  ```bash
  node main.js getAlbum <albumId>
  ```

  Reemplazar `albumId` por el id del album.

- **Obtener track**

  ```bash
  node main.js getTrack <trackId>
  ```

  Reemplazar `trackId` por el id del track.

- **Obtener playlist**

  ```bash
  node main.js getPlaylist <playlistId>
  ```

  Reemplazar `playlistId` por el id de la playlist.

- **Obtener user**

  ```bash
  node main.js getUser <userId>
  ```

  Reemplazar `userId` por el id del user.





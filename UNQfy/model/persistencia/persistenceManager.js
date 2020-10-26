const fs = require('fs'); // necesitado para guardar/cargar unqfy
const unqmod = require('../../unqfy'); // importamos el modulo unqfy


function getUNQfy(filename = 'UNQfy/data.json') {
        let unqfy = new unqmod.UNQfy();
        if (fs.existsSync(filename)) {
            unqfy = unqmod.UNQfy.load(filename);
            console.log("ACAAAAAAAAAAAAAA", unqmod.UNQfy);
            console.log("AQUIIIIIIIIIIIIII", unqmod.UNQfy.getArtists());
        }
        return unqfy;
}
  
function saveUNQfy(unqfy, filename = 'data.json'){
        unqfy.save(filename);
}

    
    
module.exports = {
    getUNQfy, saveUNQfy
  };
const fs = require('fs'); // necesitado para guardar/cargar unqfy
const unqmod = require('../../unqfy.js'); // importamos el modulo unqfy


function getUNQfy(filename = '../../data.json') {
        let unqfy = new unqmod.UNQfy();
        if (fs.existsSync(filename)) {
            unqfy = unqmod.UNQfy.load(filename);
        }
        return unqfy;
}
  
function saveUNQfy(unqfy, filename = '../../data.json'){
        unqfy.save(filename);
}

    
    
module.exports = {
    getUNQfy, saveUNQfy
  };
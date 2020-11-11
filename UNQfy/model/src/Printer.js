const {getUNQfy, saveUNQfy} = require('../persistencia/persistenceManager.js');
class Printer {
    printArray(array) {
      const unquify = getUNQfy()
      console.log('<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>');
      array.forEach((element) => {
        console.log();
        console.log(element);
        console.log();
        saveUNQfy(unquify)
      });
      console.log('<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>');
    }

  printEntity(header, entity, unquify){
    console.log(`${header}:`);
    console.log('<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>');
    if(entity instanceof Array){
        this.printArray(entity);
    }
    else {
        if(entity instanceof Promise){
          entity.then(data => {console.log(data)
        saveUNQfy(unquify)});
        }else{
          console.log(entity);
        }
    }
  }
  printException(exception) {
    console.error(`Ups! [${exception.name}]: ${exception.message}`);
  }
}
  module.exports = Printer;
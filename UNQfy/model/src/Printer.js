class Printer {
    printMessage(message) {
      console.log(message);
    }
  
    printArray(header, array) {
      console.log(header);
      console.log('<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>');
      array.forEach((element) => {
        console.log();
        console.log(element);
        console.log();
      });
      console.log('<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>');
    }
  
    printEntity(header, entity) {
      console.log(`${header}:`);
      console.log('<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>');
      console.log(entity);
    }
  
    printException(exception) {
      console.error(`Ups! [${exception.name}]: ${exception.message}`);
    }
  }
  module.exports = Printer;
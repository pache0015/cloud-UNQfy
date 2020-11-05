class Printer {
    printArray(array) {
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
      if(entity instanceof Array){
          this.printArray(entity);
      }
      else {
          if(entity instanceof Promise){
            entity.then(data => console.log(data));
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
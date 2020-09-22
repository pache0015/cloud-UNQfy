const fs = require('fs'); // necesitado para guardar/cargar unqfy
const unqmod = require('./unqfy'); // importamos el modulo unqfy
const CommandExecutor = require('./model/src/CommandExecutorEval.js');
// Retorna una instancia de UNQfy. Si existe filename, recupera la instancia desde el archivo.
function getUNQfy(filename = 'data.json') {
  let unqfy = new unqmod.UNQfy();
  if (fs.existsSync(filename)) {
    unqfy = unqmod.UNQfy.load(filename);
  }
  return unqfy;
}

function saveUNQfy(unqfy, filename = 'data.json') {
  unqfy.save(filename);
}

function isDestructiveFunction(aStringCommand){
  return ["add","create"].some( str => aStringCommand.includes(str.toLowerCase()));
}

function main() {
  const unquify = getUNQfy();
  const commandAndArguments = process.argv;
  const command = commandAndArguments[2];
  const args = commandAndArguments.slice(3);
  try{
    new CommandExecutor().evaluateCommand(command, args, unquify);
  }
  catch(e){
    console.log(e.message);
  }
  if(isDestructiveFunction(command)){
    saveUNQfy(unquify);
  }
}

main();
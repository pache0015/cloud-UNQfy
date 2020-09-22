const fs = require('fs'); // necesitado para guardar/cargar unqfy
const unqmod = require('./unqfy'); // importamos el modulo unqfy
const CommandExecutor = require('./model/src/CommandExecutor.js');

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

function main() {
  const unquify = getUNQfy();
  const commandAndArguments = process.argv;
  const command = commandAndArguments[2];
  const args = commandAndArguments.slice(3);
  new CommandExecutor().evaluateCommand(command, args, unquify);
  saveUNQfy(unquify);
}

main();
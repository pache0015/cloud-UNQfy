const CommandExecutor = require('./model/api/CommandExecutor.js');
const {getUNQfy, saveUNQfy} = require('./model/persistencia/persistenceManager.js');

function main() {
  const unquify = getUNQfy();
  const commandAndArguments = process.argv;
  const command = commandAndArguments[2];
  const args = commandAndArguments.slice(3);
  new CommandExecutor().evaluateCommand(command, args, unquify);
  saveUNQfy(unquify);
}

main();
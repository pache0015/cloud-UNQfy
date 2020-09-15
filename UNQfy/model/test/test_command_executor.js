const CommandExecutor = require('../src/CommandExecutor.js');

class A{
    a(){
        console.log("a");
    }
    b(a,b){
        console.log(a);
        console.log(b);
    }
    c(a,b,c){
        console.log(a)
        console.log(b);
        console.log(c);
    }
}

const a = new A();
const command = new CommandExecutor();
command.evaluateCommand(["node", "main.js", "a"], a);
command.evaluateCommand(["node", "main.js", "a", "1"], a);

command.evaluateCommand(["node", "main.js", "b"], a);
command.evaluateCommand(["node", "main.js", "b", "1"], a);
command.evaluateCommand(["node", "main.js", "b", "1", "2"], a);
command.evaluateCommand(["node", "main.js", "b", "1", "2", "3"], a);

command.evaluateCommand(["node", "main.js", "c"], a);
command.evaluateCommand(["node", "main.js", "c", "1"], a);
command.evaluateCommand(["node", "main.js", "c", "1", "2"], a);
command.evaluateCommand(["node", "main.js", "c", "1", "2", "3"], a);
command.evaluateCommand(["node", "main.js", "c", "1", "2", "3", "4"], a);
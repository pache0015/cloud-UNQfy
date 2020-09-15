class CommandExecutor{
    constructor(){
        this._handlers = {
                addArtist : function (args){
                    return {}
                },
                addAlbum : function (args){
                    return {}
                },
                addTrack : function (args){
                    return {}
                }
        }
    }


    evaluateCommand(listOfCommandAndArguments, aUNQUIfy){
        let command = listOfCommandAndArguments[2];
        let args = listOfCommandAndArguments.slice(3);   
        let unquifyFunction = eval(`aUNQUIfy.${command}`);
        if(this.hasEnoughArguments(args.length, unquifyFunction)){
            if(this.isAdd(args)){
                args = this.
            }
            eval(`aUNQUIfy.${command}(...args)`);
        }
        else{
            throw new Error("Eh ñery");
        }        
    }

    hasEnoughArguments(aNumberOfArguments, aFunction){
        return aFunction.length <= aNumberOfArguments;
    }
}

class A{
    a(){
        console.log("a");
    }
    b(a,b){
        console.log(a)
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

module.exports = CommandExecutor;

algo = {}
algo["create"] = {(x) => return x + 2};
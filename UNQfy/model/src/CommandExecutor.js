class CommandExecutor{
    evaluateCommand(listOfCommandAndArguments, aUNQUIfy){
        let command = listOfCommandAndArguments[2];
        let args = listOfCommandAndArguments.slice(3);   
        let unquifyFunction = eval(`aUNQUIfy.${command}`);
        if(this.hasEnoughArguments(args.length, unquifyFunction)){
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
module.exports = CommandExecutor;



class CommandExecutor {

    evaluateCommand(listOfCommandAndArguments, aUNQUIfy){
        const command = listOfCommandAndArguments[2];
        let args = listOfCommandAndArguments.slice(3);
        const unquifyFunction = eval(`aUNQUIfy.${command}`);
        if(this.isAdd(command, this._handlers)){
            args = [this._handlers[command](args)];
        }
        if(this.hasEnoughArguments(args, unquifyFunction)){
            try{
                eval(`aUNQUIfy.${command}(...args)`);
            }
            catch(e){
                console.log(e.message);
            }
        }
        else{
            throw new Error("Eh ñery");
        }
    }

    hasEnoughArguments(aListOfArguments, aFunction){
        return aListOfArguments.length >= aFunction.length;
    }
}




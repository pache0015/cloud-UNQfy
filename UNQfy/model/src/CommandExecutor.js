class CommandExecutor{
    constructor(){
        this._handlers = {
                addArtist : function (args){
                    const name = args[0];
                    const country = args[1];
                    return {name, country};
                },
                addAlbum : function (args){
                    const name = args[0];
                    const year = args[1];
                    return {name, year: year};
                },
                addTrack : function (args){
                    const name = args[0];
                    const duration = args[1];
                    const genres = args[1].slice(2);
                    return {name, duration, genres};
                }
        };
    }

    isAdd(command, aHash){
        return command in aHash;
    }

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
                e.message;
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

module.exports = CommandExecutor;

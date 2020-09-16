function isAdd(command, aHash){
    return command in aHash;
}

class CommandExecutor{
    constructor(){
        this._handlers = {
                addArtist : function (args){
                    const anArtistName = args[0];
                    const aCountry = args[1];
                    return {name: anArtistName, country: aCountry};
                },
                addAlbum : function (args){
                    const anAlbumName = args[0];
                    const aYear = args[1];
                    return {name: anAlbumName, year: aYear};
                },
                addTrack : function (args){
                    const aTrackName = args[0];
                    const aDuration = args[1];
                    const genres = args[1].slice(2);
                    return {name: aTrackName, duration: aDuration, genres};
                }
        };
    }

    evaluateCommand(listOfCommandAndArguments, aUNQUIfy){
        const command = listOfCommandAndArguments[2];
        let args = listOfCommandAndArguments.slice(3);   
        const unquifyFunction = eval(`aUNQUIfy.${command}`);
        if(this.hasEnoughArguments(args.length, unquifyFunction)){
            if(isAdd(command, this._handlers)){
                args = this._handlers[command](args);
            }
                eval(`aUNQUIfy.${command}(...args)`);
        }
        else{
            throw new Error("Eh ñery");
        }        
    }

    hasEnoughArguments(aNumberOfArguments, aFunction){
        return aNumberOfArguments >= aFunction.lengt;
    }
}

module.exports = CommandExecutor;

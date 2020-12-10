const Newsletter = require('./newsletter.js');

class ObserverMaster{
    constructor(aListOfObservers = [new Newsletter()]){
        this._observersSlayers = aListOfObservers;
    }

    subscribe(aNewObserver){
        this._observersSlayers.push(aNewObserver); 
    }
    
    unsuscribe(anObserverToRemove){
        this._observersSlayers = this._observers.filter(obs => obs === anObserverToRemove);
    }
    
    notifyAll(aJson){
        this._observersSlayers.forEach(obs => { obs.updateState(aJson); });    
    }
}


module.exports = ObserverMaster;
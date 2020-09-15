class IDGenerator{
    constructor() {
        this.idCounter = 0;
    }
    newId(){
        return this.idCounter++
    }
}

let Singleton = (function () {
    let instance;
    function createInstance() {
        let object = new IDGenerator();
        return object;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

module.exports = Singleton;
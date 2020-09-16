class IDGenerator{
    constructor() {
        this.idCounter = 0;
    }
    newId(){
        return this.idCounter++
    }
    static getInstance(){
        return Singleton.getInstance();
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
const _instance = Singleton.getInstance()
module.exports = _instance;
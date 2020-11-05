class IDGenerator{
    constructor() {
        this.idCounter = 0;
    }
    newId(){
        return this.idCounter++;
    }
    static getInstance(){
        return Singleton.getInstance();
    }
}

const Singleton = (function () {
    let instance;
    function createInstance() {
        const object = new IDGenerator();
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
const _instance = Singleton.getInstance();
module.exports = _instance;
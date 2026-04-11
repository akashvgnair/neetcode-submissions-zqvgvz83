class Logger {
    map = {};
    constructor() {
        this.map = {}
    }

    /**
     * @param {number} timestamp
     * @param {string} message
     * @return {boolean}
     */
    shouldPrintMessage(timestamp, message) {
        if(!this.map[message]) {
            this.map[message] = 10 + timestamp;
            return true;
        }
        if(timestamp < this.map[message]) return false;
        this.map[message] = 10 + timestamp;


        return true;
    }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

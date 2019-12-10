const Util = require(`${__dirname}/../util/Util`);

class Server {
    constructor(options = {
        serverUrl: "http://boomlings.com/database" 
    }) {
        this.serverUrl = Util.fixURL(options.serverUrl);
    }
}

module.exports = Server;
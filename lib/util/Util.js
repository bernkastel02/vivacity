const url = require("url");

let urlRegex = /^(?!(http|https):\/\/).{1,}/g;
let fileRegex = /\/[a-zA-Z]{1,}\.[a-zA-Z]{1,}/g;

class Util {
    constructor() {
        throw new Error(`The ${this.constructor.name} class may not be instantiated.`);
    }

    // response parsers
    static parseResponse(body, splitter = ":") {
        if (!body) throw new SyntaxError("Invalid response body");
        let array = body.split("#")[0].split(splitter);
        let response = {};

        for (let i = 0; i < split.length; i += 2)
            response[array[i]] = array[i + 1];

        return response;
    }

    static parseResponses(body, multisplitter = "#", splitters = [":"]) {
        if (!body) throw new SyntaxError("Invalid response body");
        let array = body.split(multisplitter);
        let responseArray =[]

        array.forEach((piece) => {
            if (splitters.filter((splitter) => {return piece.includes(splitter)})[0]) {
                responseArray.push(Util.parseResponse(piece, splitter));
            }
        })

        return responseArray;
    }

    // fix urls
    static fixURL(urlP) {
        if (urlP.match(urlRegex)) {
            let parseUrl = url.parse(`http://${urlP}`, true);
            if (parseUrl.path.match(fileRegex)) return `http://${urlP}`; 
            
            urlP = `http://${urlP}${(!urlP.endsWith("/"))?"/":""}`;
            return urlP;
        } else {
            if (parseUrl.path.match(fileRegex)) return urlP; 
            return `${urlP}${(!urlP.endsWith("/"))?"/":""}`;
        }
    }
}

//export
module.exports = Util;
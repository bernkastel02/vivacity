const request = require("request");

class HTTPRequest {
    constructor(url, options = {
        method: "GET",
        type: "urlencoded",
        body: {}
    }) {
        this.options = options;
    }


    make() {
        return new Promise((resolve, reject) => {
            let o = this.options;

            // typeset hell
            if (o.type == "urlencoded") o.form = o.body
            else if (o.type == "json") o.body = o.body
            else if (o.type == "form" || o.type == "formdata") o.form = o.body

            return request(o);
        })
    }
}

module.exports = HTTPRequest;
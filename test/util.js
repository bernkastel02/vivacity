const Util = require(__dirname + "/../lib/Vivacity").Util;

let tests = [
    Util.fixURL("example.com"),
    Util.fixURL("example.com/file.thing")
]

console.log(tests)
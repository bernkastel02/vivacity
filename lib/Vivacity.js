module.exports = {
    // Util
    Util: require(`${__dirname}/util/Util`),
    Constants: require(`${__dirname}/Constants`),

    // Errors
    GDAPIError: require(`${__dirname}/util/errors/GDAPIError`)
}
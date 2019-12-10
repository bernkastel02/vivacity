class GDAPIError extends Error {
    constructor(message, code) {
        super(message);

        this.code = code;
        this.name = "GDAPIError";
    }
}

module.exports = GDAPIError;
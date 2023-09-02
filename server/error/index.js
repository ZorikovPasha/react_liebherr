module.exports = class ApiError extends Error{
    status;
    errors;

    constructor(status, message) {
        super(message);
        this.status = status;
    }

    static BadRequest(message) {
        return new ApiError(400, message);
    }

    static internal(message) {
      return new ApiError(500, message);
    }
}

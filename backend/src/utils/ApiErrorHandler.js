class ApiErrorHandler extends Error {

    constructor(statusCode, message = 'Something went wrong', error = [], stack = '') {
        super(message);
        this.statusCode = statusCode;
        this.stack = stack;
        this.success = false;
        this.error = error;
        this.data = null;
    }
};


export { ApiErrorHandler };
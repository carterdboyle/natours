class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true; //useful for controlling what gets send back to the client

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;

const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  console.log(err.stack.red);

  if (err.name === 'CastError') {
    const message = `Bootcamp not found with id of ${error.value}`;
    error = new ErrorResponse(message, 404);
  }

  res.status(error.statusCode).json({
    success: false,
    error: error.message || 'Server error'
  });
};

module.exports = errorHandler;

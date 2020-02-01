const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
const morgan = require('morgan');
const colors = require('colors');
const connectDb = require('./config/db');
const errorHandler = require('./middleware/error');
dotenv.config({ path: './config/config.env' });

connectDb();

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('/api/v1/bootcamps', bootcamps);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow
      .bold
  );
});

process.on('unhandledRejection', (error, promise) => {
  console.log(`Error: ${error.message}`.red);
  server.close(() => {
    process.exit(1);
  });
});

const express = require("express");
const path = require("path");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const bootcamps = require("./routes/bootcamps");
const courses = require("./routes/courses");
const auth = require("./routes/auth");

const morgan = require("morgan");
const colors = require("colors");
const fileupload = require("express-fileupload");
const cookieParser = require("cookie-parser");

const connectDb = require("./config/db");
const errorHandler = require("./middleware/error");

connectDb();

const app = express();

app.use(express.json());

app.use(cookieParser());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(fileupload());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/auth", auth);
app.use("/api/v1/bootcamps", bootcamps);
app.use("/api/v1/courses", courses);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow
      .bold
  );
});

process.on("unhandledRejection", (error, promise) => {
  console.log(`Error: ${error.message}`.red);
  server.close(() => {
    process.exit(1);
  });
});

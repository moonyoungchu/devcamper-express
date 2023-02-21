const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");

const logger = require("./middleware/logger");
const connectDB = require("./config/db");

//Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// Route files
const bootcamps = require("./routes/bootcamps");

const app = express();

// Dev logging middleware -> morgan(format, options)
// Create a new morgan logger middleware function using the given format and options
// 미리 정의된 포맷중에 dev 사용
// :method :url :status :response-time ms - :res[content-length]
if (process.env.NODE_ENV === 'development') {

  console.log(">>>morgae", morgan('dev'))
  app.use(morgan('dev'));
}
// app.use(logger);

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`>>>Server mode ${process.env.NODE_ENV} and PORT ${process.env.PORT}`.yellow.bold)
);

// Handle undandled promise rejections
process.on("unhandleRejection", (err, promise) => {
  console.log(`Error : ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

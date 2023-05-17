const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const cookieParser = require("cookie-parser");
const errorHandler = require('./middleware/error')
const logger = require("./middleware/logger");
const connectDB = require("./config/db");

//Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// Route files
const bootcamps = require("./routes/bootcamps");
const courses = require('./routes/courses');
const auth = require("./routes/auth");


const app = express();

// Body parser
app.use(express.json())

// Cookie parser
app.use(cookieParser());

// Dev logging middleware -> morgan(format, options)
// Create a new morgan logger middleware function using the given format and options
// 미리 정의된 포맷중에 dev 사용
// :method :url :status :response-time ms - :res[content-length]
// ex) GET /api/v1/bootcamps 200 67.819 ms - 1303
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// app.use(logger);

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);
app.use('/api/v1/courses', courses);
app.use("/api/v1/auth", auth);


// error handle
app.use(errorHandler);



const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`>>>Server mode: ${process.env.NODE_ENV} / PORT: ${process.env.PORT}`.yellow.bold)
);

// Handle undandled promise rejections
process.on("unhandleRejection", (err, promise) => {
  console.log(`Error : ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

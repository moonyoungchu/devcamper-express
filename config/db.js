const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(":::mongoDB Connected", conn.connection.host.cyan.underline.bold);
};

mongoose.set('strictQuery', false);

module.exports = connectDB;

const mongoose = require("mongoose");
const url = "mongodb+srv://dipakmundhe2026:dipak123@dipakmundhedb.smgirv5.mongodb.net/?retryWrites=true&w=majority&appName=dipakmundhedb";

const dbConnection = async () => {
  try {
    await mongoose.connect(url);
    console.log("mongodb connected.....");
  } catch (error) {
    console.error(error);
    throw error;
  }
};
module.exports = dbConnection;

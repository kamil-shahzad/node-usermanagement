const mongoose = require('mongoose');
const { options } = require('../routes/customer');
const connectDB = async()=> {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect('mongodb+srv://kamilshahzad:kamil123@cluster0.d4tr3wp.mongodb.net/MERN-Payment')
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}
module.exports = connectDB;


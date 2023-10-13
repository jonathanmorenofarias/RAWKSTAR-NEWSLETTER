const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('Connected to database!'))
.catch(()=> console.log('Connection failed!'));

module.exports = mongoose;
const mongoose = require("mongoose");
require('dotenv').config();
mongoose.set('strictQuery',true);

const connection = mongoose.connect(process.env.mongo_Url)

module.exports={
    connection
}
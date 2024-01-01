const mongoose = require("mongoose");
require('dotenv').config();

const db = async() => {
    try {
        mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('DB conected');
    } catch (error) {
        console.log('DB NOT CONNECTED');
    }
}
module.exports = {db}


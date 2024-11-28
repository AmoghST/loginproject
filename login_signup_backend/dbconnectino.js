require('dotenv').config();
const mongoose = require('mongoose');



const url = process.env.DB_URL || 'mongodb+srv://talekaramogh554:kz1cwsYYHDX8HKBe@login.wglop.mongodb.net/?retryWrites=true&w=majority&appName=Login'


async function connectToMongo(){
    await mongoose.connect(url).then(()=>{console.log("connection is successful")}).catch(()=>{console.log("database connection error")})
}

module.exports = connectToMongo;












// mongodb://localhost:27017/loginproject
//this is the mongodb compass connection string 
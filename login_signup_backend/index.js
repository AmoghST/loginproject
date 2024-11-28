require('dotenv').config();

const express = require('express');
const port = process.env.DB_PORT
const cors = require('cors');
const useAuthrouter = require('./routes/auth')
const useNoterouter = require('./routes/notes')

const app = express();
app.use(cors());
app.use(express.json());
const connectToMongo = require('./dbconnectino')
connectToMongo();

app.use('/auth', useAuthrouter);
app.use('/notes', useNoterouter);



app.listen(port, ()=>{
    console.log(`your server is running of port ${port}`)
})
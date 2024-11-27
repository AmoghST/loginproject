const express = require('express');
const PORT = 4000;
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



app.listen(PORT, ()=>{
    console.log(`your server is running of port ${PORT}`)
})
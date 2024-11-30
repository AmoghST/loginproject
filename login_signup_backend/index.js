require('dotenv').config();

const express = require('express');
const port = process.env.REACT_APP_PORT || 5100;
const cors = require('cors');
const useAuthrouter = require('./routes/auth')
const useNoterouter = require('./routes/notes')

const app = express();
app.use(cors({
    origin: ["https://loginproject-nu.vercel.app"],
    methods: ["POST","GET"],
    credentials: true
}
    ));
app.use(express.json());
const connectToMongo = require('./dbconnectino')
connectToMongo();

app.use('/auth', useAuthrouter);
app.use('/notes', useNoterouter);



app.listen(port, ()=>{
    console.log(`your server is running of port ${port}`)
})

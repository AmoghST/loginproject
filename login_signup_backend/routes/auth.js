require('dotenv').config();
const express = require('express');

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const secretToken = process.env.REACT_APP_SECRET_KEY;
const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body; // No need for `await` here

    try {
        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: "A user with this email already exists." });
        }

        // Create new user
        user = await User.create({ name, email, password });

        // Generate auth token
        const data = { id: user.id };
        const authtoken = jwt.sign(data, secretToken);

        // Send token as response
        res.status(200).json({ authtoken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong. Please try again." });
    }
});

//login route
router.post('/login', async (req, res)=>{
    const {email, password } =await req.body;
    try {
        let user = await User.findOne({email})
        if(!user){
            res.send({error:"invalid email please enter valid email "})
        }
        if(password != user.password){
            res.send({error:"please enter valid credential"})
        }else{
            const data ={
                user:{
                    id:user.id
                }
            }
            const authtoken = jwt.sign(data, secretToken);
            res.send({authtoken});

        }
   
        
    } catch (error) {
        res.status(500).send('Error occurred');
    }
})

module.exports = router;
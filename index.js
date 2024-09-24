const express = require('express');
const app =express();
// const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');

app.use(express.json());
app.use(bodyParser.json()); 
app.use(cors());

app.use('/auth',AuthRouter);

// require('dotnet').config();
// require('./Models/db');

const PORT =process.env.PORT || 5080;



// mongoose.connect('',{

// })

app.get('/',(req,res)=>{
    res.send('hello from the server!');
});

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});
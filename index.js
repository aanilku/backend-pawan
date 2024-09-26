const express = require('express');
const app =express();
// const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const AuthProduct = require('./Routes/ProductRouter');

app.use(express.json());
app.use(bodyParser.json()); 
app.use(cors());

require('dotenv').config(); // Corrected from 'dotnet' to 'dotenv'
require('./Models/db');
 
app.use('/auth',AuthRouter);
app.use('/products',AuthProduct);



const PORT =process.env.PORT || 5080;

app.get('/',(req,res)=>{
    res.send('hello from the server!');
});

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});
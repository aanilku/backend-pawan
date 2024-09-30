const express = require('express');
const app =express();
// const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const AuthProduct = require('./Routes/ProductRouter');
const multer = require('multer');
// const connectMySQL = require('./config/db');

app.use(express.json());
app.use(bodyParser.json()); 
app.use(cors());

require('dotenv').config(); 
require('./Models/db');
require('./Models/mySQLdb');

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
        // cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

 
app.use('/auth',AuthRouter);
app.use('/products',AuthProduct);



// Serve images from the uploads directory
app.use('/uploads', express.static('uploads'));


const PORT =process.env.PORT || 5080;

app.get('/',(req,res)=>{
    res.send('hello from the server!');
});


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});
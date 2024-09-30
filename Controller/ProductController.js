const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/productsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define a schema for the Product
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String, // Will store the path to the image
});

const Product = mongoose.model('Product', productSchema);

// Set up Multer for image uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to avoid name conflicts
    }
});

const upload = multer({ storage: storage });

// POST endpoint to add a product with image upload
app.post('/api/products', upload.single('image'), async (req, res) => {
    try {
        const newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            image: req.file.path, // Save the path of the uploaded image
        });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error saving product', error });
    }
});

// GET endpoint to retrieve all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving products', error });
    }
});

// Serve images from the uploads directory
app.use('/uploads', express.static('uploads'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

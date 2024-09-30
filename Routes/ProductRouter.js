const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();


router.get('/',ensureAuthenticated, (req,res)=>{
    res.status(200)
    .json([
        {
            productName: "Mobile",
            price :10000
        },
        {
            productName: "TV",
            price :10000
        },
        {
            productName: "Laptop",
            price :10000
        }
    ])
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

module.exports = router;

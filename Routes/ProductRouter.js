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
router.post('/profile', function (req, res) {
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        console.log('upload file');
      } else if (err) {
        console.log(' error upload file');
        // An unknown error occurred when uploading.
      }
  
      // Everything went fine.
    })
});

// // Endpoint to create a new product
// router.post('/', upload.single('image'), (req, res) => {
//     const { title, description, price } = req.body;
//     const image = req.file ? req.file.path : null;

//     const newProduct = new Product({
//         title,
//         description,
//         image,
//         price
       
//     });

//     newProduct.save((err, product) => {
//         if (err) return res.status(500).send(err);
//         res.status(201).json(product);
//     });
// });


module.exports = router;

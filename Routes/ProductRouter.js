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



module.exports = router;

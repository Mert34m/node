
const express = require("express");
const router = express.Router();
const path = require("path");


router.use("/add-product", function (req,res,next) {
    // res.sendFile(path.join(__dirname,"../views/add-product.html"));
    res.render("add-product",
        {
           path : "/admin/add-product" 
        }
    );
});

module.exports = router;

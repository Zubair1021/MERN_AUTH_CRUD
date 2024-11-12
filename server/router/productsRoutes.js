const express = require('express');
const route = express.Router();
const { addProduct, getProducts, updateProduct, deleteProduct,getProductById } = require("../controller/productController");

route.post("/addProduct", addProduct);
route.get("/getProducts", getProducts);
route.put("/updateProduct/:id", updateProduct);
route.delete("/deleteProduct/:id", deleteProduct);
route.get("/getProductById/:id", getProductById);


module.exports = route;

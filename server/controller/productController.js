const Product = require('../model/Products');

const addProduct = async (req, res) => {
    try {
        await Product.create(req.body);
        res.status(201).send("Product added successfully");
    } catch (error) {
        res.status(500).send("Failed to add product");
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send("Failed to retrieve products");
    }
};

const updateProduct = async (req, res) => {
    try {
        await Product.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send("Product updated successfully");
    } catch (error) {
        res.status(500).send("Failed to update product");
    }
};

const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).send("Product deleted successfully");
    } catch (error) {
        res.status(500).send("Failed to delete product");
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send("Failed to retrieve product");
    }
};



module.exports = { addProduct, getProducts, updateProduct, deleteProduct,getProductById };

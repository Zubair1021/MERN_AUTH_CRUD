import React, { useState } from 'react';
import axios from 'axios';
import './Products.css';
import { useNavigate } from 'react-router-dom'; 

const Products = () => {
  const [productData, setProductData] = useState({
    productName: '',
    description: '',
    price: '',
    category: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productPayload = {
        name: productData.productName,
        description: productData.description,
        price: productData.price,
        category: productData.category,
      };
      const response = await axios.post('https://mern-auth-crud-3.onrender.com/products/addProduct', productPayload);
      console.log('Product added:', response.data);
      alert('Product added successfully');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    }
  };

  const handleShowProducts = () => {
    navigate('/showproducts');
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="products-container">
      <h1 className="title fade-in">Add a New Product</h1>
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={productData.productName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={productData.description}
              onChange={handleInputChange}
              required
              style={{ resize: 'none' }}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={productData.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={productData.category}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="btn-boxes">
          <button type="submit" className="submit-button">Add Product</button>
          <button type="button" className="show-button" onClick={handleShowProducts}>Show Products</button>
          <button type="button" className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </form>
    </div>
  );
};

export default Products;

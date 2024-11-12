import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'; // Import useNavigate and useParams
import './EditProducts.css';

const EditProducts = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
  });
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate();

  // Fetch product details by ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://mern-auth-crud-3.onrender.com/products/getProductById/${id}`);
        setProduct(response.data); // Set the product data to state
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchProduct();
  }, [id]); // Dependency on ID to fetch the product details when the ID changes

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value, // Update the state with new values
    }));
  };

  // Handle form submission (Update product)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://mern-auth-crud-3.onrender.com/products/updateProduct/${id}`, product);
      alert('Product updated successfully');
      navigate('/showproducts'); 
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product');
    }
  };

  return (
    <div className="edit-product-container">
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit} className="edit-product-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={product.name || ''}  // Ensure there's always a value to avoid uncontrolled input warning
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={product.description || ''}  // Same here for textarea
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={product.price || ''}  // Ensure value is handled properly
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={product.category || ''}  // Default to empty string in case of null
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="save-button">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProducts;

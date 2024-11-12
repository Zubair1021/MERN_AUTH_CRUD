import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ShowProducts.css';

const ShowProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://mern-auth-crud-3.onrender.com/products/getProducts');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://mern-auth-crud-3.onrender.com/products/deleteProduct/${id}`);
      setProducts(products.filter(product => product._id !== id));
      alert('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  // Handle Edit
  const handleEdit = (id) => {
    navigate(`/editProduct/${id}`);  
  };

  const handleBack = () => {
    navigate("/products");  
  };

  return (
    <div className="all-products-container">
      <h1>All Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <div className="card-buttons">
              <button onClick={() => handleEdit(product._id)} className="edit-button">Edit</button>
              <button onClick={() => handleDelete(product._id)} className="delete-button">Delete</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleBack} className="back-button">Back</button>
    </div>
  );
};

export default ShowProducts;

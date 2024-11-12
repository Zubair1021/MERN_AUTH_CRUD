import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css' 

const Home = () => {
  return (
    <div className="home-container">
      {/* Animated Auth Image */}
      <img 
        src="https://cdn-icons-png.flaticon.com/512/2910/2910795.png"
        alt="Authentication Icon"
        className="auth-image slide-in"
      />

      {/* Animated Title */}
      <h1 className="title fade-in">
        Authentication & Product CRUD
      </h1>

      {/* Register Link with Animation */}
      <Link 
        to="/register" 
        className="register-btn bounce-in"
      >
        Register
      </Link>
    </div>
  )
}

export default Home

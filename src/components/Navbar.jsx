import React from 'react'
import { Link } from 'react-router'
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <Link to="/" className="Logo">LOGIN-SYSTEM</Link>
      </h1>

      <ul className="nav-links">
        <li>
          <Link to="/login" className="login-btn">
            Login
          </Link>
        </li>

        <li>
          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
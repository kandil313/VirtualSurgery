import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <nav>
      <Link to="/" className="title">
        Virtual Surgery
      </Link>
      <div className={`menu ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`links ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink>
        </li>
        <li>
        {auth ? (
            <NavLink onClick={() => {logout(); setMenuOpen(false)}} to="/signup">Logout</NavLink>
            ) : (
            <NavLink to="/signup" onClick={() => setMenuOpen(false)}>Signup</NavLink>
            )}
        </li>
      </ul>
    </nav>
  );
};
import React, { useState } from "react";
import menuItems from "./Navbar.js";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((s) => !s);

  return (
    <nav className="navbarItems">
      <h1 className="navbarLogo">Trippy</h1>
      

      <button
        className="menu-icon"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} ></i>
      </button>

      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url} onClick={() => setMenuOpen(false)}>
              {item.title}
            </Link>
          </li>
        ))}
        <button className="signup">Sign Up</button>
      </ul>

    </nav>
  );
};

export default Navbar;

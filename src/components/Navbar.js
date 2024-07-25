import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: for adding some basic styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/inventory">Inventory</Link>
        </li>
        <li className="navbar-item">
          <Link to="/deckbuilder">DeckBuilder</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../NavBar.css';
import '../navLinks.css';

const Navbar = () => (
  <nav className="navBar">
    <div>
      <h1>Math Magicians</h1>
    </div>
    <ul className="navlinks">
      <li data-testid="home">
        <NavLink to="/">Home</NavLink>
      </li>
      <div className="devider" />
      <li data-testid="calc-page">
        <NavLink to="/calculator">Calculator</NavLink>
      </li>
      <div className="devider" />
      <li data-testid="quote">
        <NavLink to="/quotes">Quote</NavLink>
      </li>
    </ul>
  </nav>
);
export default Navbar;

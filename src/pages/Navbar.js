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
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <div className="devider" />
      <li>
        <NavLink to="/calculator">Calculator</NavLink>
      </li>
      <div className="devider" />
      <li>
        <NavLink to="/quotes">Quote</NavLink>
      </li>
    </ul>
  </nav>
);
export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div class="nav-wrapper">
        <Link to="#" class="brand-logo">
          Logo
        </Link>
        <ul id="nav-mobile" class="right">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/employee">Employee</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <a href=""></a> */
}

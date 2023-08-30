import React from "react";
import { Link } from "react-router-dom";
import Hoc from "../../Hoc";
const About = () => {
  return (
    <div>
      This is About Page.
      <Link to="/contact">Contact</Link>
      <Link to="http://www.facebook.com">Facebook</Link>
    </div>
  );
};

export default Hoc(About);

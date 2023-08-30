import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./modules/Navbar/Navbar";
import Employee from "./modules/Employee/container/Employee";
import About from "./modules/About/container/About";
import Contact from "./modules/Contact/container/Contact";
import Recipe from "./modules/Recipe/Recipe";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/employee" element={<Employee />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Router;

import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Employee from "./components/Employee/Employee";
import Post from "./components/Post/Post";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/employee/:post_id" element={<Post />} />
          </Routes>

          {/* <Footer /> */}

          {/* conditional rendering */}
          {/* {formValid == true ? <Home /> : <Login />} */}
        </BrowserRouter>
      </>
    );
  }
}

export default App;

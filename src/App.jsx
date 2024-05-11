import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Faq from "./components/pages/Faq";
import Products from "./components/pages/Products";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={ <Home />} />
        <Route path='/about' element={ <About />} />
        <Route path='/faq' element={ <Faq />} />
        <Route path='/products' element={ <Products />} />
        <Route path='*' element={ <h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
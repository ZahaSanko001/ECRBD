import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Event from "./Components/Event";
import Training from "./Components/training/Training";

const App = () => {

    return(
        <main>
            <Navbar/>
            <Hero/>
            <About/>
            <Event/>
            <Blog/>
            <Contact/>
        </main>
    )
}

export default App;
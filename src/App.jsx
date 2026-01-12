import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";

const App = () => {
    return(
        <main>
            <Navbar/>
            <Hero/>
            <About/>
            <div className="h-screen"></div>
            <div className="h-screen"></div>
        </main>
    )
}

export default App;
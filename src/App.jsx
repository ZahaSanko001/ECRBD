import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";

const App = () => {
    // Replace with actual user role from auth/context
    const userRole = "member"; // Can be "admin", "member", or "trainer"

    return(
        <main>
            <Navbar/>
            <Hero/>
            <About/>
            <Blog userRole={userRole}/>
            <Contact/>
        </main>
    )
}

export default App;
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Blog from "./Components/Blog";

const App = () => {
    // Replace with actual user role from auth/context
    const userRole = "member"; // Can be "admin", "member", or "trainer"

    return(
        <main>
            <Navbar/>
            <Hero/>
            <About/>
            <Blog userRole={userRole}/>
            <div className="h-screen"></div>
            <div className="h-screen"></div>
        </main>
    )
}

export default App;
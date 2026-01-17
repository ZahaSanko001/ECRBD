import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import Blogs from "./pages/admin/Blogs";
import AdminLayout from "./layout/AdminLayout";
import RequireAuth from "./auth/RequireAuth";

const App = () => {

    return(
        <BrowserRouter>
            <main>
                <Navbar/>
                <Hero/>
                <About/>
                <Blog/>
                <Contact/>
            </main>
        </BrowserRouter>
    )
}

export default App;
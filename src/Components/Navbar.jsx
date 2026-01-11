import React from "react";

const Navbar = () => {
    return(
        <nav>
            <div className="fixed top-0 left-0 right-0 flex flex-center justify-between px-20 py-10 z-10">
                <div className="font-bold text-2xl">
                    ECRBD
                </div>
                <div className="hidden md:flex gap-8">
                    <a href="#hero" className="hover:text-green-200">Home</a>
                    <a href="#about" className="hover:text-green-200">Training</a>
                    <a href="#projects" className="hover:text-green-200">Blogs</a>
                    <a href="#projects" className="hover:text-green-200">Events</a>
                    <a href="#projects" className="hover:text-green-200">Q&A</a>
                    <a href="#contact" className="hover:text-green-200">Contact</a>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
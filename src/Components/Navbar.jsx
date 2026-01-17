import {React, useState} from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import  gsap  from "gsap";
import { Link } from "react-router-dom";

const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false);
    const[portalDropdown, setPortalDropdown] = useState(false);

    useGSAP(() => {
    const navTween = gsap.timeline({
        scrollTrigger: {
            trigger: '#nav',
            start: "bottom top",
        }
    });

    navTween.fromTo('#nav', { backgroundColor: "transparent" }, 
      { 
        backgroundColor: "#00000050", 
        backdropFilter: "blur(5px)",
        duration: 1,
        ease: "power1.inOut"
      }
    );

    });
    
    return(
        <nav>
            <div id="nav" className="fixed top-0 left-0 right-0 flex flex-center justify-between px-20 py-10 z-10">
                <div className="font-bold text-2xl">
                    ECRBD
                </div>
                <div className="hidden md:flex gap-8">
                    <a href="#hero" className="hover:text-green-200">Home</a>
                    <a href="#about" className="hover:text-green-200">Training</a>
                    <a href="#about" className="hover:text-green-200">Volunteer</a>
                    <a href="#blogs" className="hover:text-green-200">Blogs</a>
                    <a href="#projects" className="hover:text-green-200">Events</a>
                    <a href="#projects" className="hover:text-green-200">Q&A</a>
                    <a href="#contact" className="hover:text-green-200">Contact</a>
                    <Link to="/login" className="hover:text-green-200">SignIn</Link>
{/*                     <div className="relative group">
                        <button className="hover:text-green-200">Portal</button>
                        <div className="absolute hidden group-hover:block border border-green-300 rounded-lg mt-2 left-1/2 transform -translate-x-1/2 ">
                            <a href="/portal/admin" className="block px-4 py-2 hover:bg-blue-300 hover:text-slate-900 rounded-lg w-full text-center">Admin</a>
                            <a href="/portal/member" className="block px-4 py-2 hover:bg-blue-300 hover:text-slate-900 rounded-lg w-full text-center">Member</a>
                            <a href="/portal/trainer" className="block px-4 py-2 hover:bg-blue-300 hover:text-slate-900 rounded-lg w-full text-center">Trainer</a>
                        </div>
                    </div> */}
                </div>
            </div>

            {!isOpen && (
                <div id="navi" className="md:hidden fixed top-0 left-0 flex gap-4 px-4 py-2 m-2 w-fit rounded-4xl z-10">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="#FFCA28"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
                    </button>
                </div>
            )}
            
            {isOpen && (
                <div id="navi" className="md:hidden fixed top-0 left-0 flex gap-4 px-4 py-2 m-2 border-2 rounded-3xl border-green-400 w-fit z-10 flex-col">
                    <a href="#hero" className="hover:text-green-200" onClick={() => setIsOpen(false)}>
                        Home
                    </a>
                    <a href="#about" className="hover:text-green-200" onClick={() => setIsOpen(false)}>
                        About
                    </a>
                    <a href="#projects" className="hover:text-green-200" onClick={() => setIsOpen(false)}>
                        Projects
                    </a>
                    
                    {/* Portal Mobile Dropdown */}
                    <div className="relative">
                        <button onClick={() => setPortalDropdown(!portalDropdown)} className="hover:text-green-200">
                            Portal
                        </button>
                        {portalDropdown && (
                            <div className="bg-slate-800 border border-green-400 rounded-lg mt-2 ml-4">
                                <a href="/portal/admin" className="block px-4 py-2 hover:bg-green-400 hover:text-slate-900 w-full text-left" onClick={() => {setIsOpen(false); setPortalDropdown(false);}}>Admin</a>
                                <a href="/portal/member" className="block px-4 py-2 hover:bg-green-400 hover:text-slate-900 w-full text-left" onClick={() => {setIsOpen(false); setPortalDropdown(false);}}>Member</a>
                                <a href="/portal/trainer" className="block px-4 py-2 hover:bg-green-400 hover:text-slate-900 w-full text-left" onClick={() => {setIsOpen(false); setPortalDropdown(false);}}>Trainer</a>
                            </div>
                        )}
                    </div>
                    
                    <button onClick={() => setIsOpen(!isOpen)}>
                        X
                    </button>
                </div>
            )}

        </nav>
        
    )
};

export default Navbar;
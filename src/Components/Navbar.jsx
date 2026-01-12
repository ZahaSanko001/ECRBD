import {React, useState} from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import  gsap  from "gsap";

const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false);

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
        backdropFilter: "blur(10px)",
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
                    <a href="#projects" className="hover:text-green-200">Blogs</a>
                    <a href="#projects" className="hover:text-green-200">Events</a>
                    <a href="#projects" className="hover:text-green-200">Q&A</a>
                    <a href="#contact" className="hover:text-green-200">Contact</a>
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
                <div id="navi" className="md:hidden fixed top-0 left-0 flex gap-4 px-4 py-2 m-2 border-2 rounded-3xl border-green-400 w-fit z-10">
                    <a href="#hero" className="hover:text-green-200" onClick={() => setIsOpen(false)}>
                        Home
                    </a>
                    <a href="#about" className="hover:text-green-200" onClick={() => setIsOpen(false)}>
                        About
                    </a>
                    <a href="#projects" className="hover:text-green-200" onClick={() => setIsOpen(false)}>
                        Projects
                    </a>
                    
                    <button onClick={() => setIsOpen(!isOpen)}>
                        X
                    </button>
                </div>
            )}

        </nav>
        
    )
};

export default Navbar;
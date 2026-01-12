import React, {useRef} from "react";
import { useMediaQuery } from "react-responsive";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const container = useRef();

    const isMobile = useMediaQuery({ maxWidth: 768 });
    const startValue = isMobile ? 'top bottom' : "top bottom";

    useGSAP(() => {
        const totalScroll = window.innerWidth;
        gsap.fromTo(container.current,{x: totalScroll}, {
            x: -totalScroll,
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                start: startValue,
                end: "100% top",
                scrub: 1,
                markers: false,
            }, 
        });
    },[]); 

    return(
        <section className="flex items-center justify-center my-20">
            <div className="flex flex-col items-center justify-between space-y-5 mx-6 my-6 overflow-hidden w-full relative p-10">
                <div className="flex space-x-1 min-w-max" ref={container}>
                    <img src="carousel/1.jpg" alt="" className="w-96 h-50 object-cover rounded-2xl "/>
                    <img src="carousel/2.jpg" alt="" className="w-96 h-50 object-cover rounded-2xl "/>
                    <img src="carousel/3.jpg" alt="" className="w-96 h-50 object-cover rounded-2xl "/>
                    <img src="carousel/4.jpg" alt="" className="w-96 h-50 object-cover rounded-2xl "/>
                    <img src="carousel/5.jpg" alt="" className="w-96 h-50 object-cover rounded-2xl "/>
                    <img src="carousel/6.jpg" alt="" className="w-96 h-50 object-cover rounded-2xl "/>
                    <img src="carousel/7.jpg" alt="" className="w-96 h-50 object-cover rounded-2xl "/>
                    <img src="carousel/8.jpg" alt="" className="w-96 h-50 object-cover rounded-2xl "/>
                    <img src="carousel/9.jpg" alt="" className="w-96 h-50 object-cover rounded-2xl "/>
                    <img src="carousel/10.jpg" alt="" className="w-96 h-50 object-cover rounded-2xl "/>

                    <img src="carousel/1.jpg" alt="" className="w-96 h-50 object-cover rounded-2xl "/>
                    <img src="carousel/2.jpg" alt="" className="w-96 h-50 object-cover rounded-2xl "/>
                    <img src="carousel/3.jpg" alt="" className="w-96 h-50 object-cover rounded-2xl "/>
                    <img src="carousel/4.jpg" alt="" className="w-96 h-50 object-cover rounded-2xl "/>
                    <img src="carousel/5.jpg" alt="" className="w-96 h-50 object-cover rounded-2xl "/>
                    <img src="carousel/6.jpg" alt="" className="w-96 h-50 object-cover rounded-2xl "/>
                    <img src="carousel/7.jpg" alt="" className="w-96 h-50 object-cover rounded-2xl "/>
                    <img src="carousel/8.jpg" alt="" className="w-96 h-50 object-cover rounded-2xl "/>
                    <img src="carousel/9.jpg" alt="" className="w-96 h-50 object-cover rounded-2xl "/>
                    <img src="carousel/10.jpg" alt="" className="w-96 h-50 object-cover rounded-2xl "/>
                </div>
                <h1 className="font-bold text-center max-w-xl text-3xl mb-6">We advise and certify organizations committed to advancing climate action and nature-positive progress</h1>
                <p className="max-w-2xl text-center text-sm">
                    At ECRBD, we are dedicated to fostering sustainable development and environmental stewardship. Our mission is to create innovative solutions that address the pressing challenges of climate change, resource management, and community resilience. 
                </p>
            </div>  
        </section>
    )
} 

export default About;
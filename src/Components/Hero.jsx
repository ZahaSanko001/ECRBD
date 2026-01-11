import React, { useState, useEffect } from "react";

const Hero = () => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);

    return(
        <section className="flex items-start justify-center">
            <div className="mx-6 my-6 overflow-hidden rounded-4xl border-l-2 border-r-2 border-blue-300 w-full relative">
                <img src="hero2.jpg" alt="" className="w-full max-h-screen object-cover"/>
                <div className="absolute bottom-10 left-10 right-10 p-4 flex flex-row items-center justify-between">
                    <div className="flex flex-col justify-start items-start w-[50%]">
                        <h1 className="font-bold text-8xl">Make A World of Difference</h1>
                        <div className="flex flex-row justify-between gap-4 mt-2 items-start">
                            <p className="max-w-[70%] font-bold">Join us in our mission to create a sustainable future through innovative solutions and community engagement.</p>
                            <button className="bg-black text-white px-4 py-2 rounded-xl inline-flex items-center whitespace-nowrap">Learn More</button>
                        </div>
                    </div>
                    <div className="flex-none w-[20%] text-right self-end">
                        <div className="text-sm">{now.toLocaleDateString()}</div>
                        <div className="text-lg">{now.toLocaleTimeString()}</div>
                    </div>
                </div>
            </div>  
        </section>
    )
}

export default Hero;        
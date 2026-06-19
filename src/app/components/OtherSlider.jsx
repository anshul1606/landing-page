"use client";
import { motion } from "framer-motion";
import { useState, useRef, Children } from "react";
import Image from "next/image";
  export default function OtherSlider(){
    const [activeIndex, setActiveIndex] = useState(0); 
    const sliderRef = useRef(null);
    const handleScroll = () =>{
        const slider = sliderRef.current;
        const index = Math.round(
            slider.scrollLeft / slider.children[0].offsetWidth
        );
        setActiveIndex(index);
    };
    const scrollLeft = () => {
        sliderRef.current?.scrollBy({
            left: -300,
            behavior: "smooth",
        });
    };
    

    const scrollRight = () => {
        sliderRef.current?.scrollBy({
            left: 300,
            behavior: "smooth",
        });
    };
    
    return(
        <div>
                    <h2 className = "font-semibold text-2xl px-16 py-3">Others
                        <button className="font-normal ml-auto flex bg-black text-white rounded-xl px-6">
                            View all  
                        </button>
                    </h2>
                        
                    <div className = "flex justify-between items-center px-17">
                        <p className = "text-gray-600">Lorem ipsum dolor sit amet consectetur. Sapien congue sed nulla leo fringilla.</p>
                    </div>
                <motion.div className="px-16 relative">
                    <div ref={sliderRef} onScroll={handleScroll} className="flex overflow-x-auto pb-4 rounded-2xl bg-transparent gap-4 snap-x snap-mandatory px-[10%] md:px-0 justify-start md:justify-start" style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}>
                        <div className="flex-none w-[85%] md:w-[50%] lg:w-[25%] snap-center shrink-0 bg-white rounded-2xl p-3 transition-all hover:translate-y-2 hover:shadow-sm hover:bg-gray-100 cursor-pointer">
                            <Image 
                            src="/images/cardb1.png" alt="card1" className="w-full mb-3" height={400} width={400}/>
                            <h1 className="text-2xl font-bold cursor-pointer flex justify-between items-center px-4">Lorem ipsum dolor sit amet
                            </h1>
                            <p className="p-2 px-4">XAI was about to land a major goverment contract. Then Grok Praised Hitler
                            Christian Millitants Are using instagram to recurit-and becoming influencers in the process
                            The trump Administration is using memes to turn mass deportation into Big Joke</p>
                            <hr className="mt-4 border-gray-300"/>
                            <div className = "flex gap-2 py-2">
                                <p>Lorem ipsum</p>
                                <p className="ml-auto">Jume 2025</p>
        
                            </div>
                        </div>
                        <div className="flex-none w-[85%] md:w-[50%] lg:w-[25%] snap-center shrink-0 bg-white rounded-2xl  p-3 transition-all hover:translate-y-2 hover:shadow-sm hover:bg-gray-50 cursor-pointer">
                            <Image 
                            src="/images/cardb2.png" alt="card1" className="w-full mb-3" height={400} width={400}/>
                            <h1 className=" px-4 text-2xl font-bold">Lorem ipsum dolor sit amet</h1>
                            <p className="p-2 px-4">XAI was about to land a major goverment contract. Then Grok Praised Hitler
                            Christian Millitants Are using instagram to recurit-and becoming influencers in the process
                            The trump Administration is using memes to turn mass deportation into Big Joke</p>
                            <hr className="mt-4 border-gray-300"/>
                            <div className = "flex gap-2 py-2">
                                <p>Lorem ipsum</p>
                                <p className="ml-auto">Jume 2025</p>

                            </div>
                        </div>
                        <div className="flex-none w-[85%] md:w-[50%] lg:w-[25%] snap-center shrink-0 bg-white rounded-2xl p-3 transition-all hover:translate-y-2 hover:shadow-sm hover:bg-gray-50 cursor-pointer">
                            <Image
                             src="/images/cardb3.png" alt="card1" className="w-full mb-3" height={400} width={400}/>
                            <h1 className="px-4 text-2xl font-bold">Lorem ipsum dolor sit amet</h1>
                            <p className="p-2 px-4">XAI was about to land a major goverment contract. Then Grok Praised Hitler
                            Christian Millitants Are using instagram to recurit-and becoming influencers in the process
                            The trump Administration is using memes to turn mass deportation into Big Joke</p>
                            <hr className="mt-4 border-gray-300"/>
                            <div className = "flex gap-2 py-2">
                                <p>Lorem ipsum</p>
                                <p className ="ml-auto">Jume 2025</p>

                            </div>
                        </div>
                        <div className="flex-none w-[85%] md:w-[50%] lg:w-[25%] snap-center shrink-0 bg-white rounded-2xl p-3 transition-all hover:translate-y-2 hover:shadow-sm hover:bg-gray-100 cursor-pointer">
                            <Image
                             src="/images/cardb3.png" alt="card1" className="w-full mb-3" height={400} width={400}/>
                            <h1 className="px-4 text-2xl font-bold">Lorem ipsum dolor sit amet</h1>
                            <p className="p-2 px-4">XAI was about to land a major goverment contract. Then Grok Praised Hitler
                            Christian Millitants Are using instagram to recurit-and becoming influencers in the process
                            The trump Administration is using memes to turn mass deportation into Big Joke</p>
                            <hr className="mt-4 border-gray-300"/>
                            <div className = "flex gap-2 py-2">
                                <p>Lorem ipsum</p>
                                <p className="ml-auto">Jume 2025</p>

                            </div>
                        </div>
                        <div className="flex-none w-[85%] md:w-[50%] lg:w-[25%] snap-center shrink-0 bg-white rounded-2xl p-3 transition-all hover:translate-y-2 hover:shadow-sm hover:bg-gray-100 cursor-pointer">
                            <Image src="/images/cardb2.png" alt="card1" className="w-full mb-3" height={400} width={400}/>
                            <h1 className="px-4 text-2xl font-bold">Lorem ipsum dolor sit amet</h1>
                            <p className="p-2 px-4">XAI was about to land a major goverment contract. Then Grok Praised Hitler
                            Christian Millitants Are using instagram to recurit-and becoming influencers in the process
                            The trump Administration is using memes to turn mass deportation into Big Joke</p>
                            <hr className="mt-4 border-gray-300"/>
                            <div className = "flex gap-2 py-2">
                                <p>Lorem ipsum</p>
                                <p className ="ml-auto">Jume 2025</p>
                            </div>
                        </div>
                        <div className="flex-none w-[85%] md:w-[50%] lg:w-[25%] snap-center shrink-0 bg-white rounded-2xl p-3 transition-all hover:translate-y-2 hover:shadow-sm hover:bg-gray-100 cursor-pointer">
                            <Image src="/images/cardb1.png" alt="card1" className="w-full mb-3" height={400} width={400}/>
                            <h1 className="px-4 text-2xl font-bold">Lorem ipsum dolor sit amet</h1>
                            <p className="p-2 px-4"> XAI was about to land a major goverment contract. Then Grok Praised Hitler
                            Christian Millitants Are using instagram to recurit-and becoming influencers in the process
                            The trump Administration is using memes to turn mass deportation into Big Joke</p>
                            <hr className="mt-4 border-gray-300"/>
                            <div className = "flex gap-2 py-2">
                                <p>Lorem ipsum</p>
                                <p className ="ml-auto">Jume 2025</p>

                            </div>
                        </div>
                        <div className="flex-none w-[85%] md:w-[50%] lg:w-[25%] snap-center shrink-0 bg-white rounded-2xl  p-3 transition-all hover:translate-y-2 hover:shadow-sm hover:bg-gray-100 cursor-pointer">
                            <Image 
                            src="/images/cardb1.png" alt="card1" className="w-full mb-3" height={400} width={400}/>
                            <h1 className="px-4 text-2xl font-bold px-6">Lorem ipsum dolor sit amet</h1>
                            <p className="p-2 px-4">XAI was about to land a major goverment contract. Then Grok Praised Hitler
                            Christian Millitants Are using instagram to recurit-and becoming influencers in the process
                            The trump Administration is using memes to turn mass deportation into Big Joke</p>
                            <hr className="mt-4 border-gray-300"/>
                            <div className = "flex gap-2 py-2">
                                <p>Lorem ipsum</p>  
                                <p className ="ml-auto">Jume 2025</p>
        
                            </div>
                        </div>
                    </div>
                    <button onClick={scrollLeft} className = "hidden md:flex absolute rounded-full hover:bg-gray-400 left-4 top-1/2">
                                <Image
                                 src="/images/left-arrow.png" alt="leftarrow" height={20} width={20}/>
                            </button>
        
                            <button onClick={scrollRight} className="hidden md:flex absolute rounded-full hover:bg-gray-400 right-4 top-1/2">
                                <Image 
                                src="/images/right-arrow.png" alt="rightarrow" height={20} width={20}/>
                            </button>
                </motion.div>
                <div className="flex justify-center gap-2 mt-4 md:hidden">
                    {[...Array(7)].map((_,index)=>(
                        <span
                        key={index}
                        className={`transition-all duration-300 rounded-full ${
                            activeIndex === index
                            ? "w-6 h-2 bg-blue-600"
                            : "w-6 h-2 bg-blue-300"
                        }`}
                        />
                    ))}
                </div>
        </div>
    );
  }
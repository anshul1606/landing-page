"use client";
import { motion } from "framer-motion";
import{ useState, useRef } from "react";
import Image from "next/image";
import SectionReveal from "./ScrollReveal";
export default function DiscoverSlider(){
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);
    const handleScroll = () => {
        const slider = sliderRef.current;
        const index = Math.round(
            slider.scrollLeft / slider.children[0].offsetWidth
        );
        setActiveIndex(index);
    };
    const scrollLeft = () =>{
        sliderRef.current?.scrollBy({
            left: -300,
            behavior: "smooth",
        });
    };
    const scrollRight = () =>{
        sliderRef.current?.scrollBy({
            left: 300,
            behavior: "smooth",
        });
    };
    return(
        <SectionReveal>
            <section className="py-16">
                <div>
                    <div className="flex justify-between items-center px-12">
                        <h2 className="px-6 py-6 font-bold text-2xl text-gray-900 dark:text-white">Discover</h2>  
                    </div>
                    <motion.div                      
                        className="px-16 relative">  
                        <div ref={sliderRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto gap-4 scroll-smooth px-[0%] md:px-0 justify-start md:justify-start" style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            }}>
                            <div className="flex-none w-[85%] md:w-[50%] lg:w-[25%] snap-center shrink-0 ">
                                <div className="inline-flex px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-2xl transition-all duration-300 hover:translate-y-2 mb-2">
                                    POLITICS  
                                </div>
                                <div className="bg-white rounded-2xl p-3 transition-all hover:-translate-y-2 hover:shadow-sm hover:bg-gray-100 cursor-pointer ">
                                    <Image
                                    src="/images/card1.png" alt="card1" className="w-full py-3" height={300} width={300}/>
                                    <p className="p-2 px-4 font-semibold">XAI was about to land a major goverment contract. Then Grok Praised Hitler</p>
                                    <hr className="mt-4 border-gray-300"/>
                                    <p className="p-2 px-4 font-semibold">Christian Millitants Are using instagram to recurit-and becoming influencers in the process</p>
                                    <hr className="mt-4 border-gray-300"/>
                                    <p className="p-2 px-4 font-semibold">The trump Administration is using memes to turn mass deportation into Big Joke</p>
                                </div>
                            </div>
                            <div className="flex-none w-[85%] md:w-[50%] lg:w-[25%] snap-center shrink-0">
                                <div className="inline-flex px-6 py-2 bg-black text-white rounded-2xl transition-all duration-300 hover:translate-y-2 mb-2">
                                SECURITY
                                </div>
                                <div className="bg-white rounded-2xl  transition-all duration-300 hover:-translate-y-2 hover:shadow-sm hover:bg-gray-100 cursor-pointer p-3">
                                    <Image
                                    src="/images/card2.png" alt="card2" className="w-full py-3" height={300} width={300}/>
                                    <p className="p-2 px-4 font-semibold">Security News this week: Russia is cracking Down on End-to-End Encrypted Calls</p>
                                    <hr className="mt-4 border-gray-300"/>
                                    <p className="p-2 px-4 font-semibold">Data Brokers face new pressure for hiding opt-out pages from google</p>
                                    <hr className="mt-4 border-gray-300"/>
                                    <p className="p-2 px-4 font-semibold">Data Brokers are hiding their opt-out pages from google</p>
                                </div>
                            </div>  
                            <div className="flex-none w-[85%] md:w-[50%] lg:w-[25%] snap-center shrink-0">
                                <div className="inline-flex px-6 py-2 bg-black text-white rounded-2xl transition-all duration-300 hover:translate-y-2 mb-2">
                                SCIENCE
                                </div> 
                                <div className="bg-white rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-sm hover:bg-gray-100 cursor-pointer p-3">   
                                    <Image
                                    src="/images/card3.png" alt="card2" className="w-full py-3" height={300} width={300}/>
                                    <p className="p-2 px-4 font-semibold">Security News this week: Russia is cracking Down on End-to-End Encrypted Calls</p>
                                    <hr className="mt-4 border-gray-300"/>
                                    <p className="p-2 px-4 font-semibold">Data Brokers face new pressure for hiding opt-out pages from google</p>
                                    <hr className="mt-4 border-gray-300"/>
                                    <p className="p-2 px-4 font-semibold">Data Brokers are hiding their opt-out pages from google</p>
                                </div>
                            </div>
                            <div className="flex-none w-[85%] md:w-[50%] lg:w-[25%] snap-center shrink-0">
                                <div className="inline-flex px-6 py-2 bg-black text-white rounded-2xl transition-all duration-300 hover:translate-y-2 mb-2">
                                SCIENCE
                                </div>
                                <div className="bg-white rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-sm hover:bg-gray-100 cursor-pointer p-3">
                                    <Image
                                    src="/images/card4.png" alt="card2" className="w-full py-3" height={300} width={300}/>
                                    <p className="p-2 px-4 font-semibold">Security News this week: Russia is cracking Down on End-to-End Encrypted Calls</p>
                                    <hr className="mt-4 border-gray-300"/>
                                    <p className="p-2 px-4 font-semibold">Data Brokers face new pressure for hiding opt-out pages from google</p>
                                    <hr className="mt-4 border-gray-300"/>
                                    <p className="p-2 px-4 font-semibold">Data Brokers are hiding their opt-out pages from google</p>
                                    </div>
                            </div>
                            <div className="flex-none w-[85%] md:w-[50%] lg:w-[25%] snap-center shrink-0">
                                <div className="inline-flex px-6 py-2 bg-black text-white rounded-2xl transition-all duration-300 hover:translate-y-2 mb-2">
                                SCIENCE
                                </div>
                                <div className="bg-white rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-sm hover:bg-gray-100 cursor-pointer p-3">
                                    <Image
                                    src="/images/card4.png" alt="card2" className="w-full py-3" height={300} width={300}/>
                                    <p className="p-2 px-4 font-semibold">Security News this week: Russia is cracking Down on End-to-End Encrypted Calls</p>
                                    <hr className="mt-4 border-gray-300"/>
                                    <p className="p-2 px-4 font-semibold">Data Brokers face new pressure for hiding opt-out pages from google</p>
                                    <hr className="mt-4 border-gray-300"/>
                                    <p className="p-2 px-4 font-semibold">Data Brokers are hiding their opt-out pages from google</p>
                                </div>
                            </div>  
                            <div className="flex-none w-[85%] md:w-[50%] lg:w-[25%] snap-center shrink-0">
                                <div className="inline-flex px-6 py-2 bg-black text-white rounded-2xl transition-all duration-300 hover:translate-y-2 mb-2">
                                SCIENCE
                                </div>
                                <div className="bg-white rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-sm hover:bg-gray-100 cursor-pointer p-3">
                                    <Image
                                    src="/images/card4.png" alt="card2" className="w-full py-3" height={300} width={300}/>
                                    <p className="p-2 px-4 font-semibold">Security News this week: Russia is cracking Down on End-to-End Encrypted Calls</p>
                                    <hr className="mt-4 border-gray-300"/>
                                    <p className="p-2 px-4 font-semibold">Data Brokers face new pressure for hiding opt-out pages from google</p>
                                    <hr className="mt-4 border-gray-300"/>
                                    <p className="p-2 px-4 font-semibold">Data Brokers are hiding their opt-out pages from google</p>
                                    </div>
                            </div> 
                            <div className="flex-none w-[85%] md:w-[50%] lg:w-[25%] snap-center shrink-0">
                                <div className="inline-flex px-6 py-2 bg-black text-white rounded-2xl transition-all duration-300 hover:translate-y-2 mb-2">
                                SCIENCE
                                </div>
                                <div className="bg-white rounded-2xl  transition-all duration-300 hover:-translate-y-2 hover:shadow-sm hover:bg-gray-100 cursor-pointer p-3">
                                    <Image src="/images/card4.png" alt="card2" className="w-full py-3" height={300} width={300}/>
                                    <p className="p-2 px-4 font-semibold">Security News this week: Russia is cracking Down on End-to-End Encrypted Calls</p>
                                    <hr className="mt-4 border-gray-300"/>
                                    <p className="p-2 px-4 font-semibold">Data Brokers face new pressure for hiding opt-out pages from google</p>
                                    <hr className="mt-4 border-gray-300"/>
                                    <p className="p-2 px-4 font-semibold">Data Brokers are hiding their opt-out pages from google</p>
                                    </div>
                            </div> 
                            <div className="flex-none w-[85%] md:w-[50%] lg:w-[25%] snap-center shrink-0">
                                <div className="inline-flex px-6 py-2 bg-black text-white rounded-2xl transition-all duration-300 hover:translate-y-2 mb-2">
                                POLITICS
                                </div>
                                <div className="bg-white rounded-2xl  transition-all duration-300 hover:-translate-y-2 hover:shadow-sm hover:bg-gray-100 cursor-pointer p-3">
                                    <Image src="/images/card1.png" alt="card1" className="w-full py-3" height={300} width={300}/>
                                    <p className="p-2 px-4 font-semibold">XAI was about to land a major goverment contract. Then Grok Praised Hitler</p>
                                    <hr className="mt-4 border-gray-300"/>
                                    <p className="p-2 px-4 font-semibold">Christian Millitants Are using instagram to recurit-and becoming influencers in the process</p>
                                    <hr className="mt-4 border-gray-300"/>
                                    <p className="p-2 px-4 font-semibold">The trump Administration is using memes to turn mass deportation into Big Joke</p>
                                </div>
                            </div>
                        </div> 
                        
                            <button onClick={scrollLeft} className="hidden md:flex absolute  left-0 md:left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10">
                                <Image
                                 src="/images/left-arrow.png" alt="leftarrow" height={20} width={20} className="hover:bg-gray-400 rounded-full"/>
                            </button>

                            <button onClick={scrollRight} className="hidden md:flex absolute right-0 md:right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10">
                                <Image 
                                  src="/images/right-arrow.png" alt="rightarrow" height={20} width={20} className="hover:bg-gray-400 rounded-full"/>
                            </button>
                    </motion.div>
                    <div className="flex justify-center gap-2 mt-4 md:hidden">
                        {[...Array(8)].map((_, index) => (
                            <span
                            key={index}
                            className={`transition-all duration-300 rounded-full ${
                                activeIndex === index
                                ? "w-6 h-2 bg-blue-600"
                                : "w-2 h-2 bg-gray-300"
                            }`}
                            />
                        ))}
                    </div>
                </div>  
            </section>
        </SectionReveal>
        );
    }
"use client";
import { useState } from "react";
import Image from "next/image";
export default function Navbar  (){
    const[menuOpen, setMenuOpen]=useState(false)
    
    return(
        <div className="w-full">
            <nav className="bg-blue-600 flex items-center justify-between text-white shadow-lg px-4 py-2">
                <button
                    className="lg:hidden text-3xl"
                    onClick={() => setMenuOpen(!menuOpen)}>
                    <Image
                        src="/images/menu.png"
                        alt="menu"
                        width={24}
                        height={24}/>
                </button>
                <div className="flex items-center gap-2 px-3">
                    <Image
                    src="/images/nav-logo1.png" alt="image1" width={60} height={50} className="sm:h-11 h-8 hover:opacity-90 transition-opacity brightness-125"/>
                    <Image
                    src="/images/nav-logo2.png" alt = "image2" width={70} height={50} className="sm:h-11 h-8 hover:opacity-90 transition-opacity brightness-125"/>
                </div>
                    <div className="hidden lg:flex items-center gap-6 ml-auto">
                        <div className="flex flex-row justify-between items-start gap-4 lg:gap-8 py-3">
                            
                            <div className="font-semibold">
                                Buy In
                                <select className="bg-transparent border-none outline-none">
                                <option>Gurgaon</option>
                                <option>City 2</option>
                                <option>City 3</option>
                                <option>City 4</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-3 bg-white rounded-full p-3">
                                    <div className="inline-flex items-center px-5 py-2 bg-blue-500 text-white rounded-full">
                                    <span className="mr-2">Gurugram</span>
                                    <span>&times;</span>
                                    </div>

                                    <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-full">
                                    + Add
                                    </button>
                                </div>

                        </div>
                    </div>
                    
            </nav>
            {menuOpen && (
            <div className="lg:hidden top-[52px] left-0 w-full bg-blue-500 shadow-lg z-50">
                <div className="flex flex-col gap-4 px-4 py-4">
                <div>
                    Buy In
                    <select className="bg-transparent ml-2">
                        <option>Gurgaon</option>
                        <option>City 2</option>
                        <option>City 3</option>
                        <option>City 4</option>
                    </select>
                </div>
                <div className="flex flex-wrap items-center gap-3 bg-white rounded-full p-3 w-full lg:w-auto">
            
                        <div className="inline-flex items-center px-5 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-400">
                            <span className="mr-2">Gurugram</span>
                            <span className="cursor-pointer">&times;</span>
                        </div>

                        <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-gray-100">
                            + Add
                        </button>

            </div>
            <button className="px-2 py-2 ">
                <Image
                src="/images/nav-logo3.png" alt="image3" width={100} height={100}/>
            </button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg">
            Get Started
            </button>
            </div>
        </div>
    )}
    </div>
    );
}
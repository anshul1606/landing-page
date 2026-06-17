"use client";
import{ useRef } from "react";
import Image from "next/image";
export default function Footer(){
    return(
        <section className="py-13">
        <div className="relative bg-black px-4 sm:px-8 lg:px-16 py-10 lg:py-20 flex flex-col lg:flex-row gap-10 overflow:hidden text-xl sm:text-sm lg:text-base">
            <Image src="/images/vector.png" alt="footer" className="absolute rounded-xl bottom-0 right-0 w-700 sm:w-70 lg:w-900 h-45 sm:h-70 lg:h-60 z-auto opacity-50 pointer-events-none" height={450} width={450}/>
            <div className="flex-1"> 
                <div className="flex gap-2 py-6">
                    <Image src="/images/nav-logo1.png" alt="image1" height={60} width={60} className="h-8 w-auto lg:h-10 hover:opacity-90 transition-opacity brightness-125"/>
                    <Image src="/images/nav-logo2.png" alt = "image2" height={80} width={80} className="h-8 w-auto lg:h-10 hover:opacity-90 transition-opacity brightness-125"/> 
                </div>
                <div className="py-2">
                    <h1 className="text-white">Follow us on</h1>
                </div>
                <div className="flex gap-3 mt-3">
                    <a href="https://www.instagram.com/" target="_blank"><Image src="/images/instagram.png" alt="instagram" width={20} height={20}/></a>
                    <a href="https://x.com/BigGrowDigital?s=20" target="_blank"><Image src="/images/twitter.png" alt="instagram" width={20} height={20}/></a>
                    <a href="https://www.facebook.com/bigestate.io/" target="_blank"><Image src="/images/facebook.png" alt="instagram" width={20} height={20}/></a>
                    <a href="https://www.linkedin.com/company/big-estate" target="_blank"><Image src="/images/linkdln.png" alt="instagram" width={20} height={20}/></a>
                </div>
                <div className="mt-8 lg:mt-8">   
                    <h1 className="text-white">
                        copyright @ 2023 bigestate.inc
                    </h1>
                </div>
            </div> 
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 text-xl sm:text-xl lg:text-base">
                <div className="text-white py-5">
                    <ul >
                        <li>For Buyers</li>
                        <li>For Developers</li>
                        <li>For Brokers</li>
                        <li>For Channels Partners</li>
                    </ul>
                </div>
                <div className="text-white py-5">
                    <ul>
                        <li>Work With Us</li>
                        <li>Private Coaching</li>
                        <li>About Us</li>
                        <li>FAQs</li>
                        <li>Business Advices</li>
                    </ul>
                </div>
                <div className="text-white py-5">
                    <ul>
                        <li>Our Work </li>
                        <li>Our Team</li>
                        <li>Our Commitment</li>
                        <li>Support Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-blue-600 flex gap-3 py-2">Subscribe to our newsletter</h1>
                    <div className="mt-4">
                        <a href="https://www.bigestate.io/contact-us" target="_blank" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
                            Subscribe
                        </a>
                        <div className="text-white flex flex-row sm:flex-row gap-4 sm:gap-10 mt-8">  
                            <a href="https://www.bigestate.io/in/gurgaon" target="_blank" className="whitespace-nowrap">Legal Stuff</a>
                            <a href="https://enterprise.bigestate.io/privacy-policy" target="_blank" className="whitespace-nowrap">Privacy Policy</a>
                            <a href="https://www.bigestate.io/in/gurgaon" target="_blank" className="whitespace-nowrap">Security</a>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    </section>
    );
}
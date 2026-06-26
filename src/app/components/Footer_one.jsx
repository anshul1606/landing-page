"use client";
import Image from "next/image";
export default function Footer_one(){
    return(
        <section className="py-16">
        <div className="flex flex-col w-full sm:flex-row items-center gap-4 items-center px-4 sm:px-6 lg:px-12">
            <div className="relative bg-[#546CC0] w-full p-6 rounded-4xl overflow:hidden">
                    <Image src="/images/footer-top.png" alt="top of footer" className="absolute rounded-2xl top-0 left-0 w-17 sm:w-17 lg:w-20 h-auto z-10 overflow-hidden" height={460} width={460}/>
                    <Image 
                    src="/images/footer-bottom.png" alt="bottom of footer" className="absolute rounded-xl bottom-0 right-0 w-27 sm:w-24 lg:w-32 h-auto z-10 overflow-hidden" height={360} width={360}/>
                <div className="relative z-20 w-[99%] py-6 bg-white/15  border border-white/30 rounded-md flex flex-col justify-center items-center text-center">
                    <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mb-4">Subscribe Today to get the latest updates</h1>
                    <button className="bg-white text-blue-500 rounded-md p-2 hover:bg-blue-200">Subscribe</button>   
                </div>
            </div>
        </div>
        </section>
    );
}
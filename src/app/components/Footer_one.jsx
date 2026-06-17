"use client";
import Image from "next/image";
export default function Footer_one(){
    return(
        <section className="py-16">
        <div className="flex flex-col sm:flex-row items-center gap-4 items-center px-4 sm:px-6 lg:px-12">
            <div className="relative bg-blue-800 w-full min-h-[50px] p-6 rounded-xl flex justify-center items-center">
                    <Image src="/images/footer-top.png" alt="top of footer" className="absolute rounded-xl -top-0.5 -left-0.5 w-16 sm:w-16 lg:w-20 h-auto z-auto overflow-hidden" height={460} width={460}/>
                    <Image 
                    src="/images/footer-bottom.png" alt="bottom of footer" className="absolute rounded-xl -bottom-0.5 -right-0.5 w-27 sm:w-24 lg:w-32 h-auto z-auto overflow-hidden" height={360} width={360}/>
                <div className="w-[97%] py-6 sm:py-6 bg-white/5 backdrop-blur-sm border border-white/5 rounded-md flex flex-col justify-center items-center text-center opacity-80">
                    <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mb-4">Subscribe Today to get the latest updates</h1>
                    <button className="bg-white text-blue-500 rounded-md p-2 hover:bg-blue-700">Subscribe</button>   
                </div>
            </div>
        </div>
        </section>
    );
}
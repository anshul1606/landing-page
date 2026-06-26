"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Hero(){
    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 2 }}
        >
            <div className="px-4 md:px-8 lg:px-12 py-3 text-sm text-gray-600 dark:text-gray-400">Home / Blogs / Blog 1
                <div className="py-4 px-12">
                    <Image src="/images/image1.png" alt="img" height={800} width={1400} className="w-full h-auto rounded-xl"/>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-12">
                <div className="w-full lg:w-2/3 p-4">
                        <div className="flex gap-2 px-3">
                            <Image
                             src="/images/clock.png" alt="clock" height={15} width={20}/>Published 17 mins ago
                        </div>
                    <div className="p-3"><h1 className="text-2xl text-blue-600 dark:text-blue-400">FINANCE</h1>
                        <h1 className="font-bold py-4 text-2xl md:text-3xl lg:text-5xl leading-tight text-gray-900 dark:text-white">Why July 23, 2024, is a game-changer for capital gains in your 2025 ITR filing?</h1>
                        <p className="text-gray-700 dark:text-gray-300 leading-7">Lorem ipsum dolor sit amet consectetur. Amet felis in lorem praesent viverra. Sit rhoncus nibh a praesent mi nunc enim. Laoreet eget libero donec dictum quam arcu. Morbi est neque aliquam sed nulla volutpat vitae. Aliquet molestie eu placerat metus posuere eget. </p>
                        <h2 className="font-medium text-xl md:text-2xl lg:text-3xl py-2">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit Sapien congue sed nulla</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-7">Lorem ipsum dolor sit amet consectetur. Amet felis in lorem praesent viverra. Sit rhoncus nibh a praesent mi nunc enim. Laoreet eget libero donec dictum quam arcu. Morbi est neque aliquam sed nulla volutpat vitae. Aliquet molestie eu placerat metus posuere eget. Aliquet ornare est non ultrices arcu. Quam sem enim diam sit. Nisl ipsum ullamcorper tincidunt sagittis nisl massa maecenas nullam egestas. Et vitae massa neque pellentesque amet ornare consequat morbi quis. Porta mauris mauris varius convallis ac interdum tempus enim sed. At a elementum pellentesque nibh. Iaculis bibendum ut sed sit risus sit odio et.</p>
                        <p className="text-gray-700 dark:text-gray-300 leading-7 py-2">
                            Risus mattis tellus sit turpis suspendisse platea at est nunc. Massa facilisis vitae semper nec nulla faucibus amet odio amet. Sollicitudin ornare egestas hac malesuada mauris. Egestas id porta cursus sed pulvinar fusce. Pulvinar ullamcorper adipiscing duis rhoncus enim dapibus. Orci pharetra sit nunc platea. Et id feugiat nullam cras nulla nisl vulputate vitae. Dignissim nulla tellus interdum tempor gravida. Diam mus orci pellentesque diam cursus volutpat. Mattis diam tellus faucibus dictum. Tristique mauris quis egestas nibh. Consectetur arcu sed leo morbi sapien. Aenean malesuada adipiscing ultrices mollis nam dui. Vehicula in tristique amet mi egestas tincidunt sagittis elementum.</p>
                    </div> 
                    <div className="py-3">
                        <Image
                         src="/images/image2.png" alt="img2" height={400} width={1000} className="w-full h-auto rounded-xl"/>
                    </div>
                    <p className="px-3 py-3 text-gray-800 dark:text-gray-200 leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ea pariatur voluptates numquam ratione ad facere sequi iusto quos molestiae, amet quam earum explicabo saepe consectetur, vitae nihil consequatur maxime? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatum, sapiente pariatur eligendi laborum vero cum repellat, iusto odit expedita similique ut dignissimos ab. Expedita?</p>
                    <h2 className="font-bold py-4 text-2xl md:text-3xl lg:text-5xl leading-tight">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit Lorem ipsum dolor sit amet</h2>
                    <p className="px-3 py-3 text-gray-800 dark:text-gray-200 leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ea pariatur voluptates numquam ratione ad facere sequi iusto quos molestiae, amet quam earum explicabo saepe consectetur, vitae nihil consequatur maxime? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatum, sapiente pariatur eligendi laborum vero cum repellat, iusto odit expedita similique ut dignissimos ab. Expedita?</p>       
                    <h2 className="px-3 py-4 text-2xl  uppercase">
                        Lorem ipsum
                    </h2>
                </div>

            <div className="w-full lg:w-1/3 px-4 lg:px-0">
            <div className="lg:sticky lg:top-24 space-y-8">
                <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-zinc-800">
                    <h1 className="font-bold text-2xl text-gray-900 dark:text-white py-3">Content</h1>
                    <ul className="space-y-1.5">
                        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors"><span className="mr-1">|</span>Heading</li>
                        <li className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors"><span className="mr-1">|</span>Sub Heading 1</li>
                        <li className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors"><span className="mr-1">|</span>Sub Heading 2</li>
                        <li className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors"><span className="mr-1">|</span>Sub Heading 3</li>
                        <li className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors"><span className="mr-1">|</span>Sub Heading 4</li>
                    </ul>
                </div>
                <div className="w-full lg:w-2/3 px-4 lg:px-0">
                    <div className="lg:sticky lg:top-24">
                    <h1 className="font-bold text-gray-500 dark:text-white">Latest News & Topics</h1>
                    <div className="flex flex-row items-center justify-between gap-4 py-3"><p className="text-gray-800 dark:text-gray-200">The story trend behind MSNBC's silly new name.</p>
                        <Image
                         src="/images/news-img1.png" alt="news1" height={60} width={80} className="rounded-lg transition-transform group-hover:scale-105"/>
                    </div>
                    <h1 className="text-gray-600 font-semibold"></h1>Politics
                    <hr className="mt-4 border-gray-300 dark:border-zinc-700"/>
                    <div className="flex flex-row items-center justify-between gap-4 py-3"><p className="text-gray-800 dark:text-gray-200">The strange reason why the Trump administration suddenly cares about these birds.</p>
                        <Image
                         src="/images/news-img2.png" alt="news2" height={60} width={80} className="rounded-lg transition-transform group-hover:scale-105"/>
                    </div>
                    <h1 className="text-gray-600 font-semibold"></h1>Earth
                    <hr className="mt-4 border-gray-300 dark:border-zinc-700"/>
                    <div className="flex flex-row items-center justify-between gap-4 py-3"><p className="text-gray-800 dark:text-gray-200">A dangerous new idea about what Democrats are doing wrong.</p>
                        <Image
                         src="/images/news-img3.png" alt="news3" height={60} width={80} className="rounded-lg transition-transform group-hover:scale-105"/>  
                    </div>
                    <h1 className="text-gray-500 dark:text-gray-400 font-semibold"></h1>Politics
                    </div>
                </div>
                <div className="p-10">
                    <Image
                     src="/images/image3.png" alt="img3" width={270} height={170} className="w-full rounded-xl shadow-md"/>
                </div>
                </div>
            </div>
        </div>
    </motion.div>
    );
}
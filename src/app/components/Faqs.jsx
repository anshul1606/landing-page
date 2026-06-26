"use client";
import { useState } from "react";
export default function Faqs(){
    const [openIndex, setOpenIndex] = useState(null);
    const faqs =[
            {
                question : "What is BigEstate",
                answer: "BigEstate helps users find and invest in properties."
            },
            {
                question : "How do I contact support?",
                answer : "You can contact us through our Contact Us page."
            },
            {
                question : "Is registration free?",
                answer : "Yes, registration is completely free."
            }
        ];
    return(
        <div className=" mx-auto px-11 py-10 ">
            <h2 className="text-3xl font-bold px-5 py-3 mb-5">
            Frequently Asked Questions
            </h2>
            

            {faqs.map((faq, index) => (
            <div
                key={index}
                className=" mb-4 overflow-hidden transition-all duration-300"
            >
                <button
                onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center px-5 py-2 text-left font-semibold transition-colors"
                >
                {faq.question}
                <span className={`flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-500 font-bold transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0" 
                }`}> ▼ 
                </span>
                </button>
                <div
                 className={`overflow-hidden transition-all duration-600 ease-in-out ${
                    openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                    }`}>
                    <p className="px-5 pb-5 bg-gray-50"> {faq.answer}</p>
                    <hr className="mt-4 border-gray-300"/>
                    
                </div>
        </div>
    ))}
  </div>
    );
}
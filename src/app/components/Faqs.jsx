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
        <div className="max-w-3xl mx-auto py-10">
            <h2 className="text-3xl font-bold mb-6">
            Frequently Asked Questions
            </h2>

            {faqs.map((faq, index) => (
            <div
                key={index}
                className="border rounded-lg mb-4 overflow-hidden"
            >
                <button
                onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-4 font-semibold"
                >
                {faq.question}
                <span className={`text-2xl font-bold transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                }`}>+
                </span>
                </button>
                <div
                 className={`overflow-hidden transition-all duration-600 ease-in-out px-4 ${
                    openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                    }`}>
                    <p className="bg-gray-50"> {faq.answer}</p>
                    </div>
        </div>
    ))}
  </div>
    );
}
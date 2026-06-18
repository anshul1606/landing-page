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
                <span>
                    {openIndex === index ? "-" : "+"}
                </span>
                </button>

                {openIndex === index && (
                <div className="p-4 bg-gray-50">
                    {faq.answer}
                </div>
                )}
        </div>
    ))}
  </div>
    );
}
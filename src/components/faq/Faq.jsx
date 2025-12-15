"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "Our return policy lasts 30 days. If 30 days have gone by, unfortunately we can’t offer you a refund or exchange.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order has shipped, we’ll send you a tracking number via email.",
  },
  {
    question: "Can I purchase items again?",
    answer:
      "Yes, you can repurchase items by visiting your order history and clicking reorder.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping costs will apply and will be added at checkout.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept Visa, MasterCard, PayPal, and all major credit cards.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Yes, you can change or cancel your order within 12 hours of placing it by contacting our support team.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-5 pt-0">
      <div className="max-w-[var(--max-width)] mx-auto">
        <h4 className="w-auto md:w-[440px] md:mx-auto text-[var(--main-primary-text-color)] text-3xl md:text-5xl text-center mb-5 md:mb-12 font-semibold leading-normal md:leading-14">
          Frequently <br /> Asked Questions.
        </h4>

        <div className="max-w-2xl mx-auto space-y-4 min-h-auto md:min-h-[500px]">
          {faqs.map((faq, index) => (
            <div key={index}>
              {/* Button with rounded-full */}
              <div className="rounded-full border border-[var(--main-primary-text-color)] bg-white shadow transition-all duration-300">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-4 text-left cursor-pointer"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-epilogue text-[15px] font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[var(--main-primary-text-color)] transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-0" : "-rotate-90"
                    }`}
                  />
                </button>
              </div>

              {/* Answer box (separate from rounded-full) */}
              <div
                className={`transition-all duration-300 overflow-hidden px-4 text-gray-700 ${
                  openIndex === index
                    ? "max-h-screen opacity-100 py-4"
                    : "max-h-0 opacity-0 py-0"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is icanheal?",
    answer:
      "icanheal is a patient support platform that helps individuals navigating cancer care. We assist with treatment financing, hospital coordination, expert doctor access, and ongoing value-added services support throughout your journey.",
  },
  {
    question: " Who can use icanheal's services?",
    answer:
      "Anyone diagnosed with cancer or critical conditions such as rare diseases, their caregivers or family members can use icanheal to find support, treatment options, and financing assistance."
  },
  {
    question: "How can icanheal help me during cancer treatment?",
    answer:
      `We provide end-to-end support including:
      <ol>
        <li>Doctor consultation & second opinion</li>
        <li>Personalized treatment planning</li>
        <li>Hospital & appointment coordination</li>
        <li>Travel and accommodation assistance</li>
        <li>Post-treatment follow-up</li>
      </ol>`
  },
  {
    question: "Is icanheal a hospital or clinic?",
    answer:
      "No, icanheal is not a hospital. We are a one stop support platform that partners with hospitals, doctors, and financial and value added service providers to help you access the care you need.",
  },
  {
    question: "Is my information safe with icanheal?",
    answer:
      "Yes. We take your privacy seriously. All personal and medical information is securely stored and shared only with your consent.",
  },
  {
    question: "Can I use icanheal if I already have a doctor or hospital?",
    answer:
      "Absolutely. We support patients regardless of their current hospital or doctor. Our services are meant to complement your care, not replace it.",
  },
  {
    question: "How can I get started with icanheal?",
    answer:
      "Just visit our website or download the app. You can also request a call, and our team will reach out to guide you.",
  },
   {
    question: "What support does icanheal offer for caregivers and families?",
    answer:
      "We provide caregiver guidance, informational resources, and help with hospital coordination and logistics, so families can focus on what matters most.",
  },
  {
    question: "Is icanheal available in my city or hospital?",
    answer:
      "We’re continuously expanding our network. Get in touch with us through the app or website, and we’ll confirm availability in your region.",
  },
   {
    question: " Can I speak to someone directly for help?",
    answer:
      "Yes, absolutely. You can request a callback through the website or app, and a member of our care team will reach out to assist you personally. We're here to guide you every step of the way.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-5 pt-0">
      <div className="max-w-(--max-width) mx-auto">
        <h4 className="w-auto md:mx-auto text-(--main-primary-text-color) text-3xl md:text-4xl text-center mb-5 md:mb-12 font-semibold leading-normal md:leading-14">
          Frequently  Asked Questions.
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
                  <div
                    className="faq-answer leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

import CardUpperEffect from "@/components/cardUpperEffect/CardUpperEffect";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full h-40 md:h-80 relative">
        <Image
          src="/assets/privacy_banner.png"
          fill
          priority
          className="w-full h-full object-cover"
          alt="image"
        />
      </div>
      <CardUpperEffect />
      <section className="px-5 pt-0 pb-10 md:pb-16">
        <div className="max-w-[var(--max-width)] mx-auto">
          <h2 className="text-[var(--main-primary-text-color)] font-epilogue text-4xl md:text-6xl font-semibold text-center px-4 sm:px-10 md:px-20 lg:px-60 pb-5">
            Privacy Policy
          </h2>
          <p className="text-[var(--secondary-text-color)] text-center mb-2 text-sm">
            Effective Date: [Insert Date]
          </p>
          <p className="w-full md:w-[80%] mx-auto text-[var(--secondary-text-color)] font-normal text-center text-lg mb-16">
            At icanheal, your privacy is important to us. This Privacy Policy
            outlines how we collect, use, protect, and disclose your personal
            information when you use our website and services.
          </p>
          <div className="flex items-start flex-col md:flex-row gap-5 justify-between border-b border-[#e3e3e3] pb-5 md:pb-10">
            <div className="w-full md:w-[49%]">
              <span className="text-[var(--secondary-text-color)] inline-block mb-2">
                1. Information We Collect
              </span>
              <p className="text-[var(--main-primary-text-color)] font-epilogue text-2xl md:text-3xl lg:text-6xl md:leading-normal lg:leading-[64px] font-semibold pb-5 pt-2">
                We may collect the following types of information:
              </p>
            </div>
            <div className="w-full md:w-[42%]">
              <ul className="list-disc pl-5">
                <li className="text-[var(--secondary-text-color)] mb-10">
                  Personal Information: Name, email address, phone number,
                  gender, date of birth, and other details you provide during
                  registration or communication.
                </li>
                <li className="text-[var(--secondary-text-color)] mb-10">
                  Health-Related Information: Medical history, treatment
                  details, prescriptions, diagnosis, and health documents you
                  choose to share.
                </li>
                <li className="text-[var(--secondary-text-color)] mb-10">
                  Usage Data: IP address, browser type, operating system, device
                  information, pages visited, and access times.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-start flex-col md:flex-row gap-5 justify-between pt-10 md:pt-16 border-b border-[#e3e3e3] pb-0 md:pb-12">
            <div className="w-full md:w-[49%]">
              <span className="text-[var(--secondary-text-color)] inline-block mb-2">
                2. How We Use Your Information
              </span>
              <p className="text-[var(--main-primary-text-color)] font-epilogue text-2xl md:text-3xl lg:text-6xl md:leading-normal lg:leading-[64px] font-semibold pb-5 pt-2">
                We use your information to:
              </p>
            </div>
            <div className="w-full md:w-[42%]">
              <ul className="list-disc pl-5">
                <li className="text-[var(--secondary-text-color)] mb-10">
                  Provide and personalize services based on your role (patient,
                  caregiver, doctor, hospital)
                </li>
                <li className="text-[var(--secondary-text-color)] mb-10">
                  Connect you with relevant support programs (PAP, FAS, VAS)
                </li>
                <li className="text-[var(--secondary-text-color)] mb-10">
                  Facilitate teleconsultations and document sharing
                </li>
                <li className="text-[var(--secondary-text-color)] mb-10">
                  Improve our platform, content, and user experience
                </li>

                <li className="text-[var(--secondary-text-color)] mb-10">
                  Communicate updates, offers, or important service messages
                </li>
                <li className="text-[var(--secondary-text-color)] mb-10">
                  Comply with legal and regulatory requirements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

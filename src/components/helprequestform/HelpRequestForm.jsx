import React from "react";
import ContactSupportForm from "../contactsupportform/ContactSupportForm";
import ContactLinks from "../contactlinks/ContactLinks";
import Image from "next/image";
const HelpRequestForm = () => {
  return (
    <div className="md:flex md:items-center md:justify-between bg-[var(--main-theme-background)] mb-0 md:mb-6 rounded-none md:rounded-[20px]">
      <div className="w-full md:w-3/5 overflow-hidden z-10 relative rounded-none md:rounded-[20px]">
        <div className="bg-[#0A2B35] w-[130px] h-[130px] absolute rounded-full left-[-75px] top-[-10px] z-[-1]"></div>
        <h2 className="font-epilogue text-2xl md:text-4xl text-white p-5 font-semibold">
          Have questions or concerns?
          <br /> We’re here to help.
        </h2>
        <div className="flex md:justify-normal gap-4 md:gap-8 px-3 md:px-5 pb-5">
          <ul className="list-disc list-inside text-white">
            <li className="text-white pb-2 text-sm md:text-base">General Queries</li>
            <li className="text-white text-sm md:text-base">Program Assistance</li>
          </ul>
          <ul className="list-disc list-inside text-white">
            <li className="text-white pb-2 text-sm md:text-base">General Queries</li>
            <li className="text-white text-sm md:text-base">Program Assistance</li>
          </ul>
        </div>
        <ContactSupportForm />
        <ContactLinks />
      </div>
      <div className="w-2/5 relative hidden md:block">
        <Image
          className="absolute bottom-[-160px] right-[0] z-1 rounded-br-[20px]"
          src="/assets/mobile-canvas.png"
          alt="Phone Icon"
          width={400}
          height={180}
        />
        <Image
          className="absolute bottom-[-160px] right-[0]"
          src="/assets/elips.svg"
          alt="Phone Icon"
          width={460}
          height={180}
        />
      </div>
    </div>
  );
};

export default HelpRequestForm;

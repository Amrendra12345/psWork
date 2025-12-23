import React from "react";
import Image from "next/image";
import Link from "next/link";

const HelpAndSupport = ({
  heading,
  icon1,
  icon1Text,
  icon2Heading,
  icon2Text,
  callNumber,
  callText,
  whatsappNumber,
  whatsappText,
  imageUrl,
}) => {
  return (
    <section className="px-5 pt-0 pb-10 md:pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-stretch justify-between">
          <div className="w-full md:w-[49%] mb-5 md:mb-0">
            <h4 className="p-6 md:p-10 leading-normal md:leading-12 text-(--main-primary-text-color) mb-3 md:mb-6 rounded-3xl text-3xl md:text-4xl font-bold shadow-[0_0_20px_rgba(0,0,0,0.1)]">
              {heading}
            </h4>
            <div className="flex items-stretch justify-between mb-6">
              <div className="w-[48%] rounded-3xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.1)]">
                <span className="mb-8 inline-flex justify-center w-10 h-10 bg-(--main-theme-background) rounded-full px-2">
                  <Image src={icon1} alt="Icon" width={32} height={32} />
                </span>
                <p className="text-lg text-(--secondary-text-color) font-poppins font-semibold">
                  {icon1Text}
                </p>
              </div>
              <div className="w-[48%] p-4 rounded-3xl bg-[linear-gradient(180deg,_#FFE8DD_0%,_#FFCEC7_100%)]">
                <span className="mb-8 inline-flex justify-center w-10 h-10 bg-(--main-theme-background) rounded-full text-white flex items-center justify-between p-2">
                  {icon2Heading}
                </span>
                <p className="text-lg text-(--main-primary-text-color)/80 font-poppins font-semibold">
                  {icon2Text}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <Link
                href={`tel:${callNumber}`}
                className="inline-flex justify-center w-full py-4 rounded-full text-white bg-(--main-theme-background)"
              >
                {callText}
              </Link>

              <Link
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center w-full py-4 rounded-full border border-(--main-primary-text-color) text-[v(--main-primary-text-color)"
              >
                {whatsappText}
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[49%] rounded-3xl relative h-auto aspect-[16/9]">
            <Image
              src={imageUrl}
              alt="Support image"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpAndSupport;

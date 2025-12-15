import React from "react";
import Image from "next/image";
import Link from "next/link";

const BuildTools = ({ title, ctaUrl, ctaText, tools = [] }) => {
  const isTwoCards = tools.length === 2;

  return (
    <section className="bg-[var(--main-theme-background)] mb-10 md:mb-20 px-5 py-10 md:py-16">
      <div className="max-w-[var(--max-width)] mx-auto">
        <h2 className="text-white font-epilogue text-3xl md:text-6xl font-semibold text-center pb-8 md:pb-16">
          {title}
        </h2>

        <div
          className={`flex flex-wrap mb-10 md:mb-20 ${
            isTwoCards
              ? "justify-between gap-y-5"
              : "justify-center md:justify-between gap-5"
          }`}
        >
          {tools.map((card) => (
            <div
              key={card.id}
              className={`w-full ${
                isTwoCards ? "md:w-[49%]" : "sm:w-[48%] lg:w-[32%]"
              } bg-white rounded-2xl shadow-md p-6 cursor-pointer`}
            >
              <span className="inline-flex w-10 h-10 bg-[var(--main-theme-background)] rounded-full px-2 mb-4">
                <Image
                  alt="Icon"
                  width={32}
                  height={32}
                  src={card.imgIconUrl}
                />
              </span>
              <h3 className="w-auto font-epilogue text-2xl md:text-3xl text-[var(--main-primary-text-color)] font-medium pt-4 pb-7 md:pb-24 border-b-2 border-[#7e9499]">
                {card.title}
              </h3>
              <p className="text-[var(--secondary-text-color)] text-[16px] font-light mb-10 pt-5">
                {card.description}
              </p>
              <Link
                href={card.btnUrl}
                className="text-[var(--main-primary-text-color)] border border-[var(--main-primary-text-color)] rounded-full px-4 py-2"
              >
                {card.urlText}
              </Link>
            </div>
          ))}
        </div>

        <Link
          href={ctaUrl}
          className="bg-white py-3 px-10 font-epilogue text-[var(--main-primary-text-color)] rounded-full flex w-full md:w-[400px] mx-auto justify-center"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
};

export default BuildTools;

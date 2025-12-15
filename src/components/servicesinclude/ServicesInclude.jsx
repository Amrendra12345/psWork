import React from "react";
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    id: 1,
    linkUrl: "/",
    title: "Transport assistance",
    bg: "/assets/card_1.png",
    icon: "/assets/ambulance.svg",
  },
  {
    id: 2,
    linkUrl: "/",
    title: "Mental health support",
    bg: "/assets/card_2.png",
    icon: "/assets/lovely.svg",
  },
  {
    id: 3,
    linkUrl: "/",
    title: "Nutrition advice",
    bg: "/assets/card_3.png",
    icon: "/assets/pills_white.svg",
  },
  {
    id: 4,
    linkUrl: "/",
    title: "Palliative care",
    bg: "/assets/card_4.png",
    icon: "/assets/heart_add_white.svg",
  },
  {
    id: 5,
    linkUrl: "/",
    title: "Home diagnostics",
    bg: "/assets/card_5.png",
    icon: "/assets/house.svg",
  },
  {
    id: 6,
    linkUrl: "/",
    title: "Physiotherapy",
    bg: "/assets/card_6.png",
    icon: "/assets/Doctor.svg",
  },
];

const ServicesInclude = () => {
  return (
    <section className="px-5 pt-2 pb-10 md:pb-16">
      <div className="max-w-[var(--max-width)] mx-auto">
        <h2 className="font-epilogue text-center font-semibold text-3xl md:text-6xl text-[var(--main-primary-text-color)] mb-8 md:mb-16">
          Services Include:
        </h2>

        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-5">
          {cards.map(({ id, title, bg, icon, linkUrl }) => (
            <Link
              key={id}
              href={linkUrl}
              className="w-full md:w-[48%] lg:w-[32%] min-h-[500px] p-8 shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-3xl bg-cover bg-center"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex items-start justify-between">
                <h3 className=" md:w-[210px] font-epilogue text-2xl text-[var(--main-primary-text-color)]">
                  {title}
                </h3>

                <span className="mb-16 inline-flex justify-center w-10 h-10 bg-[var(--main-theme-background)] rounded-full px-2">
                  <Image
                    src={icon}
                    alt={`${title} icon`}
                    width={32}
                    height={32}
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesInclude;

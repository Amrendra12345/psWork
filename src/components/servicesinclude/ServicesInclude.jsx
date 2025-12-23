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
      <div className="max-w-(--max-width) mx-auto">
        <h2 className="font-epilogue text-center font-semibold text-3xl md:text-4xl text-(--main-primary-text-color) mb-8 md:mb-10">
          Services Include:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map(({ id, title, bg, icon, linkUrl }) => (
             <div key={id} className="min-h-100  border border-gray-200 flex-wrap relative rounded-2xl shadow-2xl">
              <Link href={linkUrl} className="block group">                 
                  <div className="w-full h-full">
                     <Image src={bg} alt={title} width={400} height={300} className="w-full h-full  object-contain group-hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl"/>
                  </div>
                  <div className="absolute top-0 bottom-0 h-full w-full bg-black/0 rounded-2xl">
                    <div className="p-4 flex justify-between items-center">
                      <h1 className="text-2xl font-bold font-popping text-(--main-primary-text-color)">{title}</h1>
                      <div className=" w-10 h-10 bg-(--main-theme-background) rounded-full p-2 flex items-center justify-center ">
                      <Image
                          src={icon}
                          alt={`${title} icon`}
                          width={32}
                          height={32}
                        />
                        </div>
                    </div>
                  </div>
              </Link>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesInclude;

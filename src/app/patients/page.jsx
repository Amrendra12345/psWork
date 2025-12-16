import CardCarousel from "@/components/cardcarousel/CardCarousel";
import CardUpperEffect from "@/components/cardUpperEffect/CardUpperEffect";
import CareTakercard from "@/components/caretakercard/CareTakercard";
import DownloadAppCard from "@/components/downloadappcard/DownloadAppCard";
import Hero from "@/components/hero/Hero";
import HeroPacients from "@/components/hero/HeroPacients";
import SmartTools from "@/components/smarttools/SmartTools";
import React from "react";
const offersData = [
  {
    id: 1,
    type: "standard",
    title: "Support Services",
    description:
      "Explore our flexible financing options designed to meet your unique needs. We’re here to help you find the perfect solution for your budget.",
    buttonText: "Explore",
    buttonUrl: "/",
    icon: "/assets/heart-add.svg",
    stats: "100+",
  },
  {
    id: 2,
    type: "tags",
    title: "Smart Tools",
    backgroundImage: "/assets/placeholder2.png",
    buttonText: "Explore",
    buttonUrl: "/",
    tags: [
      "Tool Name 1",
      "Tool Name 2",
      "Tool Name 3",
      "Tool Name 4",
      "Tool Name 5",
    ],
  },
  {
    id: 3,
    type: "standard",
    title: "Emergency Support",
    description: "24/7 help anytime, anywhere.",
    buttonText: "Contact",
    buttonUrl: "/",
    icon: "/assets/heart-add.svg",
    stats: "200+",
  },
  {
    id: 4,
    type: "standard",
    title: "Support Services",
    description:
      "Explore our flexible financing options designed to meet your unique needs. We’re here to help you find the perfect solution for your budget.",
    buttonText: "Explore",
    buttonUrl: "/",
    icon: "/assets/heart-add.svg",
    stats: "100+",
  },
];
const page = () => {
  return (
    <>    
      <Hero
        title="From Confusion to Clarity in Critical Care"
        subtitle="icanheal helps you access high-quality cancer and critical care treatment by simplifying the journey, from financial support to finding the right doctors and communities. All in one unified platform."
        bgImage="/assets/patient_page_banner.png"
        statsNumber="2k"
        smallInfo="Patients already simplifying critical care"
        btnText="DOWNLOAD THE APP"  
        bgImageSize="bg-[size:113%_76%] md:bg-[size:75%_100%]"
        bgPostion="bg-[position:17%_119%] md:bg-[position:124%_0%]"
        bgHeight="h-[500px] md:h-[550px] lg:h-[650px]"
       
        
      />
      <CardUpperEffect />
      <DownloadAppCard
        valueStats="2k"
        cardText="Patients already simplifying critical care"
        btnUrl="/"
        btnText="DOWNLOAD THE APP"
      />
      <CardCarousel
        cards={offersData}
        sectionTitle="What we offer?"
        sectionExtraTitle="Everything in one plce."
        bgColor="#ffffff"
        withBg={false}
      />
      <SmartTools />
      <CareTakercard />
    </>
  );
};

export default page;

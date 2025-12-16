import AppDownload from "@/components/appdownload/AppDownload";
import CardCarousel from "@/components/cardcarousel/CardCarousel";
import CardUpperEffect from "@/components/cardUpperEffect/CardUpperEffect";
import CareTaker from "@/components/caretaker/CareTaker";
import CareTakercard from "@/components/caretakercard/CareTakercard";
import DownloadAppCard from "@/components/downloadappcard/DownloadAppCard";
import Faq from "@/components/faq/Faq";
import Growth from "@/components/growth/Growth";
import Hero from "@/components/hero/Hero";
import HowToWorks from "@/components/howworks/HowToWorks";

import JoinCommunity from "@/components/joincommunity/JoinCommunity";
import SelectPlan from "@/components/selectplan/SelectPlan";
import SmartSupport from "@/components/smartsupport/SmartSupport";
import StoriesCarousel from "@/components/storiescarousel/StoriesCarousel";
import TotalStats from "@/components/totalstats/TotalStats";
import UserGallery from "@/components/usergallery/UserGallery";


import React from "react";
const Home = () => {
  return (
    <>
      <Hero
        title="Your Companion Through Cancer & Critical Care"
        subtitle="Finance, support & guided steps for every critical care journey."
        bgImage="/assets/homepage_hero1.png"
        statsNumber="10k"
        smallInfo="families already simplifying critical care"
        btnText="DOWNLOAD THE APP"
        bgImageSize="bg-[size:112%_72%] md:bg-[size:77%_111%]"
        bgPostion="bg-[position:109%_83%] md:bg-[position:102%_30%]"
        bgHeight="h-[450px] md:h-[550px] lg:h-[650px]"
      />
      <CardUpperEffect />
      <DownloadAppCard
        valueStats="10k"
        cardText="families already simplifying critical care"
        btnUrl="/"
        btnText="DOWNLOAD THE APP"
      />
      <SelectPlan />
      <CardCarousel sectionTitle="Helping Patients Navigate Care with Ease" />
      <HowToWorks />
      <CareTakercard />
      <SmartSupport />
      <UserGallery />      
      <StoriesCarousel />
      <Growth />
      <TotalStats />
      <JoinCommunity />
      <AppDownload />
      <Faq />
    </>
  );
};

export default Home;

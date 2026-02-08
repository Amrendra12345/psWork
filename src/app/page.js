
import AppDownload from "@/components/appdownload/AppDownload";
import CardCarousel from "@/components/cardcarousel/CardCarousel";
import CardUpperEffect from "@/components/cardUpperEffect/CardUpperEffect";
import CareTakercard from "@/components/caretakercard/CareTakercard";
import Faq from "@/components/faq/Faq";
import Growth from "@/components/growth/Growth";
import Hero from "@/components/homes/Hero";
import Hero2 from "@/components/homes/Hero2";
import HowToWorks from "@/components/howworks/HowToWorks";
import JoinCommunity from "@/components/joincommunity/JoinCommunity";
import NeedAndSupport from "@/components/needAndSupport/NeedAndSupport";
import SelectPlan from "@/components/selectplan/SelectPlan";
import SmartSupport from "@/components/smartsupport/SmartSupport";
import StoriesCarousel from "@/components/storiescarousel/StoriesCarousel";
import TotalStats from "@/components/totalstats/TotalStats";
import TrustedUser from "@/components/trusted-user/Trusted-user";
import UserGallery from "@/components/usergallery/UserGallery";
import WhatHelps from "./whathelps/WhatHelps";


export default function Home() {
  return (
    <>
      <Hero2 />
      {/* <Hero 
        title="Your Companion Through Cancer & Critical Care"
        subtitle="Finance, support & guided steps for every critical care journey."
        bgImage="/assets/homepage_hero1.png"
        statsNumber="10k"
        smallInfo="families already simplifying critical care"
        btnText="DOWNLOAD THE APP"

        bgHeight="h-135 sm:h-120 md:h-130 lg:h-156"
        bgSize="bg-size-[115%_60%] sm:bg-size-[85%_96%] md:bg-size-[85%_96%] lg:bg-size-[81%_106%]"
        bgPosition="bg-position-[100%_66%] sm:bg-position-[101%_74%] md:bg-position-[103%_120%] lg:bg-position-[108%_88%]"
        bgGradient="linear-gradient(278deg, rgba(26, 67, 78, 0) 59%, rgb(26 67 78) 94.06%), linear-gradient(232deg, rgba(26, 67, 78, 0) 42.39%, rgb(26 67 78 / 16%) 92.03%)"
      />      */}
      
      <TrustedUser/>  
      <WhatHelps />
      {/* <CardUpperEffect/>  */}
       {/* <SelectPlan /> */}
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
         <NeedAndSupport/>
    </>
  );
}

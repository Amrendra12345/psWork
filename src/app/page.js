
import AppDownload from "@/components/appdownload/AppDownload";
import CardCarousel from "@/components/cardcarousel/CardCarousel";
import CardUpperEffect from "@/components/cardUpperEffect/CardUpperEffect";
import CareTakercard from "@/components/caretakercard/CareTakercard";
import Faq from "@/components/faq/Faq";
import Growth from "@/components/growth/Growth";

import HowToWorks from "@/components/howworks/HowToWorks";
import JoinCommunity from "@/components/joincommunity/JoinCommunity";
import NeedAndSupport from "@/components/needAndSupport/NeedAndSupport";
import SmartSupport from "@/components/smartsupport/SmartSupport";
import StoriesCarousel from "@/components/storiescarousel/StoriesCarousel";
import TotalStats from "@/components/totalstats/TotalStats";
import TrustedUser from "@/components/trusted-user/Trusted-user";
import UserGallery from "@/components/usergallery/UserGallery";

import Purpose from "@/components/purpose/Purpose";
import SmartTools from "@/components/smarttools/SmartTools";
import WhatSay from "@/components/whatSay/WhatSay";
import UserTestimonials from "@/components/usertestimonials/UserTestimonials";
import GrowingSupport from "@/components/growth/GrowingSupport";
import Hero from "@/components/homes/Hero";
import WhatHelps from "@/components/whathelps/WhatHelps";


export default function Home() {
  return (
    <>
     
      <Hero/>    
      <TrustedUser/>  
      <WhatHelps />
      <Purpose />
      <SmartTools />
      <HowToWorks />
      <WhatSay />
      <UserTestimonials />
       <GrowingSupport/>
      {/* <CardUpperEffect/>  */}
       {/* <SelectPlan /> */}
       <CardCarousel sectionTitle="Helping Patients Navigate Care with Ease" />
       
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

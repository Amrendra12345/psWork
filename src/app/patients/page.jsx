import CardCarousel from '@/components/cardcarousel/CardCarousel'
import CardUpperEffect from '@/components/cardUpperEffect/CardUpperEffect'
import CareTakercard from '@/components/caretakercard/CareTakercard';
import DownloadAppCard from '@/components/downloadappcard/DownloadAppCard'
import Hero from '@/components/homes/Hero'
import NeedAndSupport from '@/components/needAndSupport/NeedAndSupport';
import SmartTools from '@/components/smarttools/SmartTools';
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

const Patients = () => {
  return (
    <>
    <Hero 
        title="“Take Control of Your Treatment Today.”"
        subtitle="Don't wait for care to come to you. With icanheal, get matched to services, guidance, and tools that put you in charge of your health journey."
        statsNumber="2k"
        smallInfo="Patients already simplifying critical care"
        btnText="DOWNLOAD THE APP"
        bgImage="/assets/patient_page_banner.png"
        bgHeight="h-156 sm:h-120 md:h-130 lg:h-156"
        bgSize="bg-size-[105%_71%] sm:bg-size-[85%_96%] md:bg-size-[85%_96%] lg:bg-size-[76%_106%]"
        bgPosition="bg-position-[100%_98%] sm:bg-position-[101%_74%] md:bg-position-[103%_120%] lg:bg-position-[135%_88%]"
       bgGradient="linear-gradient(274deg, rgba(26, 67, 78, 0) 59%, rgb(26, 67, 78) 94.06%), linear-gradient(
355deg, rgba(26, 67, 78, 0) 65%, rgb(0, 54, 67) 99%), linear-gradient(13deg, rgba(26, 67, 78, 0) 59%, rgb(26, 67, 78) 94.06%)"
    />
     <CardUpperEffect />
      {/* <DownloadAppCard
        valueStats="2k"
        cardText="Patients already simplifying critical care"
        btnUrl="/"
        btnText="DOWNLOAD THE APP"
      /> */}
      <CardCarousel
        cards={offersData}
        sectionTitle="What we offer?"
        sectionExtraTitle="Everything in one plce."
        bgColor="#ffffff"
        withBg={false}
      />
       <SmartTools />
      <CareTakercard />
      <NeedAndSupport/>
     </>

  )
}

export default Patients
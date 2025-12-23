import BuildTools from "@/components/buildtools/BuildTools";
import CardUpperEffect from "@/components/cardUpperEffect/CardUpperEffect";
import Hero from "@/components/homes/Hero";
const toolData = [
  {
    id: 1,
    title: "Track your current program status",
    description:
      "Explore our flexible financing options designed to meet your unique needs. We’re here to help you find the perfect solution for your budget.",
    btnUrl: "/",
    urlText: "Explore",
    imgIconUrl: "/assets/category.svg",
  },
  {
    id: 2,
    title: "Renew your application",
    description:
      "Explore our flexible financing options designed to meet your unique needs. We’re here to help you find the perfect solution for your budget.",
    btnUrl: "/",
    urlText: "Explore",
    imgIconUrl: "/assets/Emergency_white.svg",
  },
  {
    id: 3,
    title: "Get reminders and support",
    description:
      "Explore our flexible financing options designed to meet your unique needs. We’re here to help you find the perfect solution for your budget.",
    btnUrl: "/",
    urlText: "Explore",
    imgIconUrl: "/assets/medal.svg",
  },
];

const Doctors = () => {
  return (
    <>
      <Hero
        title="Empower Your Practice with icanheal"
        subtitle="Join icanheal's doctor network to expand your impact, access smart tools, and support patients through their cancer and critical care journey, financially, medically, and emotionally."
        statsNumber="4k"
        smallInfo="Doctors already simplifying critical care"
        btnText="DOWNLOAD THE APP"
        bgImage="/assets/doctor_page_banner.png"
        bgHeight="h-156 sm:h-120 md:h-130 lg:h-156"
        bgSize="bg-size-[105%_71%] sm:bg-size-[85%_96%] md:bg-size-[85%_96%] lg:bg-size-[72%_100%]"
        bgPosition="bg-position-[100%_98%] sm:bg-position-[101%_74%] md:bg-position-[103%_120%] lg:bg-position-[103%_0%]"
        bgGradient="linear-gradient(274deg, rgba(26, 67, 78, 0) 59%, rgb(26, 67, 78) 94.06%), linear-gradient(
355deg, rgba(26, 67, 78, 0) 65%, rgb(0, 54, 67) 99%), linear-gradient(13deg, rgba(26, 67, 78, 0) 59%, rgb(26, 67, 78) 94.06%)"
      />
      <CardUpperEffect />
       <section className="px-5 pt-0 pb-10 md:pb-16">
        <div className="max-w-(--max-width) mx-auto">
          <div className="flex flex-col md:flex-row justify-around items-start">
            <div className="w-full md:w-2/5">
              <h3 className="w-full md:w-88 leading-16 font-epilogue text-3xl md:text-4xl font-bold text-center md:text-left text-(--main-primary-text-color)">
                Why Join icanheal?
              </h3>
            </div>
            <div className="w-full md:w-2/4">
              <div className="bg-[#F3F8F9] rounded-2xl mb-5 p-4">
                <h5 className="font-popping text-xl font-medium text-(--main-primary-text-color)">
                  Streamline Patient Management
                </h5>
                <p className="text-(--main-primary-text-color)/90 mt-2">
                  Refer, track, and coordinate patient care journey from a
                  single dashboard.
                </p>
              </div>
              <div className="bg-[#F3F8F9] rounded-2xl mb-5 p-4">
                <h5 className="font-popping text-xl font-medium text-(--main-primary-text-color)">
                  Reduce Patient Drop-Off
                </h5>
                <p className="text-(--main-primary-text-color)/90 mt-2">
                  Help patients continue treatment by connecting them to
                  financing, PAPs, and value-added services support.
                </p>
              </div>
              <div className="bg-[#F3F8F9] rounded-2xl mb-5 p-4">
                <h5 className="font-popping text-xl font-medium text-(--main-primary-text-color)">
                  Offer Remote Consults
                </h5>
                <p className="text-(--main-primary-text-color)/90 mt-2">
                  Enable secure, high-quality teleconsultation and reach
                  patients beyond your geography.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

       <BuildTools
        tools={toolData}
        title="Tools Built for You:"
        ctaUrl="/"
        ctaText="Apply to Join the Doctor Network"
      />
    </>
  );
};

export default Doctors;

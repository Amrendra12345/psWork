import BuildTools from "@/components/buildtools/BuildTools"
import CardUpperEffect from "@/components/cardUpperEffect/CardUpperEffect"
import Hero from "@/components/homes/Hero"
import HospitalPageForm from "@/components/hospitalpageform/HospitalPageForm";
const keyIntegration = [
  {
    id: 1,
    title: "Financing & Insurance Verification",
    description: "Track patient journeys, status updates, and treatment gaps. ",
    btnUrl: "/",
    urlText: "Explore",
    imgIconUrl: "/assets/additem.svg",
  },
  {
    id: 2,
    title: "EHR Connect for Patient Tracking",
    description: "Integrated video, scheduling, and notes. ",
    btnUrl: "/",
    urlText: "Explore",
    imgIconUrl: "/assets/card-tick.svg",
  },
];

const Hospitals = () => {
  return (
    <>
    <Hero 
        title="Bridge the Gaps in Critical Care"
        subtitle="Empower your hospital ecosystem with financial support, patient engagement, and aftercare services from icanheal."
        bgImage="/assets/hospital_page_banner.png"
        statsNumber="3k"
        smallInfo="Hospitals already simplifying critical care"
        btnText="DOWNLOAD THE APP"

        bgHeight="h-156 sm:h-120 md:h-130 lg:h-156"
        bgSize="bg-size-[105%_71%] sm:bg-size-[85%_96%] md:bg-size-[85%_96%] lg:bg-size-[81%_106%]"
        bgPosition="bg-position-[100%_98%] sm:bg-position-[101%_74%] md:bg-position-[103%_120%] lg:bg-position-[135%_88%]"
       bgGradient="linear-gradient(274deg, rgba(26, 67, 78, 0) 59%, rgb(26, 67, 78) 94.06%), linear-gradient(
355deg, rgba(26, 67, 78, 0) 65%, rgb(0, 54, 67) 99%), linear-gradient(13deg, rgba(26, 67, 78, 0) 59%, rgb(26, 67, 78) 94.06%)"
    />
    <CardUpperEffect/>
     <section className="px-5 pt-0 pb-10 md:pb-16">
        <div className="max-w-(--max-width) mx-auto">
          <div className="flex flex-col md:flex-row justify-around items-start">
            <div className="w-full md:w-2/5">
              <h3 className="w-full md:w-88 leading-10 font-epilogue text-3xl md:text-4xl font-bold text-center md:text-left text-(--main-primary-text-color)">
                Why Partner with icanheal?
              </h3>
            </div>
            <div className="w-full md:w-2/4">
              <div className="bg-[#F3F8F9] rounded-2xl mb-5 p-4">
                <h5 className="font-popping text-xl font-medium text-(--main-primary-text-color)">
                  Enable Faster Treatment Decisions
                </h5>
                <p className="text-(--main-primary-text-color)/90 mt-2">
                  Connect patients to insurance, loans, and pharma-sponsored PAP
                  programs.
                </p>
              </div>
              <div className="bg-[#F3F8F9] rounded-2xl mb-5 p-4">
                <h5 className="font-popping text-xl font-medium text-(--main-primary-text-color)">
                   Reduce Readmissions
                </h5>
                <p className="text-(--main-primary-text-color)/90 mt-2">
                 Ensure post-treatment support for nutrition, physiotherapy,
                  and mental health.
                </p>
              </div>
              <div className="bg-[#F3F8F9] rounded-2xl mb-5 p-4">
                <h5 className="font-popping text-xl font-medium text-(--main-primary-text-color)">
                 Streamline Social Work Teams
                </h5>
                <p className="text-(--main-primary-text-color)/90 mt-2">
                  Our backend systems handle documentation, eligibility
                  screening, and approvals.
                </p>
              </div>
            </div>
          </div>
        </div>
     </section>
      <BuildTools
        tools={keyIntegration}
        title="Key Integrations:"
        ctaText="Partner with us"
        ctaUrl="/"
        pageName="hospitals"
      />
        <section className="bg-white px-5 pt-0 pb-10 md:pb-16">
        <div className="max-w-(--max-width) mx-auto">
          <div className="flex items-start flex-col md:flex-row justify-between">
                      <div className="w-full md:w-[45%]">
            <h2 className="text-3xl font-semibold md:text-4xl mb-3 text-(--main-primary-text-color)">
              Have question? Let us know
            </h2>
            <p className="text-(--secondary-text-color) mb-4 md:mb-0 text-xl leading-7 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam.
            </p>
          </div>
          <div className="w-full md:w-[45%]">
            <HospitalPageForm />
          </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default Hospitals
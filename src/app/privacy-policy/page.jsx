import CardUpperEffect from "@/components/cardUpperEffect/CardUpperEffect";
import NeedAndSupport from "@/components/needAndSupport/NeedAndSupport";
import Image from "next/image";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="w-full px-4 py-10 bg-(--main-theme-background) h-90 md:h-130 relative flex items-center justify-center">
        <h1 className="text-3xl leading-11 sm:text-[28px]  md:text-4xl sm:leading-10 md:leading-12  md:pt-10 lg:text-5xl lg:leading-16 text-[#FFE8DD] px-1 font-bold font-epilogue z-20">
          Privacy Policy
        </h1>

        <div className="w-155 h-90 absolute bottom-0 left-1/2 transform -translate-x-1/2 overflow-hidden z-0">
          <Image
            src="/assets/hero_icon.png"
            alt="Privacy Policy"
            width={400}
            height={450}
            className="w-full h-auto"
          />
        </div>
      </div>
      <CardUpperEffect />
      <section>
      <div className="w-full md:max-w-4xl mx-auto px-4 py-6">
        <p className="text-(--main-primary-text-color)/70 text-center">
          Effective Date: [Insert Date]
        </p>
        <p className="mt-2 text-lg text-(--secondary-text-color)">
          At icanheal, your privacy is important to us. This Privacy Policy
          outlines how we collect, use, protect, and disclose your personal
          information when you use our website and services.
        </p>
      </div>
      <div className="w-full md:max-w-6xl mx-auto px-4 py-6">
        <div className="w-full flex justify-between items-start gap-6 flex-col md:flex-row px-6 md:px-2">
          <div className="w-full md:w-[45%]">
            <p className="text-(--secondary-text-color)">
              1. Information We Collect
            </p>
            <h2 className="text-2xl md:text-3xl text-(--main-primary-text-color)/95 font-poppins font-bold">
              We may collect the following types of information:
            </h2>
          </div>
          <div className="w-full md:w-[45%]">
            <ol className="list-disc">
              <li className="text-(--secondary-text-color) mb-5">
                Personal Information: Name, email address, phone number, gender,
                date of birth, and other details you provide during registration
                or communication.
              </li>
              <li className="text-(--secondary-text-color) mb-5">
                Health-Related Information: Medical history, treatment details,
                prescriptions, diagnosis, and health documents you choose to
                share.
              </li>
              <li className="text-(--secondary-text-color) mb-5">
                Usage Data: IP address, browser type, operating system, device
                information, pages visited, and access times.
              </li>
            </ol>
          </div>
        </div>
        <hr className="border-gray-300 mt-8 mb-12"/>
        <div className="w-full flex justify-between items-start gap-6 flex-col md:flex-row px-6 md:px-2">
          <div className="w-full md:w-[45%]">
            <p className="text-(--secondary-text-color)">
              2. How We Use Your Information
            </p>
            <h2 className="text-2xl md:text-3xl text-(--main-primary-text-color)/95 font-poppins font-bold">
              We use your information to:
            </h2>
          </div>
          <div className="w-full md:w-[45%]">
            <ol className="list-disc">
              <li className="text-(--secondary-text-color) mb-5">
                Provide and personalize services based on your role (patient,
                  caregiver, doctor, hospital)
              </li>
               <li className="text-(--secondary-text-color) mb-5">
                  Connect you with relevant support programs (PAP, FAS, VAS)
                </li>
                <li className="text-(--secondary-text-color) mb-5">
                  Facilitate teleconsultations and document sharing
                </li>
                <li className="text-(--secondary-text-color) mb-5">
                  Improve our platform, content, and user experience
                </li>

                <li className="text-(--secondary-text-color) mb-5">
                  Communicate updates, offers, or important service messages
                </li>
                <li className="text-(--secondary-text-color) mb-5">
                  Comply with legal and regulatory requirements
                </li>
            </ol>
          </div>
        </div>
      </div>
      </section>
      <NeedAndSupport/>
    </>
  );
};

export default PrivacyPolicy;

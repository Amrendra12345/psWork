import CompanyLink from "../CompanyLink";
import GetAppLink from "../GetAppLink";
import ServicesLink from "../ServicesLink";
import SupportLink from "../SupportLink";


const NavBottom = () => {
  return (
    <>
      <div className=" max-w-(--max-width) mx-auto md:px-2.5 pt-6 flex items-start justify-between gap-4 md:gap-0 mb-6 flex-col md:flex-row">
        <div className="flex flex-col gap-4 mb-4 md:mb-0">
         <p className="text-white text-[18px] tracking-[0.3px] leading-7 font-semibold text-xl md:mb-4">Services</p>
           <ServicesLink/>
        </div>
        <div className="flex flex-col gap-4 mb-4 md:mb-0">
         <p className="text-white text-[18px] tracking-[0.3px] leading-7 font-semibold text-xl md:mb-4">Company</p>
         <CompanyLink/>
        </div>
        <div className="flex flex-col gap-4 mb-4 md:mb-0">
         <p className="text-white text-[18px] tracking-[0.3px] leading-7 font-semibold text-xl md:mb-4">Support</p>
         <SupportLink/>
        </div>
         <div className="flex flex-col gap-4 mb-4 md:mb-0">
         <p className="text-white text-[18px] tracking-[0.3px] leading-7 font-semibold text-xl md:mb-4">Get the App</p>
         <GetAppLink/>
         </div>
      </div>
        
    </>
  );
};

export default NavBottom;

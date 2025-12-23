
import NavBottom from "./bottomnav/NavBottom";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <footer className="bg-(--main-theme-background) pb-6 px-5">
      <div className="border-b border-white/10 md:pb-6 mb-8">       
        <NavBottom />
      </div>
     <CopyRight/>
    </footer>
  );
};

export default Footer;

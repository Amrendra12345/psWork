import React from "react";
import HelpRequestForm from "../helprequestform/HelpRequestForm";
import NavBottom from "../bottomnav/NavBottom";
import Logo from "../logo/Logo";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <footer className="bg-[var(--main-theme-background)] pb-[25px] px-5">
      <div className="border-b border-white/10 md:pb-6 mb-8">       
        <NavBottom />
      </div>
     <CopyRight/>
    </footer>
  );
};

export default Footer;

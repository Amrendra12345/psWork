import React from "react";
import Navigation from "../navigation/Navigation";
import Logo from "../logo/Logo";

const Header = () => {
  return (
    <header className="bg-[var(--main-theme-background)] px-5 border-b border-[#2f5158] sticky top-0 z-50">
      <div className="max-w-[var(--max-width)] mx-auto flex items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;

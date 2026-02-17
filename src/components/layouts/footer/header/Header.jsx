"use client"
import { useState } from "react";
import Logo from "./logo/Logo";
import Navigation from "./navigation/Navigation";
import Link from "next/link";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <header className="py-2 px-2 md:px-0 bg-primary relative z-50">
      <div className="max-w-7xl pb-4 md:pb-0 mx-auto flex md:justify-between md:items-center flex-col md:flex-row">
        <Logo isOpen={menuToggle} setIsOpen={setMenuToggle} />
        <Navigation isOpen={menuToggle} />
       
      </div>
    </header>
  );
};

export default Header;
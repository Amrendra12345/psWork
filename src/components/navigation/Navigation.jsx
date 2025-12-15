"use client";
import React, { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Patients", href: "/patients" },
    { name: "Doctors", href: "/doctors" },
    { name: "Hospital", href: "/hospitals" },
    {
      name: "Services",
      submenu: [        
        { name: "PAP", href: "/pap" },
        { name: "FAS", href: "/fas" },
        { name: "VAS", href: "/vas" },
      ],
    },
    { name: "About & Contact Us", href: "/about-us" },
    // { name: "Contact Us", href: "/contact-us" },
    // { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  const handleDropdownToggle = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };
  useEffect(() => {
  const handleOutsideClick = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setIsOpen(false);
      setActiveDropdown(null);
    }
  };

  const handleScroll = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  document.addEventListener("mousedown", handleOutsideClick);
  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    document.removeEventListener("mousedown", handleOutsideClick);
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <nav className="relative z-50" ref={navRef}>
      {/* Toggle Icon */}
      <div className="md:hidden">
        <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={32} />
        </button>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Navigation Links */}
      <ul
        className={`flex flex-col md:flex-row gap-0 md:gap-3 md:static fixed top-0 left-0 w-[80%] md:w-auto h-full md:p-0 bg-white md:bg-[var(--main-theme-background)] transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Close Button inside menu */}
        <div className="flex justify-between md:hidden bg-[var(--main-theme-background)] px-2 md:px-0 py-5 md:py-0">
          <span className="rounded-[5px] text-[15px] inline-flex text-white border border-white py-1 px-2 md:hidden">
            Menu
          </span>
          <button className="text-white" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
        </div>

        {navLinks.map((link) => (
          <li
            key={link.name}
            className="relative border-b border-[var(--main-primary-text-color)] md:border-b-0"
          >
            {/* If no submenu, render normally */}
            {!link.submenu ? (
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className=" block
                    text-[color:var(--main-primary-text-color,#0f172a)]
                    md:text-white
                    px-[5px] 
                    py-[20px] 
                    tracking-[2px] 
                    text-[18px]
                    tight font-medium
                    hover:bg-[var(--main-theme-background)]
                    hover:text-white
                    transition-all
                    border-b border-transparent hover:border-b-white/50"
              >
                {link.name}
              </Link>
            ) : (
              <>
                {/* Dropdown Button */}
                <button
                  onClick={() => handleDropdownToggle(link.name)}
                  className="flex items-center w-full md:w-auto gap-1 px-[5px] 
                    py-[20px] 
                    tracking-[2px] 
                    text-[18px] md:text-white cursor-pointer font-medium"
                >
                  {link.name}
                  <ChevronDown size={22} />
                </button>

                {/* Submenu */}
                <ul
                  className={`mt-0 mb-[-1px] md:mb-0 md:mt-2 lg:w-[200px] flex flex-col gap-0 md:gap-2 md:absolute md:top-[50px] md:left-0 bg-[var(--main-theme-background)] md:bg-white md:shadow-md p-0 md:p-0 ${
                    activeDropdown === link.name ? "block" : "hidden"
                  }`}
                >
                  {link.submenu.map((sublink) => (
                    <li className="" key={sublink.name}>
                      <Link
                        href={sublink.href}
                        onClick={() => {
                          setIsOpen(false);
                          setActiveDropdown(null);
                        }}
                        className="w-full font-medium border-b border-white text-white md:text-[var(--main-primary-text-color)] inline-block py-3.5 md:py-2 px-2 md:px-4 transition-all hover:bg-[var(--main-theme-background)] hover:text-white"
                      >
                        {sublink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

"use client";
import React, { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Patients", href: "/patients" },
    { name: "Doctors", href: "/doctors" },
    { name: "Hospitals", href: "/hospitals" },
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
        className={`flex flex-col md:flex-row gap-0 md:gap-1 md:static fixed top-0 left-0 w-[80%] md:w-auto h-full md:p-0 bg-(--main-theme-background) md:bg-(--main-theme-background) transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 `}
      >
        <div className="flex justify-between md:hidden bg-[#10282f] px-2 md:px-0 py-5 md:py-0">
          <span className="rounded-(5px) text-(size:15px) inline-flex text-white/70 border border-white/20 rounded py-1 px-2 md:hidden">
            Menu
          </span>
          <button className="text-white/50" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
        </div>
        {navLinks.map((link, index) => (
          <li
            key={link.name}
            className={`relative tracking-wider transition-all duration-300 hover:bg-[#13363f] md:px-1 lg:px-3 py-2 rounded-1 ${
              index === 0 ? "mt-4 md:mt-0" : "mt-0"
            }`}
            ref={dropdownRef}
          >
            {!link.submenu ? (
              <Link
                href={link.href}
                className="text-white/90 tracking-[2px] font-poppins md:text-[14px] lg:text-[16px] block"
              >
                {" "}
                {link.name}
              </Link>
            ) : (
              <>
                <button
                  className="text-white/90 tracking-[2px] font-poppins md:text-[15px] lg:text-[16px] flex gap-x-1 items-center justify-between  cursor-pointer w-full"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.name ? null : link.name
                    )
                  }
                >
                  {link.name}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      openDropdown === link.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === link.name && (
                 <ul className={`relative md:absolute z-30 left-0 md:top-full mt-2 w-full md:w-40 bg-white shadow-2xl rounded-md                        overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-in-out
                        ${
                          openDropdown === link.name
                            ? "max-h-96 opacity-100 translate-y-0"
                            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
                        }
                      `}
                    >
                    {link.submenu.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 hover:bg-gray-100 text-(--main-primary-text-color)"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

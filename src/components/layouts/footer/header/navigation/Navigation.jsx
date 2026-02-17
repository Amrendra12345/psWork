"use client"
import Link from "next/link";
import { useState } from "react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

export default function Navigation({isOpen}) {
  const [openIndex, setOpenIndex] = useState(null);
  const [openSubIndex, setOpenSubIndex] = useState(null);

  const toggleMenu = (i) => {
    setOpenIndex(openIndex === i ? null : i);
    setOpenSubIndex(null);
  };

  const toggleSubMenu = (j) => {
    setOpenSubIndex(openSubIndex === j ? null : j);
  };
  const menuItems = [
    { title: "Home", href: "/" },
    {
      title: "Services",
      children: [
        {
          title: "Financial & Assistance Programs",
          children: [  
            { title: "Patient Assistance Program (PAP)", href: "/" },
            { title: "Financial Assistance Services", href: "/" },
            { title: "Pharma Access Programs", href: "/" },           
            { title: "Know Your Policy", href: "/" },
            { title: "Grievance Redressal", href: "/" },
          ],
        },
        { title: "Care & Medical Services",
              children: [  
                  { title: "Diagnostics", href: "/" },
                  { title: "Therapies", href: "/" },
                  { title: "Second Opinion", href: "/" },           
                  { title: "Genetic Testing", href: "/" },
                  { title: "Appointment Assistance", href: "/" },
              ],
         },
        { title: "Care & Convenience",
              children: [  
                  { title: "Medicine Order", href: "/" },
                  { title: "Cab Booking", href: "/" },
                  { title: "Medical Equipment Rental", href: "/" },           
                  { title: "Home Care Support", href: "/" },                  
              ],
         },
      ],
    },
    { title: "Tools", 
       children: [
        {title:"Report Summary", href:"/"},
       { title:  "Medicine Intake Tracker", href:"/"},
        {title:  "Treatment Briefcase", href:"/"},
        {title: "Smart Reminders", href:"/"}
       ]
     },
    { title: "About",
       children:[
         {title: "Our Mission", href:"/"},
         {title: "How iCanHeal Works", href:"/"},
         {title: "Partners", href:"/"},
         {title: "FAQs", href:"/"}
       ]
     },
    { title: "Contact", 
       children:[
        {title:"Talk to a Care Navigator", href:"/" },
        {title:"Request a Call Back", href:"/"}
       ]
     },
  ];
  return (
    <>
     <nav
      className={`
        ${isOpen ? "block" : "hidden"}
        md:block text-white border-t mt-2 md:mt-0 border-t-white/10 md:border-t-0 bg-primary md:bg-transparent
      `}
    >
      <ul className="menu">
        {menuItems.map((item, i) => {
          return item.href ? (
            <li key={i}>
              <Link href={item.href} className="text-white">
                {item.title}
              </Link>
            </li>
          ) : (
            <li
              key={i}
              className="relative group"
            >
              <span onClick={() => toggleMenu(i)} > {item.title} <BsChevronDown className={`text-sm transition-transform duration-300 
                    ${openIndex === i ? "rotate-180" : ""}
                     md:group-hover:rotate-180`} /></span>
              {item.children && (
                <ul
                  className={`childMenu md:shadow-2xl
                  md:absolute md:right-0 md:top-full md:bg-white rounded md:py-2
                  md:opacity-0 md:invisible md:text-gray-700 md:group-hover:opacity-100 md:group-hover:visible  transition-all duration-300 
                  ${item.title === "Services" ? "w-full md:w-75" : "w-full md:w-55"}
                  ${openIndex === i ? "max-h-150 opacity-100 mt-3 py-2" : "max-h-0 opacity-0"}  
                  md:group-hover:max-h-150                
                  `
                }
                >
                  {item.children.map((child, j) => (
                    <li
                      key={j}
                      className="relative group/submenu cursor-pointer hover:bg-primary md:hover:bg-gray-100"
                    >
                      <span onClick={() => toggleSubMenu(j)}>{child.title}
                      {child.children && <BsChevronRight className={`text-xs transition-transform md:group-hover/submenu:rotate-90 ${openSubIndex === j ? "rotate-90" : ""}`} />}</span>
                      {child.children && (
                        <ul
                          className={`subMenu md:shadow-2xl
                            md:absolute md:left-full md:top-0  md:bg-white rounded md:py-2
                            md:opacity-0 md:invisible md:translate-x-4
                            md:group-hover/submenu:opacity-100
                            md:group-hover/submenu:visible
                            md:group-hover/submenu:translate-x-1
                            transition-all duration-300
                            ${j==0 ? "w-full md:w-80":"w-full md:w-60"}
                            ${openSubIndex === j ? "max-h-150 opacity-100" : "max-h-0 md:max-h-150 opacity-0 overflow-hidden"}
                          `}
                        >
                          {child.children.map((sub, k) => (
                            <li key={k}>
                              <Link
                                href={sub.href}
                                className="hover:bg-primary md:hover:bg-gray-100"
                              >
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
     </nav>
    </>
  );
}

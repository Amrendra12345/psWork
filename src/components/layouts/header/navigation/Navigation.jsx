import Link from "next/link";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

export default function Navigation() {
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
      <ul className="flex gap-5">
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
              className="relative group text-white flex gap-1 items-center"
            >
              {item.title} <BsChevronDown className="text-sm" />
              {item.children && (
                <ul
                  className={`absolute right-0 top-full bg-white rounded shadow-md py-2 z-50
                  opacity-0 invisible translate-y-6 text-gray-700 group-hover:opacity-100 group-hover:visible group-hover:translate-y-3 transition-all duration-300 
                  ${
                    item.title === "Services"
                      ? "w-75"                      
                      : "w-55"
                  }`}
                >
                  {item.children.map((child, j) => (
                    <li
                      key={j}
                      className="relative group/submenu px-3 py-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer"
                    >
                      <span>{child.title}</span>
                      {child.children && <BsChevronRight className="text-xs" />}
                      {child.children && (
                        <ul
                          className={`
                            absolute left-full top-0  bg-white shadow-md rounded py-2
                            opacity-0 invisible translate-x-4
                            group-hover/submenu:opacity-100
                            group-hover/submenu:visible
                            group-hover/submenu:translate-x-1
                            transition-all duration-300
                            ${j==0 ? "w-80":"w-60"}
                          `}
                        >
                          {child.children.map((sub, k) => (
                            <li key={k}>
                              <Link
                                href={sub.href}
                                className="block px-3 py-2 hover:bg-gray-100"
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
      <ul className="flex gap-4">
        <li>
          <Link
            href="/"
            className="text-gray-700 bg-gray-100 rounded py-3 px-4"
          >
            Get Financial Assistance
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-gray-700 bg-gray-100 rounded py-3 px-4"
          >
            Apply for PAP
          </Link>
        </li>
      </ul>
    </>
  );
}

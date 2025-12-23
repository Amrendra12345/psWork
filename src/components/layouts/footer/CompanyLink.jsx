import Link from "next/link"


const CompanyLink = () => {
     const companyLink = [
        { name: "About iCanHeal", href: "/about-us" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms-conditions" },      
    ]
  return (
    <ul className='flex flex-col gap-4'>
         {companyLink.map((link) => (
            <li key={link.name}>
                <Link className="text-white/70 leading-[24px] hover:text-white" href={link.href}>{link.name}</Link>
            </li>
         ))}
     </ul>
  )
}

export default CompanyLink
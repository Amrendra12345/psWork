
import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-y-4 gap-x-0">      
        <Image src={'/assets/logo.png'} width={125} height={189} alt="logo" className="w-1/5 h-auto" />
        <span className="text-[#f7e8dd] font-semibold font-epilogue text-2xl tracking-wider"> icanheal </span>
    </Link>
  );
};

export default Logo;

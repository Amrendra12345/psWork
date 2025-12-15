
import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1">      
        <Image src={'/assets/logo.png'} width={32} height={32} alt="logo" />
        <span className="text-white font-semibold font-stretch-50% text-2xl tracking-wider"> iCanHeal </span>
    </Link>
  );
};

export default Logo;

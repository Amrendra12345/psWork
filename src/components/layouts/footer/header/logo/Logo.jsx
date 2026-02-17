import Link from "next/link";
import Image from "next/image";
import { HiBars3 } from "react-icons/hi2";
const Logo = ({isOpen,setIsOpen}) => {
  return (
    <Link href="/" className="flex items-center w-full justify-between">
      <div className="w-10 h-14 flex justify-start items-center">
        <Image
          src={"/assets/logo.png"}
          loading="eager"
          width={40}
          height={60}
          alt="logo"
          className="w-full h-auto"
        />
        <p className="text-[#f7e8dd] font-semibold font-epilogue text-2xl tracking-wider">
          {" "}
          icanheal{" "}
        </p>
      </div>
      <div className="border border-white/20 p-1 cursor-pointer rounded md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <HiBars3 className="text-3xl text-white/70" />
      </div>
    </Link>
  );
};

export default Logo;

import Logo from "./logo/Logo";
import Navigation from "./navigation/Navigation";


const Header = () => {
  return (
    <header className="bg-(--main-theme-background) py-3 px-5 border-b border-[#2f5158] sticky top-0 z-50">
      <div className="max-w-(--max-width) mx-auto flex items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;

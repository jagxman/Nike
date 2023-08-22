import { headerLogo } from "../public/assets/images";
import { hamburger } from "../public/assets/icons";
import { navLinks } from "../constants";

import Image from "next/image";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <Image src={headerLogo} alt="logo" width={130} height={29} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                className=" font-montserrat leading-normal text-lg text-slate-gray "
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
            <Image src={hamburger} alt="burger" width={25} height={25}/>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

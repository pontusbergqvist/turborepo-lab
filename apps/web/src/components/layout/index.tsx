import { GiMagnifyingGlass } from "react-icons/gi";
import { GoBook } from "react-icons/go";
import { AiFillHeart } from "react-icons/ai";
import Header from "./header";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="bg-primary flex flex-col min-h-screen h-full mx-auto">
      <div className="p-3">
        <Header />
        <main className="bg-red-secondary max-w-[1000px]">{children}</main>
      </div>
      <nav className="w-full mt-auto bg-secondary p-2">
        <ul className="flex justify-between max-w-[450px] mx-auto">
          <Link href="/sok">
            <li className="flex flex-col items-center">
              <GiMagnifyingGlass className="text-[30px]" />
              <p className="text-[14px] uppercase">Sök EVM</p>
            </li>
          </Link>
          <Link href="/kategorier">
            <li className="flex flex-col items-center">
              <GoBook className="text-[30px]" />
              <p className="text-[14px] uppercase">Kategorier</p>
            </li>
          </Link>
          <Link href="/favoriter">
            <li className="flex flex-col items-center">
              <AiFillHeart className="text-[30px]" />
              <p className="text-[14px] uppercase">Favoriter</p>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Layout;

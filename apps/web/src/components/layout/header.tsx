import { TbFileSpreadsheet } from "react-icons/tb";
import { RxMagnifyingGlass } from "react-icons/rx";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const getHeadingFromRoute = (route: string): string => {
    if (route.startsWith("/favoriter")) return "Favoriter";
    if (route.startsWith("/sok")) return "Sök EVM";
    if (route.startsWith("/kategorier")) return "Kategorier";
    return "EVM-katalog";
  };

  return (
    <header className="flex flex-col items-center">
      <section className="flex justify-between items-center w-full text-accent">
        <p className="text-[22px] font-bold">
          {getHeadingFromRoute(router.route)}
        </p>
        <div className="flex justify-between w-full text-[25px] max-w-[70px]">
          <RxMagnifyingGlass />
          <TbFileSpreadsheet />
        </div>
      </section>
    </header>
  );
};

export default Header;

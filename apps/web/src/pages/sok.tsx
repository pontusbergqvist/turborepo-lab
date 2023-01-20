import { NextPage } from "next";

const Sok: NextPage = () => {
  return (
    <section>
      <div className="my-10 h-[140px] flex flex-col justify-center items-center">
        <p className="text-[23px] text-center tracking-wide text-textOnPrimary mb-2">
          Sök bland produkter
        </p>
        <input
          type="text"
          className="w-4/5 max-w-[500px] p-3 rounded-xl"
          placeholder="Sök"
        />
      </div>
      <div className="text-[15px]">
        <div className="my-4">
          <p className="text-[14px]">Senaste produkter</p>
          <ul className="bg-secondary rounded">
            <li className="p-1">
              Produkt 1 <span className="text-textOnPrimary"> / Kategori</span>
            </li>
            <li className="p-1">
              Produkt 2<span className="text-textOnPrimary"> / Kategori</span>
            </li>
            <li className="p-1">
              Produkt 3<span className="text-textOnPrimary"> / Kategori</span>
            </li>
            <li className="p-1">
              Produkt 4<span className="text-textOnPrimary"> / Kategori</span>
            </li>
            <li className="p-1">
              Produkt 5<span className="text-textOnPrimary"> / Kategori</span>
            </li>
          </ul>
        </div>
        <div className="my-4">
          <p className="text-[14px]">Senaste kategorier</p>
          <ul className="bg-secondary rounded">
            <li className="p-1">Kategori 1</li>
            <li className="p-1">Kategori 2</li>
            <li className="p-1">Kategori 3</li>
            <li className="p-1">Kategori 4</li>
            <li className="p-1">Kategori 5</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sok;

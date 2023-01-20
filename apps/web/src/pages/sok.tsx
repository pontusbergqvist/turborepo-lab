import { NextPage } from "next";
import CategoryCard from "../components/shared/category/categoryCard";
import ProductCard from "../components/shared/product/productCard";

const Sok: NextPage = () => {
  return (
    <section>
      <div className="relative py-40 mt-1 h-[140px] flex flex-col justify-center items-center bg-[url('https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80')] bg-cover after:content-[''] after:block after:h-full after:w-full after:bg-black after:absolute after:opacity-30">
        <p className="text-[23px] text-center tracking-wide text-white mb-2 z-10">
          Sök bland produkter
        </p>
        <input
          type="text"
          className="w-4/5 max-w-[500px] p-3 rounded-xl z-10"
          placeholder="Sök"
        />
      </div>
      <div className="text-[15px]">
        <div className="my-4">
          <p className="text-[14px]">Senaste produkter</p>
          <div className="rounded bg-secondary py-2 grid grid-cols-2 gap-2 relative after:content-[''] after:block after:h-full after:w-[2px] after:absolute after:bg-gray-200 after:left-1/2 after:-translate-x-1/2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div className="my-4">
          <p className="text-[14px]">Senaste kategorier</p>
          <div className="grid grid-cols-2 gap-2 bg-secondary w-full rounded-xl">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sok;

import { NextPage } from "next";
import CategoryCard from "../../components/shared/category/categoryCard";

const Kategorier: NextPage = () => {
  return (
    <section className="w-full">
      <div className="my-10 h-[140px] flex flex-col justify-center items-center ">
        <p className="text-[23px] text-center tracking-wide text-textOnPrimary mb-2">
          Sök bland kategorier
        </p>
        <input
          type="text"
          className="w-4/5 max-w-[500px] p-3 rounded-xl"
          placeholder="Sök"
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </section>
  );
};

export default Kategorier;

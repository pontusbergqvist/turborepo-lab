import ProductCard from "../../components/shared/product/productCard";

export default function Kategorier() {
  return (
    <section className="w-full">
      <div className="my-10 h-[140px] flex flex-col justify-center items-center">
        <p className="text-[23px] text-center tracking-wide text-textOnPrimary mb-2">
          Sök bland kategorier
        </p>
        <input
          type="text"
          className="w-4/5 max-w-[500px] p-3 rounded-xl"
          placeholder="Sök"
        />
      </div>
      <div className="bg-secondary grid grid-cols-2 gap-2 relative after:content-[''] after:block after:h-full after:w-[2px] after:absolute after:bg-gray-200 after:left-1/2 after:-translate-x-1/2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

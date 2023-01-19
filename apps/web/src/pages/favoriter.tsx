import ProductCard from "../components/shared/product/productCard";
import Favorite from "../components/shared/icons/favorite";

export default function Favoriter() {
  return (
    <div>
      <section className="flex flex-col items-center text-textOnPrimary my-10">
        <div className="text-[60px]">
          <Favorite />
        </div>
        <div className="text-[23px] text-center max-w-[280px] tracking-wide">
          <p>Ser du ett recept du gillar?</p>
          <p>Tryck på hjärtat för att spara det!</p>
        </div>
      </section>
      <div className="bg-secondary grid grid-cols-2 gap-2 relative after:content-[''] after:block after:h-full after:w-[2px] after:absolute after:bg-gray-200 after:left-1/2 after:-translate-x-1/2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

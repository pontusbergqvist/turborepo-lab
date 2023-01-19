import { AiFillHeart } from "react-icons/ai";

export default function Favoriter() {
  return (
    <div>
      <section className="flex flex-col items-center text-textOnPrimary my-5">
        <div className="border-2 border-accent rounded-full">
          <AiFillHeart className="text-accent text-[60px] p-2" />
        </div>
        <div className="text-[23px] text-center max-w-[280px] tracking-wide">
          <p>Ser du ett recept du gillar?</p>
          <p>Tryck på hjärtat för att spara det!</p>
        </div>
      </section>
      <div className="bg-secondary">Favoriter kommer här</div>
    </div>
  );
}

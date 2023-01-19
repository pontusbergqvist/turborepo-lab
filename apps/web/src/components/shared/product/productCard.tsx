import Favorite from "../icons/favorite";

const ProductCard = () => {
  return (
    <div className="flex flex-col px-4 relative leading-5">
      <img
        src="https://res.cloudinary.com/coopsverige/images/e_sharpen,f_auto,fl_clip,fl_progressive,q_90,c_lpad,g_center,h_330,w_330/v1632319195/cloud/225624/R%C3%A5gsnacks%20Havssalt%20Eko.jpg"
        alt="Product"
        className="pt-5 pb-2"
      />
      <div className="absolute top-[5px] right-[5px] text-[30px]">
        <Favorite />
      </div>
      <p>Rågbrödssnacks havssalt</p>
      <p>COOP</p>
      <p className="text-textOnPrimary">130 g</p>
      <p className="text-textOnPrimary">K/B-pack: 10</p>
      <p>BNR: 67476</p>
      <p className="text-center">Streckkod</p>
    </div>
  );
};

export default ProductCard;

const CategoryCard = () => {
  return (
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80"
        alt="Product"
        className="aspect-square w-full rounded-xl object-cover relative after:content-[''] after:block after:h-full after:w-full after:bg-black after:absolute after:opacity-90"
      />
      <div className="h-full w-full bg-black absolute z-10 top-0 rounded-xl opacity-20"></div>
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 p-1 px-2 z-20 bg-primary rounded">
        Kategorinamn
      </p>
    </div>
  );
};

export default CategoryCard;

import { useSelector } from "react-redux";
import { ProductCart } from "../components/ProductCart";
import NoProduct from "../assets/images/not_found.png";

export const FilteredData = () => {
  const filteredProducts = useSelector((state) => state.product.filteredData);
  return (
    <div className="px-4 md:px-16 lg:px-24 mx-auto py-12">
      {filteredProducts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
          <div className=" grid grid-cols-1 sm:grid-cols-2 mb:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer ">
            {filteredProducts.map((product) => (
              <ProductCart key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          <img src={NoProduct} alt="" />
        </div>
      )}
    </div>
  );
};

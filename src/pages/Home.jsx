import { Categories } from "../assets/mockData";
import HeroImg from "../assets/images/hero.jpg";
import { InfoSection } from "../components/InfoSection";
import { CategorySection } from "../components/CategorySection";

export const Home = () => {
  return (
    <div className="bg-white mt-2  px-4 md:px-16 lg:px-24 ">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12 ">
          <div className="bg-blue-600 text-white text-xs font-bold px-2 py-2.5">
            Shop by categories
          </div>
          <ul className="space-y-4 bg-gray-100 p-3 border">
            {Categories.map((category, index) => (
              <li className="flex items-center text-sm font-medium" key={index}>
                <div className="w-2 h-2 border-blue-500 rounded-full mr-2 "></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
          <img src={HeroImg} alt="" className="h-full  w-500" />
          <div className="absolute top-60 left-48">
            {/* <p className="text-gray-600 mb-4">E-Shop</p>
            <h2 className="text-3x1 font-bold">Welcome to us</h2>
            <p className="text-x1 mt-2.5 font-bold text-gray-800">
              Millions plus Products
            </p> */}
            <button
              className="bg-blue-600 px-8 py-1.5 text-white mt-4 hover:bg-blue-700 transform transition-transform
            duration-300 hover:scale-105"
            >
              Show now
            </button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />
    </div>
  );
};

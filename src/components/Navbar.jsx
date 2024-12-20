import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "./Modal";
import { Login } from "./Login";
import { Register } from "./Register";
import { setSearchTerm } from "../redux/productSlice";

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogIn, setIsLogIn] = useState(true);
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.cart.products);

  const openSignUp = () => {
    setIsLogIn(false);
    setIsModalOpen(true);
  };

  const openLogin = () => {
    setIsLogIn(true);
    setIsModalOpen(true);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };

  return (
    <nav className="bg-white shadow-md">
      <div>
        <Toaster />
      </div>
      <div className="container mg-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">E-Shop</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              className="w-full border py-2 px-4"
              type="text"
              placeholder="Search product"
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute top-3 right-3 text-blue-500"></FaSearch>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute top-0 text-sm w-3 left-3 bg-blue-600 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button
            className="hidden md:block"
            onClick={() => setIsModalOpen(true)}
          >
            Login | Register
          </button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/shop" className="hover:underline">
          Shop
        </Link>
        <Link to="/" className="hover:underline">
          Contact
        </Link>
        <Link to="/" className="hover:underline">
          About
        </Link>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogIn ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { GrNetworkDrive } from "react-icons/gr";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Checkout = ({ setOrder }) => {
  const [billing, setBilling] = useState(true);
  const [shipping, setShipping] = useState(false);
  const [payment, setPayment] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "1131",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    };
    setOrder(newOrder);
    navigate("/order-confirmation");
  };

  return (
    <div className="container mx-auto py-8 min-h-96 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4 ">Checkout Page</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setBilling(!billing)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Billing Information
              </h3>
              {billing ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            <div className={`space-y-4 ${billing ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  className="w-full px-3 py-2 border"
                />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  className="w-full px-3 py-2 border"
                />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  Phone
                </label>
                <input
                  type="email"
                  placeholder="Enter phone number"
                  name="phone"
                  className="w-full px-3 py-2 border"
                />
              </div>
            </div>
          </div>
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setShipping(!shipping)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Shipping Information
              </h3>
              {shipping ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            <div className={`space-y-4 ${shipping ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter address"
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Enter City Name"
                  name="city"
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      city: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  Zip Code
                </label>
                <input
                  type="text"
                  placeholder="Enter Zip Code"
                  name="zip"
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      zip: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setPayment(!payment)}
            >
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
              {payment ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            <div className={`space-y-4 ${payment ? "" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className="block text-gray-700 ml-2">
                  Cash on Delivery
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                <label className="block text-gray-700 ml-2">Debit Card</label>
              </div>
              {paymentMethod === "dc" && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold mb-4 ">
                    Debit Card Information
                  </h3>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter card number"
                      className="border p-2 w-full rounded"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      className="border p-2 w-full rounded"
                      placeholder="Enter card holder name"
                      required
                    />
                  </div>

                  <div className="flex justify-between mb-4">
                    <div className="w-1/2 mr-2">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Expire Date
                        <input
                          type="text"
                          className="border p-2 w-full rounded"
                          placeholder="MM/YY"
                          required
                        />
                      </label>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        CVV
                        <input
                          type="text"
                          className="border p-2 w-full rounded"
                          placeholder="CVV"
                          required
                        />
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="md:w-1/3  bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4 ">Order Summery</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div className="flex justify-between" key={product.id}>
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold">{product.name}</h4>
                    <p className="text-gray-600">
                      &{product.price} * {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-800">
                  ${product.price * product.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Total Price:</span>
              <span className="font-semibold">
                ${cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
          <button
            className="w-full bg-red-400 text-white py-2 mt-6 hover:bg-red-300"
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FiTag } from "react-icons/fi";

import s1 from "../assets/shoes/s1.jpg";
import s2 from "../assets/shoes/s2.jpg";
import s3 from "../assets/shoes/s3.jpg";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import InsideBrand from "../components/InsideBrand";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteCartItem,
  FetchCartItem,
  FetchCartLocalStroage,
} from "../store/feature/Cartsetup.js";
import FloatingButtons from "../components/FloatingButtons.jsx";

const cartItems = [
  { id: 1, img: s1, title: "Classic Runner", size: "42", price: 3500, qty: 1 },
  { id: 2, img: s2, title: "Urban Sneaker", size: "41", price: 4500, qty: 2 },
  { id: 3, img: s3, title: "Street Walker", size: "43", price: 3200, qty: 1 },
  { id: 3, img: s3, title: "Street Walker", size: "43", price: 3200, qty: 1 },
  { id: 3, img: s3, title: "Street Walker", size: "43", price: 3200, qty: 1 },
  { id: 3, img: s3, title: "Street Walker", size: "43", price: 3200, qty: 1 },
  { id: 3, img: s3, title: "Street Walker", size: "43", price: 3200, qty: 1 },
  { id: 3, img: s3, title: "Street Walker", size: "43", price: 3200, qty: 1 },
];

const CartPage = () => {
  let [searchbar, setsearchbar] = useState(false);
  let { fetchcartarr } = useSelector((state) => state.cartstore);
  console.log(fetchcartarr);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchCartLocalStroage());
  }, []);

  let DeleteCart = (id) => {
    dispatch(DeleteCartItem(id));
    dispatch(FetchCartItem());
  };

  return (
    <div>
      {searchbar && (
        <div className="fixed inset-0 top-2 flex justify-center  w-screen  z-90 ">
          <SearchBar setsearchbar={setsearchbar}></SearchBar>
        </div>
      )}
      <Navbar setsearchbar={setsearchbar}></Navbar>

      <div className="w-full flex justify-center py-8 md:py-12 bg-ink-50 min-h-screen">
        <div className="w-[95%] max-w-6xl">
          {/* heading */}
          <div className="mb-6 flex items-baseline gap-3">
            <h1 className="text-2xl md:text-4xl font-bold text-ink-900">
              Shopping Cart
            </h1>
            <span className="text-ink-800 text-sm md:text-base">
              ({fetchcartarr.length} items)
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* ================= Left: items ================= */}
            <div className="flex-1 flex flex-col gap-4">
              {/* table head (desktop only) */}
              <div className="hidden md:grid grid-cols-12 px-4 text-sm font-semibold text-ink-800">
                <span className="col-span-6">Product</span>
                <span className="col-span-2 text-center">Price</span>
                <span className="col-span-2 text-center">Quantity</span>
                <span className="col-span-2 text-right">Total</span>
              </div>

              {fetchcartarr.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow shadow-black/10 p-3 md:p-4 grid grid-cols-12 gap-3 items-center"
                >
                  {/* product */}
                  <div className="col-span-12 md:col-span-6 flex gap-3 items-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-bold text-ink-900 truncate">
                        {item.title}
                      </h3>
                      <p className="text-sm text-ink-800">Size: {item.size}</p>
                      <button
                        onClick={() => DeleteCart(item.id)}
                        className="mt-2 flex items-center gap-1 text-sm text-red-600 hover:text-red-700 transition-colors"
                      >
                        <RiDeleteBin6Line />
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* price */}
                  <div className="col-span-4 md:col-span-2 md:text-center">
                    <p className="md:hidden text-xs text-ink-800">Price</p>
                    <p className="font-semibold text-ink-900">
                      Rs. {item.price.toLocaleString()}
                    </p>
                  </div>

                  {/* quantity */}
                  <div className="col-span-4 md:col-span-2 flex md:justify-center">
                    <div className="flex items-center border border-ink-100 rounded-lg overflow-hidden">
                      <button className="w-8 h-8 flex justify-center items-center hover:bg-ink-100 transition-colors">
                        <AiOutlineMinus />
                      </button>
                      <span className="w-8 text-center font-semibold">
                        {item.qty}
                      </span>
                      <button className="w-8 h-8 flex justify-center items-center hover:bg-ink-100 transition-colors">
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </div>

                  {/* total */}
                  <div className="col-span-4 md:col-span-2 text-right">
                    <p className="md:hidden text-xs text-ink-800">Total</p>
                    <p className="font-bold text-ink-900">
                      Rs. {(item.price * item.qty).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}

              <button className="self-start text-sm font-semibold text-ink-900 underline hover:text-brand-600 transition-colors">
                ← Continue shopping
              </button>
            </div>

            {/* ================= Right: summary ================= */}
            <div className="w-full lg:w-95 flex flex-col gap-4 lg:sticky lg:top-6 h-fit">
              {/* coupon */}
              <div className="bg-white rounded-lg shadow shadow-black/10 p-4">
                <h2 className="flex items-center gap-2 text-lg font-bold text-ink-900 mb-3">
                  <FiTag />
                  Coupon Code
                </h2>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="flex-1 min-w-0 border border-ink-100 rounded-lg px-3 py-2 text-sm outline-none focus:border-brand-500"
                  />
                  <button className="bg-ink-900 hover:bg-ink-700 text-white text-sm font-semibold px-4 rounded-lg transition-colors">
                    Apply
                  </button>
                </div>
                <p className="mt-2 text-xs text-green-600">
                  Coupon applied: SAVE10 (-10%)
                </p>
              </div>

              {/* order summary */}
              <div className="bg-white rounded-lg shadow shadow-black/10 p-4">
                <h2 className="text-lg font-bold text-ink-900 mb-4">
                  Order Summary
                </h2>

                <div className="flex flex-col gap-3 text-sm md:text-base text-ink-800">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-ink-900">
                      Rs. 15,700
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discount</span>
                    <span className="font-semibold text-green-600">
                      - Rs. 1,570
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-semibold text-ink-900">Rs. 200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span className="font-semibold text-ink-900">Rs. 0</span>
                  </div>
                </div>

                <div className="border-t border-ink-100 my-4" />

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-ink-900">Total</span>
                  <span className="text-xl font-bold text-red-600">
                    Rs. 14,330
                  </span>
                </div>

                <button className="mt-5 w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <InsideBrand></InsideBrand>
        <Footer></Footer>
      </div>
      <FloatingButtons></FloatingButtons>
    </div>
  );
};

export default CartPage;

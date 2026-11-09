import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { BsFillBagFill } from "react-icons/bs";
import React, { useState } from "react";
import NavSlider from "./NavSlider";

import slide1 from "../assets/nav1.jpg";
import slide2 from "../assets/nav2.jpg";
import slide3 from "../assets/nav4.jpg";
import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const slides = [slide1, slide2, slide3];

const mobileLinks = [
  { label: "Home", path: "/home" },
  { label: "Electronic", path: "/electronic" },
  { label: "Shoes", path: "/shoes" },
  { label: "Help", path: "/help" },
];

const desktopLinks = [
  { label: "Home", path: "/home" },
  { label: "Electronic", path: "/electronic" },
  { label: "Shoes", path: "/shoes" },
  { label: "Logout", path: "/login" },
  { label: "Help", path: "/help" },
];
const Navbar = ({ setsearchbar }) => {
  const [toggle, settoggle] = useState(true); // true = menu closed
  let { cartarr } = useSelector((state) => state.cartstore);

  return (
    <>
      {/* ================= Mobile ================= */}

      <div className="md:hidden   w-full z-50 shadow-lg">
        <div className="relative w-full">
          <NavSlider images={slides} />

          <div className="absolute top-0 left-0 w-full z-70 flex justify-between items-center px-4 py-3">
            <div className="flex items-center gap-2 w-fit">
              <AiOutlineMenu
                className="text-3xl text-white cursor-pointer"
                onClick={() => settoggle(false)}
              />
              <div className="w-fit flex gap-2 items-center">
                <BsFillBagFill className="text-brand-400 text-3xl" />
                <h1 className="text-white text-xl font-semibold">Shoppy</h1>
              </div>
            </div>
            {toggle ? (
              <div className="flex gap-2 items-center text-white">
                <div className="relative">
                  <AiOutlineShoppingCart className="text-3xl hover:text-brand-300 cursor-pointer transition-colors" />
                  <span className="absolute -top-1 -right-2 min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-brand-500 text-white text-xs font-semibold">
                    {cartarr.length}
                  </span>
                </div>
                <AiOutlineHeart className="text-3xl hover:text-brand-300 cursor-pointer transition-colors" />
                <AiOutlineSearch
                  onClick={() => setsearchbar(true)}
                  className="text-3xl hover:text-brand-300 cursor-pointer transition-colors"
                />
              </div>
            ) : (
              <RxCross1
                className="text-3xl text-white cursor-pointer"
                onClick={() => settoggle(true)}
              />
            )}
          </div>

          {!toggle && (
            <div className="fixed inset-0 z-20 pt-24 px-6 pb-8 flex flex-col bg-linear-to-b from-ink-900/95 via-ink-900/95 to-brand-900/95 backdrop-blur-md">
              <ul className="flex flex-col text-lg text-white">
                {mobileLinks.map((l) => (
                  <Link
                    to={l.path}
                    key={l}
                    onClick={() => settoggle(true)}
                    className="cursor-pointer py-3.5 border-b border-white/10 hover:text-brand-300 hover:pl-2 transition-all"
                  >
                    {l}
                  </Link>
                ))}
              </ul>

              <button className="mt-auto w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-medium transition-colors">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ================= Desktop ================= */}
      <div className="hidden md:block   w-full z-50 shadow-lg">
        <div className="relative w-full">
          <NavSlider images={slides} />

          {/* Header on top of slider */}
          <div className="absolute top-0 left-0 w-full z-10 flex justify-between items-center px-7 lg:px-16 py-5">
            <div className="flex items-center gap-2">
              <BsFillBagFill className="text-brand-400 text-4xl" />
              <h1 className="text-white text-2xl font-semibold">Shoppy</h1>
            </div>

            <ul className="flex gap-10 text-[16px] text-white/90">
              {desktopLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="cursor-pointer pb-1 border-b-2 border-transparent hover:text-brand-300 hover:border-brand-400 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </ul>

            <div className="flex gap-5 items-center text-white">
              <div className="relative">
                <Link to={"/cart"}>
                  <AiOutlineShoppingCart className="text-4xl hover:text-brand-300 cursor-pointer transition-colors" />
                  <span className="absolute -top-1 -right-2 min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-brand-500 text-white text-xs font-semibold">
                    {cartarr.length}
                  </span>
                </Link>
              </div>
              <AiOutlineHeart className="text-4xl hover:text-brand-300 cursor-pointer transition-colors" />
              <AiOutlineSearch
                onClick={() => setsearchbar(true)}
                className="text-4xl hover:text-brand-300 cursor-pointer transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

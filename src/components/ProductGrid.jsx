import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

import s1 from "../assets/shoes/s1.jpg";
import s2 from "../assets/shoes/s2.jpg";
import s3 from "../assets/shoes/s3.jpg";
import s4 from "../assets/shoes/s4.jpg";
import s5 from "../assets/shoes/s5.jpg";
import s6 from "../assets/shoes/s6.jpg";
import s7 from "../assets/shoes/s7.jpg";
import s8 from "../assets/shoes/s8.jpg";
import { useDispatch } from "react-redux";
import { FetchCartItem, setCartItem } from "../store/feature/Cartsetup.js";
import toast from "react-hot-toast";

const products = [
  { id: 1, img: s1, title: "Classic Runner", price: 5000, salePrice: 3500 },
  { id: 2, img: s2, title: "Urban Sneaker", price: 6500, salePrice: 4500 },
  { id: 3, img: s3, title: "Street Walker", price: 4800, salePrice: 3200 },
  { id: 4, img: s4, title: "Sport Pro", price: 7000, salePrice: 4900 },
  { id: 5, img: s5, title: "Everyday Comfort", price: 5500, salePrice: 3800 },
  { id: 6, img: s6, title: "Trail Master", price: 8000, salePrice: 5600 },
  { id: 7, img: s7, title: "Casual Low Top", price: 4200, salePrice: 2900 },
  { id: 8, img: s8, title: "Court Classic", price: 6000, salePrice: 4200 },
];

const ProductGrid = ({ product }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  let dispatch = useDispatch();

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const addToCart = (id) => {
    console.log(id);

    dispatch(setCartItem(id));
    dispatch(FetchCartItem());
  };

  return (
    <section className="w-full flex justify-center mt-10">
      <div className="w-[95%]">
        <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-5">
          Our Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {product.map((item) => {
            const discount = Math.round(
              ((item.price - item.salePrice) / item.price) * 100,
            );
            const liked = wishlist.includes(item.id);

            return (
              <div
                key={item.id}
                className="group bg-white rounded-lg overflow-hidden shadow shadow-black/10 hover:shadow-lg transition"
              >
                {/* image area */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-56 md:h-64 object-cover transition duration-300 group-hover:scale-105"
                  />

                  {/* discount - left side */}
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    -{discount}%
                  </span>

                  {/* wishlist - right side */}
                  <button
                    onClick={() => toggleWishlist(item.id)}
                    aria-label="Add to wishlist"
                    className="absolute top-2 right-2 w-9 h-9 bg-white rounded-full flex justify-center items-center shadow shadow-black/30 hover:scale-110 transition"
                  >
                    {liked ? (
                      <FaHeart className="text-red-600" />
                    ) : (
                      <FaRegHeart className="text-ink-900" />
                    )}
                  </button>

                  {/* add to cart - over the image, bottom */}
                  <button
                    onClick={() => addToCart(item.id)}
                    className="absolute bottom-0 left-0 w-full bg-ink-900/90 text-white text-sm font-semibold py-2.5 flex justify-center items-center gap-2
                               md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 hover:bg-ink-700"
                  >
                    <FiShoppingCart />
                    Add to cart
                  </button>
                </div>

                {/* details */}
                <div className="p-3">
                  <h3 className="text-base md:text-lg font-bold text-ink-900 truncate">
                    {item.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-lg font-bold text-red-600">
                      Rs. {item.salePrice.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      Rs. {item.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

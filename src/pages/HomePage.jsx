import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer.jsx";
import FlashSale from "../components/FlashSale.jsx";
import Trending from "../components/Trending.jsx";
import InsideBrand from "../components/InsideBrand.jsx";
import ProductGridOne from "../components/ProductGridOne.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import e1 from "../assets/electronic/s1.png";
import e2 from "../assets/electronic/s2.png";
import e3 from "../assets/electronic/s3.png";
import e4 from "../assets/electronic/s4.png";
import e5 from "../assets/electronic/s12.png";
import e6 from "../assets/electronic/s13.png";
import e7 from "../assets/electronic/s14.png";
import e8 from "../assets/electronic/s15.png";

import s1 from "../assets/shoes/s1.jpg";
import s2 from "../assets/shoes/s2.jpg";
import s3 from "../assets/shoes/s3.jpg";
import s4 from "../assets/shoes/s4.jpg";
import s5 from "../assets/shoes/s5.jpg";
import s6 from "../assets/shoes/s6.jpg";
import s7 from "../assets/shoes/s7.jpg";
import s8 from "../assets/shoes/s8.jpg";
import s10 from "../assets/shoes/s10.jpg";

import product from "../data/product.js";
import useValidProducts from "../utils/utils.js";
import { useDispatch } from "react-redux";
import { FetchCartLocalStroage } from "../store/feature/Cartsetup.js";

const HomePage = () => {
  let [searchbar, setsearchbar] = useState(false);
  let dispatch = useDispatch();

  let producta = useValidProducts(product);

  console.log(producta);

  const products = [
    { id: 2, img: s2, title: "Urban Sneaker", price: 6500, salePrice: 4500 },
    { id: 5, img: s5, title: "Everyday Comfort", price: 5500, salePrice: 3800 },
    { id: 14, img: e1, title: "iPhone 15", price: 290000, salePrice: 250000 },
    { id: 4, img: s4, title: "Sport Pro", price: 7000, salePrice: 4900 },
    { id: 8, img: s8, title: "Court Classic", price: 6000, salePrice: 4200 },
    { id: 10, img: e1, title: "iPhone 11", price: 120000, salePrice: 99000 },
    { id: 7, img: s7, title: "Casual Low Top", price: 4200, salePrice: 2900 },
    { id: 12, img: e3, title: "iPhone 13", price: 190000, salePrice: 160000 },
    { id: 3, img: s3, title: "Street Walker", price: 4800, salePrice: 3200 },
    { id: 15, img: e1, title: "iPhone 16", price: 350000, salePrice: 305000 },
    { id: 6, img: s6, title: "Trail Master", price: 8000, salePrice: 5600 },
    { id: 1, img: s1, title: "Classic Runner", price: 5000, salePrice: 3500 },
    { id: 13, img: e4, title: "iPhone 14", price: 230000, salePrice: 195000 },
    { id: 9, img: s10, title: "Air Light", price: 7500, salePrice: 5200 },
    { id: 11, img: e2, title: "iPhone 12", price: 150000, salePrice: 125000 },
  ];

  useEffect(() => {
    dispatch(FetchCartLocalStroage());
  }, []);
  return (
    <>
      <title>Home Page</title>
      <div>
        {searchbar && (
          <div className="fixed inset-0 top-2 flex justify-center  w-screen  z-90 ">
            <SearchBar setsearchbar={setsearchbar}></SearchBar>
          </div>
        )}
        <Navbar setsearchbar={setsearchbar}></Navbar>
        <Trending></Trending>
        <ProductGridOne></ProductGridOne>
        <FlashSale item={products}></FlashSale>

        <ProductGrid product={producta}></ProductGrid>

        <div className="">
          <InsideBrand></InsideBrand>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default HomePage;

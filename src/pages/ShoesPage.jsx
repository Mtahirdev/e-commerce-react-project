import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import Trending from "../components/Trending";
import ProductGrid from "../components/ProductGrid";
import InsideBrand from "../components/InsideBrand";
import Footer from "../components/Footer";
import FlashSale from "../components/FlashSale";

import s1 from "../assets/shoes/s1.jpg";
import s2 from "../assets/shoes/s2.jpg";
import s3 from "../assets/shoes/s3.jpg";
import s4 from "../assets/shoes/s4.jpg";
import s5 from "../assets/shoes/s5.jpg";
import s6 from "../assets/shoes/s6.jpg";
import s7 from "../assets/shoes/s7.jpg";
import s8 from "../assets/shoes/s8.jpg";
import s10 from "../assets/shoes/s10.jpg";
import useValidProducts from "../utils/utils";
import { shoesProducts } from "../data/product";
import FloatingButtons from "../components/FloatingButtons";

const ShoesPage = () => {
  let [searchbar, setsearchbar] = useState(false);
  let product = useValidProducts(shoesProducts);

  const products = [
    { id: 2, img: s2, title: "Urban Sneaker", price: 6500, salePrice: 4500 },
    { id: 5, img: s5, title: "Everyday Comfort", price: 5500, salePrice: 3800 },
    { id: 4, img: s4, title: "Sport Pro", price: 7000, salePrice: 4900 },
    { id: 8, img: s8, title: "Court Classic", price: 6000, salePrice: 4200 },
    { id: 7, img: s7, title: "Casual Low Top", price: 4200, salePrice: 2900 },
    { id: 3, img: s3, title: "Street Walker", price: 4800, salePrice: 3200 },
    { id: 6, img: s6, title: "Trail Master", price: 8000, salePrice: 5600 },
    { id: 1, img: s1, title: "Classic Runner", price: 5000, salePrice: 3500 },
    { id: 9, img: s10, title: "Air Light", price: 7500, salePrice: 5200 },
  ];

  return (
    <>
      <div>
        {searchbar && (
          <div className="fixed inset-0 top-2 flex justify-center  w-screen  z-90 ">
            <SearchBar setsearchbar={setsearchbar}></SearchBar>
          </div>
        )}
        <Navbar setsearchbar={setsearchbar}></Navbar>
        <Trending></Trending>
        <FlashSale item={products}></FlashSale>
        <ProductGrid product={product}></ProductGrid>

        <div className="">
          <InsideBrand></InsideBrand>
          <Footer></Footer>
        </div>
        <FloatingButtons></FloatingButtons>
      </div>
    </>
  );
};

export default ShoesPage;

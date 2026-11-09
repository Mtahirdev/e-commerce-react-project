import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer.jsx";
import FlashSale from "../components/FlashSale.jsx";
import Trending from "../components/Trending.jsx";
import InsideBrand from "../components/InsideBrand.jsx";
import ProductGridOne from "../components/ProductGridOne.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import Phone from "../components/Phone.jsx";
import s1 from "../assets/electronic/s1.png";
import s2 from "../assets/electronic/s2.png";
import s3 from "../assets/electronic/s3.png";
import s4 from "../assets/electronic/s4.png";
import s5 from "../assets/electronic/s12.png";
import s6 from "../assets/electronic/s13.png";
import s7 from "../assets/electronic/s14.png";
import s8 from "../assets/electronic/s15.png";
import { shoesProducts } from "../data/product.js";
import useValidProducts from "../utils/utils.js";
import { electronicProducts } from "../data/product.js";

const ElectronicPage = () => {
  let [searchbar, setsearchbar] = useState(false);
  let product = useValidProducts(electronicProducts);
  const phones = [
    {
      id: 1,
      img: s1,
      title: "iPhone 11",
      price: 120000,
      salePrice: 99000,
    },
    {
      id: 2,
      img: s2,
      title: "iPhone 12",
      price: 150000,
      salePrice: 125000,
    },
    {
      id: 3,
      img: s3,
      title: "iPhone 13",
      price: 190000,
      salePrice: 160000,
    },
    {
      id: 4,
      img: s4,
      title: "iPhone 14",
      price: 230000,
      salePrice: 195000,
    },
    {
      id: 5,
      img: s8,
      title: "iPhone 15",
      price: 290000,
      salePrice: 250000,
    },
    {
      id: 6,
      img: s2,
      title: "iPhone 16",
      price: 350000,
      salePrice: 305000,
    },
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
        <Phone></Phone>
        <ProductGridOne></ProductGridOne>
        <FlashSale item={phones}></FlashSale>
        <ProductGrid product={product}></ProductGrid>

        <div className="">
          <InsideBrand></InsideBrand>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default ElectronicPage;

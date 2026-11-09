import { createSlice, current } from "@reduxjs/toolkit";
import products from "../../data/product.js";
import useValidProducts from "../../utils/utils.js";
import toast from "react-hot-toast";

let cartslice = createSlice({
  initialState: { cartarr: [], fetchcartarr: [] },
  name: "cartsetup",
  reducers: {
    setCartItem: (state, action) => {
      let id = action.payload;
      if (state.cartarr.includes(id)) {
        console.log("ke masla wa");
        toast.error("Already in cart");
      } else {
        state.cartarr.push(id);
        let data = localStorage.setItem(
          "cartarr",
          JSON.stringify(state.cartarr),
        );
        toast.success("Add to cart successfully");
      }
    },
    FetchCartItem: (state, action) => {
      let arr = products.filter((ele, index) => {
        return state.cartarr.includes(ele.id);
      });
      console.log(arr);
      state.fetchcartarr = arr;
    },
    DeleteCartItem: (state, action) => {
      console.log(action.payload);

      let arr = state.cartarr.filter((ele, index) => {
        return ele !== action.payload;
      });
      console.log(arr);

      state.cartarr = arr;
      let data = localStorage.setItem("cartarr", JSON.stringify(state.cartarr));
      toast.success("Delete from cart successfully");
    },
    FetchCartLocalStroage: (state, action) => {
      let data = JSON.parse(localStorage.getItem("cartarr"));
      state.cartarr = data;
      let arr = products.filter((ele, index) => {
        return state.cartarr.includes(ele.id);
      });
      console.log(arr);
      state.fetchcartarr = arr;
    },
  },
});

export default cartslice.reducer;

export let {
  setCartItem,
  FetchCartItem,
  DeleteCartItem,
  FetchCartLocalStroage,
} = cartslice.actions;

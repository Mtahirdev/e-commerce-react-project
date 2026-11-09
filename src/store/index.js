import { configureStore } from "@reduxjs/toolkit";
import cartstore from "./feature/Cartsetup.js";

let store = configureStore({ reducer: { cartstore } });

export default store;

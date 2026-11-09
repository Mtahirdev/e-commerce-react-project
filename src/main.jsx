import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import ElectronicPage from "./pages/ElectronicPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import HelpPage from "./pages/HelpPage.jsx";
import ShoesPage from "./pages/ShoesPage.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";

let route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/home" /> },
      { path: "home", element: <HomePage /> },
      { path: "cart", element: <CartPage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "electronic", element: <ElectronicPage /> },
      { path: "shoes", element: <ShoesPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "help", element: <HelpPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={route}></RouterProvider>
  </Provider>,
);

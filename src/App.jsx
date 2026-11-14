import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import CursorDot from "./components/CursorDot.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <CursorDot></CursorDot>
      <Outlet />
    </>
  );
}

export default App;

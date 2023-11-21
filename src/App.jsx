import { Route, Routes } from "react-router-dom";
import "./App.css";
import BottomNavbar from "./Components/Navbar/BottomNavbar/BottomNavbar";
import TopNavbar from "./Components/Navbar/TopNavbar/TopNavbar";
import Home from "./Pages/Home/Home";
import Men from "./Pages/Men/Men";
import Women from "./Pages/Women/Women";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";

export default function App() {
  return (
    <>
      <TopNavbar />
      <BottomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
}

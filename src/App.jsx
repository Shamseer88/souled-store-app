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
import NavbarBottom from "./Components/Navbar/NavbarBottom/NavbarBottom";
import Cart from "./Pages/Cart/Cart";
import Product from "./Pages/Product/Product";

export default function App() {
  return (
    <>
      <TopNavbar />
      <NavbarBottom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </>
  );
}

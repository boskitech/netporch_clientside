import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollTop";
import Footer from "./components/footer/Footer";
import Shop from "./pages/shop/Shop";
import AboutUs from "./pages/about/About";
import ContactUs from "./pages/contact/Contact";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import ViewItem from "./pages/viewItem/ViewItem";
import Cart from "./pages/cart/Cart";
import Login from "./pages/auth/auth";
import AddProduct from "./pages/dashboard/AddProduct";
import WishList from "./pages/wishList/Wishlist";
import Orders from "./pages/orders/Orders";
import Account from "./pages/account/Account";
import SearchPage from "./pages/searchPage/SearchPage";
import "./App.css"

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/shop/:id" element={<ViewItem />} />
            <Route path="/search/:key" element={<SearchPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addproduct" element={<AddProduct />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;

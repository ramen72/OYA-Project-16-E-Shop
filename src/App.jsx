import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/css/tailwind.css";
import HomePage from "./pages/HomePage";
import ProductListPages from "./pages/ProductListPages";
import ProductDetailsPages from "./pages/ProductDetailsPages";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import RegisterPage from "./pages/RegisterPage";
import MyAccountsPage from "./pages/MyAccountsPage";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ContactPage from "./pages/ContactPage";
import CommonLayout from "./components/commonLayouts/CommonLayout";
import LoginPage from "./pages/LoginPage";
import WishListPage from "./pages/WishListPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<CommonLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPages />} />
          <Route path="/product-details" element={<ProductDetailsPages />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wish-list" element={<WishListPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/my-account" element={<MyAccountsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog-details" element={<BlogDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

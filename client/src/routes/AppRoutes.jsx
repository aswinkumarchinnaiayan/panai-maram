import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      <Route
        path="/products"
        element={
          <MainLayout>
            <Products />
          </MainLayout>
        }
      />

      <Route
        path="/contact"
        element={
          <MainLayout>
            <Contact />
          </MainLayout>
        }
      />

      <Route
        path="/login"
        element={<Login />}
      />

    </Routes>
  );
};

export default AppRoutes;
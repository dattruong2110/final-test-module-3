import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./components/products/ProductList";
import ProductDetail from "./components/products/ProductDetail";
import ProductAdding from "./components/products/ProductAdding";
import ProductEditing from "./components/products/ProductEditing";
import ProductRemoving from "./components/products/ProductRemoving";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path={`/product/:productId`} element={<ProductDetail />} />
        <Route path={`/product/add`} element={<ProductAdding />} />
        <Route path={`/product/edit/:productId`} element={<ProductEditing />} />
        <Route
          path={`/product/remove/:productId`}
          element={<ProductRemoving />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

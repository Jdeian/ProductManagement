import React, { useState } from "react";
import ProductManager from "./ProductManager";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1200, stockStatus: "In Stock" },
    { id: 2, name: "Headphones", price: 200, stockStatus: "Out of Stock" },
    { id: 3, name: "Monitor", price: 300, stockStatus: "In Stock" },
  ]);

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Product Manager</h1>
      <ProductManager products={products} setProducts={setProducts} />
    </div>
  );
};

export default App;

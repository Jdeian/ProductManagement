import React, { useState } from "react";
import ProductItem from "./ProductItem";

function ProductManager({ products, setProducts }) {
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", stockStatus: "In Stock" });

  const filteredProducts = showInStockOnly
    ? products.filter((product) => product.stockStatus === "In Stock")
    : products;

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price) {
      setProducts([
        ...products,
        { id: Date.now(), ...newProduct, price: parseFloat(newProduct.price) },
      ]);
      setNewProduct({ name: "", price: "", stockStatus: "In Stock" });
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-gray-100">
      <div className="mb-4">
        <button
          onClick={() => setShowInStockOnly((prev) => !prev)}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-100 rounded-md"
        >
          {showInStockOnly ? "Show All Products" : "Show In-Stock Only"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>

      <form onSubmit={handleAddProduct} className="mt-6">
        <h2 className="text-xl font-bold mb-4">Add New Product</h2>
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="border border-gray-600 rounded bg-gray-700 p-2 w-full mb-4 text-gray-100"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="border border-gray-600 rounded bg-gray-700 p-2 w-full mb-4 text-gray-100"
        />
        <select
          value={newProduct.stockStatus}
          onChange={(e) => setNewProduct({ ...newProduct, stockStatus: e.target.value })}
          className="border border-gray-600 rounded bg-gray-700 p-2 w-full mb-4 text-gray-100"
        >
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
        <button type="submit" className="px-4 py-2 bg-green-600 hover:bg-green-500 text-gray-100 rounded-md">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductManager;

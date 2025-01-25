import React from "react";

function ProductItem({ name, price, stockStatus }) {
  const badgeStyle =
    stockStatus === "In Stock"
      ? "bg-green-600 text-gray-100"
      : "bg-red-600 text-gray-100";

  return (
    <div className="border border-gray-600 rounded-lg p-4 shadow-lg bg-gray-700 text-gray-100 hover:shadow-xl transition">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-400">${price.toFixed(2)}</p>
      <span className={`text-sm px-2 py-1 rounded ${badgeStyle}`}>
        {stockStatus}
      </span>
    </div>
  );
};

export default ProductItem;

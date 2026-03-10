import React from "react";
import { useLocation } from "react-router";

function Product() {
  const { state } = useLocation();
  const product = state?.productt;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-10 mt-14 px-6">

      {/* Image */}
      <div className="w-full sm:w-2/5">
        <img
          src={product?.image}
          className="w-full h-80 object-contain"
          alt={product?.title}
        />
      </div>

      {/* Product Info */}
      <div className="w-full sm:w-3/5 p-4 flex flex-col gap-5">

        <h1 className="text-2xl sm:text-3xl font-semibold">
          {product?.title}
        </h1>

        <p className="text-gray-600 leading-relaxed">
          {product?.description}
        </p>

        <p className="text-2xl font-bold text-blue-600">
          ${product?.price}
        </p>

        <span className="bg-amber-300 px-4 py-2 rounded-xl w-fit font-medium">
          {product?.category}
        </span>

      </div>
    </div>
  );
}

export default Product;
import React, { useContext } from "react";
import AddCartButton from "../Cart/AddCartButton";
import {CartContext} from "../Cart/CartContext";

function ProductItem({ product, addCart }) {

  return (
    <li className="text-left bg-gray-100 p-4 rounded-md mb-2">
      <div className="flex">
        <img src={product.image} alt={product.title} className="w-16 h-16 mr-4" />
        <div>
          <p className="text-lg font-bold">{product.title}</p> 
          <p className="text-gray-500">{product.description}</p> 
          <AddCartButton addCart={addCart} />
        </div>
      </div>
    </li>
  );
}

export default ProductItem;

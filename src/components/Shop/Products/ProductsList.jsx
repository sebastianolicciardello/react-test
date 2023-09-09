import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { CartContext } from "../Cart/CartContext";

function ProductsList({ list  }) {
  const { addCart } = useContext(CartContext);



  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <ul>
        {list.map((product) => (
          <ProductItem key={product.id} product={product} addCart={() => addCart(product.id, list)} />
        ))}
     </ul>
    </>
  );
}

export default ProductsList;

import { useEffect, useState } from "react";
import ProductsList from "./Products/ProductsList";
import Cart from "./Cart/Cart";
import { useContext } from "react";
import { CartContext } from "./Cart/CartContext";
import { useFetch } from "./hooks/useFetch";


export default function Shop() {
    const [items] = useFetch("https://fakestoreapi.com/products");

      return (
        <>
          <h1 className="text-4xl font-bold mb-4">Shop</h1>
          <div className="flex">
            <div className="w-1/2 pr-4">
            <ProductsList list={items} />
            </div>
            <div className="w-1/2 pl-4">
              <Cart/>
            </div>
          </div>
        </>
      );
    
    }
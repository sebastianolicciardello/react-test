import React, { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from "./CartContext";

function CartItem({ item }) {
  const { modifyQuantity } = useContext(CartContext);
  return (
    <li className="text-left bg-gray-100 p-4 rounded-md mb-2">
      <div className="flex items-center">
        <img src={item.image} alt={item.title} className="w-16 h-16 mr-4" />
        <div className="flex-grow">
          <p className="text-lg font-bold">{item.title}</p>
          <p>
            <span className="font-bold flex items-center">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-l-xs"
                onClick={() => modifyQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-r-xs"
                onClick={() => modifyQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </span>
          </p>
        </div>
        <div>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-md"
            onClick={() => modifyQuantity(item.id, 0)}
          >
            <BsFillTrashFill className="inline-block align-middle" />
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;

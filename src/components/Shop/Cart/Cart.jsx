import React, { useContext } from "react";
import CartItem from "./CartItem";
import CartEmpty from "./CartEmpty";
import { CartContext } from "./CartContext";

function Cart() {
  const { cartItems } = useContext(CartContext);
  const cartList = cartItems.filter((item) => item.quantity > 0);

  if (cartList.length === 0) {
    return (
      <>
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        <CartEmpty />
      </>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <ul>
        {cartList.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}

export default Cart;

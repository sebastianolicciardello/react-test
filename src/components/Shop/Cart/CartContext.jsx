import { createContext, useState } from "react";

export const CartContext = createContext(); //rappresenta il contesto del carrello


/*La sintassi con children viene utilizzata nel componente CartProvider 
per consentire l'inclusione di componenti figli all'interno del componente CartProvider.*/
export function CartProvider({ children }) { //fornisce il valore del contesto ai componenti figli
  const [cartItems, setCartItems] = useState([]);

  function modifyQuantity(itemId, quantity) {
    setCartItems(prev => {
      const updatedCartItems = prev.map(item => {
        if (item.id === itemId) {
          return { ...item, quantity: quantity };
        }
        return item;
      });
      return updatedCartItems;
    });
  }

  function addCart(id, items) {
    const newItem = items.find(item => item.id === id);

    if (newItem) {
      setCartItems(prev => {
        const alreadyExist = cartItems.find(item => item.id === id);
        if (alreadyExist) {
          const updatedCartItems = prev.map(item => {
            if (item.id === id) {
              return { ...newItem, quantity: item.quantity + 1 };
            }
            return item;
          });
          return updatedCartItems;
        }
        else {
          return [...prev, { ...newItem, quantity: 1 }];
        }
      });
    }
  }

  return (
    <CartContext.Provider value={{ cartItems, modifyQuantity, addCart }}>
      {children}
    </CartContext.Provider>
  );
}

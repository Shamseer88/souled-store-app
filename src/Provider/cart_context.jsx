import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("ecom-cart");
  if (localCartData == []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  total_price: 0,
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
  };

  // Cart increase decrease
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREASE", payload: id });
  };
  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREASE", payload: id });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // To add cart items in localStorage
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    localStorage.setItem("ecom-cart", JSON.stringify(state.cart));
  }, [state.cart]);

  // To clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItemFromCart,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };

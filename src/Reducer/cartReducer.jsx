const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, amount, product } = action.payload;

    let cartProduct;
    cartProduct = {
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.displayImage,
      amount,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curEle) => curEle.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  return state;
};

export default cartReducer;

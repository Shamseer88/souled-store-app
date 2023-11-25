const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, amount, product } = action.payload;

    // Tackle existing products
    let existingProduct = state.cart.find(
      (curItem) => curItem.id == product._id
    );
    console.log("existng", existingProduct);

    if (existingProduct) {
      let updataedProduct = state.cart.map((curItem) => {
        if (curItem.id == product._id) {
          let newAmount = curItem.amount + amount;
          return {
            ...curItem,
            amount: newAmount,
          };
        } else {
          return curItem;
        }
      });
      return {
        ...state,
        cart: updataedProduct,
      };
    } else {
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
  }

  // To set decrease and increase
  if (action.type === "SET_DECREASE") {
    let updataedProduct = state.cart.map((curItem) => {
      if (curItem._id === action.payload) {
        let decAmount = curItem.amount - 1;

        if (decAmount <= 0) {
          decAmount = 1;
        }

        return {
          ...curItem,
          amount: decAmount,
        };
      } else {
        return curItem;
      }
    });
    return { ...state, cart: updataedProduct };
  }

  if (action.type === "SET_INCREASE") {
    let updataedProduct = state.cart.map((curItem) => {
      if (curItem._id === action.payload) {
        let incAmount = curItem.amount + 1;

        return {
          ...curItem,
          amount: incAmount,
        };
      } else {
        return curItem;
      }
    });
    return { ...state, cart: updataedProduct };
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

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, curEle) => {
      let { amount } = curEle;
      initialVal = initialVal + amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialVal, curEle) => {
      let { price, amount } = curEle;
      initialVal = initialVal + price * amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_price,
    };
  }

  return state;
};

export default cartReducer;

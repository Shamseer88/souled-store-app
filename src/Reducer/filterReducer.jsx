const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        if (sorting_value === "atoz") {
          return a.name.localeCompare(b.name);
        }
        if (sorting_value === "ztoa") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);
      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, subCategory, brand } = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((currEl) => {
          return currEl.name.toLowerCase().includes(text);
        });
      }

      if (brand !== "All") {
        tempFilterProduct = tempFilterProduct.filter((curEle) => {
          return curEle.brand === brand;
        });
      }

      if (subCategory !== "All") {
        tempFilterProduct = tempFilterProduct.filter((curEle) => {
          return curEle.subCategory === subCategory;
        });
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    default:
      return state;
  }
};

export default FilterReducer;

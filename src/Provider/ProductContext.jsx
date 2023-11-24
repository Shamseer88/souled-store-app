import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer";

const AppContext = createContext();

const API =
  "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  trendingProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // API call for all products
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(url, {
        params: {
          limit: 500,
        },
        headers: {
          projectId: "ulwb3huij7ys",
        },
      });
      const products = await response.data.data;
      dispatch({ type: "SET_API_DATA", payload: products });
      // console.log(products);
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // API call for single product
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const response = await axios.get(url, {
        headers: {
          projectId: "ulwb3huij7ys",
        },
      });
      const singleProduct = await response.data.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };

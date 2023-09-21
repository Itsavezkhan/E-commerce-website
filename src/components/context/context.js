import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../context/reducer";
import { filterreducer } from "../context/reducer";
import { loginReducer } from "../context/reducer";

const OurContext = createContext();

const API = "https://fakestoreapi.com/products";

const initialState = {
  weproducts: [],
  wesingleproducts: {},
  ourcart: [],
  ourwish: [],
};

const filterInitialState = {
  sort: "",
  cate: "",
  byrating: 0,
  sorting: "",
  minPrice: 0,
  maxPrice: 1000,
  price: 1000,
};

const loginInitialState = {
  isLoggedIn: false,
};

const OurContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [filterstate, filterdispatch] = useReducer(filterreducer, filterInitialState);

  const [loginState, loginDispatch] = useReducer(loginReducer, loginInitialState);

  const GetApiData = async (url) => {
    try {
      const res = await axios.get(url);
      const productsapi = await res.data;
      console.log(productsapi);
      dispatch({ type: "SET_API_DATA", payload: productsapi });
    } catch (error) {
      dispatch({ type: "ERROR_API" });
    }
  };

  const getSingleProduct = async (url) => {
    try {
      const res = await axios.get(url);
      const singleproduct = await res.data;
      console.log(singleproduct);
      dispatch({ type: "SINGLE_PRODUCT_DATA", payload: singleproduct });
    } catch (error) {
      dispatch({ type: "ERROR_API" });
    }
  };

  const handlePriceRange = (e) => {
    let name = e.target.value;
    let value = e.target.value;

    return filterdispatch({
      type: "UPDATE_FILTER_PRICE_RANGE",
      payload: { name, value },
    });
  };

  useEffect(() => {
    GetApiData(API);
  }, []);

  return (
    <OurContext.Provider
      value={{
        ...state,
        getSingleProduct,
        handlePriceRange,
        dispatch,
        filterstate,
        filterdispatch,
        loginState,
        loginDispatch,
      }}
    >
      {children}
    </OurContext.Provider>
  );
};

const useCustom = () => {
  return useContext(OurContext);
};

export { OurContextProvider, OurContext, useCustom };

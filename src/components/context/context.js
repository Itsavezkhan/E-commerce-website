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
  total: 0,
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
      // console.log(productsapi);
      dispatch({ type: "SET_API_DATA", payload: productsapi });
    } catch (error) {
      dispatch({ type: "ERROR_API" });
    }
  };

  const getSingleProduct = async (url) => {
    try {
      const res = await axios.get(url);
      const singleproduct = await res.data;
      // console.log(singleproduct);
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

  const loadscript = (src) => {
    return new Promise((resolve) =>  {
      const script = document.createElement('script')
      script.src = src

      script.onload = () => {
        resolve(true)
      }

      script.onerror = () => {
        resolve(false)
      }

      document.body.appendChild(script)
    })
  }

  const handlePayment = async (total) => {
    const res = await loadscript("https://checkout.razorpay.com/v1/checkout.js")
    
    if (!res) {
      alert("you are offline.....failed to load razorpay")
      return
    }

    const options = {
      key: "rzp_test_8LDootk7EkOdw9",
      currency: "USD",
      amount: total * 100,
      name: "We shopp",
      description:  "thanks for purchasing",

      handler: function (response) {
        alert(response.razorpay_payment_id)
        alert("payment successfull")
      },
      prefill: {
        name:"we shopp"
      }
    };
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }

  useEffect(() => {
    GetApiData(API);
  }, []);


  return (
    <OurContext.Provider
      value={{
        ...state,
        getSingleProduct,
        handlePriceRange,
        handlePayment,
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

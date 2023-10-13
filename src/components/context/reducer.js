import { switchClasses } from "@mui/material";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_API_DATA":
      return {
        ...state,
        weproducts: action.payload,
      };
    case "SINGLE_PRODUCT_DATA":
      return {
        ...state,
        wesingleproducts: action.payload,
      };
    case "ADD_CART":
      return {
        ...state,
        ourcart: [...state.ourcart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_CART":
      return {
        ...state,
        ourcart: state.ourcart.filter((c) => c.id !== action.payload.id),
      };
    case "INCREASE_CART_ITEM":
      return {
        ...state,
        ourcart: state.ourcart.filter((c) =>
          c.id === action.payload ? (c.qty = c.qty + 1) : c
        ),
      };
    case "DECREASE_CART_ITEM":
      return {
        ...state,
        ourcart: state.ourcart.filter((c) =>
          c.id === action.payload
            ? (c.qty = c.qty - 1)
            : c.qty === 1
            ? c.qty
            : c.qty
        ),
      };
    case "REMOVE_WISH":
      return {
        ...state,
        ourwish: state.ourwish.filter((c) => c.id !== action.payload.id),
      };
    case "ADD_WISH":
      return {
        ...state,
        ourwish: [...state.ourwish, { ...action.payload, qty: 1 }],
      };
    case "CALCULATE_TOTAL":
      return {
        ...state,
        total: action.payload.reduce((acc, cur) => acc + Number(cur.price) * cur.qty, 0),
      };

    default:
      return state;
  }
};

export default reducer;

export const filterreducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_VALUE":
      return {
        ...state,
        sort: action.payload,
      };
    case "CATEGORY_SORT":
      return {
        ...state,
        cate: action.payload,
      };
    case "CLEAR_FILTER":
      return {
        price: 1000,
      };
    case "FILTER_BY_RATING":
      return {
        ...state,
        byrating: action.payload,
      };
    case "SORT_BY_QUERY":
      return {
        ...state,
        sorting: action.payload,
      };
    case "UPDATE_FILTER_PRICE_RANGE":

    const {name, value} = action.payload;
      return {
        ...state,
        price: value,
      }

    default:
      break;
  }
};

export const loginReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "logout":
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      break;
  }
};

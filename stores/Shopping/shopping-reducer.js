import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products:[],
  cart: [],


};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product._id === action.payload.id
      );
      

           

      return {
        ...state,
        cart: [...state.cart, { ...item, qty: item.baseQty}],
        products: state.products.map((item) => item._id === action.payload.id ? { ...item, qty: item.baseQty, isCart: true } : item)
        
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload.id),
        products: state.products.map((item) => item._id === action.payload.id ? { ...item, isCart: false } : item)

      };
    case actionTypes.ADJUST_ITEM_QTY:

      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload.id
            ? { ...item, qty: action.payload.qty}
            : item
        ),
        products: state.products.map((item) =>
          item._id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item

        )

      };

    case 'ORDER_DISPATCH': return {
      ...state,
      products: state.products.map((item) => item.isCart ? { ...item, isCart: false } : item),
      cart: []
    }
    case 'FETCH_PRODUCT': return {
      ...state,
      products: action.payload
    }

    default:
      return state;
  }
};

export default shopReducer;

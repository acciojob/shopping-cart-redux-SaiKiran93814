import {
  ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY,
  ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, APPLY_COUPON
} from './actions';

const couponCodes = {
  SAVE10: 10,
  SAVE20: 20,
};

const initialState = {
  cart: [],
  wishlist: [],
  discount: 0,
  appliedCoupon: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemExists = state.cart.find(item => item.id === action.payload.id);
      if (itemExists) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };

    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart
          .map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter(item => item.quantity > 0),
      };

    case ADD_TO_WISHLIST:
      if (state.wishlist.find(item => item.id === action.payload.id)) return state;
      return { ...state, wishlist: [...state.wishlist, action.payload] };

    case REMOVE_FROM_WISHLIST:
      return { ...state, wishlist: state.wishlist.filter(item => item.id !== action.payload) };

    case APPLY_COUPON:
      const discount = couponCodes[action.payload] || 0;
      return {
        ...state,
        discount,
        appliedCoupon: discount > 0 ? action.payload : null,
      };

    default:
      return state;
  }
};

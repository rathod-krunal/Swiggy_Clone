const INIT_STATE = {
  Cart: [],
};

export const CartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        Cart: [...state.Cart, action.payload],
      };
    case "REMOVE_CART":
      const data = state.Cart.filter((e) => e.id !== action.payload);
      return {
        ...state,
        Cart: data,
      };
    default:
      return state;
  }
};

const CARD_ADD_ITEMS = "CARD_ADD_ITEMS";
const CARD_REMOVE_ITEMS = "CARD_REMOVE_ITEMS";
const REMOVE_CARD_ITEMS = "REMOVE_CARD_ITEMS";
const CHANGE_ITEMS_QUANTITY = "CHANGE_ITEMS_QUANTITY";
const CARD_ADD_INSURANCE = "CARD_ADD_INSURANCE";
const CARD_REMOVE_INSURANCE = "CARD_REMOVE_INSURANCE";

let initialState = {
  items: [],
  isLoaded: false,
  totalPrice: 0,
};

const CardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARD_ADD_ITEMS:
      return {
        ...state,
        items: [...state.items, action.payload],
        isLoaded: true,
      };
    case CARD_REMOVE_ITEMS:
      return {
        ...state,
        items: state.items.filter((i) => i._id !== action.itemId),
      };
    case REMOVE_CARD_ITEMS:
      return { ...state, items: [], totalPrice: null, totalItemCount: null };
    case CHANGE_ITEMS_QUANTITY:
      return {
        ...state,
        items: state.items.filter((i) =>
          i._id === action.id ? i.quantity : action.quantity
        ),
      };
    case CARD_ADD_INSURANCE:
      const id = action.id;
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id===id) {
            return {
              ...item,
              insurance: action.insurance,
              price:item.price+5
            };
          }
          return item;
        }),
      };
    case CARD_REMOVE_INSURANCE:
      const removeId = action.id;
      return {...state, items: state.items.map((item) => {
          if (item._id ===removeId) {
            return {...item,insurance: action.insurance,price:item.price-5 };
          }return item;
        }),
      };
    default:
      return state;
  }
};

export const addToCart = (payload) => ({ type: CARD_ADD_ITEMS, payload });
export const clearCardItems = () => ({ type: REMOVE_CARD_ITEMS });
export const removeProduct = (itemId) => ({ type: CARD_REMOVE_ITEMS, itemId });
export const changeQuantity = (id, quantity) => ({
  type: CHANGE_ITEMS_QUANTITY,
  id,
  quantity,
});
export const addInsurance = (id, insurance) => ({
  type: CARD_ADD_INSURANCE,
  id,
  insurance,
});
export const removeInsurance = (id, insurance) => ({
  type: CARD_REMOVE_INSURANCE,
  id,
  insurance,
});
export default CardReducer;

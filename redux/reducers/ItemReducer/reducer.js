import { itemActionTypes } from "./types";

const INITIAL_STATE = {
  items: [],
};

export const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case itemActionTypes.ADD_ITEM:
      return {
        ...state,
        items: [{ ...action.payload }, ...state.items],
      };
    case itemActionTypes.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};

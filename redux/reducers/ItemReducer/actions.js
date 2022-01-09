import { itemActionTypes } from "./types";

export const addItem = (item) => ({
  type: itemActionTypes.ADD_ITEM,
  payload: item,
});

export const deleteItem = (_id) => ({
  type: itemActionTypes.DELETE_ITEM,
  payload: _id,
});

import { createSelector } from "reselect";

const selectItems = (state) => state.items;

export const selectItemsInState = createSelector(
  [selectItems],
  (items) => items.items
);

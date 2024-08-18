// selectors.js
import { selector } from "recoil";
import { cartState } from "../atoms/Cartstate";


export const cartItemCount = selector({
  key: "cartItemCount",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.length;
  },
});

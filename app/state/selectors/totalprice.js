// selectors.js
import { selector } from "recoil";
import { cartState } from "../atoms/Cartstate";

export const cartTotalPrice = selector({
  key: "cartTotalPrice",
  get: ({ get }) => {
    const cart = get(cartState);
    // Sum up the price of all items in the cart
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    return totalPrice;
  },
});

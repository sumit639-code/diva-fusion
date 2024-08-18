// selectors.js
import { selector } from "recoil";
import { cartState } from "../atoms/Cartstate";

export const cartTotalPrice = selector({
  key: "cartTotalPrice",
  get: ({ get }) => {
    const cart = get(cartState);
    // Sum up the price of all items in the cart, accounting for quantity
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    return totalPrice;
  },
});

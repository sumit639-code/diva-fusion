// atoms.js
import { atom } from "recoil";

export const likeState = atom({
  key: "likeState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

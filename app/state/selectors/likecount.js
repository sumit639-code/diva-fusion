// selectors.js
import { selector } from "recoil";
import { likeState } from "../atoms/Likestate";

export const likeItemCount = selector({
  key: "likeItemCount",
  get: ({ get }) => {
    const likeItems = get(likeState
    );
    return likeItems.length;
  },
});

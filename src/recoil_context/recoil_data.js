import { atom } from "recoil"; 

export const productsState = atom({
  key: "productsState", // unique ID (with respect to other atoms/selectors)
  default: [
    { id: 1, title: "item 1" },
    { id: 2, title: "item 2" },
    { id: 3, title: "item 3" }
  ], // default value (aka initial value)
});

//  default productsState;
import { AcrtionTypes } from "../constants/action-types";

const initalState = {
  products: [
    {
      id: 1,
      title: "Dipesh",
      category: "programmer",
    },
  ],
};
export const productReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case AcrtionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};

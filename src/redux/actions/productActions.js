import { AcrtionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: AcrtionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (products) => {
  return {
    type: AcrtionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};

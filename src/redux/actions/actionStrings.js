import { ActionType } from "redux-promise-middleware";

const actionStrings = {
  counterUp: "COUNTER_UP",
  counterDown: "COUNTER_DOWN",
  counterReset: "COUNTER_RESET",
  getProducts: "GET_PRODUCTS",
  getProductsPromo: "GET_PRODUCTS_PROMO",
  createProduct: "CREATE_PRODUCT",
  editProduct: "EDIT_PRODUCT",
  pending: `_${ActionType.Pending}`,
  fulfilled: `_${ActionType.Fulfilled}`,
  rejected: `_${ActionType.Rejected}`,
};

export default actionStrings;

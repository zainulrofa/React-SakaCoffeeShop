import actionStrings from "./actionStrings";
import {
  getPromoProduct,
  createProduct,
  editProduct,
} from "../../helpers/fetch";

const getPromoProductAction = (id) => {
  return {
    type: actionStrings.getProductsPromo,
    payload: getPromoProduct(id),
  };
};
const createProductAction = (data, token) => {
  return {
    type: actionStrings.createProduct,
    payload: createProduct(data, token),
  };
};
const editProductAction = (data, token, id) => {
  return {
    type: actionStrings.editProduct,
    payload: editProduct(data, token, id),
  };
};

const productAction = {
  getPromoProductAction,

  createProductAction,
  editProductAction,
};

export default productAction;

import actionStrings from "./actionStrings";
import {
  getPromoProduct,
  createProduct,
  editProduct,
  getData,
} from "../../helpers/fetch";

const getProductsAction = (params) => {
  return {
    type: actionStrings.getProducts,
    payload: getData("/products", params),
  };
};

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
  getProductsAction,
  createProductAction,
  editProductAction,
};

export default productAction;

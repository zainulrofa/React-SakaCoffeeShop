import ACTION_STRING from "./actionStrings";
import {
  getAllProduct,
  getProductDetail,
  // getPromo,
  // createProduct,
  // createPromo,
  // editProduct,
  // getPromoDetail,
  // editPromo,
} from "../../utils/product";

const getProductPending = () => ({
  type: ACTION_STRING.getProduct.concat(ACTION_STRING.pending),
});

const getProductRejected = (error) => ({
  type: ACTION_STRING.getProduct.concat(ACTION_STRING.rejected),
  payload: { error },
});

const getProductFulfilled = (data) => ({
  type: ACTION_STRING.getProduct.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const getAllPending = () => ({
  type: ACTION_STRING.getAll.concat(ACTION_STRING.pending),
});

const getAllRejected = (error) => ({
  type: ACTION_STRING.getAll.concat(ACTION_STRING.rejected),
  payload: { error },
});

const getAllFulfilled = (data) => ({
  type: ACTION_STRING.getAll.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const getDetailPending = () => ({
  type: ACTION_STRING.getDetail.concat(ACTION_STRING.pending),
});

const getDetailRejected = (error) => ({
  type: ACTION_STRING.getDetail.concat(ACTION_STRING.rejected),
  payload: { error },
});

const getDetailFulfilled = (data) => ({
  type: ACTION_STRING.getDetail.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const getPromoPending = () => ({
  type: ACTION_STRING.getPromo.concat(ACTION_STRING.pending),
});

const getPromoRejected = (error) => ({
  type: ACTION_STRING.getPromo.concat(ACTION_STRING.rejected),
  payload: { error },
});

const getPromoFulfilled = (data) => ({
  type: ACTION_STRING.getPromo.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const createProductPending = () => ({
  type: ACTION_STRING.createProduct.concat(ACTION_STRING.pending),
});

const createProductRejected = (error) => ({
  type: ACTION_STRING.createProduct.concat(ACTION_STRING.rejected),
  payload: { error },
});

const createProductFulfilled = (data) => ({
  type: ACTION_STRING.createProduct.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const createPromoPending = () => ({
  type: ACTION_STRING.createPromo.concat(ACTION_STRING.pending),
});

const createPromoRejected = (error) => ({
  type: ACTION_STRING.createPromo.concat(ACTION_STRING.rejected),
  payload: { error },
});

const createPromoFulfilled = (data) => ({
  type: ACTION_STRING.createPromo.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const editProductPending = () => ({
  type: ACTION_STRING.editProduct.concat(ACTION_STRING.pending),
});

const editProductRejected = (error) => ({
  type: ACTION_STRING.editProduct.concat(ACTION_STRING.rejected),
  payload: { error },
});

const editProductFulfilled = (data) => ({
  type: ACTION_STRING.editProduct.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const getPromoDetailPending = () => ({
  type: ACTION_STRING.getPromoDetail.concat(ACTION_STRING.pending),
});

const getPromoDetailRejected = (error) => ({
  type: ACTION_STRING.getPromoDetail.concat(ACTION_STRING.rejected),
  payload: { error },
});

const getPromoDetailFulfilled = (data) => ({
  type: ACTION_STRING.getPromoDetail.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const editPromoPending = () => ({
  type: ACTION_STRING.editPromo.concat(ACTION_STRING.pending),
});

const editPromoRejected = (error) => ({
  type: ACTION_STRING.editPromo.concat(ACTION_STRING.rejected),
  payload: { error },
});

const editPromoFulfilled = (data) => ({
  type: ACTION_STRING.editPromo.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

// const getProductThunk = (cbSuccess, cbDenied) => {
//   return async (dispatch) => {
//     try {
//       dispatch(getProductPending());
//       // console.log('redux', body);
//       const result = await getProduct();
//       dispatch(getProductFulfilled(result.data));
//       typeof cbSuccess === "function" && cbSuccess();
//     } catch (error) {
//       dispatch(getProductRejected(error));
//       // console.log(error);
//       typeof cbDenied === "function" && cbDenied(error.response.data.msg);
//     }
//   };
// };

const getAllThunk = (query, cbSuccess, cbDenied) => {
  return async (dispatch) => {
    try {
      dispatch(getAllPending());
      // console.log('redux', body);
      const result = await getAllProduct(query);
      dispatch(getAllFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(getAllRejected(error));
      // console.log(error);
      typeof cbDenied === "function" && cbDenied(error.response.data.msg);
    }
  };
};

const getDetailThunk = (params, token, cbSuccess, cbDenied) => {
  return async (dispatch) => {
    try {
      dispatch(getDetailPending());
      // console.log('redux', body);
      const result = await getProductDetail(params, token);
      dispatch(getDetailFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(getDetailRejected(error));
      // console.log(error);
      typeof cbDenied === "function" && cbDenied(error.response.data.msg);
    }
  };
};

// const getPromoThunk = (query, cbSuccess, cbDenied) => {
//   return async (dispatch) => {
//     try {
//       dispatch(getPromoPending());
//       // console.log('redux', body);
//       const result = await getPromo(query);
//       dispatch(getPromoFulfilled(result.data));
//       typeof cbSuccess === "function" && cbSuccess();
//     } catch (error) {
//       dispatch(getPromoRejected(error));
//       // console.log(error);
//       typeof cbDenied === "function" && cbDenied(error.response.data.msg);
//     }
//   };
// };

// const createProductThunk =
//   (body, token, cbSuccess, cbDenied) => async (dispacth) => {
//     try {
//       dispacth(createProductPending());
//       const result = await createProduct(body, token);
//       dispacth(createProductFulfilled(result.data));
//       typeof cbSuccess() === "function" && cbSuccess(result.data.data.id);
//     } catch (error) {
//       console.log(error);
//       dispacth(createProductRejected(error));
//       typeof cbDenied === "function" && cbDenied();
//     }
//   };

// const createPromoThunk =
//   (body, token, cbSuccess, cbDenied) => async (dispacth) => {
//     try {
//       dispacth(createPromoPending());
//       const result = await createPromo(body, token);
//       dispacth(createPromoFulfilled(result.data));
//       typeof cbSuccess() === "function" && cbSuccess();
//     } catch (error) {
//       console.log(error);
//       dispacth(createPromoRejected(error));
//       typeof cbDenied === "function" && cbDenied();
//     }
//   };

// const editProductThunk = (id, body, token, cbSuccess, cbDenied) => {
//   return async (dispatch) => {
//     try {
//       dispatch(editProductPending());
//       const result = await editProduct(id, body, token);
//       dispatch(editProductFulfilled(result.data));
//       typeof cbSuccess === "function" && cbSuccess();
//     } catch (error) {
//       dispatch(editProductRejected(error));
//       typeof cbDenied === "function" && cbDenied(error.response.data.msg);
//     }
//   };
// };

// const getPromoDetailThunk = (id, token, cbSuccess, cbDenied) => {
//   return async (dispatch) => {
//     try {
//       dispatch(getPromoDetailPending());
//       // console.log('redux', body);
//       const result = await getPromoDetail(id, token);
//       dispatch(getPromoDetailFulfilled(result.data));
//       typeof cbSuccess === "function" && cbSuccess();
//     } catch (error) {
//       dispatch(getPromoDetailRejected(error));
//       // console.log(error);
//       typeof cbDenied === "function" && cbDenied(error.response.data.msg);
//     }
//   };
// };

// const editPromoThunk = (id, body, token, cbSuccess, cbDenied) => {
//   return async (dispatch) => {
//     try {
//       dispatch(editPromoPending());
//       const result = await editPromo(id, body, token);
//       dispatch(editPromoFulfilled(result.data));
//       typeof cbSuccess === "function" && cbSuccess();
//     } catch (error) {
//       dispatch(editPromoRejected(error));
//       typeof cbDenied === "function" && cbDenied(error.response.data.msg);
//     }
//   };
// };

const productAction = {
  // getProductThunk,
  getDetailThunk,
  getAllThunk,
  // getPromoThunk,
  // createProductThunk,
  // createPromoThunk,
  // editProductThunk,
  // getPromoDetailThunk,
  // editPromoThunk,
};

export default productAction;

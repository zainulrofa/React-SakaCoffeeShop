import actionStrings from "../actions/actionStrings";
import styles from "../../styles/Product.module.css";

const initialState = {
  data: [],
  promo: [],
  dataCreate: [],
  dataEdit: [],
  id: "",
  name: "",
  price: "",
  image: "",
  img: false,
  desc: "",
  ctg: "",
  meta: { totalPage: null },
  tglnext: styles.hide,
  tglprev: styles.hide,
  next: null,
  prev: null,
  isLoading: false,
  isError: false,
  err: null,
  errCreate: null,
  errEdit: null,
};

const productsReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionStrings.getProducts + actionStrings.pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case actionStrings.getProductsPromo + actionStrings.pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case actionStrings.createProduct + actionStrings.pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case actionStrings.editProduct + actionStrings.pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case actionStrings.getProducts + actionStrings.rejected:
      const errorResponse = action.payload;
      const errorMessage = errorResponse.response.data.message;
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        err: errorMessage,
      };
    case actionStrings.getProductsPromo + actionStrings.rejected:
      const errorResponsePromo = action.payload;
      const errorMessagePromo = errorResponsePromo.data.data.message;
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        err: errorMessagePromo,
      };
    case actionStrings.createProduct + actionStrings.rejected:
      const errorResponseCreate = action.payload;
      const errorMessageCreate = errorResponseCreate.response.data.message;
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        errCreate: errorMessageCreate,
      };
    case actionStrings.editProduct + actionStrings.rejected:
      const errorResponseEdit = action.payload;
      // const errorMessageEdit = errorResponseEdit.response;
      console.log(errorResponseEdit);
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        errEdit: errorResponseEdit,
      };
    case actionStrings.getProducts + actionStrings.fulfilled:
      const response = action.payload;
      const result = response.data.result.result.data;
      return {
        ...prevState,
        isLoading: false,
        data: result,
        meta: { totalPage: response.data.result.result.meta.totalPage },
      };
    case actionStrings.getProductsPromo + actionStrings.fulfilled:
      const responsePromo = action.payload;
      const resultPromo = responsePromo.data.result.data;
      console.log(resultPromo);
      return {
        ...prevState,
        isLoading: false,
        id: resultPromo.id,
        name: resultPromo.product_name,
        price: resultPromo.price,
        image: resultPromo.image,
        desc: resultPromo.description,
        ctg: resultPromo.category_name,
        // promo: resultPromo.dataPromo,
      };
    case actionStrings.createProduct + actionStrings.fulfilled:
      const responseCreate = action.payload;
      const resultCreate = responseCreate.data.data;
      // console.log(responseCreate);
      // console.log(resultCreate);
      return {
        ...prevState,
        isLoading: false,
        dataCreate: resultCreate,
      };
    case actionStrings.editProduct + actionStrings.fulfilled:
      const responseEdits = action.payload;
      const resultEdits = responseEdits.data.data;
      return {
        ...prevState,
        isLoading: false,
        dataEdit: resultEdits,
        img: true,
      };
    default:
      return prevState;
  }
};

export default productsReducer;

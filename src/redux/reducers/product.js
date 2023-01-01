import ACTION_STRING from "../actions/actionStrings";

const initialState = {
  product: [],
  data: [],
  detail: [],
  detailPromo: [],
  promo: [],
  pagination: {},
  page: {},
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: null,
};

const productReducer = (prevState = initialState, { type, payload }) => {
  const {
    getProduct,
    getDetail,
    getAll,
    getPromo,
    createProduct,
    createPromo,
    editProduct,
    getPromoDetail,
    editPromo,
    pending,
    rejected,
    fulfilled,
  } = ACTION_STRING;
  switch (type) {
    case getProduct + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getProduct + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.response.data.msg,
        product: [],
      };
    case getProduct + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        product: payload.data.data,
      };

    case getAll + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getAll + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.response.data.msg,
        data: [],
      };
    case getAll + fulfilled:
      const newProduct = payload.data.data;
      const page = payload.data.meta;
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        data: page > 1 ? [...prevState.product, ...newProduct] : newProduct,
        pagination: payload.data.meta,
      };

    case getDetail + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getDetail + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.response.data.msg,
        detail: [],
      };
    case getDetail + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        detail: payload.data.data[0],
      };

    case getPromo + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getPromo + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.response.data.msg,
      };
    case getPromo + fulfilled:
      const newPromo = payload.data.data;
      const pagePromo = payload.data.meta.page;
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        promo: pagePromo > 1 ? [...prevState.promo, ...newPromo] : newPromo,
        page: payload.data.meta,
      };

    case createProduct.concat(pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };

    case createProduct.concat(rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: payload.error.response.data.msg,
      };

    case createProduct.concat(fulfilled):
      return {
        ...prevState,
        isLoading: false,
      };

    case createPromo.concat(pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };

    case createPromo.concat(rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: payload.error.response.data.msg,
      };

    case createPromo.concat(fulfilled):
      return {
        ...prevState,
        isLoading: false,
      };

    case editProduct + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case editProduct + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.message,
      };
    case editProduct + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        detail: { ...prevState.detail, ...payload.data.data },
      };

    case getPromoDetail + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getPromoDetail + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.response.data.msg,
      };
    case getPromoDetail + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        detailPromo: payload.data.data,
      };

    case editPromo + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case editPromo + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.message,
      };
    case editPromo + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        detailPromo: { ...prevState.detailPromo, ...payload.data.data },
      };

    default:
      return prevState;
  }
};

export default productReducer;

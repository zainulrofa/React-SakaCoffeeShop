import ACTION_STRING from "../actions/actionStrings";

const initialState = {
  userData: {
    id: "",
    token: "",
    role: "",
  },
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: "",
};

const authReducer = (prevState = initialState, { type, payload }) => {
  const {
    register,
    login,
    forgot,
    reset,
    editPassword,
    logout,
    pending,
    rejected,
    fulfilled,
  } = ACTION_STRING;
  switch (type) {
    case register + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case register + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        error: payload.error.response.data.status,
      };
    case register + fulfilled:
      return {
        ...prevState,
        isLoading: false,
      };

    case login + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case login + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        userData: {
          id: null,
          token: null,
        },
        error: payload.error.response.data.status,
      };
    case login + fulfilled:
      return {
        ...prevState,
        isError: false,
        isLoading: false,
        isFulfilled: true,
        userData: {
          id: payload.data.data.id,
          token: payload.data.data.token,
          role: payload.data.data.role,
        },
        error: "",
      };

    case forgot + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case forgot + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.response.data.status,
      };
    case forgot + fulfilled:
      return {
        ...prevState,
        isError: false,
        isLoading: false,
        isFulfilled: true,
        error: "",
      };

    case reset + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case reset + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.response.data.msg,
      };
    case reset + fulfilled:
      return {
        ...prevState,
        isError: false,
        isLoading: false,
        isFulfilled: true,
      };

    case editPassword + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case editPassword + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.response.data.msg,
      };
    case editPassword + fulfilled:
      return {
        ...prevState,
        isError: false,
        isLoading: false,
        isFulfilled: true,
      };

    case logout + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case logout + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error,
      };
    case logout + fulfilled:
      return initialState;

    default:
      return prevState;
  }
};

export default authReducer;

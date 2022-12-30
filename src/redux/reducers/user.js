import ACTION_STRING from "../actions/actionStrings";

const initialState = {
  user: {},
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: null,
};

const userReducer = (prevState = initialState, { type, payload }) => {
  const {
    getUser,
    editProfile,
    userReset,
    editPassword,
    logout,
    pending,
    rejected,
    fulfilled,
  } = ACTION_STRING;
  switch (type) {
    case getUser + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getUser + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.message,
      };
    case getUser + fulfilled:
      console.log(payload);
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        user: payload.data.data[0],
      };
    case editProfile + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case editProfile + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.message,
      };
    case editProfile + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        profile: { ...prevState.profile, ...payload.data.data },
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
        error: payload.error.message,
      };
    case editPassword + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
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

    case userReset:
      return initialState;

    default:
      return prevState;
  }
};

export default userReducer;

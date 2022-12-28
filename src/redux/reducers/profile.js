import { ActionType } from "redux-promise-middleware";
import actionStrings from "../actions/actionStrings";

const initialState = {
  profile: [],
  isError: false,
  isLoading: false,
  error: null,
};

export const profileReducer = (prevState = initialState, action) => {
  const { getProfile } = actionStrings;
  const { Pending, Rejected, Fulfilled } = ActionType;
  switch (action.type) {
    case getProfile.concat("_", Pending):
      return {
        ...prevState,
        isError: false,
        isLoading: true,
      };
    case getProfile.concat("_", Rejected):
      const getProfileError = action.payload.response.data.msg;
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        error: getProfileError,
      };
    case getProfile.concat("_", Fulfilled):
      //   console.log(action);
      const getSuccess = action.payload.data.result[0];
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        profile: getSuccess,
      };
    default:
      return prevState;
  }
};

import { editProfile, getProfile } from "../../helpers/fetch";
import actionStrings from "./actionStrings";

export const editProfileAction = (body, token) => {
  return {
    type: actionStrings.getProfile,
    payload: editProfile(body, token),
  };
};

export const getProfileActions = () => {
  return {
    type: actionStrings.getProfile,
    payload: getProfile(),
  };
};

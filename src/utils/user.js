import axios from "axios";

const BaseUrl = process.env.REACT_APP_BACKEND_HOST;

const config = (token) => {
  return {
    headers: {
      "x-access-token": `${token}`,
    },
  };
};

export const getUser = (token) => {
  const URL = `${BaseUrl}users/profile_user`;
  //   console.log("util", URL);
  return axios.get(URL, config(token));
};

export const editUser = (body, token) => {
  const URL = `${BaseUrl}users/profile`;
  console.log(URL);
  return axios.patch(URL, body, config(token));
};

import { checkingCredentials } from "./";

export const checkingAuthentication = (emai = "", password = "") => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = (emai = "", password = "") => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

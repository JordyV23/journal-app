import {
  logOutFirebase,
  loginWithEmailPassword,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from "../../firebase/";
import { clearNotesLogout } from "../journal/journalSlice";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = (email = "", password = "") => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = (email = "", password = "") => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();

    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, displayName, photoURL }));
  };
};

export const startLoginWithEmail = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await loginWithEmailPassword({ email, password });

    if (!result.ok) return dispatch(logout(result));

    dispatch(login(result));
  };
};

export const startLogOut = () => {
  return async (dispatch) => {
    await logOutFirebase();
    dispatch(clearNotesLogout());
    dispatch(logout());
  };
};

import {
  returnErrors,
  returnSuccess,
  clearSuccess,
} from "./SuccessErrorReducer";
import { testAPI } from "../api/api";

const USER_LOADING = "USER_LOADING";
const USER_LOADED = "USER_LOADED";
const AUTH_ERROR = "AUTH_ERROR";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAIL = "REGISTER_FAIL";

const FORGOT_PASS = "FORGOT_PASS";
const FORGOT_PASS_RESET = "FORGOT_PASS_RESET";
const EMAIL_SENT = "EMAIL_SENT";
const RESET_PASS = "RESET_PASS";

const RESET_ERROR = "RESET_ERROR";
const FORGOT_ERROR = "FORGOT_ERROR";

const initialState = {
  token: sessionStorage.getItem("token") || "",
  isAuth: null,
  isLoading: false,
  user: null,
  userInform: null,
  forgotEmail: null,
  emailSent: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return { ...state, isLoading: true };
    case USER_LOADED:
      sessionStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
        userInform: action.userInform,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      sessionStorage.setItem("token", action.payload.token);
      return { ...state, isAuth: true, isLoading: false };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT_SUCCESS:
      sessionStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        user: null,
        userInform: null,
        token: null,
      };

    case FORGOT_PASS:
      return { ...state, forgotEmail: action.forgotEmail };
    case EMAIL_SENT:
      return { ...state, emailSent: action.bool };
    case FORGOT_PASS_RESET:
      return { ...state, forgotEmail: action.forgotEmail, emailSent: false };
    default:
      return state;
  }
};

export const userLoad = (payload, userInform) => ({
  type: USER_LOADED,
  payload,
  userInform,
});

export const changePass = (forgotEmail) => ({ type: FORGOT_PASS, forgotEmail });
export const emailSent = (bool) => ({ type: EMAIL_SENT, bool });
export const resetEmailSentClear = (forgotEmail) => ({
  type: FORGOT_PASS_RESET,
  forgotEmail,
});

export const requestToken = () => (dispatch, getState) => {
  testAPI
    .forgotPassword(getState().auth.forgotEmail)
    .then((response) => {
      dispatch(emailSent(true));
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data.message, err.response.status, "FORGOT_ERROR")
      );
      dispatch({ type: FORGOT_ERROR });
    });
};
export const resetPass = (newPassword, verifyPassword, token) => (dispatch) => {
  testAPI
    .resetPassword(newPassword, verifyPassword, token)
    .then((response) => {
      dispatch({ type: RESET_PASS });
      dispatch(
        returnSuccess(response.data.message, response.status, "SUCCESS_RESET")
      );
    })
    .catch((err) => {
      dispatch(
        returnErrors(
          err.response.data.message,
          err.response.status,
          "RESET_ERROR"
        )
      );
      dispatch({ type: RESET_ERROR });
    });
};

export const changeUserPass = (oldPass, newPassword, verifyPassword) => (
  dispatch,
  getState
) => {
  testAPI
    .changeUserPass(
      oldPass,
      newPassword,
      verifyPassword,
      getState().auth.user.email
    )
    .then((response) => {
      dispatch(
        returnSuccess(
          response.data.message,
          response.status,
          "SUCCESS_CHANGE_PASS"
        )
      );
    })
    .catch((err) => {
      dispatch(
        returnErrors(
          err.response.data.message,
          err.response.status,
          "ERROR_CHANGE_PASS"
        )
      );
    });
};
export const getAuth = () => async (dispatch, getState) => {
  // try {
  //   const token=getState().auth.token;
  //    let response=await testAPI.getAuth(token)
  //     dispatch(userLoad(response.data))
  // } catch (error) {
  //   dispatch({type:AUTH_ERROR})
  // }
};
export const login = (email, password, rememberMe) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  testAPI
    .login(email, password, rememberMe)
    .then((response) => {
      dispatch(userLoad(response.data,response.data.inform));
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    })
    .catch((err) => {
      dispatch(
        returnErrors(
          err.response.data.message,
          err.response.status,
          "LOGIN_FAIL"
        )
      );
      dispatch({ type: LOGIN_FAIL });
    });
};

export const register = (name, email, password) => (dispatch) => {
  testAPI
    .register(name, email, password)
    .then((response) => {
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
      dispatch(userLoad(response.data));
    })
    .catch((err) => {
      dispatch(
        returnErrors(
          err.response.data.message,
          err.response.status,
          "REGISTER_FAIL"
        )
      );
      dispatch({ type: REGISTER_FAIL });
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};
export const subscribeNewUser = (email) => (dispatch) => {
  testAPI
    .subscribeNewUser(email)
    .then((response) => {
      dispatch(
        returnSuccess(
          response.data.message,
          response.status,
          "SUBSCRIBER_SUCCESS"
        )
      );
      const timer = setTimeout(() => {
        dispatch(clearSuccess());
      }, 3000);
      return () => clearTimeout(timer);
    })
    .catch((err) => {
      dispatch(
        returnErrors(
          err.response.data.message,
          err.response.status,
          "SUBSCRIBER_FAIL"
        )
      );
    });
};

export default AuthReducer;

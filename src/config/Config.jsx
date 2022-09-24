import Cookies from "universal-cookie";
const cookie = new Cookies();

// Get the token value of the cookie with the specified name
const authToken = cookie.get("@mrkt_storage_access_token");

// Check if env is production or development
const api =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEVELOPMENT_V
    : process.env.REACT_APP_PRODUCTION_V;

const Config = {
  // List of all the API's
  API_URL: {
    _loginAPI: `${api}users/oauth/token/login/`,
    _logoutAPI: ` ${api}oauth/revoke_token/`,
    _verificationAPI: `${api}otp/totp/login/`,
    _changePassword: `${api}users/update-password/`,
    _forgetPassword: `${api}users/send-forgottenpassword-email/`,
  },

  // Valid token for dashboard
  isValidToken: authToken,

  // Headers with method and token for api
  headerAuth: {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken,
    },
  },

  // Headers without method and token for POST , PUT , DELETE request api
  headerAxios: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + authToken,
  },

  headerWihtoutAxios: {
    Accept: "application/json",
    "Content-Type": "application/json",
    // "Accept-Language": window.localStorage.i18nextLng,
  },
};
export default Config;

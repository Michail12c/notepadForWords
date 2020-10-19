const { userApi } = require("../../api");
const { default: auth } = require("../../utils/auth");
const {
  SET_AUTH,
  SET_LOADER,
  SET_IS_AUTH
} = require("../constants");

export const setAuth = (data, history) => async (dispatch) => {
  try {
    const response = await userApi.login(data);
    dispatch({type: SET_AUTH , userId: response.userId});
    dispatch({type: SET_IS_AUTH, isAuthUser: true});
    auth.login(history, response.token);
  } catch (err) {
   console.log(err);
  }
};

export const  userRegister = ( data, history ) => async (dispatch) => {
  try {
    dispatch({type: SET_LOADER, value: true});
    const response = await userApi.register(data);
    dispatch({type: SET_IS_AUTH, isAuthUser: true});
    auth.login(history, response.token);
    dispatch({type: SET_LOADER, value: false});
  } catch (err) {
    console.log(err);
  }
}

export const googleRegister = async () => {
  try {
    const res = await userApi.googleRegister();
    console.log(res)
  } catch (err) {
    console.error(err);
  }
}
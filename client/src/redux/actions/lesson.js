import { userApi } from "../../api";
import { GET_BASE_LIST } from "../constants";


export const getBaseList = () => async (dispatch) => {
  try {
   const response = await userApi.getBaseList();
   dispatch({type: GET_BASE_LIST, data: response});
  } catch(err) {
    console.error(err);
  }
}
import {
  SET_AUTH,
  SET_IS_AUTH,
  SET_LOADER
} from "../constants";

let initialState = {
  userId: null,
  isAuth: false,
  loader: false,
 };

 const userReducer = (state=initialState, action) => {
   switch(action.type){
     case SET_AUTH:
      return {
        ...state,
        userId: action.userId
      }
      case SET_LOADER:
      return {
        ...state, loader: action.value
      }
      case SET_IS_AUTH:
      return  {
        ...state, isAuth: action.isAuthUser
      }
     default:
       return state;
   }
 }

 export default userReducer;
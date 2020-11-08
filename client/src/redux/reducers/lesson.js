import { GET_BASE_LIST } from "../constants";

let initialState = {
 lesson: [],
 baseList: '',
};

const lessonReducer = (state=initialState, action) => {
  switch(action.type){
    case GET_BASE_LIST:
     return {
       ...state, baseList: action.data
     }
    default:
      return state;
  }
}

export default lessonReducer;
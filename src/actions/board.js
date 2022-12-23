import { 
  UPDATE_BOARD,
} from "./actionTypes";

export const updateBoard = (payload) => (dispatch) => {
  console.log(payload);
    dispatch({
      type: UPDATE_BOARD,
      payload: payload,
    });
  };
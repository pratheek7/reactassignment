import { 
  UPDATE_COMPONENTS,
} from "./actionTypes";

export const updateComponents = (payload) => (dispatch) => {
    dispatch({
      type: UPDATE_COMPONENTS,
      payload: payload,
    });
  };
import { 
  UPDATE_BOARD,
} from "../actions/actionTypes";

const initialState = {
  data: []
};

export function board(state = initialState, action) {
    switch (action.type) {
      case UPDATE_BOARD:
        return {
          ...state,
          data: action.payload,
        };
      default:
        return {
          ...state,
        };
    }
  }
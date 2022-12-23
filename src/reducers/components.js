import { 
  UPDATE_COMPONENTS,
} from "../actions/actionTypes";

const initialState = {
  completeSet: [
    {
      id: 1,
      title: "Muzzle",
      img: require('../images/1.jpg')
    },
    {
      id: 2,
      title: "Magazine",
      img: require('../images/2.jpg')
    },
    {
      id: 3,
      title: "Fore grip",
      img: require('../images/3.jpg')
    },
    {
      id: 4,
      title: "Stock",
      img: require('../images/4.jpg')
    },
    {
      id: 5,
      title: "Grip",
      img: require('../images/5.jpg')
    }
  ],
  data: []
};

export function components(state = initialState, action) {
    switch (action.type) {
      case UPDATE_COMPONENTS:
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
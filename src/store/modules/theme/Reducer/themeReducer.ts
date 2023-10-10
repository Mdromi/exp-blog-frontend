import { AnyAction } from "redux";
import { SET_THEME } from '../ThemeTypes/index';

const initialState = {
  theme: 'light', // or your default theme
};

// const themeReducer = (state = initialState, action: AnyAction) => {
//     switch (action.type) {
//       case 'SET_THEME':
//         return {
//           ...state,
//           theme: action.payload,
//         };
//       default:
//         return state;
//     }
//   };

  const themeReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
      case SET_THEME:
        return { ...state, theme: action.payload };
      // Handle other actions...
      default:
        return state;
    }
  };
  
  export default themeReducer;
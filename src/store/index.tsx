import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from './modules/index'

// Check if the Redux DevTools extension is available on the window object
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}



// FOR LOCAL BUILD
// Use the Redux DevTools extension compose function if available, otherwise use the default compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,  
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

// FOR PRODUCTION BUILD
// const store = createStore(
//     reducer,  
//       applyMiddleware(thunk)
//   );

export default store;


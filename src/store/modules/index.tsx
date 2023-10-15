import { combineReducers } from "redux"
import authReducer  from './auth/reducer/authReducer'
import { postsState }  from "./posts/reducer/postsReducer";
import { likesState } from './likes/reducer/likesReducer'
import { commentsState } from './comments/reducer/commentsReducer'
import themeReducer from './theme/Reducer/themeReducer';


const reducer = combineReducers({
  Auth: authReducer,
  PostsState: postsState,
  LikesState: likesState,
  CommentsState: commentsState,
<<<<<<< HEAD
  // Theme: themeReducer,
=======
  Theme: themeReducer,
>>>>>>> 8947cd2743747b3cf99989f3a5e0f3f638eb4201
})

export default reducer


import { combineReducers } from "redux"
import authReducer  from './auth/reducer/authReducer'
import { postsState }  from "./posts/reducer/postsReducer";
import { likesState } from './likes/reducer/likesReducer'
import { commentsState } from './comments/reducer/commentsReducer'
import themeReducer from './theme/Reducer/themeReducer';
import profileReducer from "./profile/reduces/profileReducer";


const reducer = combineReducers({
  Auth: authReducer,
  PostsState: postsState,
  LikesState: likesState,
  CommentsState: commentsState,
  Profile: profileReducer,
  // Theme: themeReducer,
})

export default reducer


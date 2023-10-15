// import { CommentActionTypes } from '../commentTypes'
import {  COMMENT_CREATE_SUCCESS, COMMENT_CREATE_ERROR, GET_COMMENTS_SUCCESS, GET_COMMENTS_ERROR, COMMENT_DELETE_SUCCESS, COMMENT_DELETE_ERROR, COMMENT_UPDATE_SUCCESS, COMMENT_UPDATE_ERROR, BEFORE_STATE_COMMENT } from '../commentTypes'

export interface CommentState {
  commentItems: any[];
  isLoading: boolean;
  commentsError: string | null;
  commentSuccess: boolean;
}

// Your initial state
export const initialState: CommentState = {
  commentItems: [],
  isLoading: false,
  commentsError: null,
  commentSuccess: false,
};


export const commentsState = (state = initialState, action: any) => {
  
  const { payload, type }  = action;
  switch(type) {

    case BEFORE_STATE_COMMENT:
      return {
        ...state,
        commentsError: null,
        isLoading: true,
        commentSuccess: false
      }

    case GET_COMMENTS_SUCCESS:
      return { 
        ...state, 
        commentItems: [...state.commentItems, { postID: payload.postID, comments: payload.comments  } ],
        isLoading: false,
        commentsError: null,
      }

    case GET_COMMENTS_ERROR:
      return { 
        ...state, 
        commentError: payload, 
        isLoading: false,
      }

    case COMMENT_CREATE_SUCCESS:
      return { 
        ...state, 
        commentItems: state.commentItems.map(commentItem => 
                    Number(commentItem.postID) === payload.postID ? 
                    {...commentItem, comments: [payload.comment, ...commentItem.comments]} : commentItem
        ),
        message: "The comment is added",
        isLoading: false,
        commentSuccess: true
     }

    case COMMENT_CREATE_ERROR:
      return { 
        ...state, 
        commentsError: payload, 
        isLoading: false,
        commentSuccess: false
      }

    case COMMENT_UPDATE_SUCCESS:
      return { 
        ...state, 
        commentItems: state.commentItems.map(commentItem => 
          Number(commentItem.postID) === payload.comment.post_id ? 
          {...commentItem, comments: commentItem.comments.map((comment: any) => comment.id === payload.comment.id  ? 
          {...comment, body: payload.comment.body } : comment  ) } : commentItem
        ),
        commentsError: null, 
        isLoading: false,
        commentSuccess: true,
      }

    case COMMENT_UPDATE_ERROR:
      return { 
        ...state, 
        commentsError: payload, 
        isLoading: false,
        commentSuccess: false
      }

    case COMMENT_DELETE_SUCCESS:
      return { 
        ...state, 
        commentItems: state.commentItems.map(commentItem => 
          Number(commentItem.postID) === payload.postID ? 
          {...commentItem, comments: commentItem.comments.filter(({id}: any) => id !== payload.id ) } : commentItem
        ),
        commentsError: null, 
        isLoading: false,
        commentSuccess: true,
      }

    case COMMENT_DELETE_ERROR:
      return { 
        ...state, 
        commentsError: payload, 
        isLoading: false,
        commentSuccess: false
      }
    default:
      return state
  }
}


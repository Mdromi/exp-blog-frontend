import { BEFORE_STATE_POST, FETCH_POSTS, FETCH_POSTS_ERROR, CREATE_POST_SUCCESS, UPDATE_POST_SUCCESS, CREATE_POST_ERROR, UPDATE_POST_ERROR, GET_POST_SUCCESS, GET_POST_ERROR, DELETE_POST_SUCCESS, DELETE_POST_ERROR, FETCH_AUTH_POSTS, FETCH_AUTH_POSTS_ERROR } from '../postsTypes'

interface PostState {
    posts: any[];          
    authPosts: any[];     
    post: any;             
    postsError: any | null;
    isLoading: boolean;
  }

export const initState = {
    posts: [],
    authPosts: [],
    post: {},
    postsError: null,
    isLoading: false,
  }
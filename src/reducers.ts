import * as constants from "./constants";
import {
  AlbumArray,
  CommentArray,
  IStoreAction,
  MessageArray,
  PostArray,
  UserArray
} from "./storeTypes";

const initialUser: UserArray = [];
export const LoadUserDataHandler = (
  state = initialUser,
  action: IStoreAction = { type: "", payload: [] }
): UserArray => {
  switch (action.type) {
    case constants.REQUEST_DATA_USERS_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
const InitialPost: PostArray = [];
export const LoadPostDataHandler = (
  state = InitialPost,
  action: IStoreAction = { type: "", payload: [] }
): PostArray => {
  switch (action.type) {
    case constants.REQUEST_DATA_POSTS_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const InitialComment: CommentArray = [];
export const LoadCommentHandler = (
  state = InitialComment,
  action: IStoreAction = { type: "", payload: [] }
): CommentArray => {
  switch (action.type) {
    case constants.REQUEST_DATA_COMMENTS_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const InitialAlbum: AlbumArray = [];
export const LoadAlbumHandler = (
  state = InitialAlbum,
  action: IStoreAction = { type: "", payload: [] }
): AlbumArray => {
  switch (action.type) {
    case constants.REQUEST_DATA_ALBUMS_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const InitialMessage: MessageArray = [];
export const MessageHandller = (
  state = InitialMessage,
  action: IStoreAction = { type: "", payload: [] }
): MessageArray => {
  switch (action.type) {
    case constants.REQUEST_DATA_USERS_FAIL: {
      return [
        ...state,
        { type: "FAIL", text: "Error occured while Loading users..." }
      ];
    }
    case constants.REQUEST_DATA_USERS_PENDING: {
      return [...state, { type: "INFO", text: "Loading users..." }];
    }
    case constants.REQUEST_DATA_POSTS_FAIL: {
      return [
        ...state,
        { type: "FAIL", text: "Error occured while Loading posts..." }
      ];
    }
    case constants.REQUEST_DATA_POSTS_PENDING: {
      return [...state, { type: "INFO", text: "Loading post..." }];
    }
    case constants.REQUEST_DATA_COMMENTS_FAIL: {
      return [
        ...state,
        { type: "FAIL", text: "Error occured while Loading comments..." }
      ];
    }
    case constants.REQUEST_DATA_COMMENTS_PENDING: {
      return [...state, { type: "INFO", text: "Loading comments..." }];
    }
    case constants.REQUEST_DATA_ALBUMS_FAIL: {
      return [
        ...state,
        { type: "FAIL", text: "Error occured while Loading albums..." }
      ];
    }
    case constants.REQUEST_DATA_ALBUMS_PENDING: {
      return [...state, { type: "INFO", text: "Loading albums..." }];
    }
    default: {
      return state;
    }
  }
};

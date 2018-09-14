import * as constants from './constants';
import {
    AlbumArray,
    CommentArray,
    IStoreAction,
    MessageArray,
    PostArray,
    UserArray
    } from './storeTypes';



const initialUser: { Users: UserArray } = { Users: [] };
export const LoadUserDataHandler = (state = initialUser, action: IStoreAction = { type: "", payload: [] }): { Users: UserArray } => {
    switch (action.type) {
        case constants.REQUEST_DATA_USERS_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};
const InitialPost: { Posts: PostArray } = { Posts: [] };
export const LoadPostDataHandler = (state = InitialPost, action: IStoreAction = { type: "", payload: [] }): { Posts: PostArray } => {
    switch (action.type) {
        case constants.REQUEST_DATA_POSTS_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};

const InitialComment: { Comments: CommentArray } = { Comments: [] };
export const LoadCommentHandler = (state = InitialComment, action: IStoreAction = { type: "", payload: [] }): { Comments: CommentArray } => {
    switch (action.type) {
        case constants.REQUEST_DATA_COMMENTS_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};

const InitialAlbum: { Albums: AlbumArray } = { Albums: [] };
export const LoadAlbumHandler = (state = InitialAlbum, action: IStoreAction = { type: "", payload: [] }): { Albums: AlbumArray } => {
    switch (action.type) {
        case constants.REQUEST_DATA_ALBUMS_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};

const InitialMessage: { Messages: MessageArray } = { Messages: [] }
export const MessageHandller = (state = InitialMessage, action: IStoreAction = { type: "", payload: [] }): { Messages: MessageArray } => {
    switch (action.type) {
        case constants.REQUEST_DATA_USERS_FAIL: {
            return {
                Messages: [...state.Messages, { type: "FAIL", text: "Error occured while Loading users..." }]
            }
        }
        case constants.REQUEST_DATA_USERS_PENDING: {
            return {
                Messages: [...state.Messages, { type: "INFO", text: "Loading users..." }]
            }
        }
        case constants.REQUEST_DATA_POSTS_FAIL: {
            return {
                Messages: [...state.Messages, { type: "FAIL", text: "Error occured while Loading posts..." }]
            }
        }
        case constants.REQUEST_DATA_POSTS_PENDING: {
            return {
                Messages: [...state.Messages, { type: "INFO", text: "Loading post..." }]
            }
        }
        case constants.REQUEST_DATA_COMMENTS_FAIL: {
            return {
                Messages: [...state.Messages, { type: "FAIL", text: "Error occured while Loading comments..." }]
            }
        }
        case constants.REQUEST_DATA_COMMENTS_PENDING: {
            return {
                Messages: [...state.Messages, { type: "INFO", text: "Loading comments..." }]
            }
        }
        case constants.REQUEST_DATA_ALBUMS_FAIL: {
            return {
                Messages: [...state.Messages, { type: "FAIL", text: "Error occured while Loading albums..." }]
            }
        }
        case constants.REQUEST_DATA_ALBUMS_PENDING: {
            return {
                Messages: [...state.Messages, { type: "INFO", text: "Loading albums..." }]
            }
        }
        default: {
            return state;
        }
    }
};
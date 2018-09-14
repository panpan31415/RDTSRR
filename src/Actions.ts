import {
    GET_ALL__COMMENTS_API,
    GET_ALL_ALBUMS_API,
    GET_ALL_POST_API,
    GET_ALL_USER_API,
    REQUEST_DATA_ALBUMS_FAIL,
    REQUEST_DATA_ALBUMS_PENDING,
    REQUEST_DATA_ALBUMS_SUCCESS,
    REQUEST_DATA_COMMENTS_FAIL,
    REQUEST_DATA_COMMENTS_PENDING,
    REQUEST_DATA_COMMENTS_SUCCESS,
    REQUEST_DATA_POSTS_FAIL,
    REQUEST_DATA_POSTS_PENDING,
    REQUEST_DATA_POSTS_SUCCESS,
    REQUEST_DATA_USERS_FAIL,
    REQUEST_DATA_USERS_PENDING,
    REQUEST_DATA_USERS_SUCCESS
    } from './constants';

export const loadCommentsData = () => (dispatch: ({ }) => void) => {
    dispatch({ type: REQUEST_DATA_COMMENTS_PENDING });
    fetch(GET_ALL__COMMENTS_API)
        .then(response => response.json())
        .then((data) => dispatch({
            payload: data,
            type: REQUEST_DATA_COMMENTS_SUCCESS
        }))
        .catch(err => dispatch({
            payload: err,
            type: REQUEST_DATA_COMMENTS_FAIL
            
        }));
}

export const loadPostsData = () => (dispatch: ({ }) => void) => {
    dispatch({ type: REQUEST_DATA_POSTS_PENDING });
    fetch(GET_ALL_POST_API)
        .then(response => response.json())
        .then((data) => dispatch({
            payload: data,
            type: REQUEST_DATA_POSTS_SUCCESS
        }))
        .catch(err => dispatch({
            payload: err,
            type: REQUEST_DATA_POSTS_FAIL
        }));
}

export const loadUsersData = () => (dispatch: ({ }) => void) => {
    dispatch({ type: REQUEST_DATA_USERS_PENDING });
    fetch(GET_ALL_USER_API)
        .then(response => response.json())
        .then((data) => dispatch({
            payload: data,
            type: REQUEST_DATA_USERS_SUCCESS
        }))
        .catch(err => dispatch({
            payload: err,
            type: REQUEST_DATA_USERS_FAIL
        }));
}

export const loadAbbumsData = () => (dispatch: ({ }) => void) => {
    dispatch({ type: REQUEST_DATA_ALBUMS_PENDING });
    fetch(GET_ALL_ALBUMS_API)
        .then(response => response.json())
        .then((data) => dispatch({
            payload: data,
            type: REQUEST_DATA_ALBUMS_SUCCESS
        }))
        .catch(err => dispatch({
            payload: err,
            type: REQUEST_DATA_ALBUMS_FAIL
        }));
}
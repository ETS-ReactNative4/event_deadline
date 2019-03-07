/**
 * Created by Raphael Karanja on 2019-03-05.
 */
import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILED,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILED
} from '../../constants/ActionTypes';

let initialState = {
    isLoggedIn: false,
    createUserError: '',
    userId: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS :
            return {...state, isLoggedIn: true, userId: action.user.uid};
        case LOGOUT_USER_FAILED:
            return {...state, isLoggedIn: false, userId: ''};
        case LOGOUT_USER_SUCCESS :
            return {...state, isLoggedIn: false, userId: ''};
        case CREATE_USER_SUCCESS :
            return {...state, user: action.user};
        case CREATE_USER_FAILED :
            return {...state, createUserError: action.error};
        default:
            return state;
    }
}
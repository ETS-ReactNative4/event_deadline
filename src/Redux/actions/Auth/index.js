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
}   from '../../constants/ActionTypes';

import {authRef} from '../../constants/utils/auth'


export const loginUserSuccess = (resp)=>{
    return {
        type: LOGIN_USER_SUCCESS,
        user: resp
    }
};


export const loginUserFail = (resp)=>{
    return {
        type: FETCH_USER_FAILED,
        error: resp
    }
};

export const logoutUserSuccess = ()=>{
    return {
        type: LOGOUT_USER_SUCCESS
    }
}

export const loginUser = ({email, password})=>dispatch=>{
    authRef.signInWithEmailAndPassword(email, password)
        .then((resp) => {
            return dispatch(loginUserSuccess(resp));
        })
        .catch((error) => {
            return dispatch(loginUserFail(error.toString()))
        });
}

export const checkLoginState = ()=>dispatch=>{
    authRef.onAuthStateChanged(user => {
        if (user) {
            return dispatch(loginUserSuccess(user));
        } else {
            dispatch(loginUserFail('logged out'))
        }
    });

};

export const logoutUser = ()=>dispatch=>{
    return dispatch(logoutUserSuccess())
}
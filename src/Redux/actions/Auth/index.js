/**
 * Created by Raphael Karanja on 2019-03-05.
 */
import {
    CHECKING_AUTH_STATE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILED,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILED,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED
} from '../../constants/ActionTypes';

import {authRef, dbRef, db} from '../../constants/utils/auth'


export const loginUserSuccess = (resp) => {
    return {
        type: LOGIN_USER_SUCCESS,
        user: resp
    }
};


export const loginUserFail = (resp) => {
    return {
        type: LOGIN_USER_FAILED,
        error: resp
    }
};

export const logoutUserSuccess = () => {
    return {
        type: LOGOUT_USER_SUCCESS
    }
};



export const loginUser = ({email, password}) => dispatch => {
    dispatch({
        type: CHECKING_AUTH_STATE
    });
    authRef.signInWithEmailAndPassword(email, password)
        .then((resp) => {
            return dispatch(loginUserSuccess(resp));
        })
        .catch((error) => {
            return dispatch(loginUserFail(error.toString()));
        });
}

export const checkLoginState = () => dispatch => {
    authRef.onAuthStateChanged(user => {
        if (user) {
            return dispatch(loginUserSuccess(user));
        } else {
            dispatch(loginUserFail('logged out'))
        }
    });

};

export const logoutUser = () => dispatch => {
    return dispatch(logoutUserSuccess())
};

//CREATE USER

export const createUserSuccess = (resp) => {
    return {
        type: CREATE_USER_SUCCESS,
        user: resp
    }
};

export const createUserFailed = (resp) => {
    return {
        type: CREATE_USER_FAILED,
        error: resp
    }
};

export const createUser = ({email, password}) => dispatch => {
    authRef.createUserWithEmailAndPassword(email, password)
        .then((resp) => {
            return dispatch(createUserSuccess(resp));
        })
        .catch((error) => {
            dispatch(createUserFailed(error.toString()));
        });
};

//UPDATE USER

export const updateUserSuccess = (resp) => {
    return {
        type: UPDATE_USER_SUCCESS,
        userDetails: resp
    }
};

export const updateUserFailed = (resp) => {
    console.log(resp);
    return {
        type: UPDATE_USER_FAILED,
        updateError: resp
    }
};

export const updateUser = (details) => dispatch => {

    const {uid, firstName, lastName, phone, gender, bio} = details;
    const userRef = db.collection('users').doc(uid);
    userRef.get()
        .then(doc => {
            if (!doc.exists) {
                db.collection('users').doc(uid).set({
                    firstName,
                    lastName,
                    phone,
                    gender,
                    bio
                }).then(function (docRef) {
                    dispatch(updateUserSuccess(docRef));
                })
                    .catch(function (error) {
                        dispatch(updateUserFailed(error.toString()));
                    });
            } else {
                const userRef = db.collection('users').doc(uid);
                userRef.update({
                    firstName,
                    lastName,
                    phone,
                    gender,
                    bio
                }).then(function (docRef) {
                    dispatch(updateUserSuccess(docRef));
                })
                    .catch(function (error) {
                        dispatch(updateUserFailed(error.toString()));
                    });
            }
        })
        .catch(error => {
            dispatch(updateUserFailed(error.toString()));
        })


};


//FETCH USER
export const fetchUserSuccess = (resp) => {
    return {
        type: FETCH_USER_SUCCESS,
        userDetails: resp
    }
}
export const fetchUserError = (resp) => {
    return {
        type: FETCH_USER_FAILED,
        error: resp
    }
};

export const fetchUser = (uid) => dispatch =>{
    const userRef = db.collection('users').doc(uid);
    userRef.get()
        .then(doc => {
            if(doc.exists){
                dispatch(fetchUserSuccess(doc.data()));
            }else{
                dispatch(fetchUserSuccess({}));
            }
        })
        .catch(error=>{
            dispatch(fetchUserError(error.toString()));
        })
}


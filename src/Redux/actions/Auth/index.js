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
    authRef.signInWithEmailAndPassword(email, password)
        .then((resp) => {
            return dispatch(loginUserSuccess(resp));
        })
        .catch((error) => {
            return dispatch(loginUserFail(error.toString()))
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

export const updateUser = (details: {uid, firstName, lastName, phone, gender, bio}) =>dispatch=>  {
    // const userRef = dbRef.ref('users/' + uid)
    // userRef.set({
    //     firstName,
    //     lastName,
    //     phone,
    //     gender,
    //     bio
    // }).then((data) => {
    //     dispatch(updateUserSuccess(data));
    // })
    //     .catch((error) => {
    //         dispatch(updateUserFailed(error.toString()));
    //
    //     })

    const userRef = dbRef.collection('users').doc(uid);
    userRef.get()
        .then(doc=>{
            if (!doc.exists) {
                db.collection('users').add({
                    firstName,
                    lastName,
                    phone,
                    gender,
                    bio
                }).then(function(docRef) {
                    dispatch(updateUserSuccess(docRef));
                })
                    .catch(function(error) {
                        dispatch(updateUserFailed(error.toString()));
                    });
            } else {
                db.collection('users').add({
                    firstName,
                    lastName,
                    phone,
                    gender,
                    bio
                }).then(function(docRef) {
                    dispatch(updateUserSuccess(docRef));
                })
                    .catch(function(error) {
                        dispatch(updateUserFailed(error.toString()));
                    });
            }
        })
        .catch(error=>{

        })


};

// const addDetails = ({uid, firstName, lastName, phone, gender, bio})=>dispatch =>{
//     db.collection('users').add({
//         firstName,
//         lastName,
//         phone,
//         gender,
//         bio
//     }).then(function(docRef) {
//         dispatch(updateUserSuccess(docRef));
//     })
//         .catch(function(error) {
//             dispatch(updateUserFailed(error.toString()));
//         });
// }
//
// const updateDetails = ({uid, firstName, lastName, phone, gender, bio})=>dispatch =>{
//     db.collection('users').add({
//         firstName,
//         lastName,
//         phone,
//         gender,
//         bio
//     }).then(function(docRef) {
//         dispatch(updateUserSuccess(docRef));
//     })
//         .catch(function(error) {
//             dispatch(updateUserFailed(error.toString()));
//         });
// }

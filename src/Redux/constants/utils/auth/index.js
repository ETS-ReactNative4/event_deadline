/**
 * Created by Raphael Karanja on 2019-03-06.
 */
import * as firebase from "firebase";

import { FirebaseConfig } from "./FireBaseConfig.js";
if(!firebase.apps.length){
    firebase.initializeApp(FirebaseConfig);
}

const databaseRef = firebase.database().ref();
export const eventsRef = databaseRef.child("events");
export const authRef = firebase.auth();
export const dbRef = firebase.database();
export const db = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
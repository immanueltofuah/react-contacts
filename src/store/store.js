import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import firebase from "../firebase/Config";
import {firebaseReducer, getFirebase, reduxReactFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import contactReducer from "../reducers/contactReducer";

const reducers = combineReducers ({
    users: usersReducer,
    firebase: firebaseReducer
})

const store = createStore(contactReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore })),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
    )
    );

export default store;
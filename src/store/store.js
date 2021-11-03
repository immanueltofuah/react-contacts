import {createStore, applyMiddleware, compose} from "redux";
import firebase from "../firebase/Config";
import { getFirebase, reduxReactFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import contactReducer from "../reducers/contactReducer";


const store = createStore(contactReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore })),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
    )
    );

export default store;
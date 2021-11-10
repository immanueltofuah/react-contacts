import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3zaCxMclEBRMBLmYb-Cznfzd4cK2hq1M",
  authDomain: "react-contacts-2841b.firebaseapp.com",
  projectId: "react-contacts-2841b",
  storageBucket: "react-contacts-2841b.appspot.com",
  messagingSenderId: "188368277805",
  appId: "1:188368277805:web:0c86cdf1da85afb79ec3a4"
};

  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.firestore();

 export default firebase;
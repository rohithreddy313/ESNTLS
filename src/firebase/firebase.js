import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'


const config = {
    apiKey: "AIzaSyBGwB3DegsdhwEBnihDLt3Nq4HKBg7vbRI",
    authDomain: "essential-clothing.firebaseapp.com",
    projectId: "essential-clothing",
    storageBucket: "essential-clothing.appspot.com",
    messagingSenderId: "108860259168",
    appId: "1:108860259168:web:892fc0180727d8fd73bc05",
    measurementId: "G-6Z9Q8797WH"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
 
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCTLXqFwCneCXT_e-h2tJV86Vu9TDRIDFo",
    authDomain: "mkcapped.firebaseapp.com",
    projectId: "mkcapped",
    storageBucket: "mkcapped.appspot.com",
    messagingSenderId: "1043404648742",
    appId: "1:1043404648742:web:fe754ad6a763ac813811e7",
    measurementId: "G-7PT45T2R3P"
}

if(!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
export const auth = firebase.auth()
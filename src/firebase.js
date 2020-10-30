import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCDB0ULlw9XChy-QkNQdORZp8_WzFloDq4",
    authDomain: "instagram-clone-react-5b90b.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-5b90b.firebaseio.com",
    projectId: "instagram-clone-react-5b90b",
    storageBucket: "instagram-clone-react-5b90b.appspot.com",
    messagingSenderId: "496672111910",
    appId: "1:496672111910:web:233ca74fa58481dbfbd5e7",
    measurementId: "G-D8X359FMEW"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
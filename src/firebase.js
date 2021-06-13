import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAt1q7f3od8VXxOBE0iz_rl5_JsZOlYXpQ",
    authDomain: "icd-expert.firebaseapp.com",
    projectId: "icd-expert",
    storageBucket: "icd-expert.appspot.com",
    messagingSenderId: "866412337893",
    appId: "1:866412337893:web:e479ba4abb7aedbcde920c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db };
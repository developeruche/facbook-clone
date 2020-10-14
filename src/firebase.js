import firebase from "firebase"

//Firebase config would go in here

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZ27WqNlMFK5pP0-w5gn2RSDEt-xaPiMw",
    authDomain: "facebook-clone-e04a4.firebaseapp.com",
    databaseURL: "https://facebook-clone-e04a4.firebaseio.com",
    projectId: "facebook-clone-e04a4",
    storageBucket: "facebook-clone-e04a4.appspot.com",
    messagingSenderId: "1063119799051",
    appId: "1:1063119799051:web:e12b56531082dd4008180e",
    measurementId: "G-HKC3LT3QL4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;

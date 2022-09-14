import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDoXYUG0VNz9HUavKwTRSKDmebETtnWG8",
  authDomain: "odblogs.firebaseapp.com",
  projectId: "odblogs",
  storageBucket: "odblogs.appspot.com",
  messagingSenderId: "818621396645",
  appId: "1:818621396645:web:4466883f42bf9f404bbf4c",
  measurementId: "G-S82TZXXCGM"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectFirestore, timestamp }

import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD0LxzeoFIwnIL0P_Q1QafyxgF2KYA7gYM",
  authDomain: "geo-ninjas-47801.firebaseapp.com",
  projectId: "geo-ninjas-47801",
  storageBucket: "geo-ninjas-47801.appspot.com",
  messagingSenderId: "216349336144",
  appId: "1:216349336144:web:1f633bb178e56482816755"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore().settings({ timestampInSnapshots: true })

export default firebaseApp.firestore()
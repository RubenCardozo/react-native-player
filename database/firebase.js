import firebase from "firebase";
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyD5btXEhi8k9M2zFemUxZTSlRBXkpxhuqw",
  authDomain: "react-native-player-3080d.firebaseapp.com",
  projectId: "react-native-player-3080d",
  storageBucket: "react-native-player-3080d.appspot.com",
  messagingSenderId: "777819373822",
  appId: "1:777819373822:web:ad4628a57c67a53fcc65af"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
}

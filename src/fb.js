import firebase from 'firebase/app'
import 'firebase/database'; 
import 'firebase/firestore'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD-GSGUK1S_3HlEiHUEWUqTFMw_CPGEOcQ",
    authDomain: "invitation-becf0.firebaseapp.com",
    databaseURL: "https://invitation-becf0.firebaseio.com",
    projectId: "invitation-becf0",
    storageBucket: "invitation-becf0.appspot.com",
    messagingSenderId: "336584169888",
    appId: "1:336584169888:web:141fe67e14eb68130facc5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

//   db.settings({});
//   db.settings({timestampsInSnapshots: true});
// firebase.firestore().settings({});
   

  export default db;
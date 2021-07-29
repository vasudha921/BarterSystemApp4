import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDNnWLQg6KAvMXuvFZKdtE8YkgK0wu1llY",
  authDomain: "riyasapp-233e1.firebaseapp.com",
  projectId: "riyasapp-233e1",
  storageBucket: "riyasapp-233e1.appspot.com",
  messagingSenderId: "720185618909",
  appId: "1:720185618909:web:da129301edc840925a8634"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore()
import * as firebase from 'firebase'
require ('@firebase/firestore')


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAvwh697e2rMQQnBhreK69AnXJQVXJF_Gk",
    authDomain: "story-hub-2-a742f.firebaseapp.com",
    projectId: "story-hub-2-a742f",
    databaseURL: "https:/story-hub-2-a742f.firebase.io",
    storageBucket: "story-hub-2-a742f.appspot.com",
    messagingSenderId: "846957000242",
    appId: "1:846957000242:web:f03aa38841dd4ee3e1ae2b"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export default firebase.firestore();
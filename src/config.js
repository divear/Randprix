import firebase from "firebase"
// import "firebase/firestore"



const firebaseConfig = {

    apiKey: "AIzaSyC97t0O5MZ_SpsfrEqj3SO3NoBMq1GTBik",
  
    authDomain: "randprix.firebaseapp.com",
  
    projectId: "randprix",
  
    storageBucket: "randprix.appspot.com",
  
    messagingSenderId: "161918731700",
  
    appId: "1:161918731700:web:d0a0bf9f8ca40e06399ee1",
  
    measurementId: "G-JZX151PXJW"
  
};

firebase.initializeApp(firebaseConfig)

export default firebase;
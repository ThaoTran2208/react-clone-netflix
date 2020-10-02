import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBhXng7WKc5qgTMaD0eZPBIPQrhedHE4UA",
  authDomain: "netflix-clone-c53b5.firebaseapp.com",
  databaseURL: "https://netflix-clone-c53b5.firebaseio.com",
  projectId: "netflix-clone-c53b5",
  storageBucket: "netflix-clone-c53b5.appspot.com",
  messagingSenderId: "1031828881114",
  appId: "1:1031828881114:web:84c3287c45f4ed1beb2fe3",
  measurementId: "G-TLB6JBNXTS",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };

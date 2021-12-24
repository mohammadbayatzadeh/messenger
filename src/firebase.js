import firebase from "firebase/app"
import "firebase/auth";

export const firebaseConfig =firebase.initializeApp(
  {
   apiKey: "AIzaSyCz4AtfadMU16EPa8cdUtFRhqygXN--9gA",
   authDomain: "messenger-c47db.firebaseapp.com",
   projectId: "messenger-c47db",
   storageBucket: "messenger-c47db.appspot.com",
   messagingSenderId: "520526759586",
   appId: "1:520526759586:web:d5e62901a2a96b5d9fb9fb"
 }
).auth()
;







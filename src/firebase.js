import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore }  from  'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9Wom_7efJ1JCZPxvCftVaBcGhyNudjxA",
    authDomain: "react-chat-42b76.firebaseapp.com",
    projectId: "react-chat-42b76",
    storageBucket: "react-chat-42b76.appspot.com",
    messagingSenderId: "473045964259",
    appId: "1:473045964259:web:ce0be68f88241f5d623cd6",
    measurementId: "G-WSKTR9SXYW"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db  = getFirestore(app);






// firestore
// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }
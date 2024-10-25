import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyAx-oTzXJdZQLT-mgavBvpvh2IsaLu5o2Y",
  authDomain: "olxclone-c8491.firebaseapp.com",
  projectId: "olxclone-c8491",
  storageBucket: "olxclone-c8491.appspot.com",
  messagingSenderId: "398365911213",
  appId: "1:398365911213:web:05bb8f474d95a0b37a3e24",
  measurementId: "G-ME2FCC9Z1W"
};

 export default firebase.initializeApp(firebaseConfig);


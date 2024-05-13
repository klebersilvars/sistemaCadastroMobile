import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAdgBjctEfXwCShoiGdxeerlb3DcL0Qq98",
  authDomain: "sistemacadastromobile.firebaseapp.com",
  projectId: "sistemacadastromobile",
  storageBucket: "sistemacadastromobile.appspot.com",
  messagingSenderId: "901367035029",
  appId: "1:901367035029:web:695cd4a3f77ce8e09bd79c",
  measurementId: "G-1EY4GNEXQP"
};

// Initialize Firebase

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase
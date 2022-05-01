import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAMBObXPoDzb0UPeiEi_eiYQMOUdu6BUgA",
  authDomain: "fir-tengu.firebaseapp.com",
  projectId: "fir-tengu",
  storageBucket: "fir-tengu.appspot.com",
  messagingSenderId: "1014353585483",
  appId: "1:1014353585483:web:584e64674f4a0168aaf4ce"
}

//App connection function
const app = initializeApp(firebaseConfig)
const firestoreDb = getFirestore(app)

//Initialize auth
const auth = getAuth(app)

export  { firestoreDb, auth }
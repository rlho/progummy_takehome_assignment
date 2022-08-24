import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import firebase from 'firebase/compat/app'
import { firebaseConfig } from '../config'
import { GoogleAuthProvider } from 'firebase/auth'

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore()
const storage = firebase.storage()
const provider = new GoogleAuthProvider()

export { auth, firebase, firestore, storage, provider }

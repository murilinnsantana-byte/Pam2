import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAwXxw03sVnFb8YZ2--g6qLDgH7mCxQEHw",
  authDomain: "teste1-506af.firebaseapp.com",
  projectId: "teste1-506af",
  storageBucket: "teste1-506af.firebasestorage.app",
  messagingSenderId: "337532258807",
  appId: "1:337532258807:web:19139331b2593549a506f2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
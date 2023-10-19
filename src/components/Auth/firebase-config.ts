import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCMVpOJc57X_2wMeQKmKUTLYrG4nk0EzS8",
  authDomain: "prdt-be3da.firebaseapp.com",
  projectId: "prdt-be3da",
  storageBucket: "prdt-be3da.appspot.com",
  messagingSenderId: "403395633798",
  appId: "1:403395633798:web:0c7666c7bb22b06368a707",
  measurementId: "G-G0DKYFCGL6",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

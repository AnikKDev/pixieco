// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTILlfoplj7WnzrMiI30dFH7YiDETLECM",
    authDomain: "pixieco-react.firebaseapp.com",
    projectId: "pixieco-react",
    storageBucket: "pixieco-react.appspot.com",
    messagingSenderId: "177059630675",
    appId: "1:177059630675:web:30081b18766c45cd5f80a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCYeNnywebVwwnaHuAbL41mcZddyfNX3qE",
	authDomain: "netflix-gpt-008.firebaseapp.com",
	projectId: "netflix-gpt-008",
	storageBucket: "netflix-gpt-008.appspot.com",
	messagingSenderId: "1186344826",
	appId: "1:1186344826:web:d4ae3e99a449fa192af0c3",
	measurementId: "G-8PE6QVKVD9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app); 
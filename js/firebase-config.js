import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAn9kUTIZPuvmlVK2Mx-Rda3ih43pIGXQA",
  authDomain: "new-afflieated-hub.firebaseapp.com",
  projectId: "new-afflieated-hub",
  storageBucket: "new-afflieated-hub.firebasestorage.app",
  messagingSenderId: "1055715678909",
  appId: "1:1055715678909:web:d7caf13e6e5a4af3d1b5d4",
  measurementId: "G-0682HZP91G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth };

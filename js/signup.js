import { db } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const signupForm = document.getElementById('signup-form');
const btnSubmit = document.querySelector('.btn-submit');

if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const storeName = document.getElementById('storeName').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    btnSubmit.disabled = true;
    btnSubmit.textContent = "Creating Store...";

    try {
      // Create user document
      const userRef = await addDoc(collection(db, "users"), {
        firstName,
        lastName,
        email,
        storeName,
        createdAt: serverTimestamp()
      });
      
      // Create notification document for admin
      await addDoc(collection(db, "notifications"), {
        title: "New Store Created",
        message: `${firstName} created "${storeName}".`,
        type: "user",
        createdAt: serverTimestamp()
      });
      
      // Redirect to user dashboard
      window.location.href = "dashboard.html";
      
    } catch (error) {
      console.error("Error creating user: ", error);
      alert("Error creating store. Please try again.");
      btnSubmit.disabled = false;
      btnSubmit.textContent = "Create My Store 🚀";
    }
  });
}

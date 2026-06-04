import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// DOM Elements
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Handle Login
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Login successful, redirect to admin dashboard
      window.location.href = 'admin-dashboard.html';
    } catch (error) {
      console.error('Login Error:', error);
      if (errorMessage) {
        errorMessage.textContent = 'Invalid email or password. Please try again.';
        errorMessage.style.display = 'block';
      } else {
        alert('Invalid email or password.');
      }
    }
  });
}

// Function to protect admin pages
export function requireAuth() {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      // User is not logged in, redirect to login page
      window.location.href = 'login.html';
    }
  });
}

// Function to handle logout
export function setupLogoutButton() {
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      signOut(auth).then(() => {
        window.location.href = 'login.html';
      }).catch((error) => {
        console.error('Logout Error:', error);
      });
    });
  }
}

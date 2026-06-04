import { db } from './firebase-config.js';
import { collection, onSnapshot, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// DOM Elements
const totalProductsEl = document.getElementById('total-products');
const totalStoresEl = document.getElementById('total-stores');
const notificationsList = document.getElementById('notifications-list');

// Listen to products count
onSnapshot(collection(db, "products"), (snapshot) => {
  if (totalProductsEl) {
    totalProductsEl.textContent = snapshot.size;
  }
});

// Listen to users (stores) count
onSnapshot(collection(db, "users"), (snapshot) => {
  if (totalStoresEl) {
    totalStoresEl.textContent = snapshot.size;
  }
});

// Listen to notifications
const q = query(collection(db, "notifications"), orderBy("createdAt", "desc"), limit(10));
onSnapshot(q, (snapshot) => {
  if (notificationsList) {
    notificationsList.innerHTML = '';
    
    if (snapshot.empty) {
      notificationsList.innerHTML = '<li class="notif-item"><div class="notif-content"><p>No recent activity.</p></div></li>';
      return;
    }
    
    snapshot.forEach((doc) => {
      const data = doc.data();
      const date = data.createdAt ? data.createdAt.toDate() : new Date();
      
      let icon = '🔔';
      let iconClass = 'notif-blue';
      
      if (data.type === 'user') {
        icon = '👥';
        iconClass = 'notif-blue';
      } else if (data.type === 'product') {
        icon = '📦';
        iconClass = 'notif-orange';
      }
      
      const timeStr = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      
      const li = document.createElement('li');
      li.className = 'notif-item';
      li.innerHTML = `
        <div class="notif-icon ${iconClass}">${icon}</div>
        <div class="notif-content">
          <h4>${data.title}</h4>
          <p>${data.message}</p>
          <span class="notif-time">${date.toLocaleDateString()} ${timeStr}</span>
        </div>
      `;
      notificationsList.appendChild(li);
    });
  }
});

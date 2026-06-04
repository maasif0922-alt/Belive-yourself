import { db } from './firebase-config.js';
import { collection, onSnapshot, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const activeProductsEl = document.getElementById('active-products');
const recentSalesTbody = document.getElementById('recent-sales-tbody');

// Listen to products count (since dummy login, we just show total platform products or maybe cap it at random)
onSnapshot(collection(db, "products"), (snapshot) => {
  if (activeProductsEl) {
    activeProductsEl.textContent = snapshot.size;
  }
});

// For dummy recent sales activity, let's just show the most recent products added to the platform
const q = query(collection(db, "products"), orderBy("createdAt", "desc"), limit(4));
onSnapshot(q, (snapshot) => {
  if (recentSalesTbody) {
    recentSalesTbody.innerHTML = '';
    
    if (snapshot.empty) {
      recentSalesTbody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding: 30px; color: #94a3b8;">No recent products yet. Start adding products!</td></tr>';
      return;
    }
    
    snapshot.forEach((doc) => {
      const data = doc.data();
      const date = data.createdAt ? data.createdAt.toDate() : new Date();
      
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${data.title}</td>
        <td>${data.source}</td>
        <td>${date.toLocaleDateString()}</td>
        <td><strong style="color:var(--color-navy);">$${(data.price * 0.1).toFixed(2)}</strong> (est)</td>
        <td><span class="status-badge status-success">Active</span></td>
      `;
      recentSalesTbody.appendChild(tr);
    });
  }
});

import { db } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const addProductForm = document.getElementById('add-product-form');
const formMsg = document.getElementById('form-msg');
const saveBtn = document.getElementById('save-product-btn');

if (addProductForm) {
  addProductForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    saveBtn.disabled = true;
    saveBtn.textContent = 'Saving...';
    formMsg.textContent = '';

    const title = document.getElementById('prod-title').value;
    const source = document.querySelector('input[name="source"]:checked').value;
    const category = document.getElementById('prod-category').value;
    const rating = parseFloat(document.getElementById('prod-rating').value);
    const price = parseFloat(document.getElementById('prod-price').value);
    const oldPriceStr = document.getElementById('prod-old-price').value;
    const originalPrice = oldPriceStr ? parseFloat(oldPriceStr) : price;
    const affiliateUrl = document.getElementById('prod-url').value;
    const image = document.getElementById('prod-image').value;
    const description = document.getElementById('prod-desc').value;

    const newProduct = {
      title,
      source,
      category,
      rating,
      price,
      originalPrice,
      affiliateUrl,
      image,
      description,
      reviews: Math.floor(Math.random() * 500) + 10, // random dummy reviews count
      badges: ["new"],
      featured: false,
      createdAt: serverTimestamp()
    };

    try {
      await addDoc(collection(db, "products"), newProduct);
      formMsg.style.color = 'green';
      formMsg.textContent = 'Product successfully published!';
      addProductForm.reset();
      
      // Update Live Preview (optional feature, we'll just show success for now)
      setTimeout(() => {
        formMsg.textContent = '';
      }, 3000);
    } catch (error) {
      console.error("Error adding product: ", error);
      formMsg.style.color = 'red';
      formMsg.textContent = 'Error saving product. Please try again.';
    } finally {
      saveBtn.disabled = false;
      saveBtn.textContent = '💾 Publish Product to Store';
    }
  });
}

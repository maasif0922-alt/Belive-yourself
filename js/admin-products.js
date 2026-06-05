import { db, storage } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

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
    const description = document.getElementById('prod-desc').value;

    const imageFiles = document.getElementById('prod-image-file').files;
    let image = document.getElementById('prod-image').value;
    let imagesArray = [];

    if (imageFiles.length === 0 && !image) {
      formMsg.style.color = 'red';
      formMsg.textContent = 'Please provide either an image file or an image URL.';
      saveBtn.disabled = false;
      saveBtn.textContent = '💾 Publish Product to Store';
      return;
    }

    // Helper to prevent infinite hanging
    const withTimeout = (promise, ms, message) => {
      return Promise.race([
        promise,
        new Promise((_, reject) => setTimeout(() => reject(new Error(message)), ms))
      ]);
    };

    try {
      if (imageFiles.length > 0) {
        formMsg.style.color = '#3b82f6'; // blue
        formMsg.textContent = `Uploading ${imageFiles.length} image(s)...`;
        for (let i = 0; i < imageFiles.length; i++) {
          const file = imageFiles[i];
          const storageRef = ref(storage, `products/${Date.now()}_${file.name}`);
          
          // Added timeout to prevent infinite hang
          const snapshot = await withTimeout(
            uploadBytes(storageRef, file), 
            15000, 
            "Image upload timed out. Check your Firebase Storage rules or internet connection."
          );
          const dlUrl = await getDownloadURL(snapshot.ref);
          imagesArray.push(dlUrl);
        }
        image = imagesArray[0]; // Set primary image
      } else if (image) {
        imagesArray.push(image);
      }

      formMsg.style.color = '#3b82f6';
      formMsg.textContent = 'Saving product details to database...';

      const newProduct = {
        title,
        source,
        category,
        rating,
        price,
        originalPrice,
        affiliateUrl,
        image,
        images: imagesArray,
        description,
        reviews: Math.floor(Math.random() * 500) + 10,
        badges: ["new"],
        featured: false,
        createdAt: serverTimestamp()
      };

      await withTimeout(
        addDoc(collection(db, "products"), newProduct),
        15000,
        "Database save timed out. Check your Firestore rules or internet connection."
      );
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
      formMsg.textContent = 'Error saving product: ' + error.message;
    } finally {
      saveBtn.disabled = false;
      saveBtn.textContent = '💾 Publish Product to Store';
    }
  });
}

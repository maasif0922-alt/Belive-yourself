import { db } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const PRODUCTS = [
  {
    title: "Sony WH-1000XM5 Noise-Cancelling Headphones",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    price: 279.99,
    originalPrice: 349.99,
    rating: 4.8,
    reviews: 14382,
    badges: ["bestseller", "hot"],
    source: "amazon",
    affiliateUrl: "https://www.amazon.com/s?k=Sony+WH-1000XM5",
    description: "Industry-leading noise cancellation with Auto NC Optimizer, crystal clear hands-free calling.",
    featured: true
  },
  {
    title: "Smart LED Desk Lamp with Wireless Charging",
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.6,
    reviews: 5821,
    badges: ["deal"],
    source: "amazon",
    affiliateUrl: "https://www.amazon.com/s?k=Smart+LED+Desk+Lamp+Wireless+Charging",
    description: "Touch-sensitive control, 5 color temperatures, USB-A charging port, memory function.",
    featured: true
  },
  {
    title: "Anker Soundcore Bluetooth Speaker 360°",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    price: 45.99,
    originalPrice: 59.99,
    rating: 4.7,
    reviews: 9234,
    badges: ["trending"],
    source: "aliexpress",
    affiliateUrl: "https://www.aliexpress.com/wholesale?SearchText=Bluetooth+Speaker+360",
    description: "360° immersive sound, 24-hour battery, IPX7 waterproof, Bluetooth 5.0.",
    featured: true
  },
  {
    title: "Hydro Flask 32 oz Wide Mouth Bottle",
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    price: 34.95,
    originalPrice: 44.95,
    rating: 4.9,
    reviews: 22015,
    badges: ["bestseller"],
    source: "amazon",
    affiliateUrl: "https://www.amazon.com/s?k=Hydro+Flask+32oz",
    description: "Keeps drinks cold 24 hours, hot 12 hours. BPA-free 18/8 stainless steel.",
    featured: false
  },
  {
    title: "USB-C Hub 7-in-1 Multiport Adapter",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?w=400&h=400&fit=crop",
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.5,
    reviews: 7654,
    badges: ["deal"],
    source: "aliexpress",
    affiliateUrl: "https://www.aliexpress.com/wholesale?SearchText=USB-C+Hub+7-in-1",
    description: "4K HDMI, 100W PD, USB-A 3.0, SD/TF card reader, compact aluminum design.",
    featured: true
  },
  {
    title: "Lululemon Align Yoga Mat 5mm",
    category: "Sports & Fitness",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&h=400&fit=crop",
    price: 29.99,
    originalPrice: 48.00,
    rating: 4.6,
    reviews: 4312,
    badges: ["sale"],
    source: "amazon",
    affiliateUrl: "https://www.amazon.com/s?k=Yoga+Mat+5mm+Non-Slip",
    description: "Non-slip natural rubber base, moisture-wicking surface, extra wide 72\" length.",
    featured: false
  },
  {
    title: "Oral-B Pro 3000 Electric Toothbrush",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1559591937-000df859b22e?w=400&h=400&fit=crop",
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.7,
    reviews: 11250,
    badges: ["hot", "deal"],
    source: "amazon",
    affiliateUrl: "https://www.amazon.com/s?k=Oral-B+Pro+3000+Electric+Toothbrush",
    description: "3 brushing modes, pressure sensor, 2-minute timer, charges in 12 hours.",
    featured: true
  },
  {
    title: "iOttie Easy One Touch 5 Car Mount",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop",
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.5,
    reviews: 18765,
    badges: ["trending"],
    source: "aliexpress",
    affiliateUrl: "https://www.aliexpress.com/wholesale?SearchText=Car+Phone+Mount+Dashboard",
    description: "One-touch locking, 360° rotation, fits phones 2.3\"–3.7\" wide, sticky gel base.",
    featured: false
  },
  {
    title: "Keychron K2 Wireless Mechanical Keyboard",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.8,
    reviews: 8932,
    badges: ["new", "trending"],
    source: "amazon",
    affiliateUrl: "https://www.amazon.com/s?k=Keychron+K2+Wireless+Mechanical+Keyboard",
    description: "Hot-swappable Gateron switches, RGB backlit, Bluetooth 5.1 + USB-C, Mac/Windows.",
    featured: true
  },
  {
    title: "Ninja AF101 Air Fryer 4 Quart",
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=400&fit=crop",
    price: 99.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviews: 25441,
    badges: ["bestseller", "hot"],
    source: "amazon",
    affiliateUrl: "https://www.amazon.com/s?k=Ninja+AF101+Air+Fryer",
    description: "Air fry, roast, reheat & dehydrate. Up to 75% less fat. 4-qt ceramic-coated basket.",
    featured: true
  },
  {
    title: "Fitbit Charge 5 Fitness Tracker",
    category: "Gadgets",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e97fd29?w=400&h=400&fit=crop",
    price: 59.95,
    originalPrice: 99.95,
    rating: 4.6,
    reviews: 13201,
    badges: ["sale", "trending"],
    source: "aliexpress",
    affiliateUrl: "https://www.aliexpress.com/wholesale?SearchText=Fitness+Tracker+Smart+Watch",
    description: "Built-in GPS, heart rate + ECG, stress management, sleep tracking, 7-day battery.",
    featured: true
  },
  {
    title: "Pioneer Pet Stainless Steel Water Fountain",
    category: "Pets",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=400&fit=crop",
    price: 32.99,
    originalPrice: 44.99,
    rating: 4.5,
    reviews: 3845,
    badges: ["new"],
    source: "amazon",
    affiliateUrl: "https://www.amazon.com/s?k=Pet+Water+Fountain+Stainless+Steel",
    description: "60 oz capacity, replaceable charcoal filter, dishwasher safe, quiet pump.",
    featured: false
  }
];

const uploadBtn = document.getElementById('upload-btn');
const statusDiv = document.getElementById('status');

uploadBtn.addEventListener('click', async () => {
  uploadBtn.disabled = true;
  statusDiv.textContent = "Uploading... Please wait.";

  let count = 0;
  for (const product of PRODUCTS) {
    try {
      await addDoc(collection(db, "products"), {
        ...product,
        createdAt: serverTimestamp()
      });
      count++;
      statusDiv.textContent = `Uploaded ${count} of ${PRODUCTS.length}...`;
    } catch (e) {
      console.error("Error adding document: ", e);
      statusDiv.innerHTML += `<br><span style="color:red">Error uploading ${product.title}</span>`;
    }
  }

  statusDiv.innerHTML = `<br><span style="color:green">Successfully uploaded ${count} products! You can now view them on the site (once frontend is updated).</span>`;
});

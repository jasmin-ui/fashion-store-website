let products = [
  {
    id: 1,
    name: "Gold Necklace with Earrings",
    price: "₹1,999",
    rating: "⭐⭐⭐⭐☆ (150 Reviews)",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRIvOwDdSBEVaJYls_6ZHRlFno4KHsFpUkcWrGJWV4y9KWkEP8fXAB2USPwyeeSIJ_m6pY0TzggCB33uzZyFCBJaomuGuIu1h-T70XH4yUj4NNsp8UsKGGr1w",
    description: "Elegant gold necklace paired with matching earrings, perfect for weddings and parties.",
    details: [
      "Material: Pure gold plated",
      "Set: Necklace + Earrings",
      "Occasion: Wedding, Party wear",
      "Weight: Lightweight and comfortable",
    ],
  },
  {

    id: 2,
    name: "Party Wear Lehenga",
    price: "₹5,499",
    rating: "⭐⭐⭐⭐⭐ (200 Reviews)",
    image: "https://i.pinimg.com/1200x/8d/bc/e4/8dbce4ec24fd66a5c465543390251f1d.jpg",
    description: "Beautiful party wear lehenga designed to make you shine at festive occasions.",
    details: [

      "Fabric: Net with Embroidery",
      "Blouse: Semi-stitched",
      "Dupatta: Included",
      "Occasion: Wedding / Party"
    ],

  },
  {
    id: 3,
    name: "Simple Purse",
    price: "₹799",
    rating: "⭐⭐⭐⭐ (90 Reviews)",
    image: "https://i.pinimg.com/1200x/70/f7/cb/70f7cbedcd22bf2cb60a54c59b791831.jpg",
    description: "Chic and simple purse, perfect for daily use or casual outings.",
    details: [
      "Material: Faux Leather",
      "Compartments: 2 Main, 1 Zip",
      "Strap: Adjustable",
      "Style: Everyday casual"
    ],
  },
  {
    id: 4,
    name: "Silk Saree",
    price: "₹3,499",
    rating: "⭐⭐⭐⭐⭐ (120 Reviews)",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS_6UJ0X58R9RCRMcC4Q2t13GzvfOV_vkgQIsOSH9FXiI9vZhTnqA3eXE8zo3EsmrhPUcZhsdlKXELXcUThmlLnDtvU2wrIUxm-7BiPb-vH",
    description: "Elegant silk saree perfect for weddings and festive occasions.",
    details: [
      "Fabric: Pure Silk",
      "Blouse: Unstitched",
      "Length: 6.2m (with blouse piece)",
      "Occasion: Traditional, Wedding"
    ]
  },
  {
    id: 5,
    name: "Shirt for Boys",
    price: "₹1,299",
    rating: "⭐⭐⭐⭐☆ (80 Reviews)",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQy8Rt9xS3nrYngT-_r5lK7wyfwXGXy1cN1kEfDZ5Sn8VGAc7JKZVfF7KuVvx55fAM77hJqm6hUgFyFXPVqmO5Uim-mVsJl",
    description: "Stylish black shirt for boys, ideal for casual and semi-formal events.",
    details: [
      "Material: Cotton Blend",
      "Fit: Regular",
      "Sleeves: Full Sleeves",
      "Ideal For: Boys / Men"
    ],
  },
  {
    id: 6,
    name: "Golden High Heels",
    price: "₹2,999",
    rating: "⭐⭐⭐⭐⭐ (140 Reviews)",
    image: "https://i.pinimg.com/736x/54/01/62/540162b61a55d5369e1618b08222008b.jpg",
    description: "Party wear high heels in gold color with sparkling stones, perfect for special occasions.",
    details: [
      "Color: Gold",
      "Heel Height: 4.5 inches",
      "Material: Synthetic with Stone Work",
      "Occasion: Party, Wedding"
    ],

  },
  {
    id: 7,
    name: "Black Smart Watch",
    price: "₹4,499",
    rating: "⭐⭐⭐⭐⭐ (180 Reviews)",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHdhdGNofGVufDB8fDB8fHww",
    description: "Black smart watch with calling feature, ideal for everyday use and tech-savvy users.",
    details: [
      "Color: Black",
      "Features: Calling, Fitness Tracking, Notifications",
      "Battery: Up to 7 Days",
      "Warranty: 1 Year"
    ],

  },
  {
    id: 8,
    name: "Zara Velvet Shadow Edp",
    price: "₹1,550",
    rating: "⭐⭐⭐⭐ (110 Reviews)",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7Pab1i1rWSBqTyr-m4OvS_xbqXFmOzVjmpmT2YmUUNjAMxrFJlKVObO72k0LkSh2AXc8rcfbK0u9z5kIBfsnVL9FsyGL-3HHwriY9FHP8AxaylpC89h6z1yw",
    description: "Refreshing perfume, perfect for gifting or personal use.",
    details: [
      "Fragrance: Long-lasting",
      "Quantity: 100ml",
      "Type: Eau de Parfum",
      "Suitable For: Men & Women"
    ],
  }
];

let shopProducts = [
  { id: 101, name: "Pink Kurta Suit Set", price: "₹2100", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ3JXMXSV3pCmrbT0iRJCI1xaxvVFV5980j1Cko4hTEpQjczyyHaKToZXu0h6UEBXBysc9hirMlZsQzQTahucf-qI3eZ6j1fuD7JlG8qEc", rating: 4 },
  { id: 102, name: "Red Heavy Printed Lehenga Set", price: "₹7000", image: "https://i.pinimg.com/1200x/5e/4a/ea/5e4aea3ba5e00bcc846e8127d4415d95.jpg", rating: 3 },
  { id: 103, name: "Heavy Flair Lehenga Choli For Wedding", price: "₹4000", image: "https://anayadesignerstudio.com/cdn/shop/files/Wedding_Lehenga_Choli.webp?v=1751109773&width=1100", rating: 5 },
  { id: 104, name: "Sharara Set", price: "₹2000", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTk97guPjY4LcALE2vPoh5r3i_CEWMwdWTXPb91U_XOiReMrbdmZttnCX9nBgoqTJUJQJTF9IykRZGxnfyDuJ3whxY-SCO5h0_Iy9uC7w9k", rating: 4 },
  { id: 105, name: "Stripe Jacket Set", price: "₹4000", image: "https://i.pinimg.com/1200x/af/2a/3c/af2a3c108892363a12c1066058a047b5.jpg", rating: 3 },
  { id: 106, name: "Printed Lehenga", price: "₹6000", image: "https://i.pinimg.com/736x/12/96/d1/1296d1824afe1cbd88c1923001d01d7b.jpg", rating: 4 },
  { id: 107, name: "Pink Organza, Tulle Sequins, Embroidery Scoop Neck Lehenga Set", price: "₹2300", image: "https://i.pinimg.com/1200x/e7/0d/a0/e70da02f2695afbb7a37d0fb8d47be93.jpg", rating: 5 },
  { id: 108, name: "Blue Linear Embroidered Lehenga with Blouse and Dupatta ", price: "₹2500", image: "https://i.pinimg.com/1200x/b3/ae/88/b3ae881dbfa870737f30292835e3313b.jpg", rating: 4 },
  { id: 109, name: "Maroon Satin, Organza, Mulberry Hand Anarkali With Dupatta", price: "₹2000", image: "https://i.pinimg.com/736x/a8/63/ab/a863ab3e7cedf9a7b1a45e01b6877ff0.jpg", rating: 3 },
  { id: 110, name: "Lehenga Choli With Dupatta Set", price: "₹3000", image: "https://i.pinimg.com/736x/df/d2/cc/dfd2ccc5f84eb91e0d4d95f7a79557fc.jpg", rating: 4 },
  { id: 111, name: "Bridal Lehenga Set", price: "₹6000", image: "https://i.pinimg.com/736x/3e/f9/4c/3ef94c99a140bcf74992686d54fc0ddf.jpg", rating: 4 },
  { id: 112, name: "Anarkali Suit Set", price: "₹4000", image: "https://i.pinimg.com/1200x/cd/c7/52/cdc752101c04b381f3a721811e872355.jpg", rating: 3 },
  { id: 113, name: "Wine Georgette Thread Sequence Salwar Suit", price: "₹2000", image: "https://i.pinimg.com/1200x/f5/56/8f/f5568f1247e6b9be2290c53958f67c1d.jpg", rating: 4 },
  { id: 114, name: "Anarkali Gown", price: "₹1200", image: "https://i.pinimg.com/1200x/73/ad/20/73ad207da228ae5292bf0a985060fb90.jpg", rating: 3 },
  { id: 115, name: "Anarkali Kurta set", price: "₹2000", image: "https://i.pinimg.com/736x/63/58/c4/6358c4ff561ab92eb56acbb915ab678f.jpg", rating: 4 },
  { id: 116, name: " Red Lehenga Choli", price: "₹2400", image: "https://i.pinimg.com/1200x/97/60/b6/9760b63fdecb132b8c91a879fd8b64a4.jpg", rating: 5 },
  { id: 117, name: "Silk Lehenga Choli", price: "₹4000", image: "https://i.pinimg.com/1200x/1c/d6/13/1cd61375bfb5ffb682e4e6df86d3fa79.jpg", rating: 4 },
  { id: 118, name: "Lehenga Set", price: "₹3000", image: "https://i.pinimg.com/736x/6f/c8/bd/6fc8bd14ca17d704afc457a91fb79618.jpg", rating: 3 },
  { id: 119, name: "anarkali gowan", price: "₹1,346", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQS2V3atSh-nLrAaF5N3Tq3j6jfspYqlQLaHfvrBEyJfz79qoMMLM6gbFm1cPksA28dDNtLmXXp13Wz2hiWgQwB2TOWdpa3tpgBvzUbjNywPguLhJgerAYfQ", rating: 4 },
  { id: 120, name: " Classic Anarkali Suit with Golden Embroidery", price: "₹2,499", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSKFbKPyRvzMvNwIksgmsRBmCuqaAx0_bWYQqpi3AotfTZ3kG96Hnu0imu2X7BsekgOeP4jnW0KT91eLyx71Oat82bUzjDEnV6ZeUomWgDz", rating: 5 },
  { id: 121, name: "Anarkali gown", price: "₹2000", image: "https://i.pinimg.com/1200x/04/e2/18/04e21839488f243b2f9e6543df804a53.jpg", rating: 4 },
  { id: 122, name: "Anarkali Gown", price: "₹2,699", image: "https://i.pinimg.com/736x/4b/48/d9/4b48d9c712e9222884a45d823d72595f.jpg", rating: 3 },
  { id: 123, name: "Anarkali Suit Set", price: "₹3000", image: "https://i.pinimg.com/1200x/13/b1/f1/13b1f14b287ee5b0861f32bdb0c964f2.jpg", rating: 5 },
  { id: 124, name: "Gown Suit", price: "₹3000", image: "https://i.pinimg.com/1200x/5f/fc/ae/5ffcae7ab6a05e6e3a8c7e0e988c03d2.jpg", rating: 4 },
  { id: 125, name: "Suits Plazo", price: "₹4000", image: "https://i.pinimg.com/1200x/2b/ec/12/2bec124d451efffec0b2c1f198aaca33.jpg", rating: 3 },
  { id: 126, name: "Lehenga Choli Set", price: "₹5000", image: "https://i.pinimg.com/736x/6f/de/d9/6fded9a4259bdb457e3cd0175920fce7.jpg", rating: 5 },
  { id: 127, name: "Anarkali Suit", price: "₹2000", image: "https://i.pinimg.com/736x/36/c5/2a/36c52a0c0cb89a8084a0404370f558d9.jpg", rating: 3 },
  { id: 128, name: "Co-ord Set", price: "₹3000", image: "https://i.pinimg.com/736x/d2/7a/86/d27a86a46d4b84e0094f3d8564697ad6.jpg", rating: 4 },
  { id: 129, name: "Noorani Suit Set", price: "₹2000", image: "https://i.pinimg.com/1200x/63/47/2f/63472ff72e486a5fd4d04aaf6fec05d4.jpg", rating: 5 },
  { id: 130, name: "Sharara Dupatta Set", price: "₹3000", image: "https://i.pinimg.com/736x/77/69/b2/7769b250e08b4de3b5a0b049d1c35446.jpg", rating: 3 },
  { id: 131, name: "Lehnga Choli", price: "₹2000", image: "https://i.pinimg.com/736x/99/3a/86/993a86015de006a705f9fe4ffb943de7.jpg", rating: 4 },
  { id: 132, name: "Kurta Sharara Set", price: "₹3000", image: "https://i.pinimg.com/736x/43/a9/52/43a952fa1ecfef2de257217a56b8dddd.jpg", rating: 4 },
  { id: 133, name: "Kurta Skirt Set", price: "₹5000", image: "https://i.pinimg.com/736x/c7/0e/4b/c70e4b9d37de508ab1adba200f9acef1.jpg", rating: 5 },
  { id: 134, name: "Sharara Set", price: "₹5000", image: "https://i.pinimg.com/736x/4f/e5/c6/4fe5c6321467239fa6b3583875138648.jpg", rating: 3 },
  { id: 135, name: "Sharara Set", price: "₹2000", image: "https://i.pinimg.com/736x/87/f3/29/87f329babdd59ef39177b34c7477bf7d.jpg", rating: 4 },
  { id: 136, name: "Mustard Chikankari Salwar Kameez ", price: "₹2,999", image: "https://i.pinimg.com/736x/b0/04/2b/b0042b2e719fc49f51c4072b745dacef.jpg", rating: 3 },
  { id: 137, name: "Gul Gharara Set", price: "₹2000", image: "https://i.pinimg.com/736x/db/ef/5a/dbef5ae394b12daef648340165fced1d.jpg", rating: 5 },
  { id: 138, name: "Sharara Set", price: "₹3000", image: "https://i.pinimg.com/736x/e0/6b/4c/e06b4cd2c2bb8dc4b601ede7280d0ab2.jpg", rating: 4 },
  { id: 139, name: "Sharvee Leher Sharara Set", price: "₹4,800", image: "https://i.pinimg.com/1200x/c7/e7/48/c7e748c86e1c007b77fc5e6d8102bdc4.jpg", rating: 3 },
  { id: 140, name: "Flared Kurta Set", price: "₹1,260", image: "https://i.pinimg.com/1200x/ea/ff/71/eaff71bf9304aaed41112731ef8bc428.jpg", rating: 5 }

];






// 🔹 Get cart array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// 🔹 Merge all product arrays
let allProducts = [...products, ...shopProducts];

let cartContainer = document.getElementById("cart-container");
let emptyMsg = document.getElementById("empty-cart-msg");

// 🔹 Function to render cart
function renderCart() {
  // Filter products jo cart me hain
  let cartProducts = allProducts.filter(p => cart.includes(p.id));

  cartContainer.innerHTML = ""; // Clear previous content

  if (cartProducts.length === 0) {
    emptyMsg.textContent = "Your cart is empty!";
  } else {
    emptyMsg.textContent = ""; // clear msg agar products hain

    cartProducts.forEach(product => {
      let div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div>
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                    <button class="remove-btn" data-id="${product.id}">Remove</button>
                     <button class="buy-btn" data-id="${product.id}">Buy Now</button>
      
                </div>
            `;
      cartContainer.appendChild(div);
    });
  }
}

// 🔹 Event delegation for remove
cartContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-btn")) {
    let productId = parseInt(e.target.dataset.id);

    // Cart array se remove
    cart = cart.filter(id => id !== productId);

    // Local storage update
    localStorage.setItem("cart", JSON.stringify(cart));



    // Re-render
    renderCart();
  }
})
document.getElementById("cart-container").addEventListener("click", function (e) {
  if (e.target.classList.contains("buy-btn")) {
    let productId = parseInt(e.target.dataset.id);
    window.location.href = `payment.html?id=${productId}`;
  }
});



// 🔹 Initial render
renderCart();




